export default function NasilCalisir() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Nasıl Çalışır?</h1>
        <p className="text-gray-500 mb-12">
          Hesaplama motorunun arkasındaki mühendislik mantığı — şeffaf ve kaynaklı.
        </p>

        <div className="space-y-10">
          {[
            {
              num: "1",
              baslik: "Günlük Tüketim",
              icerik: (
                <p className="text-gray-600 text-sm leading-relaxed">
                  Girdiğiniz aylık tüketim (kWh) 30'a bölünerek günlük ortalama tüketim hesaplanır.
                  <code className="block bg-gray-100 rounded-lg px-3 py-2 mt-2 font-mono text-xs">
                    Günlük tüketim = Aylık tüketim ÷ 30
                  </code>
                </p>
              ),
            },
            {
              num: "2",
              baslik: "PSH — Zirve Güneşlenme Süresi",
              icerik: (
                <p className="text-gray-600 text-sm leading-relaxed">
                  Her ilin yıllık ortalama günlük güneşlenme süresi (Peak Sun Hours) GEPA verileri baz alınarak
                  belirlenmiştir. Örneğin Şanlıurfa ≈ 5.8 saat/gün, İstanbul ≈ 3.8 saat/gün, Konya ≈ 5.0 saat/gün.
                  Bu değer, ilinize göre otomatik uygulanır.
                </p>
              ),
            },
            {
              num: "3",
              baslik: "Sistem Gücü",
              icerik: (
                <>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    Sistem verimliliği, kayıpları (sıcaklık, kablo, inverter) kapsar.
                  </p>
                  <code className="block bg-gray-100 rounded-lg px-3 py-2 font-mono text-xs">
                    Sistem gücü (kW) = Günlük tüketim ÷ (PSH × Sistem verimi)
                  </code>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      { tip: "Şebekeye Bağlı", verim: "%75" },
                      { tip: "Karma", verim: "%72" },
                      { tip: "Bağımsız", verim: "%68" },
                    ].map(({ tip, verim }) => (
                      <div key={tip} className="bg-orange-50 rounded-lg p-2 text-center text-xs">
                        <p className="font-semibold text-orange-700">{tip}</p>
                        <p className="text-gray-500">Verim: {verim}</p>
                      </div>
                    ))}
                  </div>
                </>
              ),
            },
            {
              num: "4",
              baslik: "Panel Sayısı",
              icerik: (
                <p className="text-gray-600 text-sm leading-relaxed">
                  Varsayılan olarak 400 W monokristalin panel kullanılır. Panel sayısı yukarı yuvarlanır.
                  <code className="block bg-gray-100 rounded-lg px-3 py-2 mt-2 font-mono text-xs">
                    Panel sayısı = ⌈Sistem gücü (W) ÷ 400 W⌉
                  </code>
                </p>
              ),
            },
            {
              num: "5",
              baslik: "Batarya Kapasitesi",
              icerik: (
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yalnızca karma ve bağımsız sistemlerde hesaplanır. LiFePO4 bataryalar için DoD %80,
                  AGM için %50 kullanılır. Varsayılan yedek süre 1 gündür.
                  <code className="block bg-gray-100 rounded-lg px-3 py-2 mt-2 font-mono text-xs">
                    Batarya (kWh) = Günlük tüketim × Yedek gün ÷ DoD
                  </code>
                </p>
              ),
            },
            {
              num: "6",
              baslik: "Maliyet & Geri Ödeme",
              icerik: (
                <p className="text-gray-600 text-sm leading-relaxed">
                  Panel, inverter, batarya ve kurulum maliyetleri toplanır. Yıllık tasarruf, sisteminizin
                  ürettiği enerji ile elektrik birim fiyatı çarpılarak bulunur. Fiyatlar piyasa koşullarına
                  göre güncellenebilir yapıdadır.
                  <code className="block bg-gray-100 rounded-lg px-3 py-2 mt-2 font-mono text-xs">
                    Geri ödeme (yıl) = Toplam maliyet ÷ Yıllık tasarruf
                  </code>
                </p>
              ),
            },
          ].map(({ num, baslik, icerik }) => (
            <div key={num} className="flex gap-5">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                {num}
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-gray-800 mb-3">{baslik}</h2>
                {icerik}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-orange-50 border border-orange-200 rounded-2xl p-6">
          <p className="text-sm text-orange-800 leading-relaxed">
            <strong>Şeffaflık Notu:</strong> Tüm hesaplamalar tarayıcınızda gerçekleşir, hiçbir veriniz sunucuya gönderilmez.
            PSH değerleri GEPA (Güneş Enerjisi Potansiyel Atlası) kaynaklıdır. Fiyatlar Mart 2025 piyasa değerlerine
            göre belirlenmiş olup ±%15 sapma gösterebilir.
          </p>
        </div>
      </div>
    </div>
  );
}
