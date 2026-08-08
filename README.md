# Tarbiyah Sunnah Learning — Belajar Islam Dasar (BID)

Website resmi program **Belajar Islam Dasar (BID)** oleh **Tarbiyah Sunnah Learning (TSL)**. Program pembelajaran Islam dasar yang terstruktur, bertahap, dan terarah untuk membantu masyarakat membangun fondasi agama yang utuh berbasis Al-Qur'an dan As-Sunnah.

---

## 📌 Kurikulum Utama

Program Belajar Islam Dasar mencakup 6 modul/mata pelajaran utama:

1. **Aqidah** — Mengenal tauhid dan rukun iman.
2. **Manhaj** — Memahami jalan beragama yang benar.
3. **Fiqih & Ushul Fiqih** — Memahami ibadah dan hukum Islam.
4. **Qawaid Fiqhiyyah** — Memahami kaidah penting dalam penarikan hukum.
5. **Hadits & Musthalah Hadits** — Memahami istilah dalam hadits Nabi.
6. **Bahasa Arab (Nahwu & Shorof)** — Kunci memahami teks-teks syar’i.

---

## 🛠️ Teknologi & Stack

- **Framework**: [Astro 7.2.0](https://astro.build/) (Static Site Generation / SSG)
- **Runtime**: Node.js `>=22.12.0`
- **Styling**: Vanilla CSS (CSS Custom Properties / Tokens System)
- **Content System**: Astro Content Collections dengan skema Zod
- **SEO & Metadata**: Integrated OpenGraph, Sitemap XML, JSON-LD Schema.org
- **Hosting & CI/CD**: Netlify Production Deployment

---

## 🔗 Tautan Eksternal & Portal Resmi

- **Portal Belajar / Login Akun**: [https://my.tslbelajarislam.id/account/login](https://my.tslbelajarislam.id/account/login)
- **Portal Pendaftaran Official**: [https://daftar.tslbelajarislam.id/](https://daftar.tslbelajarislam.id/)
- **Website Production**: [https://tslbelajarislam.id](https://tslbelajarislam.id)

---

## 🚀 Pengembangan & Cara Menjalankan

### 1. Prasyarat System
- Node.js versi `22.12.0` atau yang lebih baru.
- `npm` versi `10.x` ke atas.

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Lokal (Dev)
```bash
npm run dev
```
Akses di browser pada: `http://localhost:4321`

### 4. Build Production
```bash
npm run build
```
Hasil kompilasi statis akan dihasilkan pada direktori `./dist`.

### 5. Preview Hasil Build
```bash
npm run preview
```

---

## 📁 Struktur Direktori Utama

```text
├── public/                # Aset statis (logo, favicon, robots.txt)
│   ├── logo/
│   │   └── logo-bid.png   # Logo Resmi BID TSL
│   └── favicon/           # Icon browser & apple touch icon
├── src/
│   ├── components/        # Komponen UI modular
│   │   ├── global/        # Header, Footer, BaseLayout, SEOHead
│   │   └── home/          # Hero, Framework, Teachers, FAQ, FinalCTA
│   ├── content/           # Astro Content Collections (MD/MDX)
│   │   ├── subjects/      # Mata pelajaran & Kurikulum
│   │   ├── teachers/      # Data pengajar & asatidzah
│   │   ├── quotes/        # Quote ulama terverifikasi
│   │   ├── articles/      # Artikel pembelajaran
│   │   ├── faqs/          # Pertanyaan umum (FAQ)
│   │   └── testimonials/  # Testimoni alumni & peserta
│   ├── pages/             # Astro file-based routes
│   └── styles/            # CSS Global Tokens & Typography
├── netlify.toml           # Netlify build & redirect rules
└── package.json           # Dependensi & Metadata versi
```

---

## 🏷️ Versioning & Changelog

### Version 1.0.0 (2026-08-08) — Initial Official Release
- **Kurikulum**: Implementasi 6 modul utama BID (Aqidah, Manhaj, Fiqih & Ushul Fiqih, Qawaid Fiqhiyyah, Hadits & Musthalah Hadits, Bahasa Arab Nahwu & Shorof).
- **Branding**: Integrasi logo resmi Belajar Islam Dasar (BID) dan favicon PNG pada seluruh shell website.
- **Portals**: Pembaharuan URL Portal Belajar (`https://my.tslbelajarislam.id/account/login`) dan Portal Pendaftaran (`https://daftar.tslbelajarislam.id/`).
- **Pembersihan**: Penghapusan rute halaman informasi dan pembaruan struktur navigasi.
- **Production Readiness**: Audit WCAG 2.2 AA accessibility, Core Web Vitals performance optimization, dan penyesuaian `netlify.toml` untuk Astro 7.2.0 (Node 22.12.0).

---

## 📄 Lisensi & Cipta

© 2026 **Tarbiyah Sunnah Learning**. Hak Cipta Dilindungi.
