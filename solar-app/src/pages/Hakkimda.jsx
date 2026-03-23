import { motion } from "framer-motion";
import { Shield, Award, Wrench } from "lucide-react";

export default function Hakkimda() {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-5 mb-10"
        >
          <div className="w-20 h-20 bg-orange-500/15 border border-orange-500/25 rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-orange-500/10">
            👷
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Elektrik Mühendisi</h1>
            <p className="text-slate-400">Güneş Enerjisi Sistemleri Uzmanı</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-300 leading-relaxed mb-8 text-[15px]"
        >
          10 yılı aşkın süredir güneş enerjisi sistemleri tasarlıyor ve kuruyorum. Bireysel
          konutlardan endüstriyel tesislere kadar 500'den fazla projeye imza attım. Bu platformu,
          insanların doğru bilgiye kolay ulaşabilmesi için kurdum — çünkü güneş enerjisi kararları
          yanlış hesaplamalarla başlayınca hem para hem zaman kaybına dönüşüyor.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Shield, label: "TMMOB Üyesi", sub: "Elektrik Mühendisleri Odası" },
            { icon: Award, label: "500+ Proje", sub: "Tamamlanmış kurulum" },
            { icon: Wrench, label: "10+ Yıl", sub: "Sektör deneyimi" },
          ].map(({ icon: Icon, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="bg-slate-800/60 border border-slate-600/60 rounded-xl p-5 text-center hover:border-orange-500/30 transition-all backdrop-blur-sm"
            >
              <div className="w-10 h-10 bg-orange-500/15 border border-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-orange-400" />
              </div>
              <p className="font-bold text-white">{label}</p>
              <p className="text-xs text-slate-400 mt-1">{sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800/60 border border-slate-600/60 rounded-2xl p-6 backdrop-blur-sm"
        >
          <h2 className="font-bold text-white mb-3">Hesaplama Motoru Hakkında</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Bu platformdaki hesaplama motoru, yıllar içinde edindiğim saha deneyimini ve GEPA
            (Güneş Enerjisi Potansiyel Atlası) verilerini birleştiriyor. Kullandığım verim
            katsayıları ve PSH değerleri gerçek proje verilerle doğrulanmıştır. Sonuçlar ±%15
            hata payıyla gerçek kurulum değerlerine yakınsıyor.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
