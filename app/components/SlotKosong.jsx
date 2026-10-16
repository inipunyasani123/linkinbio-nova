'use client';

import { slotBulan } from '@/lib/nova';
import useHariIni from './useHariIni';

// Slot kosong tiga bulan ke depan, dihitung dari bulan berjalan (WIB).
export default function SlotKosong({ hari: awal }) {
  const hari = useHariIni(awal);
  return (
    <ul className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
      {slotBulan(hari).map((s) => (
        <li key={s.label} className="flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-black/20 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
          <span className="text-sm text-white/85 sm:text-base"><span className="sm:hidden">{s.pendek}</span><span className="hidden sm:inline">{s.label}</span></span>
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${s.sisa ? 'bg-teal-300/15 text-teal-200' : 'bg-white/10 text-white/70'}`}>{s.sisa ? `${s.sisa} slot` : 'penuh'}</span>
        </li>
      ))}
    </ul>
  );
}
