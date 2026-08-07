# 18 — Coding Standards

## General
- TypeScript strict where practical.
- Prefer small focused components.
- Avoid premature abstraction.
- Avoid prop drilling where static composition is enough.
- No dead code.
- No unused dependencies.

## Astro
- static HTML by default.
- hydrate only when needed.
- avoid client directive unless justified.

## CSS
- use design tokens,
- keep readable naming,
- avoid arbitrary one-off styles everywhere,
- no inline style unless justified.

## Content
Content belongs in content collections, not hardcoded in components, when it is editorial data.

## Error Handling
External integrations must:
- fail gracefully,
- show user-friendly message,
- not expose internal details.
