import { Zap, Sun, Battery, DollarSign, TrendingUp, Clock, Info } from "lucide-react";

function MetrikKutu({ icon: Icon, label, deger, birim, renk = "orange" }) {
  const renkler = {
    orange: "bg-orange-50 text-orange-600 border-orange-100",
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-green-50 text-green-600 border-green-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
  };
  return (
    <div className={`rounded-xl border p-4 flex items-center gap-4 ${renkler[renk]}`}>
      <div className="p-2 rounded-lg bg-white/70">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs font-medium opacity-70">{label}</p>
        <p className="text-xl font-bold">
          {deger} <span className="text-sm font-normal">{birim}</span>
        </p>
      </div>
    </div>
  );
}

const yorumRenk = {
  uyari: "bg-yellow-50 border-yellow-300 text-yellow-800",
  oneri: "bg-blue-50 border-blue-300 text-blue-800",
  olumlu: "bg-green-50 border-green-300 text-green-800",
  bilgi: "bg-gray-50 border-gray-300 text-gray-700",
  firsat: "bg-purple-50 border-purple-300 text-purple-800",
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
    <div className="space-y-6">
      {/* Sistem Özeti */}
      <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white shadow-lg">
        <p className="text-sm font-medium opacity-80 mb-1">{sehir} — {
          sistemTipi === "on-grid" ? "Şebekeye Bağlı" :
          sistemTipi === "hibrit" ? "Karma Sistem" : "Tamamen Bağımsız"
        }</p>
        <p className="text-4xl font-bold mb-1">{sistemGucu} kW</p>
        <p className="text-sm opacity-80">Önerilen Sistem Gücü</p>
      </div>

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

      {/* Maliyet Detayı */}
      <div className="bg-gray-50 rounded-xl p-4 space-y-2">
        <p className="font-semibold text-gray-700 mb-3">Maliyet Dökümü</p>
        {[
          { label: "Panel", deger: maliyet.panel },
          { label: "İnverter", deger: maliyet.inverter },
          ...(maliyet.batarya ? [{ label: "Batarya", deger: maliyet.batarya }] : []),
          { label: "Kurulum & İşçilik", deger: maliyet.kurulum },
        ].map(({ label, deger }) => (
          <div key={label} className="flex justify-between text-sm">
            <span className="text-gray-500">{label}</span>
            <span className="font-medium text-gray-700">{deger.toLocaleString("tr-TR")} ₺</span>
          </div>
        ))}
        <div className="border-t pt-2 flex justify-between font-bold text-gray-800">
          <span>Toplam</span>
          <span>{maliyet.toplam.toLocaleString("tr-TR")} ₺</span>
        </div>
        <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
          <Info className="w-3 h-3" />
          Fiyatlar yaklaşık değerdir; pazar koşullarına göre ±%15 değişebilir.
        </p>
      </div>

      {/* Akıllı Yorumlar */}
      {yorumlar.length > 0 && (
        <div className="space-y-2">
          <p className="font-semibold text-gray-700">Akıllı Yorumlar</p>
          {yorumlar.map((y, i) => (
            <div
              key={i}
              className={`border rounded-xl p-3 text-sm flex gap-2 ${yorumRenk[y.tip]}`}
            >
              <span className="shrink-0">{yorumEmoji[y.tip]}</span>
              <span>{y.mesaj}</span>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white text-center">
        <p className="text-lg font-bold mb-2">Bu sonucu bir uzmanla değerlendirmek ister misiniz?</p>
        <p className="text-sm text-gray-400 mb-4">Ücretsiz 30 dakikalık danışmanlık seansı için iletişime geçin.</p>
        <a
          href="/iletisim"
          className="inline-block px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors"
        >
          Uzmanla Görüş →
        </a>
      </div>
    </div>
  );
}
