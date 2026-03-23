import { useState } from "react";
import { motion } from "framer-motion";
import pshData from "../data/pshData";
import AletSecici from "../components/AletSecici";
import SonucKarti from "../components/SonucKarti";
import Tooltip from "../components/Tooltip";
import { hesapla, akillıYorumlar } from "../utils/hesaplama";
import { Home, BarChart2, ArrowLeft, Zap } from "lucide-react";

const sehirler = Object.keys(pshData).sort((a, b) => a.localeCompare(b, "tr"));
const hizliSecimler = [150, 300, 600, 1500];

const sistemTipleri = [
  {
    deger: "on-grid",
    etiket: "Şebekeye Bağlı",
    aciklama:
      "Eviniz elektrik şebekesine bağlı kalır. Paneller ürettiği enerjiyi önce evinizde kullanır, fazlasını şebekeye satar. Kesinti anında sistem durur. Batarya gerektirmez; en yaygın ve ekonomik seçenektir.",
    emoji: "🔌",
  },
  {
    deger: "hibrit",
    etiket: "Karma Sistem",
    aciklama:
      "Hem şebekeye bağlıdır hem de batarya içerir. Güneşli günlerde panellerden, batarya bitince şebekeden yararlanılır. Kesinti anında batarya devreye girer; en esnek seçenektir.",
    emoji: "⚡",
  },
  {
    deger: "off-grid",
    etiket: "Tamamen Bağımsız",
    aciklama:
      "Şebekeye hiç bağlı olunmaz. Tüm enerji paneller ve bataryalardan karşılanır. Elektrik olmayan bölgeler için idealdir; batarya maliyeti yüksektir.",
    emoji: "🔋",
  },
];

