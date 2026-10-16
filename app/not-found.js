import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4">
      <div className="aurora" aria-hidden="true" />
      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur">
        <p className="font-display text-6xl font-bold text-gradient">404</p>
        <h1 className="mt-3 text-2xl font-semibold text-white">Tautan ini belum ada</h1>
        <p className="mt-2 text-white/75">Mungkin masih di lab, atau alamatnya salah ketik.</p>
        <Link href="/" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#07070f] hover:bg-teal-200">Kembali ke semua tautan</Link>
      </div>
    </main>
  );
}
