# Tab Duplicate

Duplicate a Markdown file from the tab header menu or the file explorer context menu.

## Features

- Right-click any tab or file in the explorer and select **Duplicate file**
- Creates a `-copy` file next to the original with the same content
- Automatically avoids name collisions (`-copy2`, `-copy3`, etc.)
- Opens the duplicated file immediately

## Installation

### From Community Plugins

1. Open **Settings → Community plugins**
2. Search for **Tab Duplicate**
3. Install and enable the plugin

### Manual installation

1. Download `main.js` and `manifest.json` from the [latest release](https://github.com/AntoineArt/obsidian-tab-duplicate/releases/latest)
2. Copy them to `.obsidian/plugins/tab-duplicate/` in your vault
3. Enable the plugin in **Settings → Community plugins**

## Usage

Right-click any tab or file and choose **Duplicate file**. A copy is created next to the original and opened automatically.

## Publishing

Community plugins are submitted through the [Obsidian Community developer dashboard](https://community.obsidian.md), not via pull requests to `obsidian-releases`.

Release flow:

1. Update `version` in `manifest.json` and `package.json`
2. Commit and push to `main`
3. Create and push a matching tag: `git tag 1.x.x && git push origin 1.x.x`
4. GitHub Actions builds, attests, and publishes the release assets

Before tagging, run `npm run lint` locally.

## License

MIT
