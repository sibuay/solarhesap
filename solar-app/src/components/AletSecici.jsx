import { useState, useEffect } from "react";
import aletler from "../data/aletler";

export default function AletSecici({ onTuketimHesapla }) {
  const [secimler, setSecimler] = useState({});

  const saatGuncelle = (id, saat) => {
    setSecimler((prev) => ({
      ...prev,
      [id]: { ...prev[id], saat: Math.max(0, Math.min(24, Number(saat))) },
    }));
  };

  const toggle = (alet) => {
    setSecimler((prev) => {
      if (prev[alet.id]) {
        const next = { ...prev };
        delete next[alet.id];
        return next;
      }
      return { ...prev, [alet.id]: { saat: alet.varsayilanSaat } };
    });
  };

  useEffect(() => {
    let toplam = 0;
    aletler.forEach((a) => {
      if (secimler[a.id]) {
        toplam += (a.watt * secimler[a.id].saat * 30) / 1000;
      }
    });
    onTuketimHesapla(Math.round(toplam));
  }, [secimler]);

  const toplamKwh = aletler.reduce((acc, a) => {
    if (secimler[a.id]) return acc + (a.watt * secimler[a.id].saat * 30) / 1000;
    return acc;
  }, 0);

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-400 mb-4">
        Evinizdeki aletleri seçin ve günlük kullanım saatini ayarlayın.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {aletler.map((alet) => {
          const secili = !!secimler[alet.id];
          return (
            <div
              key={alet.id}
              className={`border rounded-xl p-3 transition-all ${
                secili
                  ? "border-orange-500/60 bg-orange-500/10"
                  : "border-slate-600/50 bg-slate-800/40 hover:border-slate-500/70"
              }`}
            >
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggle(alet)}
                  className="flex items-center gap-2 flex-1 text-left"
                >
                  <span className="text-xl">{alet.emoji}</span>
                  <div>
                    <p className={`text-sm font-medium ${secili ? "text-orange-400" : "text-slate-300"}`}>
                      {alet.ad}
                    </p>
                    <p className="text-xs text-slate-500">{alet.watt} W</p>
                  </div>
                </button>
                {secili && (
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => saatGuncelle(alet.id, (secimler[alet.id]?.saat || 0) - 0.5)}
                      className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold text-sm hover:bg-orange-500/30 flex items-center justify-center transition-colors"
                    >−</button>
                    <span className="w-10 text-center text-sm font-semibold text-orange-300">
                      {secimler[alet.id]?.saat}h
                    </span>
                    <button
                      type="button"
                      onClick={() => saatGuncelle(alet.id, (secimler[alet.id]?.saat || 0) + 0.5)}
                      className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold text-sm hover:bg-orange-500/30 flex items-center justify-center transition-colors"
                    >+</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-4 bg-linear-to-r from-orange-500 to-amber-500 text-white rounded-xl flex items-center justify-between shadow-lg shadow-orange-500/20">
        <span className="font-medium text-sm">Tahmini Aylık Tüketim</span>
        <span className="text-2xl font-bold">{Math.round(toplamKwh)} kWh</span>
      </div>
    </div>
  );
}
