// Güncellenebilir fiyat ve teknik konfigürasyon
// Fiyatlar Mart 2026 piyasa değerlerine göre belirlenmiştir (±%15 sapma gösterebilir)
const config = {
  panel: {
    watt: 400,           // W — varsayılan panel gücü
    fiyatPerWatt: 9,     // ₺/W — panel fiyatı (kurulum dahil)
  },
  inverter: {
    fiyatPerKw: 5000,    // ₺/kW — inverter birim fiyatı
  },
  batarya: {
    lifepo4: {
      fiyatPerKwh: 10000, // ₺/kWh
      dod: 0.80,
    },
    agm: {
      fiyatPerKwh: 4000, // ₺/kWh
      dod: 0.50,
    },
    varsayilanTip: "lifepo4",
    yedekGun: 1,         // gün
  },
  kurulum: {
    sabit: 20000,        // ₺ — sabit kurulum maliyeti
    perKw: 2500,         // ₺/kW — kW başına kurulum
  },
  verim: {
    onGrid: 0.75,
    hibrit: 0.72,
    offGrid: 0.68,
  },
  elektrik: {
    birimFiyat: 7.5,     // ₺/kWh — konut kademeli tarife karma ortalaması
  },
};

export default config;
