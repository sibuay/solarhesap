import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Sun } from "lucide-react";
import pshData from "../data/pshData";
import { slugify } from "../utils/slugify";

// Basit bölge gruplandırması
const bolgeler = {
  "Marmara": ["İstanbul", "Bursa", "Kocaeli", "Edirne", "Tekirdağ", "Kırklareli", "Balıkesir", "Çanakkale", "Yalova", "Sakarya", "Bilecik"],
  "Ege": ["İzmir", "Aydın", "Muğla", "Denizli", "Manisa", "Afyonkarahisar", "Kütahya", "Uşak"],
  "Akdeniz": ["Antalya", "Mersin", "Adana", "Hatay", "Isparta", "Burdur", "Osmaniye", "Kahramanmaraş"],
  "İç Anadolu": ["Ankara", "Konya", "Kayseri", "Sivas", "Eskişehir", "Yozgat", "Kırşehir", "Nevşehir", "Aksaray", "Niğde", "Kırıkkale", "Karaman"],
  "Karadeniz": ["Trabzon", "Samsun", "Ordu", "Giresun", "Rize", "Artvin", "Zonguldak", "Kastamonu", "Sinop", "Amasya", "Tokat", "Çorum", "Bartın", "Karabük", "Bolu", "Düzce", "Gümüşhane", "Bayburt"],
  "Doğu Anadolu": ["Erzurum", "Van", "Malatya", "Elazığ", "Erzincan", "Bingöl", "Bitlis", "Muş", "Hakkari", "Tunceli", "Ağrı", "Kars", "Ardahan", "Iğdır"],
  "Güneydoğu Anadolu": ["Şanlıurfa", "Gaziantep", "Mardin", "Diyarbakır", "Batman", "Siirt", "Şırnak", "Kilis", "Adıyaman"],
};

function pshRenk(psh) {
  if (psh >= 5.5) return "text-green-400";
  if (psh >= 5.0) return "text-lime-400";
  if (psh >= 4.5) return "text-yellow-400";
  if (psh >= 4.0) return "text-orange-400";
  return "text-red-400";
}

export default function Iller() {
  return (
    <div className="min-h-screen pt-36 pb-16 px-4">
      <Helmet>
        <title>81 İl Güneş Enerjisi Potansiyeli — Solarlat</title>
        <meta name="description" content="Türkiye'nin 81 ili için günlük güneşlenme süresi (PSH) ve güneş enerjisi potansiyeli. İlinizi seçin, sisteminizi hesaplayın." />
        <link rel="canonical" href="https://www.solarlat.com/iller" />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="inline-flex items-center gap-2 border border-orange-500/25 bg-orange-500/10 px-3 py-1.5 rounded-full mb-4">
            <Sun className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300 font-medium">81 İl</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            İllere Göre Güneş Enerjisi
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Türkiye'nin 81 ili için güneşlenme süresi (PSH), örnek hesaplama ve kurulum rehberi.
          </p>
        </motion.div>

        <div className="space-y-10">
          {Object.entries(bolgeler).map(([bolge, iller], bi) => (
            <motion.div
              key={bolge}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: bi * 0.07 }}
            >
              <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
                {bolge}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {iller
                  .filter((il) => pshData[il] !== undefined)
                  .map((il) => (
                    <Link
                      key={il}
                      to={`/il/${slugify(il)}`}
                      className="flex items-center justify-between gap-2 bg-slate-800/60 border border-slate-600/60 rounded-xl px-4 py-3 hover:border-orange-500/40 hover:bg-slate-800/80 transition-all group"
                    >
                      <span className="text-base text-slate-200 group-hover:text-white transition-colors font-medium">
                        {il}
                      </span>
                      <span className={`text-sm font-bold shrink-0 ${pshRenk(pshData[il])}`}>
                        {pshData[il]}h
                      </span>
                    </Link>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400 bg-slate-800/40 border border-slate-700/40 rounded-xl px-4 py-3"
        >
          <span>PSH renk skalası:</span>
          {[
            { renk: "text-green-400", label: "≥5.5 — Mükemmel" },
            { renk: "text-lime-400", label: "5.0–5.4 — Çok iyi" },
            { renk: "text-yellow-400", label: "4.5–4.9 — İyi" },
            { renk: "text-orange-400", label: "4.0–4.4 — Orta" },
            { renk: "text-red-400", label: "<4.0 — Düşük" },
          ].map(({ renk, label }) => (
            <span key={label} className={`${renk}`}>{label}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
