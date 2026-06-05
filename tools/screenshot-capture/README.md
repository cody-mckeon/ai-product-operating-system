# Screenshot Capture Tool

Playwright utility for collecting full-page screenshot evidence for AI Product Operating System projects.

## Install

```bash
npm install
npx playwright install chromium
```

## Usage

Pass a manifest with a project name and URLs:

```bash
python3 tools/screenshot-capture/capture.py --manifest projects/design-system-pilot/urls.json
```

Or call the Node CLI with a project name and a JSON file containing URLs.

```bash
npm run capture -- --project rwlv-live-package-pilot --urls urls.json
```

Run diagnostic capture logging with `--debug`:

```bash
python3 tools/screenshot-capture/capture.py --manifest projects/design-system-pilot/urls.json --debug
```

Optionally override the output root:

```bash
npm run capture -- --project rwlv-live-package-pilot --urls urls.json --output ../../projects/rwlv-live-package-pilot/screenshots
```

## URL Input

The preferred manifest format is:

```json
{
  "project": "design-system-pilot",
  "settings": {
    "lazy_load_enabled": true,
    "scroll_delay_ms": 250,
    "bottom_wait_ms": 3000,
    "top_wait_ms": 1000
  },
  "urls": [
    {
      "page": "homepage",
      "url": "https://example.com/"
    }
  ]
}
```

The `settings` object is optional. Defaults are used when settings are omitted.

## Lazy-Loaded Content

Before each screenshot, the tool can perform a pre-capture traversal to encourage lazy-loaded assets and below-the-fold modules to load:

```text
Page load
Network idle attempt
Incremental scroll to bottom
Bottom wait
Image completion wait
Scroll back to top
Top wait
Screenshot
```

Default settings:

| Setting | Default |
| --- | --- |
| `lazy_load_enabled` | `true` |
| `scroll_delay_ms` | `250` |
| `bottom_wait_ms` | `3000` |
| `top_wait_ms` | `1000` |

The capture log records when the lazy-load pass starts, when scrolling completes, and when the screenshot is captured. If traversal fails, the warning is logged and the screenshot attempt continues.

## Debug Mode

`--debug` writes detailed timing and browser diagnostics to `capture.log` without changing screenshot output paths or metadata fields.

Debug mode records:

- Navigation start, URL, and strategy.
- DOM content loaded timing.
- Load event status.
- Post-load wait completion.
- Console messages.
- Page errors.
- Failed requests.
- Frame names and URLs.
- Total, failed, and pending request counts before screenshot.
- Screenshot start and completion timing.

In debug mode, navigation waits for `domcontentloaded`, pauses for 5000ms, then continues through the existing pre-capture flow. This is intended for temporary diagnosis of pages with long-running analytics, polling, iframes, or deferred scripts.

The URL file may be an array of strings:

```json
[
  "https://example.com/",
  "https://example.com/dining"
]
```

Or an array of page objects:

```json
[
  {
    "page": "homepage",
    "url": "https://example.com/"
  },
  {
    "page": "dining",
    "url": "https://example.com/dining"
  }
]
```

## Output

By default, screenshots are stored under:

```text
projects/[project-name]/screenshots/
```

Each page is stored in its own directory:

```text
screenshots/
|-- homepage/
|   |-- homepage-desktop-full.png
|   `-- homepage-mobile-full.png
|-- dining/
|   |-- dining-desktop-full.png
|   `-- dining-mobile-full.png
|-- metadata.json
`-- capture.log
```

`metadata.json` records URL, page name, device, timestamp, viewport, screenshot path, HTTP status, final URL, redirect state, lazy-load traversal status, network-idle status, and capture status. Failures are also written to `capture.log`.
