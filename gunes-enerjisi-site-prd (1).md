# Güneş Enerjisi Danışmanlık Sitesi — PRD

## Proje Özeti

Güneş enerjisi sistemi kurmak isteyen bireysel kullanıcılara ve küçük işletmelere yönelik bir danışmanlık ve hesaplama platformu. Temel felsefe: **minimum girdi → maksimum doğru çıktı.**

Kullanıcı; aylık tüketimini, şehrini ve sistem tipini girer. Sistem; panel sayısı, inverter kapasitesi, batarya büyüklüğü, maliyet ve geri ödeme süresi gibi çıktıları hesaplar. Hesaplamanın ötesinde "akıllı yorumlar" ile sıradan bir hesap makinesinden dijital bir mühendis deneyimine taşınır.

---

## Hedef Kitle

Başlangıç odağı bireysel kullanıcılar ve küçük işletmelerdir. Ücretli danışmanlık hizmetleri ilk aşamada arka planda tutulur; öncelik popülerlik ve organik trafik kazanımıdır.

**Bireysel kullanıcılar** — yüksek elektrik faturası ödeyen, "kaç panel gerekir?" sorusuna cevap arayan ev sahipleri.

**Küçük işletmeler** — atölye, çiftlik, küçük üretim tesisi gibi yerlerde yatırımın geri dönüş süresini görmek isteyen işletme sahipleri.

**Saha mühendisleri** — Excel yerine hızlı ve pratik bir hesaplama aracı arayan teknik kullanıcılar (ilerleyen aşamada).

---

## Aşama 1 — MVP

### Hesaplayıcı Aracı (Sitenin Kalbi)

**Kullanıcıdan alınan girdiler:**
- Aylık veya günlük elektrik tüketimi (kWh)
- Şehir seçimi
- Sistem tipi: on-grid / off-grid / hibrit

**Çıktılar:**
- Gerekli sistem gücü (kW)
- Panel sayısı ve tipi
- İnverter kapasitesi (kW)
- Batarya kapasitesi (kWh) — off-grid ve hibrit için
- Tahmini kurulum maliyeti (₺)
- Yıllık tasarruf (₺)
- Geri ödeme süresi (yıl)

### Hesaplama Motoru — Mühendislik Mantığı

```
1. Günlük tüketim = Aylık tüketim / 30

2. Şehir bazlı PSH (Peak Sun Hours) — Türkiye'nin 81 ili için JSON veri tabanı
   Örnek: Konya ≈ 5.8 h/gün, İstanbul ≈ 3.8 h/gün

3. Sistem gücü = Günlük tüketim / (PSH × sistem_verimi)
   - On-grid:  verim = 0.75
   - Hibrit:   verim = 0.72
   - Off-grid: verim = 0.68

4. Panel sayısı = Sistem gücü / panel_watt  (varsayılan: 400 W)

5. Batarya kapasitesi (off-grid / hibrit):
   - kapasite = Günlük tüketim × yedek_gün / DoD
   - DoD: LiFePO4 = 0.80 / AGM = 0.50

6. Maliyet = panel_fiyat + inverter_fiyat + batarya_fiyat + kurulum_fiyatı

7. Geri ödeme = Toplam maliyet / Yıllık tasarruf
```

> **Not:** Fiyatlar güncellenebilir bir config dosyasından çekilmeli; güneş ekipman fiyatları sık değişiyor.

### Kullanıcı Tipi — İki Girdi Modu

Hesaplayıcı iki farklı mod sunar. Kullanıcı sayfaya girdiğinde hangisini kullanacağını seçer.

**Bireysel mod (elektrikli alet seçici):**
Günlük tüketimini bilmeyen kullanıcılar için. Evdeki elektrikli aletleri seçer, her biri için günlük kullanım saatini girer. Sistem toplam aylık tüketimi otomatik hesaplar ve hesaplayıcıya aktarır.

Alet listesi ve varsayılan watt değerleri:

| Alet | Watt | Varsayılan saat/gün |
|---|---|---|
| Bulaşık makinesi | 1800 W | 1 |
| Çamaşır makinesi | 2000 W | 1 |
| Buzdolabı | 150 W | 24 |
| Televizyon | 120 W | 4 |
| Klima | 1500 W | 4 |
| Elektrikli soba | 2000 W | 3 |
| Fırın / ocak | 2200 W | 1 |
| Elektrikli su ısıtıcı | 2000 W | 0.5 |
| Bilgisayar | 200 W | 6 |
| Aydınlatma | 200 W | 6 |
| Telefon / tablet şarj | 30 W | 4 |
| Elektrikli süpürge | 1200 W | 0.5 |

Hesaplama formülü: `aylık tüketim = Σ (watt × saat/gün × 30) / 1000`

Kullanıcı saat değerini değiştirebilir. Seçim değiştikçe toplam anlık güncellenir.

**Teknik / işletme modu:**
Tüketimini bilen kullanıcılar için. Manuel kWh girişi yapılır. Hızlı seçim için örnek değer butonları sunulur (150 / 300 / 600 / 1500 kWh).

---

### Terim Açıklamaları (Tooltip)

Teknik terimler normal kullanıcı için anlaşılmaz olabilir. Fare ile üzerine gelindiğinde (hover) sade bir açıklama kutusu açılır. Mobilde dokunarak açılır.

