import { Shield, Award, Wrench } from "lucide-react";

export default function Hakkimda() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center text-4xl">
            👷
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Elektrik Mühendisi</h1>
            <p className="text-gray-500">Güneş Enerjisi Sistemleri Uzmanı</p>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-8">
          10 yılı aşkın süredir güneş enerjisi sistemleri tasarlıyor ve kuruyorum. Bireysel
          konutlardan endüstriyel tesislere kadar 500'den fazla projeye imza attım. Bu platformu,
          insanların doğru bilgiye kolay ulaşabilmesi için kurdum — çünkü güneş enerjisi kararları
          yanlış hesaplamalarla başlayınca hem para hem zaman kaybına dönüşüyor.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: Shield, label: "TMMOB Üyesi", sub: "Elektrik Mühendisleri Odası" },
            { icon: Award, label: "500+ Proje", sub: "Tamamlanmış kurulum" },
            { icon: Wrench, label: "10+ Yıl", sub: "Sektör deneyimi" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="bg-orange-50 rounded-xl p-4 text-center">
              <Icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="font-bold text-gray-800">{label}</p>
              <p className="text-xs text-gray-500">{sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="font-bold text-gray-800 mb-4">Hesaplama Motoru Hakkında</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Bu platformdaki hesaplama motoru, yıllar içinde edindiğim saha deneyimini ve
            GEPA (Güneş Enerjisi Potansiyel Atlası) verilerini birleştiriyor. Kullandığım
            verim katsayıları ve PSH değerleri gerçek proje verilerle doğrulanmıştır.
            Sonuçlar ±%15 hata payıyla gerçek kurulum değerlerine yakınsıyor.
          </p>
        </div>
      </div>
    </div>
  );
}
