import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import blogYazilari from "../data/blogYazilari";

function BolumRender({ bolum }) {
  switch (bolum.tip) {
    case "h2":
      return <h2 className="text-xl font-bold text-white mt-8 mb-3">{bolum.icerik}</h2>;
    case "paragraf":
      return <p className="text-slate-300 leading-relaxed text-base">{bolum.icerik}</p>;
    case "liste":
      return (
        <ul className="space-y-2">
          {bolum.maddeler.map((m, i) => (
            <li key={i} className="flex gap-2 text-slate-300 text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
              {m}
            </li>
          ))}
        </ul>
      );
    case "not":
      return (
        <div className="bg-blue-500/10 border border-blue-500/25 rounded-xl px-5 py-4 text-base text-blue-200 leading-relaxed">
          <span className="font-semibold">Not: </span>
          {bolum.icerik}
        </div>
      );
    case "sonuc":
      return (
        <div className="bg-orange-500/10 border border-orange-500/25 rounded-xl px-5 py-4 text-base text-orange-200 leading-relaxed">
          <span className="font-semibold">Sonuç: </span>
          {bolum.icerik}
        </div>
      );
    default:
      return null;
  }
}

export default function BlogYazi() {
  const { slug } = useParams();
  const yazi = blogYazilari.find((y) => y.slug === slug);

  useEffect(() => {
    if (!yazi) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: yazi.baslik,
      description: yazi.ozet,
      datePublished: yazi.tarih,
      publisher: {
        "@type": "Organization",
        name: "Solarlat",
        url: "https://www.solarlat.com",
      },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "article-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => document.getElementById("article-schema")?.remove();
  }, [yazi]);

  if (!yazi) return <Navigate to="/blog" replace />;

  const digerler = blogYazilari.filter((y) => y.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen pt-36 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-orange-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tüm yazılar
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {yazi.etiketler.map((e) => (
              <span
                key={e}
                className="inline-flex items-center gap-1 text-xs text-orange-300 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full"
              >
                <Tag className="w-3 h-3" />
                {e}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
            {yazi.baslik}
          </h1>

          <div className="flex items-center gap-3 text-sm text-slate-400 mb-8 pb-6 border-b border-slate-700/50">
            <span>{yazi.tarih}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {yazi.okumaSuresi} okuma
            </span>
          </div>

          <div className="space-y-5">
            {yazi.bolumler.map((bolum, i) => (
              <BolumRender key={i} bolum={bolum} />
            ))}
          </div>

          <div className="mt-10 bg-slate-800/60 border border-slate-600/60 rounded-2xl p-6 text-center backdrop-blur-sm">
            <p className="text-white font-semibold mb-2">Kendi sisteminizi hesaplayın</p>
            <p className="text-slate-300 text-base mb-5">
              Şehriniz ve tüketiminize göre panel sayısı, maliyet ve geri ödeme süresini anında görün.
            </p>
            <Link
              to="/hesaplayici"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:scale-105 transition-all"
            >
              Hesaplamaya Başla <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {digerler.length > 0 && (
            <div className="mt-10">
              <p className="text-slate-200 font-semibold mb-4">Diğer yazılar</p>
              <div className="space-y-3">
                {digerler.map(({ slug: s, baslik, okumaSuresi }) => (
                  <Link
                    key={s}
                    to={`/blog/${s}`}
                    className="flex items-center justify-between gap-3 bg-slate-800/60 border border-slate-600/60 rounded-xl px-5 py-4 hover:border-orange-500/30 transition-all group"
                  >
                    <p className="text-base text-slate-300 group-hover:text-white transition-colors leading-snug">
                      {baslik}
                    </p>
                    <span className="text-sm text-slate-400 shrink-0 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {okumaSuresi}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