| Terim | Açıklama |
|---|---|
| Şebekeye bağlı (on-grid) | Eviniz elektrik şebekesine bağlı kalır. Paneller ürettiği enerjiyi önce evinizde kullanır, fazlasını şebekeye satar. Kesinti anında sistem durur. Batarya gerektirmez; en yaygın ve ekonomik seçenektir. |
| Tamamen bağımsız (off-grid) | Şebekeye hiç bağlı olunmaz. Tüm enerji paneller ve bataryalardan karşılanır. Elektrik olmayan bölgeler için idealdir; batarya maliyeti yüksektir. |
| Karma sistem (hibrit) | Hem şebekeye bağlıdır hem de batarya içerir. Güneşli günlerde panellerden, batarya bitince şebekeden yararlanılır. Kesinti anında batarya devreye girer; en esnek seçenektir. |

Bu pattern ilerleyen aşamada `inverter`, `YEKDEM`, `PSH`, `DoD` gibi diğer teknik terimlere de uygulanabilir.

---

### Akıllı Yorum Katmanı (Rekabet Avantajı)

Hesaplama sonucuna ek olarak sistem koşula bağlı yorumlar üretir:

- Şehrin güneşlenme süresi Türkiye ortalamasının altındaysa uyarı gösterir.
- Yüksek tüketimde tam off-grid önermek yerine hibriti önerir.
- Geri ödeme süresi 6 yılın altındaysa olumlu bir değerlendirme sunar.
- 10 kW üzeri sistemlerde lisanssız üretim mevzuatı uyarısı verir.
- On-grid sistemlerde YEKDEM fırsatını hatırlatır.

İlk sürümde kural tabanlı (if/else) çalışır; ilerleyen aşamada AI destekli hale getirilebilir.

### Site Sayfaları

| Sayfa | İçerik |
|---|---|
| Anasayfa | Değer önerisi, hesaplayıcıya yönlendirme, kısa referanslar |
| Hesaplayıcı | Ana araç — tek sayfa uygulama |
| Nasıl Çalışır? | Hesaplama mantığının sade anlatımı |
| Hakkımda | Mühendis profili, sertifikalar, güven unsurları |
| İletişim | Form + WhatsApp butonu |

---

## Aşama 2 — Büyüme (1–3. Ay)

- **PDF rapor çıktısı** — freemium modelinin ilk ücretli özelliği
- **E-posta ile rapor gönderme** — lead toplama mekanizması
- **Bilgi bankası / blog** — SEO için şehir bazlı içerikler
- **Kullanıcı geri bildirimi** — hesaplayıcıyı iteratif geliştirmek için

---

## Aşama 3 — Gelişmiş Özellikler (3–6. Ay)

- **Harita entegrasyonu** — Google Maps API ile çatı alanı tahmini
- **AI yorum katmanı** — kişiselleştirilmiş akıllı öneriler
- **Karşılaştırma modu** — on-grid / hibrit yan yana analiz
- **Saha mühendisi modu** — gelişmiş parametreler, Excel export

---

## Teknik Stack

| Katman | Öneri | Not |
|---|---|---|
| Frontend | React + Tailwind | Hızlı, component bazlı |
| Hesaplama | JavaScript (frontend) | MVP'de backend gerekmez |
| Veri | JSON (PSH veritabanı) | 81 il, basit ve yeterli |
| Backend | Node.js veya FastAPI | Aşama 2'de PDF için |
| Hosting | Vercel + Railway | Free tier ile sıfır maliyet |
| PDF | jsPDF veya Puppeteer | Rapor çıktısı |

---

## Freemium Gelir Modeli

```
ÜCRETSİZ                        ÜCRETLİ (Aşama 2+)
──────────────────────────────  ──────────────────────────────
Temel hesaplama                 PDF detaylı rapor
Akıllı yorumlar                 Teknik proje dosyası
Sistem özeti                    1-1 danışmanlık seansı
Şehir bazlı karşılaştırma       Kurumsal fizibilite raporu
```

> Ücretli hizmetler sitede mevcut ama öne çıkarılmıyor. Kullanıcı hesaplayıcıyı kullanıp güveni kazandıkça doğal dönüşüm sağlanıyor.

**Dönüşüm noktası:** Hesaplayıcı sonuç sayfasında — *"Bu sonucu bir uzmanla değerlendirmek ister misiniz?"* butonu. Kullanıcı en yüksek ilgi anında yönlendiriliyor.

---

## SEO Stratejisi

Türkiye'de yüksek arama hacimli hedef kelimeler:

- `güneş paneli hesaplama`
- `kaç panel kurmalıyım`
- `[şehir adı] güneş enerjisi` — 81 il için ayrı landing page potansiyeli
- `güneş enerjisi geri ödeme süresi hesaplama`
- `evime güneş paneli kurulum maliyeti`

Her ay 2–3 şehir bazlı rehber içeriği yayınlanır.

---

## Güven Unsurları

- Mühendislik diploması ve TMMOB üyeliği görünür yerde
- Tamamlanmış proje fotoğrafları (izin alınarak)
- Google Reviews entegrasyonu
- Hesaplayıcı sonuçlarında kaynak şeffaflığı (PSH kaynağı, verim katsayıları)

---

## İlerleyen Aşama — Gelir Çeşitlendirme

- Yüklenici firmalara **lead yönlendirme komisyonu**
- **Online kurs** (Udemy veya kendi platformu)
- Ekipman markaları ile **affiliate anlaşması**
- İşletmelere **aylık sabit ücretli danışmanlık aboneliği**
