import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";

const sorular = [
  {
    s: "Güneş paneli ne kadar süre kullanılabilir?",
    c: "Kaliteli üreticilerin monokristalin panelleri için üretici garantisi genellikle 25 yıldır. Bu süre boyunca panelin performansının başlangıç değerinin %80'inin üzerinde kalması garanti edilir. Yıllık degradasyon (verim kaybı) yaklaşık %0.5'tir, yani 25 yılın sonunda panel hâlâ ~%87 verimle çalışır. İnverterler ise genellikle 10–15 yıl dayanır ve sistemin yaşam döngüsünde bir kez değiştirilmesi gerekebilir.",
  },
  {
    s: "Panellerin bakımı zor mu, masraflı mı?",
    c: "Güneş panellerinin bakımı oldukça basittir. Yılda 1-2 kez panel yüzeylerinin temizlenmesi genellikle yeterlidir. Kablo bağlantıları ve inverter göstergelerini yılda bir kontrol ettirmek iyi bir alışkanlıktır. Yıllık bakım maliyeti birkaç bin lira düzeyinde kalır ve bu, sistemin toplam maliyetinin küçük bir parçasıdır.",
  },
  {
    s: "Bulutlu havalarda güneş paneli çalışır mı?",
    c: "Evet, çalışır — ama daha az verimle. Güneş panelleri, doğrudan güneş ışığına ihtiyaç duymaz; difüz (dağınık) ışıktan da elektrik üretir. Tamamen kapalı, yoğun bulutlu bir günde üretim %10–25 düzeyine düşebilir. Bu yüzden hesaplama motorumuz şehir bazlı yıllık ortalama PSH değerleri kullanır — bu değerler bulutlu günleri de ortalamaya dahil eder.",
  },
  {
    s: "Türkiye'de güneş paneli için devlet desteği var mı?",
    c: "Bireysel konut ölçeğinde doğrudan hibe veya sübvansiyon bulunmamaktadır. Ancak bazı belediyeler ve kalkınma ajansları belirli dönemlerde destek programları açmaktadır. Küçük işletmeler için KOSGEB ve bölgesel kalkınma ajansları (Mevlana, ÇEKAP, vb.) aracılığıyla yenilenebilir enerji destekleri dönemsel olarak sunulur. En güncel bilgi için ilgili kurum web sitelerini ve EPDK'yı takip etmenizi öneririz.",
  },
  {
    s: "Kiralık evde güneş paneli kurabilir miyim?",
    c: "Yasal olarak mümkündür, ancak kiraya verenin yazılı onayı gerekmektedir. Kiracı olarak sistemi kurduğunuzda, sözleşme bitiminde panelleri söküp götürme hakkınız vardır — ama söküm maliyeti size aittir. Kısa vadeli kiralamalarda bu yatırım genellikle ekonomik değildir; ancak uzun vadeli kiralama veya 'kira sözleşmesi güneş sistemi dahil' şeklinde düzenleme mümkündür.",
  },
  {
    s: "Apartmanda güneş paneli kurulabilir mi?",
    c: "Apartman çatısına panel kurmak mümkündür, ancak kat malikleri kurulunun (tüm kat maliklerinin) onayı gerekir. Üretilen enerji ortak giderlerde (asansör, aydınlatma, vb.) kullanılabilir ya da ayrı sayaçla bireysel dairelere dağıtılabilir. Bu konu teknik ve yasal açıdan detaylıdır; danışmanlık hizmetimizle daha ayrıntılı değerlendirme yapabiliriz.",
  },
  {
    s: "Ürettiğim fazla elektriği şebekeye satabilir miyim?",
    c: "Doğrudan 'satış' olmaz — mahsup sistemi uygulanır. Ürettiğiniz fazla enerji şebekeye aktarılır ve bir sonraki faturanızdan düşülür. Yıl sonu kalan fazla, dağıtım şirketinin belirlediği birim fiyat üzerinden hesaplanır (bu fiyat tüketim tarifesinden düşüktür). Bunun için kurulum sonrasında dağıtım şirketinizden çift yönlü sayaç kurulması gerekmektedir.",
  },
  {
    s: "25 kW sınırı ne anlama geliyor?",
    c: "Türkiye'de 25 kW'a kadar lisanssız güneş enerjisi sistemi kurulabilir (2024 düzenlemesiyle güncellendi). Bu, bağlı olduğunuz elektrik dağıtım şirketine başvurmanız yeterli olduğu anlamına gelir — EPDK'dan ayrıca lisans almanıza gerek yoktur. Ortalama bir konut için 5–10 kW yeterli olduğundan bu sınır pratikte büyük çoğunluğu kapsar.",
  },
  {
    s: "Sistem ne kadar sürede kurulur?",
    c: "Fiziksel kurulum genellikle 1–3 günde tamamlanır. Ancak kurulum öncesi dağıtım şirketine yapılan bağlantı başvurusunun onaylanması 4–12 hafta sürebilir; bu süre dağıtım şirketine ve bölgeye göre değişir. Çift yönlü sayacın takılmasıyla sistem tam anlamıyla devreye girer.",
  },
  {
    s: "Güneş paneli hangi yöne bakmalıdır?",
    c: "Türkiye'nin konumunda en verimli yön güneye bakan çatı yüzeyidir. Güneye bakan 30–35° eğimli bir yüzey, yıllık maksimum enerji üretimi sağlar. Doğu veya batıya bakan yüzeylerde üretim yaklaşık %15–20 azalır, kuzeye bakan yüzeyler ise güneş enerjisi sistemleri için uygun değildir. Hesaplayıcımız çatı yönünü henüz hesaba katmamaktadır; bu parametre uzman danışmanlık sürecinde değerlendirilebilir.",
  },
  {
    s: "Hesaplama sonuçları ne kadar doğru?",
    c: "Hesaplama motorumuz GEPA (Güneş Enerjisi Potansiyel Atlası) kaynaklı PSH verileri ve sektör standardı verim katsayıları kullanır. Sonuçlar gerçek kurulum değerlerine ±%15 hata payıyla yakınsar. Bu sapmanın başlıca nedenleri: çatı yönü ve eğiminin hesaba katılmaması, pazar fiyatlarındaki dalgalanmalar ve bireysel sistem konfigürasyonu farkları.",
  },
];

