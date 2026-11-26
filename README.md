# Tugas Domain — Portofolio & Todo Kuliah

Website portofolio pribadi **Muhamad Giast Al-Munawar** (Teknik Informatika, UIN Sunan Gunung Djati Bandung) yang juga mengintegrasikan aplikasi **Todo Kuliah** sebagai sub-halaman.

## Isi situs

| Halaman | URL | Keterangan |
| --- | --- | --- |
| Portofolio | `/` | Profil, proyek, dan kontak |
| Todo Kuliah | `/todo-kuliah/` | Aplikasi tugas & jadwal mata kuliah (LocalStorage) |

Pratinjau live aplikasi ditampilkan lewat iframe interaktif di kartu proyek pada halaman portofolio.

## Teknologi

- TypeScript (strict) + Vite
- CSS murni dengan design token
- LocalStorage sebagai penyimpanan data (tanpa backend)
- Multi-page build Vite (2 entry HTML)

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173/` untuk portofolio dan `http://localhost:5173/todo-kuliah/` untuk aplikasi.

## Build produksi

```bash
npm run build
npm run preview
```

Hasil build ada di `dist/`:

```text
dist/
├─ index.html
├─ todo-kuliah/index.html
├─ assets/
├─ images/profile.jpg
└─ favicon.svg
```

## Deploy (Vercel)

Project Vercel `tugas-domain` menggunakan pengaturan:

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

Setiap push ke branch `main` akan memicu deploy otomatis.

## Struktur folder

```text
├─ index.html                  # portofolio
├─ todo-kuliah/index.html      # shell aplikasi
├─ src/
│  ├─ portfolio/style.css      # gaya portofolio
│  └─ todo-kuliah/             # source aplikasi (main, storage, types, style)
├─ public/
│  ├─ images/profile.jpg
│  └─ favicon.svg
├─ vite.config.ts              # konfigurasi multi-page
└─ tsconfig.json
```

## Konfigurasi opsional

Salin `.env.example` menjadi `.env` bila ingin mengganti nama/versi aplikasi:

```env
VITE_APP_NAME=Todo Kuliah
VITE_APP_VERSION=1.0.0
```

Nilai default sudah dipakai otomatis bila `.env` tidak ada.
