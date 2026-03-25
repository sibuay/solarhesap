import { Sun, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/hesaplayici", label: "Hesaplayıcı" },
  { to: "/blog", label: "Blog" },
  { to: "/iller", label: "İller" },
  { to: "/sss", label: "SSS" },
  { to: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { to: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-700/50 bg-slate-900/60 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Sun className="w-4 h-4 text-orange-400" />
            <span className="text-white font-semibold">solarlat</span>
            <span>© 2026</span>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm text-slate-400 hover:text-orange-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <a
            href="mailto:info@solarlat.com"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@solarlat.com
          </a>
        </div>
      </div>
    </footer>
  );
}
