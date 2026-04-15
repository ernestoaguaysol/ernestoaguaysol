# AGENTS.md

## Repository Context
This is a personal portfolio website for Ernesto Aguaysol, built as a single-page static site using HTML and CSS.

## Development & Workflow
- **Content Updates**: The site is primarily driven by `index.html`. Significant content changes (text, links, skills) should be made directly in the HTML.
- **Styling**: All CSS is embedded within the `<style>` tag in `index.html`. Follow the existing CSS variable pattern (`--bg`, `--text`, `--green`, etc.) when adding new elements.
- **Interactivity**: Any terminal animation or scroll-triggered effects are handled via the `<script>` tag in `index.html`.
- **Commit Language**: All git commits must be written in Spanish.

## Key Constraints
- **No Build Step**: This is a static repository; no `npm install`, `npm run build`, or similar commands are required or applicable.
- **Single File Architecture**: High-value information is concentrated in `index.html`.
- **Visual Identity**: Maintain the "terminal/cyberpunk" aesthetic (scanlines, noise grain, monospace fonts).
