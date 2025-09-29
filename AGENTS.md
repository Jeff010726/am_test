# Repository Guidelines

## Project Structure & Module Organization
The site is a single-page app defined in `index.html`; component sections, styling, and JavaScript behaviors all live inline. Keep structural sections grouped in the existing comment blocks (sidebar, hero, solution pages, contact). Place new images under `assets/` (create if needed) and reference with relative paths; keep high-resolution hero images such as `AIMORELOGY-01.png` optimized below 1 MB. Wrap reusable snippets in clearly labeled HTML comments to aid scanning.

## Build, Test, and Development Commands
This repo ships as plain HTML for GitHub Pages, so no build step is required. For local preview run `python3 -m http.server 8000` from the repository root, then browse `http://localhost:8000`. If you prefer Node tooling, `npx serve@latest .` produces equivalent static hosting. After changes, deploy by pushing to `main`; GitHub Pages will publish automatically.

## Coding Style & Naming Conventions
Use four-space indentation for HTML, CSS, and JavaScript to match the existing file. Prefer lowercase, hyphen-delimited class names (`.nav-dot`, `.menu-trigger`) and descriptive IDs (`page-1`). Keep CSS variables grouped under `:root` and extend them instead of hardcoding colors. JavaScript should use `const`/`let`, arrow functions where appropriate, and early returns for readability. When extracting code, create separate `.css` or `.js` files only if multiple sections reuse the logic.

## Testing Guidelines
There is no automated test suite; rely on manual validation. Verify smooth scrolling, sidebar toggling, fade-in animations, and keyboard navigation in Chrome and Safari, plus at least one Android device or emulator to confirm the Inter font fallback. Check the browser console for errors and ensure lighthouse performance scores stay within 90+ for mobile.

## Commit & Pull Request Guidelines
Write commits in present tense with a short imperative summary (`feat: add AI roadmap section`). Group related HTML, CSS, and JS edits together; avoid “misc updates” bundles. Pull requests should include: purpose statement, notable design or UX changes, screenshots or recordings for visual updates, and references to GitHub issues or external specs.

## Assets & Localization
Content defaults to Simplified Chinese (`lang="zh-CN"`). Supply Mandarin copy alongside any English headings, and provide accessible alt text for new images. When embedding third-party scripts or fonts, prefer CDN sources already whitelisted to preserve load performance.
