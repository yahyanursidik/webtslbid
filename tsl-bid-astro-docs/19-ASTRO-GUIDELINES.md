# 19 — Astro Guidelines

## Version
Pin Astro to:
`7.2.0`

Do not silently upgrade major/minor versions without review.

## Architecture Rules
- `.astro` components by default.
- islands only for interactive UI.
- `client:load` only for UI needed immediately.
- prefer `client:visible` / `client:idle` when suitable.

## Content Collections
Use schemas and validation.

## Images
Use Astro image pipeline where possible.
Always set:
- width,
- height,
- appropriate format,
- alt.

## Layouts
Create:
- `BaseLayout.astro`
- `ContentLayout.astro`
- `ArticleLayout.astro`

## Build Validation
Always run:
```bash
npm run build
```

If available:
```bash
npm run check
```
