#!/usr/bin/env python3

import argparse
import subprocess
import sys
from pathlib import Path


def main():
    parser = argparse.ArgumentParser(
        description="Capture project screenshots from a manifest using the Playwright screenshot tool."
    )
    parser.add_argument("--manifest", required=True, help="Path to a JSON manifest with project and urls fields.")
    parser.add_argument("--project", help="Override the project name from the manifest.")
    parser.add_argument("--output", help="Override the screenshot output directory.")
    parser.add_argument("--lazy-load-enabled", help="Enable or disable pre-capture lazy-load traversal.")
    parser.add_argument("--scroll-delay-ms", help="Delay between incremental scroll steps.")
    parser.add_argument("--bottom-wait-ms", help="Wait time after reaching the bottom of the page.")
    parser.add_argument("--top-wait-ms", help="Wait time after returning to the top of the page.")

    args = parser.parse_args()
    script_dir = Path(__file__).resolve().parent
    node_script = script_dir / "src" / "capture.js"

    command = [
        "node",
        str(node_script),
        "--manifest",
        args.manifest,
    ]

    if args.project:
        command.extend(["--project", args.project])

    if args.output:
        command.extend(["--output", args.output])

    for option in [
        "lazy_load_enabled",
        "scroll_delay_ms",
        "bottom_wait_ms",
        "top_wait_ms",
    ]:
        value = getattr(args, option)
        if value:
            command.extend([f"--{option.replace('_', '-')}", value])

    return subprocess.call(command)


if __name__ == "__main__":
    sys.exit(main())