function SSSItem({ soru, cevap, acik, onToggle }) {
  return (
    <div className="border border-slate-600/60 rounded-2xl overflow-hidden bg-slate-800/60 backdrop-blur-sm hover:border-orange-500/25 transition-all">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-semibold text-white text-sm sm:text-base">{soru}</span>
        <motion.div
          animate={{ rotate: acik ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {acik && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <p className="px-5 pb-5 text-base text-slate-300 leading-relaxed border-t border-slate-700/40 pt-4">
              {cevap}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SSS() {
  const [acik, setAcik] = useState(null);

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: sorular.map(({ s, c }) => ({
        "@type": "Question",
        name: s,
        acceptedAnswer: { "@type": "Answer", text: c },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => document.getElementById("faq-schema")?.remove();
  }, []);

  return (
    <div className="min-h-screen pt-36 pb-16 px-4">
      <Helmet>
        <title>Sık Sorulan Sorular — Güneş Enerjisi SSS | Solarlat</title>
        <meta name="description" content="Güneş paneli ömrü, on-grid off-grid farkı, YEKDEM teşvikleri, kurulum süreci ve maliyeti hakkında en çok sorulan soruların yanıtları." />
        <link rel="canonical" href="https://www.solarlat.com/sss" />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Sık Sorulan Sorular</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Güneş enerjisi sistemleri hakkında en çok merak edilen sorular.
          </p>
        </motion.div>

        <div className="space-y-2">
          {sorular.map(({ s, c }, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <SSSItem
                soru={s}
                cevap={c}
                acik={acik === i}
                onToggle={() => setAcik(acik === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 bg-slate-800/60 border border-slate-600/60 rounded-2xl p-6 text-center backdrop-blur-sm"
        >
          <p className="text-white font-semibold mb-2">Sorunuz burada yok mu?</p>
          <p className="text-slate-300 text-base mb-5">
            Projenize özel soruları doğrudan bizimle paylaşın.
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:scale-105 transition-all"
          >
            Bize Sorun <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
