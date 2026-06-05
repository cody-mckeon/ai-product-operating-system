#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const DEVICES = [
  {
    name: "desktop",
    viewport: { width: 1440, height: 900 },
  },
  {
    name: "mobile",
    viewport: { width: 390, height: 844 },
    isMobile: true,
  },
];

const DEFAULT_CAPTURE_SETTINGS = {
  lazyLoadEnabled: true,
  scrollDelayMs: 250,
  bottomWaitMs: 3000,
  topWaitMs: 1000,
  networkIdleTimeoutMs: 15000,
  navigationTimeoutMs: 60000,
};

function parseArgs(argv) {
  const args = {};

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];

    if (!value.startsWith("--")) {
      continue;
    }

    const key = value.slice(2);
    const nextValue = argv[index + 1];

    if (!nextValue || nextValue.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = nextValue;
      index += 1;
    }
  }

  return args;
}

function parseBoolean(value, fallback) {
  if (value === undefined) {
    return fallback;
  }

  if (typeof value === "boolean") {
    return value;
  }

  return !["0", "false", "no", "off"].includes(String(value).toLowerCase());
}

function parseInteger(value, fallback) {
  if (value === undefined) {
    return fallback;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeSettings(settings = {}, args = {}) {
  return {
    lazyLoadEnabled: parseBoolean(
      args.lazyLoadEnabled ?? args["lazy-load-enabled"] ?? settings.lazy_load_enabled ?? settings.lazyLoadEnabled,
      DEFAULT_CAPTURE_SETTINGS.lazyLoadEnabled,
    ),
    scrollDelayMs: parseInteger(
      args.scrollDelayMs ?? args["scroll-delay-ms"] ?? settings.scroll_delay_ms ?? settings.scrollDelayMs,
      DEFAULT_CAPTURE_SETTINGS.scrollDelayMs,
    ),
    bottomWaitMs: parseInteger(
      args.bottomWaitMs ?? args["bottom-wait-ms"] ?? settings.bottom_wait_ms ?? settings.bottomWaitMs,
      DEFAULT_CAPTURE_SETTINGS.bottomWaitMs,
    ),
    topWaitMs: parseInteger(
      args.topWaitMs ?? args["top-wait-ms"] ?? settings.top_wait_ms ?? settings.topWaitMs,
      DEFAULT_CAPTURE_SETTINGS.topWaitMs,
    ),
    networkIdleTimeoutMs: parseInteger(
      args.networkIdleTimeoutMs ?? args["network-idle-timeout-ms"] ?? settings.network_idle_timeout_ms ?? settings.networkIdleTimeoutMs,
      DEFAULT_CAPTURE_SETTINGS.networkIdleTimeoutMs,
    ),
    navigationTimeoutMs: parseInteger(
      args.navigationTimeoutMs ?? args["navigation-timeout-ms"] ?? settings.navigation_timeout_ms ?? settings.navigationTimeoutMs,
      DEFAULT_CAPTURE_SETTINGS.navigationTimeoutMs,
    ),
  };
}

function usage() {
  return [
    "Usage:",
    "  node src/capture.js --manifest <manifest.json> [--project <project-name>] [--output <directory>] [--debug]",
    "  npm run capture -- --project <project-name> --urls <urls.json> [--output <directory>] [--debug]",
    "",
    "Manifest input should include project and urls fields.",
    "URL input may be an array of strings or objects with page and url fields.",
  ].join("\n");
}

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/https?:\/\//g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function inferPageName(url) {
  const parsed = new URL(url);
  const pathname = parsed.pathname.replace(/^\/+|\/+$/g, "");

  if (!pathname) {
    return "homepage";
  }

  return slugify(pathname.split("/").filter(Boolean).pop());
}

function normalizeEntries(entries) {
  if (!Array.isArray(entries)) {
    throw new Error("URL input must contain a JSON array.");
  }

  return entries.map((entry) => {
    if (typeof entry === "string") {
      return {
        page: inferPageName(entry),
        url: entry,
      };
    }

    if (entry && typeof entry === "object" && entry.url) {
      return {
        page: slugify(entry.page || inferPageName(entry.url)),
        url: entry.url,
      };
    }

    throw new Error("Each URL entry must be a string or an object with a url field.");
  });
}

async function readJson(filePath) {
  const contents = await fs.readFile(filePath, "utf8");
  return JSON.parse(contents);
}

async function readUrlList(filePath) {
  const entries = await readJson(filePath);
  return normalizeEntries(entries);
}

async function readManifest(filePath) {
  const manifest = await readJson(filePath);

  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    throw new Error("Manifest must be a JSON object.");
  }

  if (!manifest.project) {
    throw new Error("Manifest must include a project field.");
  }

  if (!manifest.urls) {
    throw new Error("Manifest must include a urls field.");
  }

  return {
    project: manifest.project,
    entries: normalizeEntries(manifest.urls),
    settings: normalizeSettings(manifest.settings),
  };
}

async function appendLog(logPath, message) {
  await fs.appendFile(logPath, `${new Date().toISOString()} ${message}\n`, "utf8");
}

