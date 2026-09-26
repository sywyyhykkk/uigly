# Contributing to UIgly

1. Fork the repository and create `templates/<slug>/index.html`.
2. Use a complete HTML document with an inline `<style>` block. Use only HTML and CSS: no scripts, frameworks, external fonts, images, stylesheets, or network requests. The file should work when opened directly in a browser.
3. Add one entry to `templates/catalog.json` with the same slug, a short title, category, and description.
4. Run `node scripts/validate.mjs`, preview the file in a browser, and open a pull request with a screenshot.

Make the appearance or copy intentionally ugly while keeping controls readable and usable. Use original work that you are willing to contribute under the repository's MIT license. A maintainer reviews the source and the visible result before merging.
