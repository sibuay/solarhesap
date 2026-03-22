import { useState } from "react";
import pshData from "../data/pshData";
import AletSecici from "../components/AletSecici";
import SonucKarti from "../components/SonucKarti";
import Tooltip from "../components/Tooltip";
import { hesapla, akillıYorumlar } from "../utils/hesaplama";

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
  const [mod, setMod] = useState(null); // null | "bireysel" | "teknik"
  const [aylikTuketim, setAylikTuketim] = useState("");
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
    const s = hesapla({ aylikTuketim: Number(aylikTuketim), sehir, sistemTipi });
    const y = akillıYorumlar({ sehir, sistemTipi, aylikTuketim: Number(aylikTuketim), sonuc: s });
    setSonuc(s);
    setYorumlar(y);
    setTimeout(() => document.getElementById("sonuc")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  if (!mod) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">
            Güneş Enerjisi Hesaplayıcı
          </h1>
          <p className="text-gray-500 text-center mb-10">
            Tüketim bilginizi girmek için bir mod seçin
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <button
              onClick={() => setMod("bireysel")}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-left hover:border-orange-400 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-3">🏠</div>
              <h2 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-orange-600">
                Bireysel Mod
              </h2>
              <p className="text-sm text-gray-500">
                Evinizdeki aletleri seçin — tüketiminizi bilmiyorsanız bu modu kullanın.
              </p>
            </button>
            <button
              onClick={() => setMod("teknik")}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-left hover:border-orange-400 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-3">📊</div>
              <h2 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-orange-600">
                Teknik / İşletme Modu
              </h2>
              <p className="text-sm text-gray-500">
                Aylık kWh değerinizi biliyorsanız doğrudan girin.
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => { setMod(null); setSonuc(null); }}
          className="text-sm text-gray-400 hover:text-orange-500 mb-6 flex items-center gap-1"
        >
          ← Mod seçimine dön
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          {mod === "bireysel" ? "🏠 Bireysel Mod" : "📊 Teknik / İşletme Modu"}
        </h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          {/* Tüketim girişi */}
          <h2 className="font-semibold text-gray-700 mb-4">1. Aylık Tüketim</h2>

          {mod === "bireysel" ? (
            <AletSecici onTuketimHesapla={(v) => setAylikTuketim(String(v))} />
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Aylık tüketim (kWh)</label>
                <input
                  type="number"
                  value={aylikTuketim}
                  onChange={(e) => setAylikTuketim(e.target.value)}
                  placeholder="örn. 300"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {hizliSecimler.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setAylikTuketim(String(v))}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                      aylikTuketim === String(v)
                        ? "border-orange-400 bg-orange-50 text-orange-600"
                        : "border-gray-200 text-gray-600 hover:border-orange-300"
                    }`}
                  >
                    {v} kWh
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Şehir seçimi */}
          <div className="mt-8">
            <h2 className="font-semibold text-gray-700 mb-4">2. Şehir Seçimi</h2>
            <select
              value={sehir}
              onChange={(e) => setSehir(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
            >
              <option value="">Şehir seçin...</option>
              {sehirler.map((s) => (
                <option key={s} value={s}>
                  {s} ({pshData[s]} saat/gün PSH)
                </option>
              ))}
            </select>
          </div>

          {/* Sistem tipi */}
          <div className="mt-8">
            <h2 className="font-semibold text-gray-700 mb-4">3. Sistem Tipi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {sistemTipleri.map((s) => (
                <button
                  key={s.deger}
                  type="button"
                  onClick={() => setSistemTipi(s.deger)}
                  className={`relative border-2 rounded-xl p-4 text-left transition-all ${
                    sistemTipi === s.deger
                      ? "border-orange-400 bg-orange-50"
                      : "border-gray-200 hover:border-orange-200"
                  }`}
                >
                  <span className="text-2xl block mb-2">{s.emoji}</span>
                  <Tooltip aciklama={s.aciklama}>
                    <span className={`font-semibold text-sm ${sistemTipi === s.deger ? "text-orange-700" : "text-gray-700"}`}>
                      {s.etiket}
                    </span>
                  </Tooltip>
                </button>
              ))}
            </div>
          </div>

          {hata && (
            <p className="mt-4 text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{hata}</p>
          )}

          <button
            onClick={hesapYap}
            className="mt-8 w-full py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-md shadow-orange-200"
          >
            Hesapla →
          </button>
        </div>

        {sonuc && (
          <div id="sonuc">
            <SonucKarti sonuc={sonuc} yorumlar={yorumlar} sistemTipi={sistemTipi} sehir={sehir} />
          </div>
        )}
      </div>
    </div>
  );
}
