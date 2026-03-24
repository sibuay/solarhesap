import { motion } from "framer-motion";

const adimlar = [
  {
    num: "1",
    baslik: "Günlük Tüketim",
    icerik: (
      <p className="text-slate-400 text-sm leading-relaxed">
        Girdiğiniz aylık tüketim (kWh) 30'a bölünerek günlük ortalama tüketim hesaplanır.
        <code className="block bg-slate-800/80 border border-slate-600/60 rounded-lg px-3 py-2 mt-3 font-mono text-xs text-orange-300">
          Günlük tüketim = Aylık tüketim ÷ 30
        </code>
      </p>
    ),
  },
  {
    num: "2",
    baslik: "PSH — Zirve Güneşlenme Süresi",
    icerik: (
      <p className="text-slate-400 text-sm leading-relaxed">
        Her ilin yıllık ortalama günlük güneşlenme süresi (Peak Sun Hours) GEPA verileri baz
        alınarak belirlenmiştir. Örneğin Şanlıurfa ≈ 5.8 saat/gün, İstanbul ≈ 3.8 saat/gün,
        Konya ≈ 5.0 saat/gün. Bu değer, ilinize göre otomatik uygulanır.
      </p>
    ),
  },
  {
    num: "3",
    baslik: "Sistem Gücü",
    icerik: (
      <>
        <p className="text-slate-400 text-sm leading-relaxed mb-3">
          Sistem verimliliği, kayıpları (sıcaklık, kablo, inverter) kapsar.
        </p>
        <code className="block bg-slate-800/80 border border-slate-600/60 rounded-lg px-3 py-2 font-mono text-xs text-orange-300 mb-3">
          Sistem gücü (kW) = Günlük tüketim ÷ (PSH × Sistem verimi)
        </code>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {[
            { tip: "Şebekeye Bağlı", verim: "%75" },
            { tip: "Karma", verim: "%72" },
            { tip: "Bağımsız", verim: "%68" },
          ].map(({ tip, verim }) => (
            <div key={tip} className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-2.5 text-center text-xs">
              <p className="font-semibold text-orange-400">{tip}</p>
              <p className="text-slate-400 mt-0.5">Verim: {verim}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: "4",
    baslik: "Anlık Tepe Yükü & İnverter",
    icerik: (
      <p className="text-slate-400 text-sm leading-relaxed">
        İnverter hem panellerden üretilen gücü hem de evin anlık yükünü taşıyabilmelidir.
        İkisinden büyük olan değer esas alınır.
        <code className="block bg-slate-800/80 border border-slate-600/60 rounded-lg px-3 py-2 mt-3 font-mono text-xs text-orange-300">
          İnverter (kW) = max(Sistem gücü, Anlık tepe yükü)
        </code>
        <span className="block mt-3 text-xs text-slate-500">
          Örnek: 3 kW'lık panel sistemine sahip bir evde aynı anda fırın (2.2 kW) + çamaşır makinesi (2 kW) + klima (1.5 kW) = 5.7 kW anlık yük oluşursa inverter en az 5.7 kW seçilmelidir.
        </span>
      </p>
    ),
  },
  {
    num: "5",
    baslik: "Panel Sayısı",
    icerik: (
      <p className="text-slate-400 text-sm leading-relaxed">
        Varsayılan olarak 400 W monokristalin panel kullanılır. Panel sayısı yukarı yuvarlanır.
        <code className="block bg-slate-800/80 border border-slate-600/60 rounded-lg px-3 py-2 mt-3 font-mono text-xs text-orange-300">
          Panel sayısı = ⌈Sistem gücü (W) ÷ 400 W⌉
        </code>
      </p>
    ),
  },
  {
    num: "6",
    baslik: "Batarya Kapasitesi",
    icerik: (
      <p className="text-slate-400 text-sm leading-relaxed">
        Yalnızca karma ve bağımsız sistemlerde hesaplanır. LiFePO4 bataryalar için DoD %80,
        AGM için %50 kullanılır. Varsayılan yedek süre 1 gündür.
        <code className="block bg-slate-800/80 border border-slate-600/60 rounded-lg px-3 py-2 mt-3 font-mono text-xs text-orange-300">
          Batarya (kWh) = Günlük tüketim × Yedek gün ÷ DoD
        </code>
      </p>
    ),
  },
  {
    num: "7",
    baslik: "Maliyet & Geri Ödeme",
    icerik: (
      <p className="text-slate-400 text-sm leading-relaxed">
        Panel, inverter, batarya ve kurulum maliyetleri toplanır. Yıllık tasarruf, sisteminizin
        ürettiği enerji ile elektrik birim fiyatı çarpılarak bulunur.
        <code className="block bg-slate-800/80 border border-slate-600/60 rounded-lg px-3 py-2 mt-3 font-mono text-xs text-orange-300">
          Geri ödeme (yıl) = Toplam maliyet ÷ Yıllık tasarruf
        </code>
      </p>
    ),
  },
];

export default function NasilCalisir() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Nasıl Çalışır?</h1>
          <p className="text-slate-400">
            Hesaplama motorunun arkasındaki mühendislik mantığı — şeffaf ve kaynaklı.
          </p>
        </motion.div>

        <div className="space-y-6">
          {adimlar.map(({ num, baslik, icerik }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5 bg-slate-800/60 border border-slate-600/60 rounded-2xl p-5 backdrop-blur-sm"
            >
              <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-amber-500 text-white rounded-xl flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-lg shadow-orange-500/20">
                {num}
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-white mb-3">{baslik}</h2>
                {icerik}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-orange-500/10 border border-orange-500/25 rounded-2xl p-6"
        >
          <p className="text-sm text-orange-200 leading-relaxed">
            <strong className="text-orange-400">Şeffaflık Notu:</strong> Tüm hesaplamalar
            tarayıcınızda gerçekleşir, hiçbir veriniz sunucuya gönderilmez. PSH değerleri GEPA
            (Güneş Enerjisi Potansiyel Atlası) kaynaklıdır. Fiyatlar Mart 2026 piyasa değerlerine
            göre belirlenmiş olup ±%15 sapma gösterebilir.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
