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

function usage() {
  return [
    "Usage:",
    "  node src/capture.js --manifest <manifest.json> [--project <project-name>] [--output <directory>]",
    "  npm run capture -- --project <project-name> --urls <urls.json> [--output <directory>]",
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
  };
}

async function appendLog(logPath, message) {
  await fs.appendFile(logPath, `${new Date().toISOString()} ${message}\n`, "utf8");
}

async function capturePage({ browser, outputRoot, logPath, entry, device }) {
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
  let response = null;
  let finalUrl = entry.url;

  try {
    response = await page.goto(entry.url, {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    finalUrl = page.url();

    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
    });

    await appendLog(logPath, `captured ${entry.page} ${device.name} ${entry.url}`);

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
  const urlsPath = args.urls ? path.resolve(cwd, args.urls) : null;
  const outputRoot = args.output
    ? path.resolve(cwd, args.output)
    : path.resolve(repositoryRoot, "projects", projectName, "screenshots");
  const metadataPath = path.join(outputRoot, "metadata.json");
  const logPath = path.join(outputRoot, "capture.log");

  await fs.mkdir(outputRoot, { recursive: true });
  await fs.writeFile(logPath, "", "utf8");
  await appendLog(logPath, `run started for ${projectName}`);

  const entries = manifest ? manifest.entries : await readUrlList(urlsPath);
  const metadata = {
    projectName,
    outputRoot,
    generatedAt: new Date().toISOString(),
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
