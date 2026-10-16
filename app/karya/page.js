import Link from 'next/link';
import { KARYA, LAB, SITE } from '@/lib/nova';
import Kembali from '../components/Kembali';

export const metadata = {
  title: 'Studi Kasus',
  description: 'Empat studi kasus Nova Ardhana: peta genangan waktu nyata, katalog batik 3D, dasbor absensi kelas, dan pameran suara kota, dari masalah sampai hasil.',
  alternates: { canonical: `${SITE}/karya` },
};

export default function Karya() {
  return (
    <main className="relative min-h-screen px-4 py-10 sm:py-14">
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Kembali judul="Studi kasus" />

      <div className="mx-auto mt-12 max-w-3xl">
        <h1 className="rise text-4xl font-bold text-gradient sm:text-5xl">Empat proyek, empat masalah</h1>
        <p className="rise mt-4 max-w-xl text-white/75" style={{ animationDelay: '0.08s' }}>Setiap proyek dimulai dari satu kebiasaan yang ingin diubah — bukan dari efek yang ingin dipamerkan.</p>

        <ol className="mt-10 space-y-6">
          {KARYA.map((k, i) => (
            <li key={k.slug} id={k.slug} className="rise scroll-mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8" style={{ animationDelay: `${0.12 + i * 0.06}s` }}>
              <p className="flex flex-wrap items-baseline justify-between gap-2 text-xs uppercase tracking-[0.18em] text-white/65">
                <span>{String(i + 1).padStart(2, '0')} · {k.tahun}</span>
                <span>{k.peran}</span>
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{k.judul}</h2>
              <p className="mt-1 text-sm text-white/65">{k.klien}</p>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                <div><dt className="text-xs uppercase tracking-[0.18em] text-fuchsia-200">Masalah</dt><dd className="mt-1 leading-relaxed text-white/85">{k.masalah}</dd></div>
                <div><dt className="text-xs uppercase tracking-[0.18em] text-teal-200">Pendekatan</dt><dd className="mt-1 leading-relaxed text-white/85">{k.cara}</dd></div>
              </dl>
              <dl className="mt-5 grid grid-cols-2 gap-3">
                {k.hasil.map(([t, v]) => (
                  <div key={t} className="flex flex-col-reverse rounded-2xl border border-white/10 bg-black/20 p-4">
                    <dt className="mt-1 text-xs text-white/65">{t}</dt>
                    <dd className="font-display text-lg font-semibold text-white sm:text-2xl">{v}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Teknologi">
                {k.stack.map((s) => <li key={s} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">{s}</li>)}
              </ul>
            </li>
          ))}
        </ol>

        <section id="lab" aria-labelledby="lab-h" className="mt-16 scroll-mt-8">
          <h2 id="lab-h" className="text-3xl font-bold text-white">Lab eksperimen</h2>
          <p className="mt-2 text-white/75">Prototipe kecil yang belum jadi produk — tempat mencoba sebelum dipakai di proyek klien.</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {LAB.map(([j, d]) => (
              <li key={j} className="rounded-2xl border border-dashed border-white/20 p-5">
                <h3 className="font-semibold text-white">{j}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{d}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 flex flex-col items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/85">Punya kebiasaan yang ingin diubah lewat web?</p>
          <Link href="/kolaborasi" className="inline-flex min-h-11 items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#07070f] hover:bg-teal-200">Lihat cara kolaborasi</Link>
        </div>
        <p className="mt-8 text-center text-[11px] text-white/60">Klien dan angka adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
