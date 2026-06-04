# Screenshot Capture Tool

Playwright utility for collecting full-page screenshot evidence for AI Product Operating System projects.

## Install

```bash
npm install
npx playwright install chromium
```

## Usage

Pass a project name and a JSON file containing URLs.

```bash
npm run capture -- --project rwlv-live-package-pilot --urls urls.json
```

Optionally override the output root:

```bash
npm run capture -- --project rwlv-live-package-pilot --urls urls.json --output ../../projects/rwlv-live-package-pilot/screenshots
```

## URL Input

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

`metadata.json` records URL, page name, device, timestamp, viewport, screenshot path, HTTP status, final URL, redirect state, and capture status. Failures are also written to `capture.log`.
