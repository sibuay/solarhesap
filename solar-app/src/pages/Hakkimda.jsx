import { motion } from "framer-motion";
import { Shield, Award, Wrench } from "lucide-react";

export default function Hakkimda() {
  return (
    <div className="min-h-screen pt-36 pb-16 px-4">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Hakkımızda</h1>
          <p className="text-slate-300 leading-relaxed text-base mb-4">
            Güneş enerjisi sektöründe uzun yıllar boyunca bireysel konutlardan endüstriyel
            tesislere kadar pek çok farklı ölçekte proje gerçekleştirdik. Bu süreçte gördük
            ki insanların büyük çoğunluğu yanlış ya da eksik bilgiyle karar veriyor; bu da
            hem maddi hem zaman kaybına neden oluyor.
          </p>
          <p className="text-slate-300 leading-relaxed text-base">
            Solarlat'ı bu sorunu çözmek için kurduk. Amacımız, mühendislik bilgisini herkesin
            kolayca kullanabileceği, dürüst ve şeffaf bir araca dönüştürmek.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Shield, label: "TMMOB Üyesi", sub: "Elektrik Mühendisleri Odası" },
            { icon: Award, label: "500+ Proje", sub: "Farklı ölçek ve bölge" },
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
              <p className="text-sm text-slate-400 mt-1">{sub}</p>
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
          <p className="text-base text-slate-300 leading-relaxed">
            Platformdaki hesaplama motoru, saha deneyimimizi ve GEPA (Güneş Enerjisi Potansiyel Atlası)
            verilerini birleştiriyor. Kullandığımız verim katsayıları ve PSH değerleri gerçek proje
            verileriyle doğrulanmıştır. Sonuçlar ±%15 hata payıyla gerçek kurulum değerlerine yakınsıyor.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
