// Güncellenebilir fiyat ve teknik konfigürasyon
const config = {
  panel: {
    watt: 400,           // W — varsayılan panel gücü
    fiyatPerWatt: 8,     // ₺/W — panel fiyatı (kurulum dahil)
  },
  inverter: {
    fiyatPerKw: 4000,    // ₺/kW — inverter birim fiyatı
  },
  batarya: {
    lifepo4: {
      fiyatPerKwh: 8000, // ₺/kWh
      dod: 0.80,
    },
    agm: {
      fiyatPerKwh: 3000, // ₺/kWh
      dod: 0.50,
    },
    varsayilanTip: "lifepo4",
    yedekGun: 1,         // gün
  },
  kurulum: {
    sabit: 15000,        // ₺ — sabit kurulum maliyeti
    perKw: 2000,         // ₺/kW — kW başına kurulum
  },
  verim: {
    onGrid: 0.75,
    hibrit: 0.72,
    offGrid: 0.68,
  },
  elektrik: {
    birimFiyat: 5.5,     // ₺/kWh — ortalama elektrik birim fiyatı
  },
};

export default config;
