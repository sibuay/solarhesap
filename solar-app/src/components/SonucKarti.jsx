import { motion } from "framer-motion";
import { Zap, Sun, Battery, TrendingUp, Clock, DollarSign, Info, ArrowRight } from "lucide-react";

function MetrikKutu({ icon: Icon, label, deger, birim, renk = "orange" }) {
  const renkler = {
    orange: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    green: "border-green-500/30 bg-green-500/10 text-green-400",
    purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
  };
  return (
    <div className={`rounded-xl border p-4 flex items-center gap-4 backdrop-blur-sm ${renkler[renk]}`}>
      <div className="p-2 rounded-lg bg-white/5">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs font-medium text-slate-400">{label}</p>
        <p className="text-xl font-bold text-white">
          {deger} <span className="text-sm font-normal text-slate-300">{birim}</span>
        </p>
      </div>
    </div>
  );
}

const yorumRenk = {
  uyari: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
  oneri: "bg-blue-500/10 border-blue-500/30 text-blue-300",
  olumlu: "bg-green-500/10 border-green-500/30 text-green-300",
  bilgi: "bg-slate-700/50 border-slate-600/50 text-slate-300",
  firsat: "bg-purple-500/10 border-purple-500/30 text-purple-300",
};

const yorumEmoji = {
  uyari: "⚠️",
  oneri: "💡",
  olumlu: "✅",
  bilgi: "ℹ️",
  firsat: "💰",
};

export default function SonucKarti({ sonuc, yorumlar, sistemTipi, sehir }) {
  const { sistemGucu, panelSayisi, inverterKapasitesi, bataryaKapasitesi, maliyet, yillikTasarruf, geriOdemeSuresi } = sonuc;

  return (
    <div className="space-y-5">
      {/* Özet başlık */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-2xl overflow-hidden p-6 text-white"
        style={{ background: "linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)" }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)",
          }}
        />
        <div className="relative">
          <p className="text-sm font-medium opacity-80 mb-1">
            {sehir} —{" "}
            {sistemTipi === "on-grid" ? "Şebekeye Bağlı" :
              sistemTipi === "hibrit" ? "Karma Sistem" : "Tamamen Bağımsız"}
          </p>
          <p className="text-5xl font-bold mb-1">{sistemGucu} kW</p>
          <p className="text-sm opacity-75">Önerilen Sistem Gücü</p>
        </div>
      </motion.div>

      {/* Metrikler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <MetrikKutu icon={Sun} label="Panel Sayısı" deger={panelSayisi} birim="adet (400W)" renk="orange" />
        <MetrikKutu icon={Zap} label="İnverter Kapasitesi" deger={inverterKapasitesi} birim="kW" renk="blue" />
        {bataryaKapasitesi && (
          <MetrikKutu icon={Battery} label="Batarya Kapasitesi (LiFePO4)" deger={bataryaKapasitesi} birim="kWh" renk="purple" />
        )}
        <MetrikKutu icon={TrendingUp} label="Yıllık Tasarruf" deger={yillikTasarruf.toLocaleString("tr-TR")} birim="₺/yıl" renk="green" />
        <MetrikKutu icon={Clock} label="Geri Ödeme Süresi" deger={geriOdemeSuresi} birim="yıl" renk="blue" />
        <MetrikKutu icon={DollarSign} label="Tahmini Kurulum Maliyeti" deger={maliyet.toplam.toLocaleString("tr-TR")} birim="₺" renk="orange" />
      </div>

      {/* Maliyet dökümü */}
      <div className="bg-slate-800/60 rounded-xl border border-slate-600/60 p-5 backdrop-blur-sm">
        <p className="font-semibold text-white mb-4">Maliyet Dökümü</p>
        <div className="space-y-2.5">
          {[
            { label: "Panel", deger: maliyet.panel },
            { label: "İnverter", deger: maliyet.inverter },
            ...(maliyet.batarya ? [{ label: "Batarya", deger: maliyet.batarya }] : []),
            { label: "Kurulum & İşçilik", deger: maliyet.kurulum },
          ].map(({ label, deger }) => (
            <div key={label} className="flex justify-between text-sm">
              <span className="text-slate-300">{label}</span>
              <span className="font-medium text-white">{deger.toLocaleString("tr-TR")} ₺</span>
            </div>
          ))}
          <div className="border-t border-slate-600/60 pt-2.5 flex justify-between font-bold text-white">
            <span>Toplam</span>
            <span>{maliyet.toplam.toLocaleString("tr-TR")} ₺</span>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-3 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 shrink-0" />
          Fiyatlar yaklaşık değerdir; pazar koşullarına göre ±%15 değişebilir.
        </p>
      </div>

      {/* Akıllı yorumlar */}
      {yorumlar.length > 0 && (
        <div className="space-y-2">
          <p className="font-semibold text-white">Akıllı Yorumlar</p>
          {yorumlar.map((y, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`border rounded-xl p-3.5 text-sm flex gap-2.5 ${yorumRenk[y.tip]}`}
            >
              <span className="shrink-0">{yorumEmoji[y.tip]}</span>
              <span>{y.mesaj}</span>
            </motion.div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="bg-slate-800/60 rounded-2xl border border-slate-600/60 p-6 text-center backdrop-blur-sm">
        <p className="text-lg font-bold text-white mb-2">Bu sonucu bir uzmanla değerlendirmek ister misiniz?</p>
        <p className="text-sm text-slate-400 mb-5">Projenize özel detaylı analiz ve danışmanlık için bize ulaşın.</p>
        <a
          href="/iletisim"
          className="inline-flex items-center gap-2 px-7 py-3 bg-linear-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
        >
          Uzmanla Görüş <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
