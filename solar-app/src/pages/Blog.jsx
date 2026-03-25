import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Tag, ArrowRight } from "lucide-react";
import blogYazilari from "../data/blogYazilari";

export default function Blog() {
  return (
    <div className="min-h-screen pt-36 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Blog</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Güneş enerjisi sistemleri, mevzuat ve yatırım kararları hakkında rehber yazılar.
          </p>
        </motion.div>

        <div className="space-y-5">
          {blogYazilari.map(({ slug, baslik, ozet, tarih, okumaSuresi, etiketler }, i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${slug}`}
                className="block bg-slate-800/60 border border-slate-600/60 rounded-2xl p-6 backdrop-blur-sm hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {etiketler.map((e) => (
                    <span
                      key={e}
                      className="inline-flex items-center gap-1 text-xs text-orange-300 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {e}
                    </span>
                  ))}
                </div>
                <h2 className="text-white font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors leading-snug">
                  {baslik}
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-4">{ozet}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <span>{tarih}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {okumaSuresi} okuma
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-sm text-orange-400 font-medium group-hover:gap-2 transition-all">
                    Oku <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
