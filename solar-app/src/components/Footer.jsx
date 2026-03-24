import { Sun, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-700/50 bg-slate-900/60 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Sun className="w-4 h-4 text-orange-400" />
          <span className="text-white font-semibold">solarlat</span>
          <span>© 2026</span>
        </div>
        <a
          href="mailto:info@solarlat.com"
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors"
        >
          <Mail className="w-4 h-4" />
          info@solarlat.com
        </a>
      </div>
    </footer>
  );
}
