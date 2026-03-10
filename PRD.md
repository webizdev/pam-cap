# Product Requirements Document (PRD) - PAM Capital Corporate Website

## 1. Ringkasan Proyek (Project Overview)
**Nama Proyek:** Website Korporat PT Pamilih Capital Advisory (PCA) / PAM Capital
**Tujuan Proyek:** Membuat sebuah website perusahaan (*company profile*) berbasis statis (HTML/CSS/JS) yang memancarkan kesan mewah (*luxurious*), bersih (*clean*), dan sangat profesional. Website ini wajib mengkomunikasikan wibawa, reputasi, serta skala pengalaman PCA sebagai firma penasihat keuangan (financial advisory) independen terkemuka dalam menjembatani modal internasional dengan bisnis strategis di Indonesia.
**Karakteristik Desain:** Mewah, Premium, Elegan, Bersih (*Uncluttered*), Kepercayaan (*Trust*), Modern.
**Kompatibilitas:** Mutlak harus responsif 100% (Mobile, Tablet, Desktop, dan Layar Ultrawide), menjamin pengalaman pengguna (UX) tanpa cacat di layar sekecil iPhone SE sampai layar monitor besar.

## 2. Target Audiens
- Investor Institusional Internasional & Domestik
- Lembaga Keuangan (*Financial Institutions*) 
- Perusahaan Berkembang (*Growth-stage Companies*) di Indonesia
- Pemangku Kepentingan Korporat tingkat VIP / C-Level

## 3. Identitas Brand & Arahan UI/UX
**1. Nuansa Visual Visual (Look & Feel):** 
Penggunaan '*White Space*' yang lega ala firma hukum/investasi Wall Street dipadukan dengan aksen modern dan elegan. Segala elemen terlihat sangat tajam, terstruktur, dan disiplin tinggi mencerminkan sifat layanan keuangannya.
**2. Tipografi:** 
Menggunakan perpaduan Serif premium (untuk Heading, memberi kesan mewah dan mapan, misalnya *Playfair Display*, *Cinzel* atau *Merriweather*) dan Sans-Serif modern yang tajam dan mudah dibaca (untuk Body, misalnya *Inter*, *Montserrat*, atau *Geist*).
**3. Palet Warna (Suggested):**
- **Warna Utama:** *Midnight Navy / Deep Sapphire Blue* (melambangkan profesionalisme dan kepercayaan mutlak).
- **Aksen:** *Gold / Brushed Bronze* atau *Silver* (melambangkan kekayaan, modal, finansial premium).
- **Latar:** *Pure White* atau *Off-White* dipadukan *Slate Grey* yang elegan.
**4. Animasi & Interaksi:**
Menggunakan transisi halaman yang amat mulus (*smooth scrolling*), efek pengungkapan elemen saat scroll (*scroll reveals*), dan *micro-interactions* pada tombol atau kartu layanan menggunakan *framer-motion* atau animasi CSS tingkat lanjut.
**5. Gambar / Aset:**
Foto *high-definition* dari arsitektur Jakarta modern, elemen industri sasaran (Renewable Energy, Data Center, dll), ruang rapat eksekutif. Semua berada di folder / assets untuk dikelola dengan rapi. 

## 4. Struktur Website & Peta Situs (Sitemap)

### 4.1. Beranda (Home)
- **Hero Section:** Tagline berani dan bersih: **"Independent Advice. Strategic Capital. Indonesia."** dengan video *cinematic background* gelap yang lambat berjalan atau gambar arsitektural berskala besar.
- **Company Intro:** Paragraf pengenalan PT Pamilih Capital Advisory sebagai firma spesialis *private capital transactions* dari Jakarta untuk mengubah lanskap bisnis di Indonesia.
- **Service Pillars Overview:** Menampilkan 4 kartu vertikal/horizontal (yang elegan) mewakili area layanan.
- **Trust & Value Proposition Focus:** Bagian khusus yang menegaskan prinsip: *Careful Structuring, Governance Alignment,* dan *Trusted Local Insight*.

### 4.2. Tentang Kami (About Us)
- Menceritakan visi firma dalam merestrukturisasi & ekspansi modal.
- **Kepemimpinan (Leadership):** Profil **M. Afdal (Dana) Pamilih, CFA**. Menyorot lebih dari 30 tahun pengalaman perbankan, sekuritas, *private equity*, dan *financial advisory* lintas sektor.

### 4.3. Layanan Kami (Advisory Services)
Halaman terpisah dan rinci memaparkan layanan secara profesional:
1. **Private Capital Advisory:** Buy/sell-side, Capital raising, JV, exit strategy planning. Penekanan pada keselarasan *governance* dan *disciplined execution*.
2. **Debt & Structured Finance:** Project & infrastructure finance, mezzanine, capital structure optimization, kolaborasi dengan lembaga kreditor internasional.
3. **Sustainable & Energy Transition Finance:** Menyoroti investasi terkait *Renewable energy*, *Green bond structuring*, dll.
4. **Digital & Financial Infrastructure:** Fokus kepada Fintech, P2P *ecosystems*, Data Centres yang mana ekonomi digital Indonesia sedang berkembang amat pesat.