export default function Hesaplayici() {
  const [mod, setMod] = useState(null);
  const [aylikTuketim, setAylikTuketim] = useState("");
  const [anlikGucW, setAnlikGucW] = useState(0);
  const [anlikGucKwInput, setAnlikGucKwInput] = useState("");
  const [sehir, setSehir] = useState("");
  const [sistemTipi, setSistemTipi] = useState("on-grid");
  const [sonuc, setSonuc] = useState(null);
  const [yorumlar, setYorumlar] = useState([]);
  const [hata, setHata] = useState("");

  const hesapHata = () => {
    if (!aylikTuketim || Number(aylikTuketim) <= 0) return "Lütfen geçerli bir tüketim değeri girin.";
    if (!sehir) return "Lütfen şehir seçin.";
    return "";
  };

  const hesapYap = () => {
    const err = hesapHata();
    if (err) { setHata(err); return; }
    setHata("");
    const gucW = mod === "bireysel"
      ? anlikGucW
      : (parseFloat(anlikGucKwInput) || 0) * 1000;
    const s = hesapla({ aylikTuketim: Number(aylikTuketim), sehir, sistemTipi, anlikGucW: gucW });
    const y = akillıYorumlar({ sehir, sistemTipi, aylikTuketim: Number(aylikTuketim), sonuc: s });
    setSonuc(s);
    setYorumlar(y);
    setTimeout(() => document.getElementById("sonuc")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  if (!mod) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-2 mb-5">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300 font-medium">Güneş Enerjisi Hesaplayıcı</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Nasıl hesaplamak istersiniz?
            </h1>
            <p className="text-slate-400">Tüketim bilginizi girmek için bir mod seçin</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                id: "bireysel",
                emoji: "🏠",
                baslik: "Bireysel Mod",
                aciklama: "Evinizdeki aletleri seçin — tüketiminizi bilmiyorsanız bu modu kullanın.",
                Icon: Home,
              },
              {
                id: "teknik",
                emoji: "📊",
                baslik: "Teknik / İşletme Modu",
                aciklama: "Aylık kWh değerinizi biliyorsanız doğrudan girin.",
                Icon: BarChart2,
              },
            ].map(({ id, emoji, baslik, aciklama }, i) => (
              <motion.button
                key={id}
                onClick={() => setMod(id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-slate-800/60 border border-slate-600/60 rounded-2xl p-7 text-left hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-4xl mb-4">{emoji}</div>
                  <h2 className="font-bold text-white text-lg mb-2 group-hover:text-orange-400 transition-colors">
                    {baslik}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">{aciklama}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.button
          onClick={() => { setMod(null); setSonuc(null); setAnlikGucW(0); setAnlikGucKwInput(""); }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-orange-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Mod seçimine dön
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-white mb-8"
        >
          {mod === "bireysel" ? "🏠 Bireysel Mod" : "📊 Teknik / İşletme Modu"}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-800/60 rounded-2xl border border-slate-600/60 p-7 mb-6 backdrop-blur-sm"
        >
          {/* Tüketim */}
          <h2 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs flex items-center justify-center font-bold">1</span>
            Aylık Tüketim
          </h2>

          {mod === "bireysel" ? (
            <AletSecici onTuketimHesapla={({ aylikKwh, anlikGucW: guc }) => {
              setAylikTuketim(String(aylikKwh));
              setAnlikGucW(guc);
            }} />
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Aylık tüketim (kWh)</label>
                <input
                  type="number"
                  value={aylikTuketim}
                  onChange={(e) => setAylikTuketim(e.target.value)}
                  placeholder="örn. 300"
                  className="w-full bg-slate-700/70 border border-slate-500/60 rounded-xl px-4 py-3 text-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {hizliSecimler.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setAylikTuketim(String(v))}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                      aylikTuketim === String(v)
                        ? "border-orange-500/60 bg-orange-500/20 text-orange-400"
                        : "border-slate-500/60 text-slate-400 hover:border-orange-500/40 hover:text-slate-200"
                    }`}
                  >
                    {v} kWh
                  </button>
                ))}
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">
                  Anlık maksimum yük (kW) <span className="text-slate-600">— opsiyonel</span>
                </label>
                <p className="text-xs text-slate-500 mb-2">
                  Aynı anda çalışabilecek tüm aletlerin toplam wattı. İnverter bu değerden küçük seçilemez.
                </p>
                <input
                  type="number"
                  value={anlikGucKwInput}
                  onChange={(e) => setAnlikGucKwInput(e.target.value)}
                  placeholder="örn. 5.5"
                  min="0"
                  step="0.1"
                  className="w-full bg-slate-700/70 border border-slate-500/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all"
                />
              </div>
            </div>
          )}

          {/* Şehir */}
          <div className="mt-8">
            <h2 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs flex items-center justify-center font-bold">2</span>
              Şehir Seçimi
            </h2>
            <select
              value={sehir}
              onChange={(e) => setSehir(e.target.value)}
              className="w-full bg-slate-700/70 border border-slate-500/60 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all appearance-none"
            >
              <option value="" className="bg-slate-800">Şehir seçin...</option>
              {sehirler.map((s) => (
                <option key={s} value={s} className="bg-slate-800">
                  {s} ({pshData[s]} saat/gün PSH)
                </option>
              ))}
            </select>
          </div>

          {/* Sistem tipi */}
          <div className="mt-8">
            <h2 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs flex items-center justify-center font-bold">3</span>
              Sistem Tipi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {sistemTipleri.map((s) => (
                <button
                  key={s.deger}
                  type="button"
                  onClick={() => setSistemTipi(s.deger)}
                  className={`relative border-2 rounded-xl p-4 text-left transition-all ${
                    sistemTipi === s.deger
                      ? "border-orange-500/60 bg-orange-500/15"
                      : "border-slate-500/60 bg-slate-800/40 hover:border-slate-500/70"
                  }`}
                >
                  <span className="text-2xl block mb-2">{s.emoji}</span>
                  <Tooltip aciklama={s.aciklama}>
                    <span className={`font-semibold text-sm ${sistemTipi === s.deger ? "text-orange-400" : "text-slate-300"}`}>
                      {s.etiket}
                    </span>
                  </Tooltip>
                </button>
              ))}
            </div>
          </div>

          {hata && (
            <div className="mt-4 text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
              {hata}
            </div>
          )}

          <motion.button
            onClick={hesapYap}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="mt-8 w-full py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
          >
            Hesapla →
          </motion.button>
        </motion.div>

        {sonuc && (
          <motion.div
            id="sonuc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SonucKarti sonuc={sonuc} yorumlar={yorumlar} sistemTipi={sistemTipi} sehir={sehir} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
