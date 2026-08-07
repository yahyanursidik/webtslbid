# 29 — AI Coding Workflow

## Rule Utama
AI tidak boleh menerima prompt:
> “Buat website BID lengkap.”

Gunakan tahapan kecil dan reviewable.

---

## STEP 1 — Repository Audit / Bootstrap

### Prompt
```text
Pelajari seluruh file markdown di repository terlebih dahulu, terutama:
00-MASTER-INSTRUCTION.md
01-PRODUCT-BRIEF.md
10-DESIGN-DIRECTION.md
12-ANTI-AI-SLOP.md
15-TECH-STACK.md
16-ARCHITECTURE.md
18-CODING-STANDARDS.md
19-ASTRO-GUIDELINES.md

Jangan membuat halaman website dulu.

Tugas:
1. audit repository,
2. jelaskan kondisi saat ini,
3. identifikasi conflict/dependency,
4. pastikan Astro dipin ke 7.2.0,
5. siapkan struktur proyek minimal,
6. install/configure Hallmark nutlope/hallmark sesuai kebutuhan proyek,
7. siapkan Netlify config minimal,
8. jalankan build.

Output:
- file yang dibuat/diubah,
- command yang dijalankan,
- error bila ada,
- keputusan teknis penting.

Jangan membuat homepage pada tahap ini.
```

---

## STEP 2 — Design Foundation

```text
Baca file:
10-DESIGN-DIRECTION.md
11-DESIGN-SYSTEM.md
12-ANTI-AI-SLOP.md
13-RESPONSIVE-DESIGN.md
14-ACCESSIBILITY.md

Buat hanya foundation UI:
- global CSS/tokens,
- typography,
- container/layout primitives,
- button/link styles,
- focus states,
- basic divider.

Jangan buat section homepage.
Jangan gunakan arch, fake kitab, fake Quran, mosque ornaments, green-gold gradient, glassmorphism atau SaaS cards.

Setelah selesai:
- build,
- review hasil,
- laporkan design tokens final.
```

---

## STEP 3 — Global Shell

```text
Buat:
- BaseLayout.astro
- SEO/head component
- Header
- Desktop navigation
- Accessible mobile navigation
- Footer
- Skip link
- 404 page

Gunakan sitemap dari 04-INFORMATION-ARCHITECTURE.md.

Jangan buat konten homepage selain placeholder semantic main area.

Pastikan:
- mobile keyboard accessible,
- no hydration berlebihan,
- no horizontal overflow.
```

---

## STEP 4 — Content Collections

```text
Baca:
07-CONTENT-MODEL.md
08-CONTENT-GUIDELINES.md
09-ISLAMIC-CONTENT-GUIDELINES.md
30-SCHOLAR-QUOTES-GUIDELINES.md

Implementasikan Astro Content Collections untuk:
- subjects
- teachers
- articles
- announcements
- faqs
- testimonials
- quotes

Buat schema validation.

Gunakan sample data yang diberi label DEMO/DRAFT.
Jangan membuat quote ulama palsu.
Untuk quote yang belum memiliki sumber valid, gunakan placeholder editorial dan status draft.
```

---

## STEP 5 — Homepage Hero

```text
Bangun HANYA Hero homepage.

Tujuan:
- menjelaskan BID dalam 5 detik,
- headline: belajar Islam dari dasar, bertahap dan terarah,
- CTA utama Daftar BID,
- CTA sekunder Lihat Kurikulum.

Visual direction:
editorial + educational + institutional.
Tidak perlu ilustrasi bila tidak ada aset asli.

Setelah selesai:
- screenshot/review desktop dan mobile,
- audit Hallmark,
- hilangkan pattern AI generik.
```

---

## STEP 6 — Problem + Value Proposition

```text
Tambahkan hanya dua section:
1. konteks masalah: banyak belajar tetapi belum tentu terarah,
2. bagaimana BID menjawab kebutuhan tersebut.

Jangan gunakan card grid otomatis.
Cari composition editorial yang lebih natural.

Pastikan copy tidak hiperbolik.
```

---

## STEP 7 — Scholar Quote Component

```text
Implementasikan ScholarQuote.astro berdasarkan:
09-ISLAMIC-CONTENT-GUIDELINES.md
30-SCHOLAR-QUOTES-GUIDELINES.md

Requirements:
- hanya render quote status published + verified,
- tampilkan nama ulama,
- tampilkan sumber,
- optional Arabic name,
- semantic blockquote,
- tidak menggunakan tanda kutip raksasa,
- tidak menggunakan foto ulama generatif,
- tidak menggunakan kitab/ornament sebagai background.

Buat contoh menggunakan data yang benar-benar sudah diverifikasi tim editorial.
Jika data belum ada, jangan invent quote.
```

---

## STEP 8 — Learning Framework

```text
Tambahkan Learning Framework.

Gunakan diagram sederhana berbasis HTML/CSS:
mulai → fondasi → pemahaman → praktik → bertumbuh

Jangan gunakan ilustrasi SVG dekoratif yang tidak perlu.
Pastikan mobile readable.
```

