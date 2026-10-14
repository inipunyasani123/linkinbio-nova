/* Nova Ardhana — creative technologist (persona fiktif). Satu sumber isi untuk
   halaman tautan, studi kasus, dan kolaborasi. Klien, angka, dan tarif adalah
   contoh purwarupa desain. */

export const SITE = 'https://linkinbio-nova.pintuweb.id';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

export const PROFIL = {
  nama: 'Nova Ardhana',
  inisial: 'NA',
  peran: 'Creative Technologist',
  kota: 'Jakarta',
  bio: 'Membangun web yang terasa hidup — antarmuka yang bergerak, merespons, dan tetap cepat.',
  handle: '@nova.ardhana',
};

export const LINKS = [
  { no: '01', label: 'Studi kasus', desc: 'Empat proyek terpilih, dari masalah sampai angka', href: '/karya' },
  { no: '02', label: 'Lab eksperimen', desc: 'Prototipe kecil yang belum jadi produk', href: '/karya#lab' },
  { no: '03', label: 'Kolaborasi & tarif', desc: 'Jenis proyek, slot kosong, cara kerja', href: '/kolaborasi' },
  { no: '04', label: 'Ajak ngobrol 20 menit', desc: 'Isi formulir singkat, saya balas dalam 2 hari kerja', href: '/kolaborasi#form' },
];

export const KARYA = [
  { slug: 'peta-banjir', judul: 'Peta Genangan Waktu Nyata', klien: 'Komunitas warga Jakarta Utara (fiktif)', tahun: 2026, peran: 'Desain & front-end', masalah: 'Laporan genangan tersebar di grup percakapan dan cepat tenggelam.', cara: 'Peta ringan yang menerima laporan berfoto, memudar sendiri setelah tiga jam, dan bisa dibuka di ponsel murah.', hasil: [['Waktu muat di 3G', '1,8 dtk'], ['Laporan bulan pertama', '1.240']], stack: ['Next.js', 'MapLibre', 'Service Worker'] },
  { slug: 'katalog-batik', judul: 'Katalog Batik yang Bisa Diputar', klien: 'Rumah batik di Pekalongan (fiktif)', tahun: 2025, peran: 'Konsep & 3D web', masalah: 'Foto datar tidak memperlihatkan jatuhnya kain.', cara: 'Kain disimulasikan di WebGL; pengunjung bisa memutar dan melihat motif mengikuti lipatan.', hasil: [['Waktu di halaman', '+2,1×'], ['Ukuran model', '380 KB']], stack: ['Three.js', 'Draco', 'Astro'] },
  { slug: 'dasbor-kelas', judul: 'Dasbor Kehadiran Kelas', klien: 'Bimbel daring (fiktif)', tahun: 2025, peran: 'Riset & desain sistem', masalah: 'Guru menghabiskan 15 menit tiap kelas untuk absen manual.', cara: 'Absen satu ketukan dengan kode kelas yang berganti tiap 30 detik, ditambah ringkasan mingguan untuk orang tua.', hasil: [['Waktu absen', '15 → 2 mnt'], ['Guru aktif', '84']], stack: ['React', 'Supabase', 'Tailwind'] },
  { slug: 'pameran-suara', judul: 'Pameran Suara Kota', klien: 'Galeri independen di Bandung (fiktif)', tahun: 2024, peran: 'Instalasi web interaktif', masalah: 'Pengunjung pameran daring hanya menggulir lalu pergi.', cara: 'Rekaman suara kota diletakkan di denah; volume berubah mengikuti posisi kursor seperti berjalan di galeri.', hasil: [['Rata-rata kunjungan', '6 mnt 40 dtk'], ['Rekaman', '62']], stack: ['Web Audio API', 'Canvas', 'Vite'] },
];

export const LAB = [
  ['Aurora CSS', 'Latar bergerak tanpa JavaScript — hanya gradien dan blur.'],
  ['Teks yang bernapas', 'Huruf variabel yang menebal mengikuti kecepatan gulir.'],
  ['Kursor magnet', 'Tombol yang sedikit menarik kursor, dimatikan otomatis bila pengguna memilih gerak dikurangi.'],
];

export const LAYANAN = [
  { nama: 'Situs kampanye interaktif', mulai: 18000000, waktu: '4–6 minggu', isi: 'Satu halaman yang bergerak dan bercerita, siap untuk peluncuran produk.' },
  { nama: 'Prototipe ide', mulai: 6500000, waktu: '1–2 minggu', isi: 'Bukti konsep yang bisa diklik sebelum Anda memutuskan membangun penuh.' },
  { nama: 'Pendampingan tim', mulai: 4000000, waktu: 'per bulan', isi: 'Dua sesi per minggu untuk tim front-end: animasi, performa, aksesibilitas.' },
];

export const SLOT = [['Oktober 2026', 0], ['November 2026', 1], ['Desember 2026', 2]];
