import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Sun, Zap, TrendingUp, ArrowRight, Star, MapPin, CheckCircle, BookOpen, HelpCircle } from "lucide-react";

const ozellikler = [
  {
    icon: Sun,
    baslik: "81 İl PSH Verisi",
    aciklama: "Türkiye'nin tüm illerinin güneşlenme verisiyle doğru boyutlandırma.",
    link: "/iller",
  },
  {
    icon: Zap,
    baslik: "Anlık Hesaplama",
    aciklama: "Panel sayısı, inverter, batarya ve maliyet — saniyeler içinde.",
  },
  {
    icon: TrendingUp,
    baslik: "Geri Ödeme Analizi",
    aciklama: "Yıllık tasarruf ve yatırımın geri dönüş süresini net görün.",
  },
];


const referanslar = [
  { ad: "Serkan T.", konum: "Konya", metin: "Fatura yüksek gelince bakmaya başladım, bu site işimi gördü. Komşuma da önerdim zaten.", puan: 5 },
  { ad: "Emine Ç.", konum: "Gaziantep", metin: "Hiç bilmiyordum hangi sistem lazım, açıklamalar sayesinde anladım. Teşekkürler.", puan: 5 },
  { ad: "Osman K.", konum: "İzmir", metin: "Çiftliğimiz için kullandım, geri ödeme süresini görünce güvendim ve kurdum.", puan: 4 },
];