---

## STEP 9 — Curriculum Explorer

```text
Implementasikan Curriculum Explorer dari subject content collection.

Requirements:
- grouping berdasarkan data content,
- link ke subject page,
- accessible,
- tidak semua item dipaksa menjadi card,
- gunakan hierarchy dan divider,
- jika filter tidak benar-benar perlu, jangan hydrate JavaScript.

Jangan mengarang struktur akademik. Ikuti data content yang tersedia.
```

---

## STEP 10 — How Learning Works

```text
Tambahkan section alur belajar.

Gunakan step flow yang sederhana.
Jangan membuat 4 SaaS feature cards.

Mobile harus stack dengan urutan yang jelas.
```

---

## STEP 11 — Teacher Section

```text
Implement teacher preview dari content collection.

Rules:
- hanya data real/published,
- foto asli bila ada,
- bila tidak ada, gunakan typography placeholder yang elegan, bukan AI portrait,
- link ke profile.

Jangan mengarang credential.
```

---

## STEP 12 — FAQ + Final CTA

```text
Tambahkan FAQ dan final CTA.

FAQ:
- semantic details/summary bila cukup,
- jangan hydrate JS tanpa kebutuhan.

Final CTA:
- calm,
- tidak hard selling,
- primary: Daftar BID,
- secondary: Lihat Kurikulum.
```

---

## STEP 13 — Homepage Hallmark Audit

```text
Audit homepage menggunakan prinsip Hallmark dan 12-ANTI-AI-SLOP.md.

Cari:
- repetitive cards,
- excessive rounded corners,
- generic gradients,
- fake stats,
- visual monotony,
- oversized pill buttons,
- unnecessary icons,
- typical AI landing-page composition.

Redesign bagian yang terasa generik.

Jangan menambah ornamen Islam untuk “membuat lebih Islami”.
```

---

## STEP 14 — Program Page

```text
Bangun /program.

Tujuan:
- menjelaskan apa itu BID,
- tujuan,
- siapa yang cocok,
- metode,
- struktur,
- alur belajar,
- CTA.

Gunakan 1 quote ulama maksimal bila verified dan relevan.
```

---

## STEP 15 — Curriculum & Subject Pages

```text
Bangun:
- /program/kurikulum
- /mata-pelajaran/[slug]

Gunakan content collections.

Subject page:
- mengapa dipelajari,
- deskripsi,
- learning objectives,
- pengajar,
- posisi dalam program,
- quote relevan optional,
- CTA.

Jangan mengarang materi akademik yang belum ada di content.
```

---

## STEP 16 — Teachers

```text
Bangun:
- /pengajar
- /pengajar/[slug]

Gunakan data real.
No fake portrait.
No fake credentials.
```

---

## STEP 17 — About, FAQ, Contact

```text
Bangun:
- /tentang
- /faq
- /kontak
- /bantuan

Pastikan konten institusional ringkas dan terpercaya.
```

---

## STEP 18 — Articles & Information

```text
Implement:
- /artikel
- /artikel/[slug]
- /informasi
- /informasi/[slug]

Gunakan content collections.
Tambahkan author/reviewer metadata bila tersedia.
```

---

## STEP 19 — Registration Page

```text
Bangun /pendaftaran sebagai conversion page.

Jangan membuat payment system baru kecuali diminta.

Tampilkan:
- program,
- eligibility/requirements bila ada,
- fee bila valid,
- langkah pendaftaran,
- CTA ke sistem pendaftaran resmi.

Track click_register.
```

---

## STEP 20 — SEO

```text
Baca 20-SEO-STRATEGY.md.

Implement:
- metadata helper,
- canonical,
- OG,
- sitemap,
- robots,
- breadcrumbs,
- schema.org yang valid.

Jangan membuat fake AggregateRating atau fake reviews.
```

---

## STEP 21 — Accessibility Audit

```text
Audit seluruh website berdasarkan 14-ACCESSIBILITY.md.

Fix:
- headings,
- keyboard,
- focus,
- mobile navigation,
- color contrast,
- alt,
- form labels,
- target size,
- reduced motion.
```

---

## STEP 22 — Performance Audit

```text
Audit berdasarkan 23-PERFORMANCE.md.

Identify:
- JS payload,
- images,
- fonts,
- third-party scripts,
- layout shift,
- hydration.

Optimize tanpa merusak UX.
```

---

## STEP 23 — Content QA

```text
Audit seluruh konten.

Check:
- placeholder,
- fake data,
- typo,
- outdated dates,
- broken links,
- unverified religious quote,
- Arabic text,
- teacher info,
- program info.

Jangan publish item yang belum lolos review.
```

---

## STEP 24 — Netlify Production Readiness

```text
Baca:
22-SECURITY.md
24-NETLIFY-DEPLOYMENT.md
25-TESTING-QA.md
26-DEFINITION-OF-DONE.md

Siapkan:
- netlify.toml,
- redirect lama,
- headers,
- environment docs,
- production build,
- 404,
- robots/sitemap.

Jalankan final build dan laporkan hasil.
```
