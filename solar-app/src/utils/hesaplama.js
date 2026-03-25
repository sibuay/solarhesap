import pshData, { turkiyeOrtalamaPSH } from "../data/pshData";
import config from "../data/config";

export function hesapla({ aylikTuketim, sehir, sistemTipi, anlikGucW = 0 }) {
  const gunlukTuketim = aylikTuketim / 30;
  const psh = pshData[sehir] || 4.5;
  const verim = config.verim[
    sistemTipi === "on-grid" ? "onGrid" :
    sistemTipi === "hibrit" ? "hibrit" : "offGrid"
  ];

  // Sistem gücü (kW)
  const sistemGucu = gunlukTuketim / (psh * verim);

  // Panel sayısı
  const panelSayisi = Math.ceil(sistemGucu * 1000 / config.panel.watt);
  const gercekSistemGucu = (panelSayisi * config.panel.watt) / 1000;

  // İnverter kapasitesi — üretim tarafı ile anlık yük tarafından büyük olanı alınır
  const inverterUretimKw = Math.ceil(gercekSistemGucu * 10) / 10;
  const inverterYukKw = anlikGucW > 0 ? Math.ceil((anlikGucW / 1000) * 10) / 10 : 0;
  const inverterKapasitesi = Math.max(inverterUretimKw, inverterYukKw);

  // Batarya kapasitesi (sadece off-grid ve hibrit)
  let bataryaKapasitesi = null;
  if (sistemTipi !== "on-grid") {
    const bat = config.batarya[config.batarya.varsayilanTip];
    bataryaKapasitesi = (gunlukTuketim * config.batarya.yedekGun) / bat.dod;
    bataryaKapasitesi = Math.ceil(bataryaKapasitesi);
  }

  // Maliyet hesabı
  const panelMaliyet = gercekSistemGucu * 1000 * config.panel.fiyatPerWatt;
  const inverterMaliyet = inverterKapasitesi * config.inverter.fiyatPerKw;
  const bataryaMaliyet = bataryaKapasitesi
    ? bataryaKapasitesi * config.batarya[config.batarya.varsayilanTip].fiyatPerKwh
    : 0;
  const kurulumMaliyet = config.kurulum.sabit + gercekSistemGucu * config.kurulum.perKw;
  const toplamMaliyet = panelMaliyet + inverterMaliyet + bataryaMaliyet + kurulumMaliyet;

  // Yıllık tasarruf
  const yillikUretim = gercekSistemGucu * psh * verim * 365;
  const yillikTasarruf = Math.min(yillikUretim, aylikTuketim * 12) * config.elektrik.birimFiyat;

  // Geri ödeme
  const geriOdemeSuresi = toplamMaliyet / yillikTasarruf;

  return {
    gunlukTuketim: +gunlukTuketim.toFixed(2),
    psh,
    sistemGucu: +gercekSistemGucu.toFixed(2),
    panelSayisi,
    inverterKapasitesi: +inverterKapasitesi.toFixed(1),
    inverterYukIleArttirildi: inverterYukKw > inverterUretimKw,
    anlikGucW,
    bataryaKapasitesi: bataryaKapasitesi ? +bataryaKapasitesi.toFixed(0) : null,
    maliyet: {
      panel: Math.round(panelMaliyet),
      inverter: Math.round(inverterMaliyet),
      batarya: Math.round(bataryaMaliyet),
      kurulum: Math.round(kurulumMaliyet),
      toplam: Math.round(toplamMaliyet),
    },
    yillikTasarruf: Math.round(yillikTasarruf),
    geriOdemeSuresi: +geriOdemeSuresi.toFixed(1),
  };
}

export function akillıYorumlar({ sehir, sistemTipi, aylikTuketim, sonuc }) {
  const yorumlar = [];
  const psh = pshData[sehir] || 4.5;

  if (psh < turkiyeOrtalamaPSH) {
    yorumlar.push({
      tip: "uyari",
      mesaj: `${sehir}'nin güneşlenme süresi (${psh} saat/gün), Türkiye ortalamasının (${turkiyeOrtalamaPSH} saat/gün) altında. Sistem boyutlandırmasında bu göz önünde bulundurulmuştur.`,
    });
  }

  if (sonuc.inverterYukIleArttirildi) {
    yorumlar.push({
      tip: "bilgi",
      mesaj: `Anlık tepe yükünüz (${(sonuc.anlikGucW / 1000).toFixed(1)} kW), panel üretim gücünüzden büyük. İnverter kapasitesi tepe yüke göre ${sonuc.inverterKapasitesi} kW olarak boyutlandırıldı.`,
    });
  }

  if (aylikTuketim > 1000 && sistemTipi === "off-grid") {
    yorumlar.push({
      tip: "oneri",
      mesaj: "Yüksek tüketim değeriniz için tam bağımsız (off-grid) yerine karma sistem (hibrit) daha ekonomik ve güvenilir bir seçenek olabilir.",
    });
  }

  if (sonuc.geriOdemeSuresi < 6) {
    yorumlar.push({
      tip: "olumlu",
      mesaj: `Geri ödeme süreniz ${sonuc.geriOdemeSuresi} yıl — bu Türkiye ortalamasının oldukça altında. Mükemmel bir yatırım!`,
    });
  }

  if (sonuc.sistemGucu > 25) {
    yorumlar.push({
      tip: "bilgi",
      mesaj: "25 kW üzeri sistemler için EPDK'dan üretim lisansı alınması gerekmektedir. Kurulum öncesi ilgili birimlerle iletişime geçin.",
    });
  }

  if (sistemTipi === "on-grid") {
    yorumlar.push({
      tip: "firsat",
      mesaj: "Şebekeye bağlı (on-grid) sisteminizde ürettiğiniz fazla enerji, santral bazlı mahsup (net metering) sistemiyle bir sonraki faturanıza yansıtılır. Dağıtım şirketinizle iletişime geçin.",
    });
  }

  return yorumlar;
}
