import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PROFIL } from '@/lib/nova';

// Bilah atas halaman dalam: kembali ke daftar tautan.
export default function Kembali({ judul }) {
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
      <Link href="/" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:border-teal-300/50 hover:text-white">
        <ArrowLeft size={15} aria-hidden="true" /> {PROFIL.handle}
      </Link>
      <span className="text-xs uppercase tracking-[0.2em] text-white/60">{judul}</span>
    </div>
  );
}