function formatDebugError(error) {
  return error.message.split("\n")[0];
}

async function logDebug(logPath, message) {
  await appendLog(logPath, `DEBUG ${message}`);
}

function attachDebugLogging({ page, logPath, entry, device }) {
  const requestState = {
    total: 0,
    failed: 0,
    pending: new Set(),
  };

  page.on("console", (message) => {
    appendLog(
      logPath,
      `DEBUG CONSOLE ${entry.page} ${device.name} ${message.type()}: ${message.text()}`,
    ).catch(() => {});
  });

  page.on("pageerror", (error) => {
    appendLog(
      logPath,
      `DEBUG PAGEERROR ${entry.page} ${device.name}: ${formatDebugError(error)}`,
    ).catch(() => {});
  });

  page.on("request", (request) => {
    requestState.total += 1;
    requestState.pending.add(request);
  });

  page.on("requestfinished", (request) => {
    requestState.pending.delete(request);
  });

  page.on("requestfailed", (request) => {
    requestState.failed += 1;
    requestState.pending.delete(request);
    appendLog(
      logPath,
      [
        `DEBUG REQUEST FAILED ${entry.page} ${device.name}`,
        request.method(),
        request.url(),
        request.failure()?.errorText || "unknown error",
      ].join(" | "),
    ).catch(() => {});
  });

  return requestState;
}

async function logDebugFrames({ page, logPath, entry, device }) {
  await logDebug(logPath, `FRAMES ${entry.page} ${device.name} count=${page.frames().length}`);

  for (const frame of page.frames()) {
    await logDebug(
      logPath,
      `FRAME ${entry.page} ${device.name} name="${frame.name()}" url="${frame.url()}"`,
    );
  }
}

async function logDebugNetworkSummary({ logPath, entry, device, requestState }) {
  await logDebug(
    logPath,
    [
      `NETWORK SUMMARY ${entry.page} ${device.name}`,
      `total=${requestState.total}`,
      `failed=${requestState.failed}`,
      `pending=${requestState.pending.size}`,
    ].join(" | "),
  );

  if (requestState.pending.size > 0) {
    for (const request of Array.from(requestState.pending).slice(0, 25)) {
      await logDebug(
        logPath,
        `PENDING REQUEST ${entry.page} ${device.name} ${request.method()} ${request.url()}`,
      );
    }
  }
}

async function waitForImages(page, timeout = 10000) {
  await page.waitForFunction(
    () => Array.from(document.images).every((image) => image.complete),
    undefined,
    { timeout },
  );
}

async function traversePageForLazyLoad({ page, logPath, entry, device, settings }) {
  if (!settings.lazyLoadEnabled) {
    return {
      enabled: false,
      scrollCompleted: false,
    };
  }

  await appendLog(logPath, `lazy-load pass started ${entry.page} ${device.name}`);

  try {
    const pageHeight = await page.evaluate(() => {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      );
    });
    const viewportHeight = page.viewportSize()?.height || device.viewport.height;
    const stepSize = Math.max(1, Math.floor(viewportHeight * 0.75));

    for (let scrollPosition = 0; scrollPosition < pageHeight; scrollPosition += stepSize) {
      await page.evaluate((position) => window.scrollTo({ top: position, behavior: "instant" }), scrollPosition);
      await page.waitForTimeout(settings.scrollDelayMs);
    }

    await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
    await page.waitForTimeout(settings.bottomWaitMs);
    await waitForImages(page).catch(() => {});
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(settings.topWaitMs);
    await waitForImages(page).catch(() => {});
    await appendLog(logPath, `scroll completed ${entry.page} ${device.name}`);

    return {
      enabled: true,
      scrollCompleted: true,
      pageHeight,
    };
  } catch (error) {
    await appendLog(logPath, `warning lazy-load pass failed ${entry.page} ${device.name}: ${error.message}`);

    return {
      enabled: true,
      scrollCompleted: false,
      error: error.message,
    };
  }
}

