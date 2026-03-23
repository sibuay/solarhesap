import { Link } from "react-router-dom";
import { Sun, Zap, TrendingUp, Shield } from "lucide-react";

const ozellikler = [
  {
    icon: Sun,
    baslik: "81 İl PSH Verisi",
    aciklama: "Türkiye'nin tüm illerinin güneşlenme verisiyle doğru boyutlandırma.",
  },
  {
    icon: Zap,
    baslik: "Anlık Hesaplama",
    aciklama: "Panel sayısı, inverter, batarya ve maliyet — saniyeler içinde.",
  },
  {
    icon: TrendingUp,
    baslik: "Geri Ödeme Analizi",
    aciklama: "Yıllık tasarruf ve yatırımın geri dönüş süresini net görün.",
  },
  {
    icon: Shield,
    baslik: "Mühendis Onaylı",
    aciklama: "TMMOB üyesi elektrik mühendisi tarafından doğrulanmış hesaplama motoru.",
  },
];

const referanslar = [
  { ad: "Ahmet Y.", konum: "Konya", metin: "10 kWlık sistemimi buradan hesapladım, tahmin ettiğimden %20 daha ucuz kuruldu!" },
  { ad: "Fatma K.", konum: "Antalya", metin: "Hibrit mi on-grid mi bilmiyordum, akıllı yorumlar sayesinde karar verdim." },
  { ad: "Mehmet A.", konum: "İstanbul", metin: "İşletmemiz için 50 kWlık hesabı Excel'den çok daha hızlı yaptım." },
];

export default function Anasayfa() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-amber-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sun className="w-4 h-4" />
            Türkiye'nin en kapsamlı güneş enerji sistemi hesaplayıcısı
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Kaç panel gerekir?<br />
            <span className="text-amber-200">Saniyeler içinde öğrenin.</span>
          </h1>
          <p className="text-lg text-orange-100 mb-10 max-w-2xl mx-auto">
            Aylık tüketiminizi, şehrinizi ve sistem tipini girin — panel sayısı, inverter kapasitesi,
            kurulum maliyeti ve geri ödeme süresini anında hesaplayın.
          </p>
          <Link
            to="/hesaplayici"
            className="inline-block px-8 py-4 bg-white text-orange-500 font-bold text-lg rounded-2xl hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Ücretsiz Hesapla →
          </Link>
          <p className="mt-4 text-sm text-orange-200">Kayıt gerekmez • Tamamen ücretsiz</p>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">
            Neden SolarHesap?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ozellikler.map(({ icon: Icon, baslik, aciklama }) => (
              <div key={baslik} className="text-center p-5">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{baslik}</h3>
                <p className="text-sm text-gray-500">{aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nasıl Çalışır — kısa */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3 Adımda Hesaplama</h2>
          <p className="text-gray-500 mb-12">Minimum girdi, maksimum doğru çıktı.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { num: "1", baslik: "Tüketiminizi Girin", text: "Aylık kWh değerinizi yazın ya da alet seçiciden hesaplayın." },
              { num: "2", baslik: "Şehir & Sistem Seçin", text: "81 il PSH verisi otomatik uygulanır. On-grid, hibrit veya off-grid seçin." },
              { num: "3", baslik: "Sonuçları Alın", text: "Panel sayısı, maliyet, tasarruf ve akıllı mühendis yorumları." },
            ].map(({ num, baslik, text }) => (
              <div key={num} className="relative">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {num}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{baslik}</h3>
                <p className="text-sm text-gray-500">{text}</p>
              </div>
            ))}
          </div>
          <Link
            to="/hesaplayici"
            className="mt-10 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
          >
            Hesaplamaya Başla
          </Link>
        </div>
      </section>

      {/* Referanslar */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Kullanıcılar Ne Diyor?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {referanslar.map(({ ad, konum, metin }) => (
              <div key={ad} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <p className="text-sm text-gray-600 mb-4 italic">"{metin}"</p>
                <p className="font-semibold text-gray-800">{ad}</p>
                <p className="text-xs text-gray-400">{konum}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Güneş enerjisine geçmeye hazır mısınız?</h2>
        <p className="text-gray-400 mb-8">Ücretsiz hesaplayıcıyla başlayın, uzmanımızla devam edin.</p>
        <Link
          to="/hesaplayici"
          className="inline-block px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-2xl hover:bg-orange-600 transition-colors"
        >
          Hesaplamaya Başla →
        </Link>
      </section>
    </div>
  );
}
