# 15 — Tech Stack

## Core
- Astro `7.2.0`
- TypeScript
- Hallmark: `nutlope/hallmark`
- Netlify
- GitHub

## Content
- Astro Content Collections
- Markdown / MDX bila dibutuhkan

## UI
Gunakan native Astro/CSS lebih dahulu.
React/Svelte/Vue hanya jika island benar-benar membutuhkan interaktivitas.

## Client JS
Minimalkan.

Possible islands:
- MobileNavigation
- CurriculumFilter
- Search
- interactive FAQ search bila dibutuhkan

## Avoid
- SPA architecture,
- large UI library tanpa kebutuhan,
- state management global untuk website statis,
- database sebelum ada kebutuhan nyata.
