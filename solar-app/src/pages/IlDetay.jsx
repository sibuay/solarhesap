import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, ArrowLeft, ArrowRight, TrendingUp, Zap } from "lucide-react";
import { slugToSehir } from "../utils/slugify";
import pshData, { turkiyeOrtalamaPSH } from "../data/pshData";
import { hesapla } from "../utils/hesaplama";

const ORNEK_TUKETIM = 300;

// Bölgeye göre basit not
function sehirNotu(sehir, psh) {
  if (psh >= 5.5) return `${sehir}, Türkiye'nin güneş enerjisi açısından en avantajlı bölgelerinden birindedir. Yüksek PSH değeri kısa geri ödeme süreleri sağlar.`;
  if (psh >= 5.0) return `${sehir}, Türkiye ortalamasının belirgin biçimde üzerinde bir güneşlenme potansiyeline sahiptir. Güneş enerjisi yatırımı için uygun koşullar mevcuttur.`;
  if (psh >= 4.5) return `${sehir}, Türkiye ortalamasına yakın bir güneşlenme süresine sahiptir. On-grid sistem yatırımı ekonomik açıdan mantıklıdır.`;
  if (psh >= 4.0) return `${sehir}'de güneşlenme süresi Türkiye ortalamasının biraz altındadır. Sistem boyutlandırması bu göz önünde bulundurularak yapılmalıdır.`;
  return `${sehir}, Karadeniz ikliminin etkisiyle görece düşük bir güneşlenme süresine sahiptir. Bu, sisteminizin boyutunu doğrudan etkiler; doğru hesaplama önemlidir.`;
}

export default function IlDetay() {
  const { slug } = useParams();
  const sehir = slugToSehir(slug);

  useEffect(() => {
    if (!sehir) return;
    const psh = pshData[sehir];
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${sehir} Güneş Enerjisi Sistemi Hesaplama`,
      description: `${sehir} için güneş enerjisi sistemi hesaplama: PSH ${psh} saat/gün, panel sayısı, maliyet ve geri ödeme süresi.`,
      url: `https://www.solarlat.com/il/${slug}`,
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "il-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => document.getElementById("il-schema")?.remove();
  }, [sehir, slug]);

  if (!sehir) return <Navigate to="/" replace />;

  const psh = pshData[sehir];
  const fark = ((psh - turkiyeOrtalamaPSH) / turkiyeOrtalamaPSH) * 100;
  const ornek = hesapla({ aylikTuketim: ORNEK_TUKETIM, sehir, sistemTipi: "on-grid", anlikGucW: 0 });

  return (
    <div className="min-h-screen pt-36 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/iller"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-orange-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tüm iller
          </Link>

          {/* Hero */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 border border-orange-500/25 bg-orange-500/10 px-3 py-1.5 rounded-full mb-4">
              <Sun className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300 font-medium">Güneş Enerjisi Rehberi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              {sehir} Güneş Enerjisi Sistemi
            </h1>
            <p className="text-slate-400 leading-relaxed">
              {sehir} için güneş enerjisi sistemi kurulum maliyeti, panel sayısı ve geri ödeme süresine
              dair hesaplama ve bilgiler.
            </p>
          </div>

          {/* PSH Kartı */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-slate-800/60 border border-orange-500/30 rounded-2xl p-5">
              <p className="text-xs text-slate-400 mb-1">Günlük Güneşlenme (PSH)</p>
              <p className="text-3xl font-bold text-orange-400">{psh}</p>
              <p className="text-xs text-slate-500">saat/gün</p>
            </div>
            <div
              className={`rounded-2xl p-5 border ${
                fark >= 0
                  ? "bg-green-500/10 border-green-500/30"
                  : "bg-yellow-500/10 border-yellow-500/30"
              }`}
            >
              <p className="text-xs text-slate-400 mb-1">Türkiye Ortalamasına Göre</p>
              <p
                className={`text-3xl font-bold ${
                  fark >= 0 ? "text-green-400" : "text-yellow-400"
                }`}
              >
                {fark >= 0 ? "+" : ""}
                {fark.toFixed(0)}%
              </p>
              <p className="text-xs text-slate-500">ort. {turkiyeOrtalamaPSH} saat/gün</p>
            </div>
          </div>

          {/* Bölge notu */}
          <p className="text-slate-400 text-sm leading-relaxed mb-8 bg-slate-800/40 border border-slate-700/40 rounded-xl px-5 py-4">
            {sehirNotu(sehir, psh)}
          </p>

          {/* Örnek hesaplama */}
          <div className="bg-slate-800/60 border border-slate-600/60 rounded-2xl p-6 mb-6 backdrop-blur-sm">
            <h2 className="font-bold text-white mb-1">
              Örnek Hesaplama — {ORNEK_TUKETIM} kWh/ay, On-grid
            </h2>
            <p className="text-xs text-slate-500 mb-5">
              Ortalama bir konut tüketimi ve şebekeye bağlı sistem varsayılmıştır.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Sun, label: "Sistem Gücü", val: `${ornek.sistemGucu} kW` },
                { icon: Zap, label: "Panel Sayısı", val: `${ornek.panelSayisi} adet` },
                {
                  icon: TrendingUp,
                  label: "Yıllık Tasarruf",
                  val: `${ornek.yillikTasarruf.toLocaleString("tr-TR")} ₺`,
                },
                { icon: Sun, label: "Geri Ödeme", val: `~${ornek.geriOdemeSuresi} yıl` },
              ].map(({ icon: Icon, label, val }) => (
                <div
                  key={label}
                  className="bg-slate-700/50 border border-slate-600/40 rounded-xl p-4"
                >
                  <p className="text-xs text-slate-400 mb-1">{label}</p>
                  <p className="font-bold text-white">{val}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Tahmini kurulum maliyeti: {ornek.maliyet.toplam.toLocaleString("tr-TR")} ₺ (±%15)
            </p>
          </div>

          {/* CTA */}
          <div className="bg-slate-800/60 border border-slate-600/60 rounded-2xl p-6 text-center backdrop-blur-sm">
            <p className="text-white font-semibold mb-2">
              {sehir} için kişisel hesaplama yapın
            </p>
            <p className="text-slate-400 text-sm mb-5">
              Kendi tüketiminizi girerek gerçekçi sonuçları görün.
            </p>
            <Link
              to="/hesaplayici"
              state={{ sehir }}
              className="inline-flex items-center gap-2 px-7 py-3 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:scale-105 transition-all"
            >
              {sehir} için Hesapla <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
