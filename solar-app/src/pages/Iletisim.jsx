import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, CheckCircle } from "lucide-react";

export default function Iletisim() {
  const [form, setForm] = useState({ ad: "", email: "", mesaj: "" });
  const [gonderildi, setGonderildi] = useState(false);

  const gonder = (e) => {
    e.preventDefault();
    setGonderildi(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">İletişim</h1>
          <p className="text-slate-400">
            Projeniz için uzman görüşü almak veya sorularınızı sormak için ulaşın.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              href: "https://wa.me/905001234567",
              icon: MessageCircle,
              color: "green",
              label: "WhatsApp",
              deger: "Hızlı Yanıt",
            },
            {
              icon: Mail,
              color: "blue",
              label: "E-posta",
              deger: "info@solarhesap.com",
            },
            {
              icon: Phone,
              color: "orange",
              label: "Telefon",
              deger: "+90 500 123 4567",
            },
          ].map(({ href, icon: Icon, color, label, deger }, i) => {
            const renkler = {
              green: "border-green-500/30 bg-green-500/10 text-green-400",
              blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
              orange: "border-orange-500/30 bg-orange-500/10 text-orange-400",
            };
            const Wrapper = href ? "a" : "div";
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Wrapper
                  href={href}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 border rounded-xl p-4 transition-all backdrop-blur-sm ${renkler[color]} ${href ? "hover:brightness-125 cursor-pointer" : ""} block`}
                >
                  <div className="p-2 rounded-lg bg-white/5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="font-semibold text-white text-sm">{deger}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {gonderildi ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500/10 border border-green-500/30 rounded-2xl p-10 text-center"
          >
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="font-bold text-white text-lg mb-2">Mesajınız İletildi!</h2>
            <p className="text-slate-400 text-sm">En kısa sürede size dönüş yapacağım.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={gonder}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm"
          >
            {[
              { name: "ad", label: "Ad Soyad", type: "text", placeholder: "Adınız" },
              { name: "email", label: "E-posta", type: "email", placeholder: "ornek@email.com" },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
                <input
                  type={type}
                  required
                  value={form[name]}
                  onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                  placeholder={placeholder}
                  className="w-full bg-slate-700/70 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Mesaj</label>
              <textarea
                required
                rows={4}
                value={form.mesaj}
                onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                placeholder="Projeniz hakkında kısaca bilgi verin..."
                className="w-full bg-slate-700/70 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-3.5 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
            >
              Mesaj Gönder
            </motion.button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
