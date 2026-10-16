import Link from 'next/link';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { KARYA, LINKS, PROFIL } from '@/lib/nova';
import { hariIniWIB } from '@/lib/waktu';
import SlotTerdekat from './components/SlotTerdekat';

// Ukuran ubin bento di layar lebar: 01 dan 04 melebar dua kolom.
const UBIN = ['lg:col-span-2', '', '', 'lg:col-span-2 ubin-aksen'];

export default function Home() {
  const stat = 'flex flex-col-reverse rounded-2xl border border-white/10 bg-white/5 py-3 backdrop-blur lg:py-4';
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-14 lg:px-8">
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="w-full max-w-md lg:grid lg:max-w-5xl lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-5">
        {/* Profil — di layar lebar menjadi ubin kaca tersendiri */}
        <section aria-labelledby="nama" className="lg:flex lg:flex-col lg:justify-center lg:rounded-[2rem] lg:border lg:border-white/10 lg:bg-white/[0.04] lg:p-8 lg:backdrop-blur">
          {/* Avatar monogram dengan cincin conic — persona fiktif, tanpa foto */}
          <div className="rise mx-auto h-28 w-28 rounded-full p-[3px] ring-conic lg:h-32 lg:w-32" aria-hidden="true">
            <div className="grid h-full w-full place-items-center rounded-full border-4 border-[#07070f] bg-[#0d0d1a]">
              <span className="text-gradient font-display text-4xl font-bold lg:text-5xl">{PROFIL.inisial}</span>
            </div>
          </div>

          <div className="rise mt-6 text-center" style={{ animationDelay: '0.06s' }}>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/75">
              <Sparkles size={11} className="text-teal-300" aria-hidden="true" /> {PROFIL.peran}
            </p>
            <h1 id="nama" className="mt-3 text-4xl font-bold text-gradient lg:text-5xl">{PROFIL.nama}</h1>
            <p className="mt-2 flex items-center justify-center gap-1 text-sm text-white/70">
              <MapPin size={13} aria-hidden="true" /> <span>{PROFIL.kota}<span className="lg:hidden"> · {PROFIL.bio.split(' — ')[0].toLowerCase()}</span><span className="hidden lg:inline">, Indonesia</span></span>
            </p>
            <p className="mx-auto mt-4 hidden max-w-xs text-sm leading-relaxed text-white/70 lg:block">{PROFIL.bio}</p>
          </div>

          <dl className="rise mt-6 grid grid-cols-3 gap-2 text-center lg:mt-8" style={{ animationDelay: '0.12s' }}>
            <div className={stat}>
              <dt className="text-[11px] text-white/70">Studi kasus</dt>
              <dd className="font-display text-lg font-semibold text-white lg:text-2xl">{KARYA.length}</dd>
            </div>
            <div className={stat}>
              <dt className="text-[11px] text-white/70">Pengalaman</dt>
              <dd className="font-display text-lg font-semibold text-white lg:text-2xl">6 th</dd>
            </div>
            <SlotTerdekat hari={hariIniWIB()} className={stat} />
          </dl>
        </section>

        <nav className="mt-6 grid gap-3 lg:mt-0 lg:grid-cols-2 lg:gap-4" aria-label="Tautan utama">
          {LINKS.map((l, i) => (
            <Link
              key={l.no}
              href={l.href}
              className={`rise ubin group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-fuchsia-300/40 hover:bg-white/10 hover:shadow-[0_10px_40px_-12px_rgba(232,121,249,0.35)] lg:min-h-36 lg:flex-col lg:items-stretch lg:justify-between lg:rounded-[1.6rem] lg:p-6 ${UBIN[i]}`}
              style={{ animationDelay: `${0.18 + i * 0.05}s` }}
            >
              <span className="flex items-center justify-between lg:w-full">
                <span className="w-5 font-display text-sm tabular-nums text-white/60 transition group-hover:text-teal-300">{l.no}</span>
                <ArrowUpRight size={20} className="hidden text-white/50 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white lg:block" aria-hidden="true" />
              </span>
              <span className="flex-1 lg:flex-none">
                <span className="block font-display font-semibold text-white lg:text-2xl">{l.label}</span>
                <span className="block text-xs text-white/70 lg:mt-1 lg:text-sm">{l.desc}</span>
              </span>
              <ArrowUpRight size={18} className="shrink-0 text-white/50 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white lg:hidden" aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <footer className="rise mt-7 text-center lg:col-span-2 lg:mt-4 lg:flex lg:items-baseline lg:justify-between lg:px-2 lg:text-left" style={{ animationDelay: '0.4s' }}>
          <p className="text-xs text-white/70">
            Juga di GitHub, Instagram, dan X sebagai <span className="font-semibold text-white/85">{PROFIL.handle}</span>
          </p>
          <p className="mt-6 text-[11px] leading-relaxed text-white/60 lg:mt-0">
            Persona fiktif untuk purwarupa desain — akun, klien, dan angka hanya contoh.
          </p>
        </footer>
      </div>
    </main>
  );
}
