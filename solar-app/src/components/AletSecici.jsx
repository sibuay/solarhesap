import { useState, useEffect } from "react";
import aletler from "../data/aletler";
import { Zap } from "lucide-react";

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
      return { ...prev, [alet.id]: { saat: alet.varsayilanSaat, esZamanli: true } };
    });
  };

  const esZamanliToggle = (id) => {
    setSecimler((prev) => ({
      ...prev,
      [id]: { ...prev[id], esZamanli: !prev[id].esZamanli },
    }));
  };

  useEffect(() => {
    let aylikKwh = 0;
    let anlikGucW = 0;
    aletler.forEach((a) => {
      if (secimler[a.id]) {
        aylikKwh += (a.watt * secimler[a.id].saat * 30) / 1000;
        if (secimler[a.id].esZamanli) anlikGucW += (a.tepeWatt || a.watt);
      }
    });
    onTuketimHesapla({ aylikKwh: Math.round(aylikKwh), anlikGucW });
  }, [secimler]);

  const toplamKwh = aletler.reduce((acc, a) => {
    if (secimler[a.id]) return acc + (a.watt * secimler[a.id].saat * 30) / 1000;
    return acc;
  }, 0);

  const anlikGucW = aletler.reduce((acc, a) => {
    if (secimler[a.id]?.esZamanli) return acc + (a.tepeWatt || a.watt);
    return acc;
  }, 0);

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-400 mb-1">
        Evinizdeki aletleri seçin ve günlük kullanım saatini ayarlayın.
      </p>
      <p className="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-[10px]">⚡</span>
        Aynı anda çalışabilecek aletleri sarı ⚡ ile işaretleyin — bu değer inverter kapasitesini belirler.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {aletler.map((alet) => {
          const secili = !!secimler[alet.id];
          const esZamanli = secimler[alet.id]?.esZamanli ?? false;
          return (
            <div
              key={alet.id}
              className={`border rounded-xl p-3 transition-all ${
                secili
                  ? "border-orange-500/60 bg-orange-500/10"
                  : "border-slate-500/60 bg-slate-700/40 hover:border-slate-500/70"
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
                    <p className="text-xs text-slate-500">
                      {alet.watt} W{alet.tepeWatt ? ` · tepe ${alet.tepeWatt} W` : ""}
                    </p>
                  </div>
                </button>
                {secili && (
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      title={esZamanli ? "Aynı anda çalışır (kapat)" : "Aynı anda çalışmaz (aç)"}
                      onClick={() => esZamanliToggle(alet.id)}
                      className={`w-6 h-6 rounded-full text-xs flex items-center justify-center transition-all border ${
                        esZamanli
                          ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-400"
                          : "bg-slate-700/50 border-slate-600/50 text-slate-500"
                      }`}
                    >
                      ⚡
                    </button>
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

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="p-4 bg-linear-to-r from-orange-500 to-amber-500 text-white rounded-xl flex items-center justify-between shadow-lg shadow-orange-500/20">
          <span className="font-medium text-sm">Aylık Tüketim</span>
          <span className="text-2xl font-bold">{Math.round(toplamKwh)} kWh</span>
        </div>
        <div className={`p-4 rounded-xl flex items-center justify-between border transition-all ${
          anlikGucW > 0
            ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-300"
            : "bg-slate-700/50 border-slate-500/60 text-slate-400"
        }`}>
          <span className="font-medium text-sm flex items-center gap-1">
            <Zap className="w-3.5 h-3.5" /> Anlık Tepe Gücü
          </span>
          <span className="text-2xl font-bold">
            {anlikGucW >= 1000
              ? `${(anlikGucW / 1000).toFixed(1)} kW`
              : `${anlikGucW} W`}
          </span>
        </div>
      </div>
    </div>
  );
}
