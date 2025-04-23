# Portfolio Website

Website portfolio modern dan responsif yang dibangun dengan Next.js, Tailwind CSS, dan Framer Motion.

## Fitur

- 🌓 Toggle mode Terang/Gelap
- 📱 Desain yang sepenuhnya responsif
- 🎨 UI modern dengan Tailwind CSS
- 🔄 Animasi halus dengan Framer Motion
- ⚡ Performa cepat dengan Next.js
- 📊 Analitik dengan Vercel Analytics
- 🔍 Dioptimalkan untuk SEO

## Memulai

### Prasyarat

- Node.js (v14 atau lebih baru)
- npm atau yarn

### Instalasi

1. Kloning repositori:
   ```bash
   git clone https://github.com/username-anda/portfolio-website.git
   cd portfolio-website
   ```

2. Instal dependensi:
   ```bash
   npm install
   # atau
   yarn install
   ```

3. Jalankan server pengembangan:
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   # atau
   bun dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## Kustomisasi

### Informasi Pribadi

Perbarui informasi pribadi Anda di file-file berikut:

- `src/components/Hero.tsx` - Perbarui nama, judul, dan tautan sosial Anda
- `src/components/About.tsx` - Perbarui bio dan detail pribadi Anda
- `src/components/Skills.tsx` - Perbarui keterampilan dan keahlian Anda
- `src/components/Projects.tsx` - Tambahkan proyek-proyek Anda
- `src/components/Contact.tsx` - Perbarui informasi kontak Anda
- `src/components/Footer.tsx` - Perbarui informasi hak cipta dan tautan sosial

### Gambar

Ganti gambar placeholder dengan gambar Anda sendiri:

1. Tambahkan foto profil Anda ke direktori `public`
2. Perbarui jalur gambar di `src/components/Hero.tsx`
3. Tambahkan gambar proyek ke direktori `public/projects`
4. Perbarui jalur gambar proyek di `src/components/Projects.tsx`

### Styling

Website ini menggunakan Tailwind CSS untuk styling. Anda dapat menyesuaikan warna, font, dan elemen desain lainnya di file `tailwind.config.js`.

## Deployment

Cara termudah untuk men-deploy website portfolio Anda adalah menggunakan [Platform Vercel](https://vercel.com/new).

1. Push kode Anda ke repositori GitHub
2. Impor proyek ke Vercel
3. Vercel akan secara otomatis men-deploy website Anda

## Struktur Proyek

```
portfolio-website/
├── public/            # Aset statis
├── src/
│   ├── app/           # Halaman aplikasi
│   ├── components/    # Komponen React
│   ├── styles/        # File CSS
│   └── utils/         # Fungsi utilitas
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tailwind.config.js
```

## Pemecahan Masalah

Jika Anda mengalami masalah saat menjalankan proyek:

1. Pastikan semua dependensi terinstal dengan benar
2. Hapus folder `node_modules` dan file `package-lock.json`, lalu jalankan `npm install` lagi
3. Pastikan Anda menggunakan versi Node.js yang didukung

## Lisensi

Proyek ini bersifat open source dan tersedia di bawah [Lisensi MIT](LICENSE).

## Pengakuan

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Typed.js](https://github.com/mattboldt/typed.js/)
