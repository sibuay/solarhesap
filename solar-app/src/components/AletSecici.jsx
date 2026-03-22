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

  // Toplam aylık tüketim hesapla
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
      <p className="text-sm text-gray-500 mb-4">
        Evinizdeki aletleri seçin ve günlük kullanım saatini ayarlayın.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {aletler.map((alet) => {
          const secili = !!secimler[alet.id];
          return (
            <div
              key={alet.id}
              className={`border rounded-xl p-3 transition-all ${
                secili ? "border-orange-400 bg-orange-50" : "border-gray-200 bg-white"
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
                    <p className={`text-sm font-medium ${secili ? "text-orange-700" : "text-gray-700"}`}>
                      {alet.ad}
                    </p>
                    <p className="text-xs text-gray-400">{alet.watt} W</p>
                  </div>
                </button>
                {secili && (
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => saatGuncelle(alet.id, (secimler[alet.id]?.saat || 0) - 0.5)}
                      className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 font-bold text-sm hover:bg-orange-200 flex items-center justify-center"
                    >-</button>
                    <span className="w-10 text-center text-sm font-semibold text-orange-700">
                      {secimler[alet.id]?.saat}h
                    </span>
                    <button
                      type="button"
                      onClick={() => saatGuncelle(alet.id, (secimler[alet.id]?.saat || 0) + 0.5)}
                      className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 font-bold text-sm hover:bg-orange-200 flex items-center justify-center"
                    >+</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-4 bg-orange-500 text-white rounded-xl flex items-center justify-between">
        <span className="font-medium">Tahmini Aylık Tüketim</span>
        <span className="text-2xl font-bold">{Math.round(toplamKwh)} kWh</span>
      </div>
    </div>
  );
}
