import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const kavramlar = [
  {
    emoji: "⚡",
    baslik: "kWh nedir?",
    aciklama:
      "Kilowatt-saat (kWh), kullandığınız elektrik miktarının birimidir. Faturanızdaki rakam budur. 1000 W'lık bir fırını 1 saat çalıştırmak 1 kWh tüketir. Türkiye'de ortalama bir hane aylık 200–400 kWh tüketir.",
  },
  {
    emoji: "🔌",
    baslik: "Şebekeye Bağlı Sistem (On-Grid)",
    aciklama:
      "Panellerinizden üretilen enerji önce evinizde kullanılır, fazlası elektrik şebekesine aktarılır. Güneş olmadığında şebekeden beslenmeye devam edersiniz. Batarya gerektirmez, bu yüzden kurulum maliyeti en düşük seçenektir. Türkiye'de en çok tercih edilen sistem tipidir.",
  },
  {
    emoji: "🔋",
    baslik: "Tamamen Bağımsız Sistem (Off-Grid)",
    aciklama:
      "Elektrik şebekesine hiç bağlı olunmaz. Tüm enerji ihtiyacı paneller ve bataryalardan karşılanır. Şebeke olmayan ya da ulaşılması çok pahalı olan yerler için idealdir. Batarya maliyeti yüksek olduğundan toplam kurulum bedeli diğer seçeneklere göre daha fazladır.",
  },
  {
    emoji: "⚡🔋",
    baslik: "Karma Sistem (Hibrit)",
    aciklama:
      "Hem şebekeye bağlıdır hem de batarya içerir. Güneşli havalarda panellerden, bulutlu günlerde veya gece bataryadan, batarya bitince şebekeden yararlanırsınız. Elektrik kesintilerinde eviniz batarya sayesinde çalışmaya devam eder. En esnek ve konforlu seçenektir.",
  },
  {
    emoji: "🟦",
    baslik: "Güneş Paneli",
    aciklama:
      "Güneş ışığını elektriğe dönüştüren levhalardır. Gücü Watt (W) cinsinden ifade edilir. Hesaplayıcımız 400 W'lık monokristalin panel kullanır; bu, günümüzde konut projelerinde yaygın olan standart boyuttur.",
  },
  {
    emoji: "🔄",
    baslik: "İnverter",
    aciklama:
      "Paneller doğru akım (DC) üretir, evinizdeki cihazlar ise alternatif akım (AC) ile çalışır. İnverter bu dönüşümü sağlar. Aynı zamanda enerji üretimini izler ve sistemi yönetir. Kapasitesi kW cinsinden ifade edilir.",
  },
  {
    emoji: "🔆",
    baslik: "Güneşlenme Süresi (PSH)",
    aciklama:
      "Bir bölgede günlük ortalama kaç saat boyunca güneşin tam güçte çalıştığını gösterir. Şanlıurfa gibi güneyli illerde bu değer ~5.8 saat/gün iken İstanbul'da ~3.8 saat/gündür. Hesaplayıcımız seçtiğiniz ile göre bu değeri otomatik uygular.",
  },
  {
    emoji: "📅",
    baslik: "Geri Ödeme Süresi",
    aciklama:
      "Kurulum maliyetinin, sistemin yıllık sağladığı tasarrufla ne kadar sürede karşılandığını gösterir. Örneğin 150.000 ₺ kurulum maliyeti olan bir sistemin yıllık 25.000 ₺ tasarruf sağlaması durumunda geri ödeme süresi 6 yıldır. Panellerin ömrü genellikle 25–30 yıldır.",
  },
];

export default function NasilCalisir() {
  return (
    <div className="min-h-screen pt-36 pb-16 px-4">
      <div className="max-w-2xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Temel Kavramlar</h1>
          <p className="text-slate-400 leading-relaxed">
            Hesaplayıcıyı kullanmadan önce kafanızda soru işareti bırakan terimler varsa
            bu sayfadaki kısa açıklamalara göz atın.
          </p>
        </motion.div>

        <div className="space-y-4">
          {kavramlar.map(({ emoji, baslik, aciklama }, i) => (
            <motion.div
              key={baslik}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-4 bg-slate-800/60 border border-slate-600/60 rounded-2xl p-5 backdrop-blur-sm hover:border-orange-500/25 transition-all"
            >
              <div className="text-2xl shrink-0 mt-0.5">{emoji}</div>
              <div>
                <h2 className="font-bold text-white mb-1.5">{baslik}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{aciklama}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-400 mb-5 text-sm">Artık hazır mısınız?</p>
          <Link
            to="/hesaplayici"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full shadow-lg shadow-orange-500/25 hover:scale-105 transition-all duration-300"
          >
            Hesaplamaya Geç <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
