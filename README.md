# 📚 BookNest

BookNest adalah website **toko buku online** berbasis HTML, CSS, JavaScript, dan Bootstrap yang menampilkan katalog buku, sistem keranjang, halaman checkout, serta berbagai halaman pendukung seperti promo, testimoni, dan FAQ. Proyek ini dibuat sebagai bagian dari **Proyek Pemrograman Web**.

---

## ✨ Fitur Utama

* 🏠 **Halaman Beranda (Home)**

  * Hero section
  * Highlight Minggu Ini (slider highlight)
  * Kategori buku

* 📖 **Katalog Buku**

  * Daftar buku berdasarkan kategori
  * Navigasi ke detail buku

* 🔍 **Detail Buku**

  * Informasi lengkap buku
  * Tombol tambah ke keranjang

* 🛒 **Keranjang Belanja**

  * Tambah & hapus item
  * Update jumlah buku
  * Data tersimpan menggunakan `localStorage`

* 💳 **Checkout**

  * Form validasi otomatis
  * Ringkasan pesanan

* 🎁 **Promo**

  * Informasi diskon dan penawaran menarik

* 💬 **Testimoni**

  * Ulasan pelanggan

* ❓ **FAQ & Bantuan**

  * Pertanyaan umum pengguna

* 🌙 **Mode Gelap & Terang**

  * Toggle dark mode
  * Preferensi disimpan di `localStorage`

---

## 🧱 Struktur Folder

```
PROJEK-PEMWEB-KEL14/
│
├── .vscode/
│   └── settings.json
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── BUKU.FIKSI.01.png
│   ├── BUKU.FIKSI.02.png
│   ├── BUKU.FIKSI.03.jpg
│   ├── BUKU.FIKSI.04.jpg
│   ├── BUKU.KOMIK.01.jpg
│   ├── BUKU.KOMIK.02.jpg
│   ├── BUKU.KOMIK.03.jpg
│   ├── BUKU.NONFIKSI.01.jpg
│   ├── BUKU.NONFIKSI.02.jpg
│   ├── BUKU.PEMROGRAMAN.01.jpg
│   ├── BUKU.PEMROGRAMAN.02.jpg
│   ├── BUKU.PENGEMBANGAN.DIRI.01.jpg
│   ├── BUKU.PENGEMBANGAN.DIRI.02.jpg
│   └── logo-booknest.png
│
├── index.html
├── katalog.html
├── detail-buku.html
├── keranjang.html
├── checkout.html
├── promo.html
├── tentang.html
├── testimoni.html
├── faq.html
└── bantuan.html
```

---

## 🛠️ Teknologi yang Digunakan

* **HTML5** – Struktur halaman
* **CSS3** – Styling dan layout
* **Bootstrap 5** – UI & responsivitas
* **JavaScript (Vanilla JS)** – Interaksi dan logika aplikasi
* **LocalStorage** – Penyimpanan data keranjang & mode tampilan

---

## 🚀 Cara Menjalankan Proyek

1. Pastikan browser modern (Chrome, Edge, Firefox)
2. Buka folder proyek
3. Jalankan file `index.html`

   * Bisa langsung klik dua kali, atau
   * Menggunakan Live Server di VS Code (disarankan)

---

## 🧪 Contoh Fitur Highlight Minggu Ini

Highlight slider menampilkan buku unggulan seperti:

* Paket Buku Pemrograman Lengkap
* Novel Fiksi Terlaris
* Buku Pengembangan Diri

Slider diatur menggunakan class `.highlight-item` dan status aktif menggunakan `.active`.

---

## 📌 Catatan Pengembangan

* Proyek ini masih menggunakan **HTML statis** (belum backend)
* Cocok untuk pembelajaran:

  * Struktur website
  * DOM manipulation
  * LocalStorage
  * UI responsif

---

## 👨‍💻 Kontributor

**Kelompok 14 – Proyek Pemrograman Web**
Nama Proyek: **BookNest**

**Anggota Kelompok:**

1. Irfan Mardiansyah
2. Ahmad Haniya Hibatullah
3. Zaula Asma Sholihah
4. Muhammad Fawwaz R

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan **pendidikan**. Bebas digunakan dan dikembangkan lebih lanjut.

---

✨ *BookNest – Temukan buku favoritmu dengan mudah dan nyaman.*