async function capturePage({ browser, outputRoot, logPath, entry, device, settings, debug }) {
  const pageDirectory = path.join(outputRoot, entry.page);
  const screenshotFile = `${entry.page}-${device.name}-full.png`;
  const screenshotPath = path.join(pageDirectory, screenshotFile);
  const timestamp = new Date().toISOString();

  await fs.mkdir(pageDirectory, { recursive: true });

  const context = await browser.newContext({
    viewport: device.viewport,
    isMobile: Boolean(device.isMobile),
  });

  const page = await context.newPage();
  const requestState = debug ? attachDebugLogging({ page, logPath, entry, device }) : null;
  let response = null;
  let finalUrl = entry.url;
  let networkIdleReached = false;
  let lazyLoad = {
    enabled: settings.lazyLoadEnabled,
    scrollCompleted: false,
  };

  try {
    if (debug) {
      await logDebug(logPath, `START NAVIGATION ${entry.page} ${device.name}`);
      await logDebug(logPath, `URL ${entry.url}`);
      await logDebug(logPath, "NAVIGATION STRATEGY waitUntil=domcontentloaded");
      await logDebug(logPath, `TIMESTAMP ${new Date().toISOString()}`);
    }

    response = await page.goto(entry.url, {
      waitUntil: "domcontentloaded",
      timeout: settings.navigationTimeoutMs,
    });
    finalUrl = page.url();

    if (debug) {
      await logDebug(logPath, `DOM CONTENT LOADED REACHED ${entry.page} ${device.name}`);
      await logDebug(logPath, `DOM CONTENT LOADED ${new Date().toISOString()}`);
      await page.waitForTimeout(5000);
      await logDebug(logPath, `POST LOAD WAIT COMPLETE ${entry.page} ${device.name}`);

      try {
        await page.waitForLoadState("load", { timeout: 1 });
        await logDebug(logPath, `LOAD EVENT ${new Date().toISOString()}`);
      } catch {
        await logDebug(logPath, `LOAD EVENT not reached before post-load check ${entry.page} ${device.name}`);
      }
    } else {
      try {
        await page.waitForLoadState("networkidle", { timeout: settings.networkIdleTimeoutMs });
        networkIdleReached = true;
      } catch (error) {
        await appendLog(logPath, `warning network idle timed out ${entry.page} ${device.name}: ${error.message}`);
      }
    }

    lazyLoad = await traversePageForLazyLoad({
      page,
      logPath,
      entry,
      device,
      settings,
    });

    if (debug) {
      await logDebugFrames({ page, logPath, entry, device });
      await logDebugNetworkSummary({ logPath, entry, device, requestState });
      await logDebug(logPath, `SCREENSHOT START ${new Date().toISOString()}`);
    }

    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
    });

    if (debug) {
      await logDebug(logPath, `SCREENSHOT COMPLETE ${new Date().toISOString()}`);
    }

    await appendLog(logPath, `screenshot captured ${entry.page} ${device.name} ${entry.url}`);

    return {
      url: entry.url,
      pageName: entry.page,
      device: device.name,
      timestamp,
      httpStatus: response ? response.status() : null,
      finalUrl,
      redirected: finalUrl !== entry.url,
      viewport: device.viewport,
      screenshotPath,
      networkIdleReached,
      lazyLoad,
      status: "captured",
    };
  } catch (error) {
    finalUrl = page.url();
    await appendLog(logPath, `failed ${entry.page} ${device.name} ${entry.url}: ${error.message}`);

    return {
      url: entry.url,
      pageName: entry.page,
      device: device.name,
      timestamp,
      httpStatus: response ? response.status() : null,
      finalUrl,
      redirected: finalUrl !== entry.url,
      viewport: device.viewport,
      screenshotPath,
      networkIdleReached,
      lazyLoad,
      status: "failed",
      error: error.message,
    };
  } finally {
    await context.close();
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.manifest && (!args.project || !args.urls)) {
    console.error(usage());
    process.exitCode = 1;
    return;
  }

  const cwd = process.cwd();
  const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
  const repositoryRoot = path.resolve(scriptDirectory, "../../..");
  const manifestPath = args.manifest ? path.resolve(cwd, args.manifest) : null;
  const manifest = manifestPath ? await readManifest(manifestPath) : null;
  const projectName = slugify(args.project || manifest.project);
  const settings = normalizeSettings(manifest?.settings, args);
  const debug = parseBoolean(args.debug, false);
  const urlsPath = args.urls ? path.resolve(cwd, args.urls) : null;
  const outputRoot = args.output
    ? path.resolve(cwd, args.output)
    : path.resolve(repositoryRoot, "projects", projectName, "screenshots");
  const metadataPath = path.join(outputRoot, "metadata.json");
  const logPath = path.join(outputRoot, "capture.log");

  await fs.mkdir(outputRoot, { recursive: true });
  await fs.writeFile(logPath, "", "utf8");
  await appendLog(logPath, `run started for ${projectName}`);
  if (debug) {
    await logDebug(logPath, "DEBUG MODE ENABLED");
  }

  const entries = manifest ? manifest.entries : await readUrlList(urlsPath);
  const metadata = {
    projectName,
    outputRoot,
    generatedAt: new Date().toISOString(),
    settings,
    captures: [],
  };

  const browser = await chromium.launch();

  try {
    for (const entry of entries) {
      for (const device of DEVICES) {
        const result = await capturePage({
          browser,
          outputRoot,
          logPath,
          entry,
          device,
          settings,
          debug,
        });

        metadata.captures.push(result);
      }
    }
  } finally {
    await browser.close();
  }

  metadata.completedAt = new Date().toISOString();
  await fs.writeFile(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, "utf8");
  await appendLog(logPath, `run completed for ${projectName}`);

  const failures = metadata.captures.filter((capture) => capture.status === "failed");
  console.log(`Captured ${metadata.captures.length - failures.length} screenshots.`);
  console.log(`Failed ${failures.length} captures.`);
  console.log(`Metadata: ${metadataPath}`);
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : "";
const currentPath = fileURLToPath(import.meta.url);

if (invokedPath === currentPath) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
