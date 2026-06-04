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

    return subprocess.call(command)


if __name__ == "__main__":
    sys.exit(main())
