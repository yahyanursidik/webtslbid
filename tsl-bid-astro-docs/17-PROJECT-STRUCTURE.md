# 17 — Project Structure

```text
/
├── public/
│   ├── favicon/
│   ├── images/
│   ├── logo/
│   └── og/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── global/
│   │   ├── home/
│   │   ├── curriculum/
│   │   ├── teacher/
│   │   ├── article/
│   │   └── ui/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── lib/
│   ├── config/
│   └── types/
├── astro.config.mjs
├── netlify.toml
├── package.json
├── tsconfig.json
└── docs/*.md
```

## Component Naming
- PascalCase for components
- explicit domain names
- avoid `Card1`, `SectionA`, etc.

Good:
- `ScholarQuote.astro`
- `CurriculumExplorer.astro`
- `TeacherPreview.astro`