// Animated gradient orbs
function AnimatedOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, #f97316 0%, #fb923c 50%, transparent 100%)" }}
        animate={{ x: ["-5%", "5%", "-5%"], y: ["-5%", "15%", "-5%"], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        initial={{ x: "5%", y: "5%" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{ background: "radial-gradient(circle, #f59e0b 0%, #fbbf24 50%, transparent 100%)" }}
        animate={{ x: ["55%", "65%", "55%"], y: ["50%", "35%", "50%"], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        initial={{ x: "60%", y: "45%" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(circle, #ea580c 0%, #f97316 50%, transparent 100%)" }}
        animate={{ x: ["35%", "45%", "35%"], y: ["65%", "75%", "65%"], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        initial={{ x: "40%", y: "70%" }}
      />
    </div>
  );
}

// Floating particles
function FloatingParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 12 + 15,
    delay: Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-orange-400/20"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -25, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function Anasayfa() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="text-slate-100">
      <Helmet>
        <title>Solarlat — Güneş Enerjisi Sistemi Hesaplayıcı</title>
        <meta name="description" content="Türkiye'nin 81 ili için güneş enerjisi sistemi hesaplayıcısı. Panel sayısı, inverter kapasitesi, kurulum maliyeti ve geri ödeme süresini anında hesaplayın." />
        <link rel="canonical" href="https://www.solarlat.com/" />
      </Helmet>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden flex items-center"
      >
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/gpy.mp4"
        />
        <div className="absolute inset-0 bg-slate-900/60" />

        <AnimatedOrbs />
        <FloatingParticles />

        {/* Mouse glow */}
        <motion.div
          className="absolute w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, #f97316 0%, transparent 70%)",
            left: mousePos.x - 160,
            top: mousePos.y - 160,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-32 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/hesaplayici"
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-2 backdrop-blur-sm hover:border-orange-500/50 hover:bg-orange-500/20 transition-all"
            >
              <Sun className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-200">
                Türkiye'nin en kapsamlı güneş enerjisi sistemi hesaplayıcısı
              </span>
            </Link>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Kaç panel gerekir?
            <br />
            <span className="bg-linear-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Saniyeler içinde öğrenin.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 leading-relaxed"
          >
            Aylık tüketiminizi, şehrinizi ve sistem tipini girin — panel sayısı, inverter
            kapasitesi, kurulum maliyeti ve geri ödeme süresini anında hesaplayın.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/hesaplayici"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
            >
              <Sun className="w-5 h-5" />
              Ücretsiz Hesapla
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/rehber"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 bg-slate-800/50 text-slate-200 font-semibold rounded-full backdrop-blur-sm hover:border-slate-500 hover:bg-slate-700/50 transition-all duration-300"
            >
              Rehber
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-5 text-sm text-slate-300"
          >
            Kayıt gerekmez • Tamamen ücretsiz
          </motion.p>

          {/* Özellikler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {ozellikler.map(({ icon: Icon, baslik, aciklama, link }) => {
              const inner = (
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-11 h-11 bg-orange-500/15 border border-orange-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <p className="text-lg font-semibold text-white leading-snug">{baslik}</p>
                  <p className="text-base text-slate-300 leading-relaxed">{aciklama}</p>
                </div>
              );
              const cls = "rounded-2xl border border-slate-600/60 bg-slate-700/40 p-5 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300";
              return link
                ? <Link key={baslik} to={link} className={cls}>{inner}</Link>
                : <div key={baslik} className={cls}>{inner}</div>;
            })}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-slate-900 to-transparent" />
      </section>

      {/* ── 3 Adım ────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">3 Adımda Hesaplama</h2>
            <p className="text-slate-300">Minimum girdi, maksimum doğru çıktı.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { num: "1", baslik: "Tüketiminizi Girin", text: "Aylık kWh değerinizi yazın ya da alet seçiciden hesaplayın." },
              { num: "2", baslik: "Şehir & Sistem Seçin", text: "81 il PSH verisi otomatik uygulanır. On-grid, hibrit veya off-grid seçin." },
              { num: "3", baslik: "Sonuçları Alın", text: "Panel sayısı, maliyet, tasarruf ve akıllı mühendis yorumları." },
            ].map(({ num, baslik, text }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="w-14 h-14 bg-linear-to-br from-orange-500 to-amber-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold shadow-lg shadow-orange-500/25">
                  {num}
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">{baslik}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/hesaplayici"
              className="mt-12 inline-flex items-center gap-2 px-7 py-3.5 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full shadow-lg shadow-orange-500/25 hover:scale-105 transition-all duration-300"
            >
              Hesaplamaya Başla <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Referanslar ───────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Kullanıcılar Ne Diyor?</h2>
            <p className="text-slate-300">Gerçek kullanıcıların gerçek deneyimleri.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {referanslar.map(({ ad, konum, metin, puan }, i) => (
              <motion.div
                key={ad}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border border-slate-600/60 bg-slate-800/60 p-6 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: puan }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 mb-5 leading-relaxed italic">"{metin}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-linear-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {ad[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{ad}</p>
                    <p className="text-sm text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{konum}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog & SSS ────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <Link
              to="/blog"
              className="group flex items-start gap-4 bg-slate-800/60 border border-slate-600/60 rounded-2xl p-6 backdrop-blur-sm hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-orange-500/15 border border-orange-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500/25 transition-colors">
                <BookOpen className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">Rehber Yazılar</h3>
                <p className="text-sm text-slate-300 leading-relaxed">On-grid mi hibrit mi? Yasal süreç, geri ödeme ve daha fazlası.</p>
              </div>
            </Link>
            <Link
              to="/sss"
              className="group flex items-start gap-4 bg-slate-800/60 border border-slate-600/60 rounded-2xl p-6 backdrop-blur-sm hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-orange-500/15 border border-orange-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500/25 transition-colors">
                <HelpCircle className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">Sık Sorulan Sorular</h3>
                <p className="text-sm text-slate-300 leading-relaxed">Panel ömrü, 25 kW sınırı, net metering ve merak ettiğiniz her şey.</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-800/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-300">Kayıt gerekmez • Tamamen ücretsiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Güneş enerjisine geçmeye hazır mısınız?
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Ücretsiz hesaplayıcıyla başlayın, uzmanımızla devam edin.
          </p>
          <Link
            to="/hesaplayici"
            className="inline-flex items-center gap-2 px-10 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-full shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
          >
            Hesaplamaya Başla <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
