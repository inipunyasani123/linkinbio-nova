'use client';

import { slotBulan } from '@/lib/nova';
import useHariIni from './useHariIni';

// Statistik "slot kosong" di beranda: bulan terdekat yang masih punya slot.
export default function SlotTerdekat({ hari: awal, className }) {
  const hari = useHariIni(awal);
  const s = slotBulan(hari).find((x) => x.sisa) || slotBulan(hari)[0];
  return (
    <div className={className}>
      <dt className="text-[11px] text-white/70">Kosong {s.pendek}</dt>
      <dd className="font-display text-lg font-semibold text-white lg:text-2xl">{s.sisa} slot</dd>
    </div>
  );
}
