const blogYazilari = [
  {
    slug: "gunes-enerjisi-taktirmali-miyim",
    baslik: "Güneş enerjisi taktırmalı mıyım? Karar vermeden önce dürüst yanıtlar",
    ozet:
      "Paramın karşılığını alır mıyım? Kurulum zor olur mu? Sorun çıkar mı? Komşum kurdu, ben de kurmak zorunda mıyım? Güneş enerjisi düşünen herkesin aklındaki sorulara dürüst yanıtlar.",
    tarih: "25 Mart 2026",
    okumaSuresi: "7 dk",
    etiketler: ["karar", "başlangıç", "sık sorulan sorular", "yatırım"],
    bolumler: [
      {
        tip: "paragraf",
        icerik:
          "Güneş enerjisi son yıllarda Türkiye'de çok konuşulan bir konu. Komşunuz kurdu, sosyal medyada reklamları görüyorsunuz, elektrik faturanız kabarıyor. 'Ben de kurmalı mıyım?' sorusu aklınızın bir köşesinde duruyor ama kafanız da karışık. Bu yazıda satış konuşması yapmadan, sık sorulan soruları gerçekçi biçimde yanıtlamaya çalışacağız.",
      },
      {
        tip: "h2",
        icerik: "\"Paramın karşılığını gerçekten alır mıyım?\"",
      },
      {
        tip: "paragraf",
        icerik:
          "Doğru koşullarda evet — ama 'doğru koşullar' önemli. Türkiye'de güneşlenme süresi yüksek, elektrik fiyatları son yıllarda ciddi oranda arttı. Bu iki faktör birleşince güneş enerjisi yatırımı on-grid sistemlerde genellikle 4–9 yıl içinde kendini geri ödeyen bir yatırıma dönüşüyor. Sonraki 15–20 yıl ise neredeyse sıfır maliyetle enerji üretmeye devam ediyor.",
      },
      {
        tip: "liste",
        maddeler: [
          "Aylık faturanız 1.500 ₺'nin üzerindeyse güneş enerjisi çok daha çabuk amorti eder.",
          "Güneşlenme süresi yüksek şehirlerde (Güneydoğu, Ege, Akdeniz) geri ödeme süresi kısalır.",
          "Sistemi satın alıp kurmak yerine kiralama veya taksit seçenekleri de varsa nakit çıkışı olmadan başlanabilir.",
          "Karşılık alamamanın temel riski: aşırı pahalı veya düşük kaliteli ürün seçmek.",
        ],
      },
      {
        tip: "h2",
        icerik: "\"Kurulum zor mu? Çok uğraştırır mı?\"",
      },
      {
        tip: "paragraf",
        icerik:
          "Kurulum süreci büyük ölçüde firma tarafından yürütülür. Sizden beklenen: birkaç form doldurmak, elektrik dağıtım şirketine başvuruyu onaylamak ve kurulum günü evde olmak. Çatıya çıkma, kablo çekme, sayaç değişimi — bunların tamamı yetkili kurulum ekibi tarafından yapılır. Süreç başlangıçtan devreye almaya kadar genellikle 2–6 hafta alır.",
      },
      {
        tip: "not",
        icerik:
          "Dikkat edilmesi gereken nokta: dağıtım şirketi başvuru onayı bazen 4–12 haftaya uzayabiliyor. Bu süre firmadan değil bürokrasiden kaynaklanıyor. Sabırlı olmak gerekiyor.",
      },
      {
        tip: "h2",
        icerik: "\"Kurulduktan sonra sorun çıkar mı? Sürekli bakım gerektirir mi?\"",
      },
      {
        tip: "paragraf",
        icerik:
          "Güneş sistemleri hareketli parçası olmayan, sessiz ve düşük bakım gerektiren sistemlerdir. Kaliteli bir kurulumda ilk 10 yılda ciddi bir arıza nadir yaşanır. Yapmanız gereken tek şey yılda birkaç kez panel temizliği ve yılda bir teknik kontrol. Üretim verilerinizi takip etmek için çoğu inverter üreticisinin ücretsiz mobil uygulaması var.",
      },
      {
        tip: "liste",
        maddeler: [
          "Paneller: 25–30 yıl ömür, yıllık %0.5 verim kaybı — pratikte çok az bozulur.",
          "İnverter: 10–15 yıl ömür; en sık değişen bileşen budur.",
          "Bakım maliyeti: Yılda 500–1.500 ₺ (temizlik + kontrol) düzeyinde, oldukça düşük.",
          "Garanti: Kaliteli panellerde 25 yıl üretim garantisi standart hale geldi.",
        ],
      },
      {
        tip: "h2",
        icerik: "\"Çatım uygun mu? Nasıl anlarım?\"",
      },
      {
        tip: "paragraf",
        icerik:
          "Birkaç temel kriter vardır. Çatınız güneye veya güneydoğuya/güneybatıya bakıyorsa idealdir; doğu-batı bakan çatılar da çalışır ama verim %10–20 daha düşük olur. Çatı üzerinde büyük gölge yaratan engeller (baca, çıkıntı, bitişik bina) varsa dikkatli analiz yapılması gerekir. Çatı yaşı ve taşıma kapasitesi de değerlendirilmeli — 10 yaşından eski kiremit çatılarda önce yapı kontrolü önerilir.",
      },
      {
        tip: "liste",
        maddeler: [
          "Güneye bakan çatı + gölgesiz → ideal koşul.",
          "Doğu veya batı bakışlı çatı → kullanılabilir ama verim daha düşük; hesaplamayı buna göre yapın.",
          "Kuzeye bakan çatı → önerilemez.",
          "Düz teras → eğim ayarlı montajla her yönde kurulum mümkün.",
          "Komşu bina veya ağaç gölgesi varsa → kurulum öncesi gölge analizi yaptırın.",
        ],
      },
      {
        tip: "h2",
        icerik: "\"Hangi sistemi almalıyım? On-grid mi, hibrit mi?\"",
      },
      {
        tip: "paragraf",
        icerik:
          "Bölgenizde elektrik kesintisi nadir yaşanıyor ve sadece faturanızı düşürmek istiyorsanız on-grid (şebeke bağlantılı, bataryasız) sistem yeterlidir. Hem daha ucuz hem de geri ödeme süresi daha kısadır. Sık kesinti yaşıyorsanız veya gündüz evde olmadığınız için ürettiğiniz enerjiyi biriktirip akşam kullanmak istiyorsanız hibrit (bataryalı) sistemi değerlendirin.",
      },
      {
        tip: "h2",
        icerik: "\"Kiracıysam ne yapabilirim?\"",
      },
      {
        tip: "paragraf",
        icerik:
          "Kiracı olarak çatıya güneş paneli kurmak hukuki açıdan karmaşıktır; mal sahibinin onayı ve binada kat mülkiyeti varsa tüm kat maliklerinin izni gerekebilir. Ancak bazı alternatifler var: balkon tipi küçük sistemler, taşınabilir panel setleri veya topluluk güneş projelerine katılım bu boşluğu kısmen dolduruyor. Şimdilik en pratik yol ev sahibiyle anlaşmak ve elektrik tasarrufunu kira indirimiyle dengelemek.",
      },
      {
        tip: "h2",
        icerik: "\"Komşum kurdu, ben de kurmak zorunda mıyım?\"",
      },
      {
        tip: "paragraf",
        icerik:
          "Hayır. Güneş enerjisi herkes için doğru seçenek değil. Aylık faturanız düşükse (örneğin 500 ₺ altındaysa), çatınız kuzey bakışlıysa veya yakında taşınma planınız varsa acele etmenize gerek yok. Karar verirken başkalarının deneyimine değil, kendi tüketim profilinize, çatı koşullarınıza ve bütçenize bakın.",
      },
      {
        tip: "sonuc",
        icerik:
          "Güneş enerjisi doğru koşullarda güçlü bir yatırım. Ama 'doğru koşullar' kişiye göre değişir. Hesaplayıcımızla kendi eviniz için gerçekçi bir tahmin yapabilir, sonra karar verebilirsiniz — baskı yok.",
      },
    ],
  },
  {
    slug: "gunes-paneli-bakimi-rehberi",
    baslik: "Güneş paneli bakımı: Ne sıklıkla, nasıl yapılmalı?",
    ozet:
      "Güneş panelleri az bakım ister ama sıfır bakım istemez. Türkiye iklimine özgü temizlik sıklığı, nelere dikkat edilmesi gerektiği ve kaçınılması gereken hatalar.",
    tarih: "22 Mart 2026",
    okumaSuresi: "5 dk",
    etiketler: ["bakım", "temizlik", "verim", "uzun ömür"],
    bolumler: [
      {
        tip: "paragraf",
        icerik:
          "Güneş panelleri, teknik anlamda az bakım gerektiren sistemlerdir. Hareketli parça yok, yağlama yok, filtre değişimi yok. Ama bu 'hiç bakım gerekmez' anlamına gelmiyor. Özellikle Türkiye'nin toz yüklü, tarımsal veya kalabalık şehir ortamlarında yılda birkaç temizlik ve kontrol ihmal edilmemeli.",
      },
      {
        tip: "h2",
        icerik: "Kirlilik üretimi nasıl etkiler?",
      },
      {
        tip: "paragraf",
        icerik:
          "Araştırmalar, temizlenmemiş panellerin veriminin toz, kuş pisliği ve yaprak birikimi nedeniyle %10–25 oranında düşebileceğini gösteriyor. 5 kW'lık bir sistemde %15 verim kaybı, yılda yaklaşık 1.000–1.500 kWh üretim farkı anlamına gelir — bu da ciddi bir mali kayıp.",
      },
      {
        tip: "h2",
        icerik: "Türkiye'ye özgü temizlik takvimi",
      },
      {
        tip: "liste",
        maddeler: [
          "İç Anadolu (Konya, Ankara, Kayseri): Toz ve kurak hava nedeniyle 3 ayda bir temizlik önerilir.",
          "Ege ve Akdeniz kıyıları (İzmir, Antalya): Tuz buharı ve çiçek tozu için yılda 2–3 temizlik yeterlidir.",
          "Marmara ve kuzeybatı: Yağış oranı yüksek olduğundan yılda 2 temizlik genellikle yeterlidir.",
          "Tarım alanı yakını: Sürüm dönemlerinde toz yoğunlaşır; mevsimlere göre ekstra temizlik gerekebilir.",
        ],
      },
      {
        tip: "h2",
        icerik: "Doğru temizlik nasıl yapılır?",
      },
      {
        tip: "liste",
        maddeler: [
          "Sabahın erken saatlerinde veya akşamüstü temizleyin; sıcak panel üzerine soğuk su dökmek termal şok yapabilir.",
          "Yumuşak kauçuk kenarlı fırça ve bol su kullanın; deterjan veya aşındırıcı madde kullanmayın.",
          "Yüksek basınçlı yıkama makinesi panel yüzeyini çizebilir — önerilmez.",
          "Kuş pisliği lokalize kirlilik yaratır ('hot spot'); fark ederseniz hemen temizleyin.",
          "Çatıya çıkarken güvenlik ekipmanı (emniyet kemeri, kaymaz ayakkabı) zorunludur.",
        ],
      },
      {
        tip: "not",
        icerik:
          "Yıllık izleme verilerinize bakın. Üretim düşüşü sadece kirlilikten kaynaklanmıyor olabilir; inverter arızası veya gölgeleme de etken olabilir. Mobil uygulama veya inverter ekranı üzerinden aylık üretimi takip edin.",
      },
      {
        tip: "h2",
        icerik: "Teknik kontrol listesi (yılda bir)",
      },
      {
        tip: "liste",
        maddeler: [
          "Panel bağlantı kabloları ve konektörler gevşemiş mi? Korozyon var mı?",
          "Çatı montaj rayları sağlam mı? Rüzgar veya don nedeniyle deformasyon oluşmuş mu?",
          "İnverter hata loglarında tekrarlayan alarm var mı?",
          "Akıllı izleme sistemi varsa yıllık baz üretim ile karşılaştırma yapılmalı.",
          "Yakın çevrede yeni gölge kaynağı (ağaç büyümesi, bina yapımı) oluştu mu?",
        ],
      },
      {
        tip: "sonuc",
        icerik:
          "Yılda iki temizlik ve bir teknik kontrol ile güneş sisteminiz 25 yıl boyunca yüksek verimde çalışabilir. Bakım maliyeti ihmal edilebilir düzeyde; ama ihmal edilirse kayıp ciddi olabilir.",
      },
    ],
  },
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
    slug: "bifasyal-gunes-panelleri-nedir",
    baslik: "Bifasyal güneş panelleri: Değer mi, değmez mi?",
    ozet:
      "Çift taraflı çalışan bifasyal paneller artık piyasada sıkça görülüyor. Standart monofasyal panele göre gerçekten daha fazla üretim sağlıyor mu? Maliyet-fayda analizi.",
    tarih: "18 Mart 2026",
    okumaSuresi: "6 dk",
    etiketler: ["bifasyal", "panel teknolojisi", "verim", "yeni nesil"],
    bolumler: [
      {
        tip: "paragraf",
        icerik:
          "Son yıllarda güneş paneli piyasasında en çok konuşulan gelişmelerden biri bifasyal (çift taraflı) panel teknolojisi. Adından da anlaşılacağı gibi bu paneller, sadece ön yüzden değil; arka yüzden de güneş ışığını elektriğe çeviriyor. Peki bu teknoloji Türkiye'deki konut ve işletme kurulumlarında gerçekten avantaj sağlıyor mu?",
      },
      {
        tip: "h2",
        icerik: "Bifasyal panel nasıl çalışır?",
      },
      {
        tip: "paragraf",
        icerik:
          "Standart (monofasyal) panellerin arka yüzü opak bir tabaka ile kapatılmıştır; sadece ön yüz enerji üretir. Bifasyal panellerde arka yüz şeffaf cam veya polimer malzemeyle kaplanmıştır. Arka yüz, zemin veya çatı yüzeyinden yansıyan ışığı (albedo ışığı) toplayarak ek enerji üretir. Tipik arka yüz kazanımı kurulum koşuluna göre %5–25 arasında değişir.",
      },
      {
        tip: "h2",
        icerik: "Ne kadar fazla üretim beklenir?",
      },
      {
        tip: "liste",
        maddeler: [
          "Beyaz çakıl veya açık renk beton zemin üzerine montaj: %15–25 ek kazanım mümkün.",
          "Standart kiremitli konut çatısı (koyu renk): %3–8 ek kazanım — sınırlı etki.",
          "Yüksek montaj (tarla tipi, topraktan 1 m+ yüksekte): En iyi sonuç; %10–20 kazanım.",
          "Çatı üzeri düşük boşluklu montaj: Arka yüz yeterince ışık göremeyeceğinden bifasyal avantajı azalır.",
        ],
      },
      {
        tip: "not",
        icerik:
          "Türkiye'deki konut çatılarının büyük çoğunluğunda panel ile çatı arasındaki boşluk 10–15 cm'dir. Bu koşullarda bifasyal arka yüz kazanımı oldukça sınırlı kalır — genellikle %3–7. Yüksek beklentilere girmemek gerekir.",
      },
      {
        tip: "h2",
        icerik: "Maliyet farkı ne kadar?",
      },
      {
        tip: "paragraf",
        icerik:
          "2026 yılı itibarıyla bifasyal paneller, eşdeğer güçteki monofasyal panellere göre genellikle %8–15 daha pahalıdır. Örneğin 5 kW'lık bir sistemde bu fark yaklaşık 8.000–15.000 ₺ anlamına gelir. Konut çatısında beklenen %5 ek üretim bu farkı geri kazanmak için 5–8 yıl daha süre gerektirebilir.",
      },
      {
        tip: "h2",
        icerik: "Bifasyal panel ne zaman mantıklı?",
      },
      {
        tip: "liste",
        maddeler: [
          "Tarla tipi (ground-mount) kurulumlar: Zemin yansıması maksimum, açık ve yüksek montaj mümkün.",
          "Açık renk çatı veya terasa montaj: Beyaz teraslarda anlamlı ek kazanım.",
          "Çift taraflı güneş alanları (agrivoltaik projeler): Hem üst hem de gölge tarafından ışık toplanır.",
          "Dikey montaj (çit veya cephe uygulamaları): Sabah-akşam güneşini ayrı ayrı toplar.",
        ],
      },
      {
        tip: "h2",
        icerik: "Monofasyal ne zaman yeterli?",
      },
      {
        tip: "paragraf",
        icerik:
          "Standart konut çatısına, düşük boşluklu montajla kurulum yapılacaksa monofasyal panel çoğu durumda daha iyi maliyet-verim dengesi sunar. Bifasyal primin getireceği ek üretim, ek maliyeti karşılamayabilir. Bu kararı doğru vermek için montaj detaylarını kurulum firmasıyla birlikte değerlendirin.",
      },
      {
        tip: "sonuc",
        icerik:
          "Bifasyal panel teknolojisi gelişmeye devam ediyor ve fiyatlar düşüyor. Şu an için tarla tipi ve yüksek montajlı sistemlerde açık avantaj sağlıyor; tipik konut çatısında ise fiyat farkı çoğunlukla kazanımı geçiyor.",
      },
    ],
  },
  {
    slug: "ev-batarya-sistemi-rehberi",
    baslik: "Ev batarya sistemleri: Hangi durumda değer, hangi durumda değmez?",
    ozet:
      "Batarya sistemi almak mı istiyorsunuz? LFP ve NMC arasındaki fark, kapasite nasıl seçilir, gerçekçi maliyet ve geri ödeme süreleri — tüm sorulara net yanıtlar.",
    tarih: "15 Mart 2026",
    okumaSuresi: "7 dk",
    etiketler: ["batarya", "enerji depolama", "LFP", "hibrit", "maliyet"],
    bolumler: [
      {
        tip: "paragraf",
        icerik:
          "Elektrik tarifelerindeki artışlar ve sık yaşanan kesintilerle birlikte ev batarya sistemlerine ilgi hızla arttı. Ama batarya eklemek her durumda karlı bir karar değil. Hangi koşullarda batarya mantıklı, kapasite nasıl seçilmeli ve hangi teknolojiyi tercih etmeli — bu yazıda gerçekçi bir çerçeve çizmeye çalışıyoruz.",
      },
      {
        tip: "h2",
        icerik: "LFP mi, NMC mi? İki ana batarya teknolojisi",
      },
      {
        tip: "liste",
        maddeler: [
          "LFP (Lityum Demir Fosfat): Daha düşük enerji yoğunluğu ama üstün güvenlik, uzun ömür (4.000–6.000 döngü), daha az ısınma. Konut sistemleri için standart tercih haline geldi.",
          "NMC (Lityum Nikel Mangan Kobalt): Daha yüksek enerji yoğunluğu, daha kompakt boyut. Ancak LFP'ye kıyasla daha kısa ömür (2.000–3.000 döngü) ve daha yüksek termal risk.",
          "Sonuç: Konut ve küçük işletme uygulamaları için LFP tercih edilmeli. NMC araçlarda ve alan kısıtlı özel projelerde öne çıkıyor.",
        ],
      },
      {
        tip: "h2",
        icerik: "Kapasite nasıl belirlenir?",
      },
      {
        tip: "paragraf",
        icerik:
          "İhtiyaç duyulan batarya kapasitesi iki ana parametreye bağlıdır: gece tüketiminiz ve kesinti süresince ayakta tutmak istediğiniz yük. Türkiye'de ortalama bir hanenin gece saati tüketimi 5–8 kWh arasındadır. Buna göre 5–10 kWh'lik bir batarya, kesintisiz güneş enerjisi kullanımı için çoğu haneye yeterlidir.",
      },
      {
        tip: "liste",
        maddeler: [
          "Sadece aydınlatma + beyaz eşya (buzdolabı, çamaşır makinesi): 5 kWh batarya gece ihtiyacını karşılar.",
          "Klima veya elektrikli ısıtma dahil: 10–15 kWh kapasiteye ihtiyaç duyulabilir.",
          "Gün içinde birden fazla kesinti beklentisi varsa verim kaybı hesabıyla %20 fazlası önerilir.",
          "Gerçek kullanım senaryonuzu görmek için en az 3 aylık fatura + tüketim profilini inceleyin.",
        ],
      },
      {
        tip: "h2",
        icerik: "2026 yılında batarya maliyeti ne kadar?",
      },
      {
        tip: "paragraf",
        icerik:
          "Türkiye'de 2026 itibarıyla kurulu LFP ev bataryaları için yaklaşık fiyatlar: 5 kWh sistem (inverter dahil) 60.000–90.000 ₺, 10 kWh sistem 110.000–160.000 ₺ arasında seyretmektedir. Bu fiyatlara kurulum işçiliği dahil değildir. Batarya fiyatları küresel ölçekte düşmeye devam ettiğinden 2027–2028 döneminde belirgin indirim beklenmektedir.",
      },
      {
        tip: "h2",
        icerik: "Batarya ne zaman mantıklı, ne zaman değmez?",
      },
      {
        tip: "liste",
        maddeler: [
          "MANTIKLI — Sık elektrik kesintisi (günde 1+ saat): Kesinti kaybı ve iş/yaşam kalitesi etkisi batarya maliyetini haklı kılabilir.",
          "MANTIKLI — Gündüz evde olmayan çalışan hane: Üretilen enerjiyi depolayıp akşam kullanmak net metering'e göre daha avantajlı olabilir (tarife yapısına bağlı).",
          "MANTIKLI — Pik tarife farkı yüksekse: Gece ucuz, gündüz pahalı tarife uygulanıyorsa batarya arbitrajı çalışır.",
          "DEĞMEZ — Sık kesinti yoksa ve net metering çalışıyorsa: Fazla üretimi şebekeye aktarmak ve mahsup etmek genellikle daha kısa geri ödeme sağlar.",
          "DEĞMEZ — Yalnızca fatura tasarrufu hedefliyorsanız: Türkiye'deki mevcut tarifede bataryanın tek başına geri ödeme süresi 10–15 yıla çıkabilir.",
        ],
      },
      {
        tip: "not",
        icerik:
          "LFP bataryaların kullanım ömrü 10–15 yıldır (kapasitesi %80'e düştüğünde değişim gerekebilir). Batarya değişim maliyetini geri ödeme hesabınıza mutlaka dahil edin.",
      },
      {
        tip: "h2",
        icerik: "Güneş paneli olmadan yalnızca batarya alınır mı?",
      },
      {
        tip: "paragraf",
        icerik:
          "Teorik olarak mümkündür: gece ucuz şebekeden şarj edip gündüz pik saatinde kullanmak. Ama Türkiye'deki mevcut tarife yapısında zaman dilimli fiyatlandırma oldukça sınırlıdır. Batarya, güneş paneli sistemiyle birlikte değerlendirildiğinde çok daha anlamlı bir yatırım haline gelir.",
      },
      {
        tip: "sonuc",
        icerik:
          "Batarya sistemi her hane için doğru seçim değil ama doğru koşullarda güçlü bir tamamlayıcı. Karar vermeden önce tüketim profilinizi ve bölgenizdeki kesinti sıklığını analiz edin. Hesaplayıcımızla hibrit sistem geri ödeme süresini on-grid ile karşılaştırabilirsiniz.",
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
  {
    slug: "sanliurfa-gunes-paneli-kurulumu",
    baslik: "Şanlıurfa'da Güneş Paneli Kurulumu — Türkiye'nin En Avantajlı Şehri",
    ozet:
      "Şanlıurfa, PSH 5.8 ile Türkiye'nin güneş enerjisi açısından en avantajlı şehidir. Panel sayısı, maliyet ve geri ödeme süresi için gerçekçi rakamlar.",
    tarih: "27 Mart 2026",
    okumaSuresi: "6 dk",
    etiketler: ["şanlıurfa", "kurulum", "güneydoğu", "maliyet", "geri ödeme"],
    bolumler: [
      {
        tip: "paragraf",
        icerik:
          "Şanlıurfa, yıllık ortalama günlük güneşlenme süresi (PSH) 5.8 saat ile Türkiye'nin güneş enerjisi yatırımı açısından en cazip şehidir. Bu değer Türkiye ortalamasının yaklaşık %20 üzerindedir ve doğrudan daha fazla enerji üretimi, daha kısa geri ödeme süresi anlamına gelir.",
      },
      {
        tip: "h2",
        icerik: "Şanlıurfa'da ne kadar enerji üretilir?",
      },
      {
        tip: "paragraf",
        icerik:
          "PSH 5.8 değeriyle Şanlıurfa'da 1 kW'lık güneş paneli yılda yaklaşık 1.900–2.000 kWh enerji üretir. Karşılaştırma için İstanbul'da aynı sistem 1.500–1.600 kWh üretir. Bu fark, Şanlıurfa'daki sistemlerin fatura tasarrufunu ciddi ölçüde artırır.",
      },
      {
        tip: "h2",
        icerik: "Örnek hesaplama: aylık 400 kWh tüketen bir hane",
      },
      {
        tip: "liste",
        maddeler: [
          "Gerekli sistem gücü: ~4 kW on-grid",
          "Panel sayısı: 10–11 adet (410–450 Wp panel)",
          "Tahmini kurulum maliyeti: 100.000–120.000 ₺",
          "Yıllık tasarruf: ~35.000–40.000 ₺",
          "Tahmini geri ödeme süresi: 3–4 yıl",
        ],
      },
      {
        tip: "not",
        icerik:
          "Hesaplamalar güncel elektrik tarifeleri ve ±%15 hata payı ile yapılmıştır. Kişiselleştirilmiş sonuç için hesaplayıcımızı kullanabilirsiniz.",
      },
      {
        tip: "h2",
        icerik: "Hangi sistem tipi uygun?",
      },
      {
        tip: "paragraf",
        icerik:
          "Şanlıurfa'da şebeke altyapısı genel olarak güçlüdür; büyük şehir merkezlerinde on-grid sistem yeterlidir. Kırsal veya sık kesinti yaşanan bölgelerde hibrit sistem değerlendirilebilir. Sulama amaçlı kullanım için off-grid veya pompa sistemleri ayrıca planlanmalıdır.",
      },
      {
        tip: "h2",
        icerik: "Dikkat edilmesi gereken noktalar",
      },
      {
        tip: "liste",
        maddeler: [
          "Toz ve kum: Güneydoğu'da hava koşulları nedeniyle panel temizliği daha sık yapılmalı (2–3 ayda bir).",
          "Sıcaklık katsayısı: Yaz aylarında aşırı sıcaklar panel verimini kısmen düşürebilir; bu PSH hesabında zaten kısmen yansıtılmıştır.",
          "Kurulum firması seçimi: Şanlıurfa'da yetkili kurulum firması sayısı büyük şehirlere göre daha az olabilir. Referans kontrolü yapın.",
          "Çatı yönü: Düz teraslı evlerde eğim ayarlı montajla yön sorunu kolayca aşılır.",
        ],
      },
      {
        tip: "sonuc",
        icerik:
          "Şanlıurfa, güneş enerjisi yatırımı için Türkiye'nin en avantajlı konumundadır. Doğru sistem ve kaliteli ekipmanla 3–4 yılda geri ödeyen, 25 yıl boyunca tasarruf sağlayan bir yatırım mümkündür. Kendi tüketiminiz için detaylı hesaplama yapmak isterseniz Solarlat hesaplayıcısını kullanabilirsiniz.",
      },
    ],
  },
  {
    slug: "antalya-gunes-paneli-kurulumu",
    baslik: "Antalya'da Güneş Paneli Kurulumu — PSH 5.5 ile Kısa Geri Ödeme",
    ozet:
      "Antalya, yüksek güneşlenme süresi ve turizm sezonuyla güneş enerjisi için ideal bir şehir. Konut ve işletmeler için hesaplama rehberi.",
    tarih: "27 Mart 2026",
    okumaSuresi: "6 dk",
    etiketler: ["antalya", "kurulum", "akdeniz", "maliyet", "konut"],
    bolumler: [
      {
        tip: "paragraf",
        icerik:
          "Antalya, günde ortalama 5.5 saatlik pik güneş ışığıyla (PSH) Türkiye'nin güneş enerjisi açısından en avantajlı şehirleri arasında yer alır. Akdeniz iklimiyle yılın büyük bölümünde berrak gökyüzü, hem konut hem de ticari yatırımcılar için yüksek üretim verimliliği demektir.",
      },
      {
        tip: "h2",
        icerik: "Antalya'da güneş enerjisi ne kadar üretir?",
      },
      {
        tip: "paragraf",
        icerik:
          "PSH 5.5 değeriyle Antalya'da 1 kW'lık kurulu güç yılda yaklaşık 1.850–1.950 kWh enerji üretir. Bu, yılın büyük bölümünde güneşlenmenin düzenli ve tahmin edilebilir olduğu anlamına gelir; yatırım hesaplamaları daha güvenilir sonuç verir.",
      },
      {
        tip: "h2",
        icerik: "Örnek hesaplama: aylık 350 kWh tüketen bir hane",
      },
      {
        tip: "liste",
        maddeler: [
          "Gerekli sistem gücü: ~3.5 kW on-grid",
          "Panel sayısı: 8–9 adet (410–450 Wp panel)",
          "Tahmini kurulum maliyeti: 90.000–110.000 ₺",
          "Yıllık tasarruf: ~30.000–35.000 ₺",
          "Tahmini geri ödeme süresi: 3–4 yıl",
        ],
      },
      {
        tip: "h2",
        icerik: "Konut mu, işletme mi — hangisi daha avantajlı?",
      },
      {
        tip: "paragraf",
        icerik:
          "Antalya'da özellikle otel, pansiyon ve restoran gibi ticari işletmeler güneş enerjisinden en fazla yararlanabilecek kesimdir. Yoğun turizm sezonunda (Nisan–Ekim) elektrik tüketimi zirveye çıkarken güneşlenme de en üst seviyededir — üretim ve tüketim örtüşmesi çok iyi. Konutlarda da geri ödeme süresi İstanbul veya Karadeniz şehirlerine kıyasla belirgin biçimde kısadır.",
      },
      {
        tip: "h2",
        icerik: "Kurulum için dikkat edilmesi gereken noktalar",
      },
      {
        tip: "liste",
        maddeler: [
          "Çatı tipi: Antalya'da birçok konut düz teraslıdır; eğim ayarlı montaj seçeneği verimini artırır.",
          "Tuz ve nem: Kıyı bölgelerinde IP65 ve üzeri koruma sınıfı olan panel ve inverterleri tercih edin.",
          "Firma seçimi: Antalya'da rekabetçi piyasa var; en az 3 firmadan teklif alın.",
          "Çatı statik analizi: Düz teraslarda ek yük hesabı kurulum öncesi yapılmalıdır.",
        ],
      },
      {
        tip: "sonuc",
        icerik:
          "Antalya, Türkiye'nin en avantajlı güneş enerjisi lokasyonlarından biridir. Özellikle ticari işletmeler için yüksek tüketim döneminin yüksek üretimle örtüşmesi eşsiz bir fırsat sunar. Kendi hesabınızı yapmak için Solarlat'ın ücretsiz hesaplayıcısını kullanabilirsiniz.",
      },
    ],
  },
  {
    slug: "gaziantep-gunes-paneli-kurulumu",
    baslik: "Gaziantep'te Güneş Paneli Kurulumu — Sanayi ve Konutlar İçin Rehber",
    ozet:
      "Gaziantep, PSH 5.4 ile güneş enerjisi yatırımı için uygun bir şehir. Sanayiden konuta kapsamlı hesaplama ve kurulum rehberi.",
    tarih: "27 Mart 2026",
    okumaSuresi: "6 dk",
    etiketler: ["gaziantep", "kurulum", "güneydoğu", "sanayi", "maliyet"],
    bolumler: [
      {
        tip: "paragraf",
        icerik:
          "Gaziantep, günde ortalama 5.4 saatlik pik güneş ışığıyla (PSH) güneş enerjisi yatırımı için uygun koşullara sahip bir şehirdir. Güçlü sanayi altyapısıyla şehirde hem konut hem ticari hem de sanayi ölçekli güneş enerjisi sistemlerine yönelik ciddi bir ilgi bulunmaktadır.",
      },
      {
        tip: "h2",
        icerik: "Gaziantep'te üretim potansiyeli",
      },
      {
        tip: "paragraf",
        icerik:
          "PSH 5.4 değeriyle Gaziantep'te 1 kW'lık sistem yılda yaklaşık 1.800–1.900 kWh enerji üretir. Yılın büyük bölümünde güneşlenme düzenlidir; sanayi tesislerinde gündüz üretimi gündüz tüketimiyle örtüştüğü için net fatura tasarrufu yüksektir.",
      },
      {
        tip: "h2",
        icerik: "Örnek hesaplama: aylık 500 kWh tüketen bir hane",
      },
      {
        tip: "liste",
        maddeler: [
          "Gerekli sistem gücü: ~5 kW on-grid",
          "Panel sayısı: 11–13 adet (410–450 Wp panel)",
          "Tahmini kurulum maliyeti: 120.000–145.000 ₺",
          "Yıllık tasarruf: ~42.000–48.000 ₺",
          "Tahmini geri ödeme süresi: 3–4 yıl",
        ],
      },
      {
        tip: "h2",
        icerik: "Sanayi ve ticari kullanım",
      },
      {
        tip: "paragraf",
        icerik:
          "Gaziantep'in güçlü imalat sektörü yüksek elektrik tüketimi anlamına gelir. Fabrika ve atölyeler için çatı üstü veya arazi tipi güneş enerjisi sistemleri, özellikle gündüz saatlerindeki tüketimi karşılamada son derece ekonomiktir. Sanayi tarifesindeki yüksek elektrik maliyeti geri ödeme süresini 2–4 yıla kadar indirebilir.",
      },
      {
        tip: "h2",
        icerik: "Dikkat edilmesi gereken noktalar",
      },
      {
        tip: "liste",
        maddeler: [
          "Toz: Güneydoğu'da kum fırtınaları panel yüzeyini kirletebilir; 2–3 aylık temizlik aralığı önerilir.",
          "Sıcaklık: Yaz aylarında 40°C+ sıcaklıklar panel verimini kısmen düşürür; bu PSH hesabında dikkate alınmıştır.",
          "Bağlantı başvurusu: Gaziantep'te dağıtım şirketi başvuru süreleri yoğun dönemlerde uzayabilir; erken başvuru yapın.",
          "Sanayi tesisleri için: Trafo kapasitesi ve şebeke bağlantı şartlarını önceden elektrik mühendisiyle değerlendirin.",
        ],
      },
      {
        tip: "sonuc",
        icerik:
          "Gaziantep, hem konut hem sanayi ölçeğinde güneş enerjisi yatırımı için güçlü bir potansiyele sahiptir. Yüksek elektrik tüketimi olan işletmeler için özellikle avantajlıdır. Tüketiminize göre kişiselleştirilmiş hesaplama için Solarlat hesaplayıcısını kullanabilirsiniz.",
      },
    ],
  },
  {
    slug: "mersin-gunes-paneli-kurulumu",
    baslik: "Mersin'de Güneş Paneli Kurulumu — Akdeniz Avantajı",
    ozet:
      "Mersin, PSH 5.3 ile Akdeniz iklimiyle uzun güneşlenme süresine sahip. Konut ve tarım amaçlı güneş enerjisi kurulumu için kapsamlı rehber.",
    tarih: "27 Mart 2026",
    okumaSuresi: "5 dk",
    etiketler: ["mersin", "kurulum", "akdeniz", "tarım", "maliyet"],
    bolumler: [
      {
        tip: "paragraf",
        icerik:
          "Mersin, PSH 5.3 saat/gün ile Türkiye'nin en yüksek güneşlenme sürelerine sahip şehirlerinden biridir. Akdeniz iklimiyle yılın 300 günü üzerinde güneşli geçen Mersin, hem konut hem tarımsal sulama hem de ticari amaçlı güneş enerjisi yatırımı için avantajlı bir lokasyondur.",
      },
      {
        tip: "h2",
        icerik: "Mersin'de güneş enerjisi üretim potansiyeli",
      },
      {
        tip: "paragraf",
        icerik:
          "PSH 5.3 değeriyle Mersin'de 1 kW'lık sistem yılda yaklaşık 1.750–1.850 kWh enerji üretir. Uzun yaz sezonu ve seyrek bulutlu hava, üretimin yıl boyunca tahmin edilebilir kalmasını sağlar.",
      },
      {
        tip: "h2",
        icerik: "Örnek hesaplama: aylık 400 kWh tüketen bir hane",
      },
      {
        tip: "liste",
        maddeler: [
          "Gerekli sistem gücü: ~4 kW on-grid",
          "Panel sayısı: 9–10 adet (410–450 Wp panel)",
          "Tahmini kurulum maliyeti: 100.000–120.000 ₺",
          "Yıllık tasarruf: ~33.000–38.000 ₺",
          "Tahmini geri ödeme süresi: 3–4 yıl",
        ],
      },
      {
        tip: "h2",
        icerik: "Tarımsal sulama sistemleri",
      },
      {
        tip: "paragraf",
        icerik:
          "Mersin'in geniş tarım arazileri, güneş enerjili sulama pompası sistemleri için büyük bir fırsat sunar. Sulama ihtiyacının en yüksek olduğu yaz aylarında güneşlenme de zirvededir; bu örtüşme pompalama maliyetini büyük ölçüde ortadan kaldırır. Off-grid veya hibrit sulama sistemleri Mersin çiftçileri arasında giderek yaygınlaşmaktadır.",
      },
      {
        tip: "h2",
        icerik: "Kurulum için dikkat edilmesi gereken noktalar",
      },
      {
        tip: "liste",
        maddeler: [
          "Deniz etkisi: Kıyıya yakın konumlarda tuz korozyonuna karşı dayanıklı bileşenler seçin (deniz ortamı sertifikası).",
          "Nem: Yüksek nemli ortamlarda inverter muhafazasının havalandırmasına dikkat edin.",
          "Tarım arazisi sistemleri: Arazi tipi kurulumda tapu ve tarım arazisi mevzuatına uygunluk kontrolü gerekebilir.",
          "Şebeke kapasitesi: Kırsal bölgelerde şebeke bağlantı kapasitesi önceden DEDAŞ ile görüşülerek netleştirilmelidir.",
        ],
      },
      {
        tip: "sonuc",
        icerik:
          "Mersin, konut yatırımcısından çiftçiye geniş bir kesim için güneş enerjisi yatırımını cazip kılan güneşlenme değerlerine sahiptir. Akdeniz ikliminin sunduğu bu avantajı değerlendirmek için Solarlat'ın ücretsiz hesaplayıcısıyla kendi sisteminizi boyutlandırabilirsiniz.",
      },
    ],
  },
];

export default blogYazilari;
