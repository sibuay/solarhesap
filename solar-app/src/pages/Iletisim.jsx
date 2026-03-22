import { useState } from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function Iletisim() {
  const [form, setForm] = useState({ ad: "", email: "", mesaj: "" });
  const [gonderildi, setGonderildi] = useState(false);

  const gonder = (e) => {
    e.preventDefault();
    // Aşama 2'de backend entegrasyonu eklenecek
    setGonderildi(true);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">İletişim</h1>
        <p className="text-gray-500 mb-10">
          Projeniz için uzman görüşü almak veya sorularınızı sormak için ulaşın.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <a
            href="https://wa.me/905001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 hover:bg-green-100 transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-xs text-gray-500">WhatsApp</p>
              <p className="font-semibold text-gray-800 text-sm">Hızlı Yanıt</p>
            </div>
          </a>
          <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <Mail className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-xs text-gray-500">E-posta</p>
              <p className="font-semibold text-gray-800 text-sm">info@solarhesap.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-xl p-4">
            <Phone className="w-5 h-5 text-orange-600" />
            <div>
              <p className="text-xs text-gray-500">Telefon</p>
              <p className="font-semibold text-gray-800 text-sm">+90 500 123 4567</p>
            </div>
          </div>
        </div>

        {gonderildi ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">✅</div>
            <h2 className="font-bold text-gray-800 text-lg mb-2">Mesajınız İletildi!</h2>
            <p className="text-gray-500 text-sm">En kısa sürede size dönüş yapacağım.</p>
          </div>
        ) : (
          <form onSubmit={gonder} className="space-y-4 bg-gray-50 rounded-2xl p-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
              <input
                type="text"
                required
                value={form.ad}
                onChange={(e) => setForm({ ...form, ad: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mesaj</label>
              <textarea
                required
                rows={4}
                value={form.mesaj}
                onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white resize-none"
                placeholder="Projeniz hakkında kısaca bilgi verin..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
            >
              Mesaj Gönder
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
