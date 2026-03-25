const blogYazilari = [
  {
    slug: "on-grid-mi-hibrit-mi",
    baslik: "On-grid mi, hibrit mi? İkisi arasındaki farkı net anlayın",
    ozet:
      "Güneş enerjisi sistemine geçmeye karar verdiniz ama hangi sistemi seçeceğinizi bilemiyorsunuz. On-grid ve hibrit arasındaki fark nedir, hangisi size uygun?",
    tarih: "20 Mart 2026",
    okumaSuresi: "5 dk",
    etiketler: ["sistem tipi", "on-grid", "hibrit"],
    bolumler: [
      {
        tip: "paragraf",
        icerik:
          "Türkiye'de güneş enerjisine geçmek isteyen kullanıcıların karşılaştığı en büyük soru şu: on-grid mi, hibrit mi? Her iki sistem de panellerden üretilen enerjiyi kullanır; ama arasındaki fark hem teknik hem de mali açıdan önemlidir.",
      },
      {
        tip: "h2",
        icerik: "On-grid sistem nedir?",
      },
      {
        tip: "paragraf",
        icerik:
          "Şebekeye bağlı (on-grid) sistem, ürettiğiniz enerjiyi önce evinizde kullanır; fazlasını elektrik dağıtım şirketine aktarır. Güneş olmayan gece saatlerinde veya bulutlu günlerde şebekeden beslenmeye devam edersiniz. Batarya içermez; bu yüzden kurulum maliyeti en düşük seçenektir. Türkiye'deki konut kurulumlarının büyük çoğunluğu bu tiptedir.",
      },
      {
        tip: "h2",
        icerik: "Hibrit sistem nedir?",
      },
      {
        tip: "paragraf",
        icerik:
          "Karma sistem (hibrit), şebekeye bağlı kalırken aynı zamanda bir batarya bankası içerir. Günün en pahalı saatlerinde (pik tarife) bataryadan beslenir, gece yarı kesinti olduğunda da çalışmaya devam eder. Esneklik sağlar ama batarya maliyeti toplam kurulum bedelini belirgin biçimde artırır.",
      },
      {
        tip: "h2",
        icerik: "Hangisini seçmelisiniz?",
      },
      {
        tip: "liste",
        maddeler: [
          "Elektrik kesintisi bölgenizde nadir yaşanıyorsa ve sadece faturanızı düşürmek istiyorsanız → on-grid yeterli.",
          "Sık kesinti yaşıyorsanız, gece güneş enerjisinden yararlanmak istiyorsanız veya işletme sahibiyseniz → hibrit daha mantıklı.",
          "Şebeke bağlantısı olmayan bir arazi/tarla söz konusuysa → off-grid (tam bağımsız) sistem gündeme gelir.",
          "Bütçe kısıtlıysa on-grid ile başlayıp ilerleyen yıllarda batarya eklenebilir (hibrit-hazır inverter şartıyla).",
        ],
      },
      {
        tip: "not",
        icerik:
          "Önemli: Batarya fiyatları her yıl düşüyor. 2024'te 10.000-15.000 ₺/kWh olan LiFePO4 bataryalar, önümüzdeki yıllarda daha erişilebilir hale gelebilir. Bu da hibrit sistemlerin geri ödeme süresini kısaltır.",
      },
      {
        tip: "h2",
        icerik: "Maliyet farkı ne kadar?",
      },
      {
        tip: "paragraf",
        icerik:
          "5 kW'lık örnek bir sistemde; on-grid kurulum yaklaşık 100.000–140.000 ₺'ye gelirken, aynı sisteme 5 kWh'lik LiFePO4 batarya eklendiğinde toplam maliyet 150.000–190.000 ₺'ye çıkar. Bataryanın geri ödeme süresine katkısını hesaplamak için sadece fatura tasarrufu değil, kesinti kayıpları ve pik tarife tasarrufu da dikkate alınmalıdır.",
      },
      {
        tip: "sonuc",
        icerik:
          "Hesaplayıcımızı kullanarak hem on-grid hem hibrit için ayrı hesaplama yapabilir, maliyet ve geri ödeme farklarını karşılaştırabilirsiniz.",
      },
    ],
  },
  {
    slug: "gunes-paneli-yasal-surec-2026",
    baslik: "Türkiye'de güneş paneli kurulum sürecinde yasal haklar (2026)",
    ozet:
      "Güneş paneli kurduktan sonra ne yapmanız gerekiyor? Net metering, 25 kW lisanssız üretim sınırı ve dağıtım şirketi başvurusunu adım adım anlattık.",
    tarih: "10 Mart 2026",
    okumaSuresi: "7 dk",
    etiketler: ["mevzuat", "net metering", "EPDK", "lisanssız üretim"],
    bolumler: [
      {
        tip: "paragraf",
        icerik:
          "Güneş paneli kurulumunun teknik kısmı tamamlandıktan sonra yasal sürecin de doğru yürütülmesi gerekir. Türkiye'de konut ve küçük işletmeler için uygulanabilecek iki temel yasal çerçeve vardır: lisanssız üretim ve net metering (santral bazlı mahsup).",
      },
      {
        tip: "h2",
        icerik: "25 kW lisanssız üretim sınırı",
      },
      {
        tip: "paragraf",
        icerik:
          "2024 düzenlemesiyle birlikte Türkiye'de bireysel konut ve küçük işletmeler 25 kW'a kadar lisans almadan güneş enerjisi sistemi kurabilir. Bu sınırın altındaki kurulumlar için EPDK lisansı gerekmez; sadece bağlı bulunduğunuz elektrik dağıtım şirketine (Gediz, Başkent, Toroslar, vb.) başvurmanız yeterlidir.",
      },
      {
        tip: "not",
        icerik:
          "25 kW, çoğu konut ve küçük işletme için oldukça yüksek bir sınırdır. Ortalama bir ev için 5-10 kW'lık sistem genellikle fazlasıyla yeterlidir.",
      },
      {
        tip: "h2",
        icerik: "Net metering (mahsup sistemi) nasıl çalışır?",
      },
      {
        tip: "paragraf",
        icerik:
          "On-grid sistemlerde fazla ürettiğiniz enerji şebekeye aktarılır ve bir sonraki faturanızdan düşülür. Bu sisteme 'santral bazlı mahsup' veya net metering denir. Yani güneşin bol olduğu öğle saatlerinde üretip faturaya yansıttığınız enerji, gece kullandığınız şebeke enerjisini mahsup eder.",
      },
      {
        tip: "liste",
        maddeler: [
          "Fazla üretim nakit olarak ödenmez; bir sonraki faturaya aktarılır.",
          "Yıl sonunda kalan fazla üretim, dağıtım şirketinin belirlediği birim fiyattan ödenir (bu fiyat tarife fiyatının altındadır).",
          "Mahsup işlemi için dağıtım şirketinizden 'çift yönlü sayaç' kurulması gerekir.",
        ],
      },
      {
        tip: "h2",
        icerik: "Başvuru süreci nasıl işler?",
      },
      {
        tip: "liste",
        maddeler: [
          "Kurulum firmansı teknik hesap raporunu hazırlar.",
          "Dağıtım şirketine bağlantı başvurusu yapılır (genellikle online portal üzerinden).",
          "Dağıtım şirketi sistem uygunluğunu inceler, onaylarsa çift yönlü sayaç takılır.",
          "Sistem devreye alınır ve mahsup işlemleri otomatik başlar.",
          "Süreç ortalama 4–12 hafta sürer; dağıtım şirketine göre değişir.",
        ],
      },
      {
        tip: "h2",
        icerik: "YEKDEM hakkında sık sorulan soru",
      },
      {
        tip: "paragraf",
        icerik:
          "YEKDEM (Yenilenebilir Enerji Kaynaklarını Destekleme Mekanizması) bireysel konut sahipleri için değil, daha büyük ticari yatırımcılar için tasarlanmış bir destekleme sistemidir. Konut ölçekli sistemlerde uygulanabilir değildir.",
      },
      {
        tip: "sonuc",
        icerik:
          "Detaylı bilgi için bölgenizdeki dağıtım şirketiyle iletişime geçmenizi veya EPDK'nın resmi mevzuat sayfasını incelemenizi öneririz.",
      },
    ],
  },
  {
    slug: "gunes-paneli-geri-odeme-suresi",
    baslik: "Güneş paneli geri ödeme süresi: gerçekçi beklentiler",
    ozet:
      "İnternette '3 yılda amorti' yazıları görüyorsunuz, firmalar 5-6 yıl söylüyor. Gerçek nedir? Türkiye ortalamaları ve dikkat edilmesi gereken faktörleri anlattık.",
    tarih: "28 Şubat 2026",
    okumaSuresi: "6 dk",
    etiketler: ["geri ödeme", "yatırım", "hesaplama", "maliyet"],
    bolumler: [
      {
        tip: "paragraf",
        icerik:
          "Güneş enerjisi yatırımının en çok sorulan sorusu şüphesiz 'ne zaman amorti eder?' sorusudur. Kısa yanıt: Türkiye'de on-grid bir sistemin geri ödeme süresi günümüz koşullarında ortalama 6–10 yıl arasındadır. Ama bu süreyi etkileyen çok sayıda faktör vardır.",
      },
      {
        tip: "h2",
        icerik: "Geri ödeme süresini belirleyen faktörler",
      },
      {
        tip: "liste",
        maddeler: [
          "Şehir ve güneşlenme süresi: Şanlıurfa'da 5.5 yıl olan geri ödeme İstanbul'da 8-9 yıla çıkabilir.",
          "Elektrik tüketiminiz: Yüksek tüketim → daha fazla tasarruf → daha kısa süre.",
          "Sistem tipi: On-grid en kısa; hibrit daha uzun (batarya maliyeti yüzünden).",
          "Sistem kalitesi: Ucuz panel ve inverter başlangıçta düşük maliyet sunar ama ömür ve verim kaybıyla geri ödeme uzayabilir.",
          "Elektrik fiyat artışı: Türkiye'de son yıllardaki elektrik fiyat artışları göz önüne alındığında gerçek geri ödeme süresi hesaplananın altına düşebilir.",
        ],
      },
      {
        tip: "h2",
        icerik: "Sık yapılan hata: panel ömrünü göz ardı etmek",
      },
      {
        tip: "paragraf",
        icerik:
          "Kaliteli güneş panellerinin ömrü 25–30 yıldır. Yıllık yaklaşık %0.5 oranında üretim kaybı (degradasyon) yaşanır. Bu, 25 yıl sonra panellerinizin hâlâ %87.5 verimle çalıştığı anlamına gelir — yatırımın uzun vadeli getirisini hesaplarken bu olumlu faktördür.",
      },
      {
        tip: "h2",
        icerik: "Gözden kaçan ek maliyetler",
      },
      {
        tip: "liste",
        maddeler: [
          "İnverter değişimi: İnverterlerin ömrü genellikle 10–15 yıldır. Bu maliyet geri ödeme hesabına dahil edilmeli.",
          "Batarya değişimi (hibrit/off-grid): LiFePO4 bataryalar 8–12 yılda kapasitesinin %80'ine düşer. Değişim maliyeti hesaba katılmalı.",
          "Bakım: Yıllık panel temizliği, kablo kontrolü. Bu maliyet düşüktür ama sıfır değildir.",
          "Sigorta: Bazı konut sigortaları güneş sistemini kapsamayabilir; ek poliçe gerekebilir.",
        ],
      },
      {
        tip: "h2",
        icerik: "Örnek hesaplama: Konya, 400 kWh/ay, on-grid",
      },
      {
        tip: "paragraf",
        icerik:
          "Hesaplayıcımızın güncel değerleriyle Konya'da aylık 400 kWh tüketen bir hane için 5.5 kW'lık on-grid sistem yaklaşık 125.000 ₺'ye gelir. Yıllık tasarruf ~31.000 ₺ olarak hesaplanır (5.2 ₺/kWh tarife karma ortalamasıyla). Bu, elektrik fiyat artışı olmaksızın ~4.0 yıllık geri ödeme anlamına gelir. Gerçekçi bir beklenti de bu düzeydedir.",
      },
      {
        tip: "not",
        icerik:
          "Elektrik tarifesi her yıl EPDK tarafından güncellenir. Gerçek tasarruf ve geri ödeme süreniz hesapladığınızdan farklı olabilir. Bu yüzden hesaplamalarımızda şeffaf bir ±%15 hata payı belirtiyoruz.",
      },
      {
        tip: "sonuc",
        icerik:
          "Kendi şehriniz ve tüketiminiz için kişiselleştirilmiş bir hesaplama yapmak için hesaplayıcımızı kullanabilirsiniz. Sonucu yorumlamak isterseniz danışmanlık hizmetimizden faydalanabilirsiniz.",
      },
    ],
  },
];

export default blogYazilari;
