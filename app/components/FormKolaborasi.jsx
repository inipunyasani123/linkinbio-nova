'use client';

import { useState } from 'react';
import { LAYANAN, slotBulan } from '@/lib/nova';
import useHariIni from './useHariIni';

export default function FormKolaborasi({ hari: awal }) {
  const hari = useHariIni(awal);
  const bulan = slotBulan(hari).filter((s) => s.sisa);
  const [selesai, setSelesai] = useState(false);
  const input = 'w-full rounded-xl border border-white/40 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-teal-300';

  return (
    <section id="form" aria-labelledby="form-h" className="mt-12 scroll-mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
      <h2 id="form-h" className="text-2xl font-bold text-white">Ajak ngobrol 20 menit</h2>
      {selesai ? (
        <div role="status" className="mt-5">
          <p className="text-lg font-semibold text-white">Terima kasih — tercatat.</p>
          <p className="mt-2 text-white/75">Ini purwarupa desain: tidak ada pesan yang benar-benar dikirim.</p>
          <button type="button" onClick={() => setSelesai(false)} className="mt-5 min-h-11 rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:border-teal-300">Isi ulang</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="f-nama" className="mb-1.5 block text-sm text-white/80">Nama</label>
            <input id="f-nama" required autoComplete="name" className={input} />
          </div>
          <div>
            <label htmlFor="f-surel" className="mb-1.5 block text-sm text-white/80">Surel</label>
            <input id="f-surel" type="email" required autoComplete="email" className={input} />
          </div>
          <div>
            <label htmlFor="f-jenis" className="mb-1.5 block text-sm text-white/80">Jenis proyek</label>
            <select id="f-jenis" className={input}>
              {LAYANAN.map((l) => <option key={l.nama}>{l.nama}</option>)}
              <option>Belum tahu</option>
            </select>
          </div>
          <div>
            <label htmlFor="f-mulai" className="mb-1.5 block text-sm text-white/80">Ingin mulai</label>
            <select id="f-mulai" className={input}>
              {bulan.map((b) => <option key={b.label}>{b.label}</option>)}
              <option>Lebih lambat</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="f-cerita" className="mb-1.5 block text-sm text-white/80">Kebiasaan apa yang ingin diubah?</label>
            <textarea id="f-cerita" required rows={4} className={input} />
          </div>
          <button type="submit" className="rounded-full bg-white py-3 font-semibold text-[#07070f] hover:bg-teal-200 sm:col-span-2">Kirim</button>
          <p className="text-xs text-white/60 sm:col-span-2">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
        </form>
      )}
    </section>
  );
}