### 4.4. Hubungi Kami (Contact)
- **Formulir VIP / Enquiry Form:** Clean form (Nama, Perusahaan, Email, Pesan). Form tidak terhubung dengan database backend apa pun, melainkan mengandalkan skrip sisi klien (*frontend*) untuk langsung merangkai data yang diinputkan pengunjung menjadi pesan teks (pre-filled message) yang diarahkan ke aplikasi WhatsApp Customer Service.
- **Informasi Perusahaan:** 
  - PT Pamilih Capital Advisory
  - Jalan Sinabung Raya No. 19, Kebayoran Baru, Jakarta Selatan 12120, Indonesia
  - Email: dana.pamilih@pamcap.com
  - Phone: +62 815 1155 5562
- Integrasi *Embedded Google Maps* dengan desain Peta yang *Custom* (Gelap/Silver menyesuaikan *branding*).

## 5. Arsitektur Teknis (Tech Stack Suggestion)

Sebagai website *corporate* statis mewah, kinerja sistem harus seketika (*instant*). Direkomendasikan arsitektur murni *client-side*:
- **Frontend Stack:** 
  - Struktur: **HTML5** yang sangat semantik.
  - Styling: **TailwindCSS** (via CDN atau Build step sederhana) dipadukan dengan custom CSS untuk UI yang presisi (*pixel-perfect*).
  - Interaksi & Form: **Vanilla JavaScript** (ES6+) untuk menangani pengumpulan data ke WhatsApp *link* secara mulus tanpa *reload*.
  - Animasi: **Framer Motion** (jika menggunakan React/Next.js Static Export) atau **GSAP / AOS** (jika murni HTML statis).
- **Backend / CMS Stack:**
  - **TIDAK ADA BACKEND**. File dilayani murni sebagai aset statis. Semua pemrosesan form ditangani di *frontend* dengan format *mailto:* atau tautan *wa.me*.
- **Infrastruktur / Deployment:**
  - **GitHub Pages**, **Vercel** atau **Netlify** untuk performa *rendering* super cepat dan *hosting* file statis via *Edge Network* secara gratis dan andal.

## 6. Syarat Fungsional Utama (Functional Requirements)
1. **Responsive Navbar & Footer:** Navigasi interaktif, dengan menu *hamburger* elit untuk versi *mobile*. Footer yang solid dan SEO-friendly.
2. **Static WhatsApp Form Link:** Form tidak menggunakan database atau penyedia backend pengumpul data. Form dibangun murni di sisi *frontend*, menggunakan *script* yang seketika merangkaikan data input pengunjung ke dalam format URL teks terstruktur dan menyambungkannya langsung melalui API WhatsApp (`wa.me`) kepada tim Customer Service.
3. **Multi-Language (Opsional tapi Kuat):** Opsi ganti bahasa mudah (EN / ID). Ketersediaan English wajib sebagai pilihan default karena target audiens internasional.
4. **Folder Assets Management:** Disiplin penuh mengelola aset gambar perusahaan dalam satu folder lokal (`/assets/`) yang dioptimalkan dalam format `.webp` agar *loading* instan.

## 7. Kriteria Penerimaan Non-Fungsional (Performance & Quality)
- **High Performance:** Skor audit Google Lighthouse minimal di atas 90 untuk kategori Performance, Accessibility, dan SEO, terlaporkan *fast-loading rate* tinggi.
- **Security:** Selalu menggunakan HTTPS (SSL Certificate wajib), mencegah input XSS / SQL Injection pada formulir kontak (validasi data yang solid).
- **Semantik & SEO:** Tag Meta Titles, Descriptions, Heading struktur (H1, H2, H3), *OpenGraph Tags* yang sangat diperhatikan sedari awal.

## 8. Road Map & Tahapan Pengembangan
1. **Selesai - Pembacaan Dokumen** (Penyimpanan info profile perusahaan dan struktur PRD).
2. **Tahap 1 - Desain Sistem & Pembuatan Base Proyek** (Insialisasi Framework pendukung, konfigurasi folder `assets`).
3. **Tahap 2 - Slicing Komponen Dasar** (Tata letak Layout, Navbar, Typography, Colors).
4. **Tahap 3 - Pembangunan Halaman Utama & Animasi** (Membangun halaman per halaman).
5. **Tahap 4 - Optimalisasi Interaksi Frontend** (Penyempurnaan animasi responsif, transisi halaman, dan fungsionalitas perangkaian *JavaScript WhatsApp Form Redirect*).
6. **Tahap 5 - Pengujian Lintas Perangkat & Perilisan (Go-Live).**
