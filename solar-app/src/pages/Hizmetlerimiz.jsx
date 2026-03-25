import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";

const hizmetler = [
  {
    icon: Calculator,
    renk: "orange",
    baslik: "Ücretsiz Güneş Enerjisi Hesaplayıcı",
    etiket: "Ücretsiz",
    aciklama:
      "Aylık elektrik tüketiminizi, şehrinizi ve istediğiniz sistem tipini girerek ihtiyacınıza uygun panel sayısı, inverter kapasitesi, tahmini kurulum maliyeti ve geri ödeme süresini anında öğrenin.",
    maddeler: [
      "81 il için PSH verisiyle doğru boyutlandırma",
      "On-grid, hibrit ve off-grid sistem seçeneği",
      "Maliyet dökümü ve yıllık tasarruf hesabı",
      "Akıllı yorumlar — sisteminize özel uyarı ve öneriler",
    ],
    cta: { label: "Hesaplamaya Başla", to: "/hesaplayici" },
  },
  {
    icon: MessageCircle,
    renk: "blue",
    baslik: "Uzman Danışmanlık",
    etiket: "Ücretli",
    aciklama:
      "Hesaplayıcı çıktısının ötesinde, projenize özel değerlendirme yapıyoruz. Doğru ekipman seçiminden kurulum firması değerlendirmesine, mevzuat konularından şebeke bağlantı süreçlerine kadar her aşamada yanınızdayız.",
    maddeler: [
      "Projeye özel teknik fizibilite raporu",
      "Ekipman ve firma seçiminde tarafsız rehberlik",
      "EPDK başvurusu ve şebeke bağlantı süreç desteği",
      "Kurulum sonrası sistem verim kontrolü",
    ],
    cta: { label: "İletişime Geç", to: "/iletisim" },
  },
];

const renkler = {
  orange: {
    border: "border-orange-500/30",
    bg: "bg-orange-500/10",
    icon: "text-orange-400",
    iconBg: "bg-orange-500/15 border-orange-500/20",
    etiket: "border-orange-500/30 bg-orange-500/10 text-orange-300",
    check: "text-orange-400",
  },
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    icon: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-500/20",
    etiket: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    check: "text-blue-400",
  },
};

export default function Hizmetlerimiz() {
  return (
    <div className="min-h-screen pt-36 pb-16 px-4">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Hizmetlerimiz</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Güneş enerjisine geçiş sürecinizde ihtiyacınız olan her şey — ücretsiz hesaplamadan
            uzman danışmanlığa kadar.
          </p>
        </motion.div>

        <div className="space-y-6">
          {hizmetler.map(({ icon: Icon, renk, baslik, etiket, aciklama, maddeler, cta }, i) => {
            const r = renkler[renk];
            return (
              <motion.div
                key={baslik}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`rounded-2xl border ${r.border} ${r.bg} p-6 backdrop-blur-sm`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 border rounded-xl flex items-center justify-center shrink-0 ${r.iconBg}`}>
                    <Icon className={`w-5 h-5 ${r.icon}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h2 className="font-bold text-white">{baslik}</h2>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${r.etiket}`}>
                        {etiket}
                      </span>
                    </div>
                    <p className="text-base text-slate-300 leading-relaxed">{aciklama}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-5 ml-1">
                  {maddeler.map((madde) => (
                    <li key={madde} className="flex items-start gap-2 text-base text-slate-200">
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${r.check}`} />
                      {madde}
                    </li>
                  ))}
                </ul>

                <Link
                  to={cta.to}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 ${
                    renk === "orange"
                      ? "bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
                      : "bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:bg-blue-500/30"
                  }`}
                >
                  {cta.label} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
