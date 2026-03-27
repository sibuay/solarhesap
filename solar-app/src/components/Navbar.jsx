import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Menu, X, Home, Calculator, HelpCircle, Briefcase, User, Phone, BookOpen } from "lucide-react";

const links = [
  { to: "/", label: "Anasayfa", icon: Home },
  { to: "/hesaplayici", label: "Hesaplayıcı", icon: Calculator },
  { to: "/rehber", label: "Rehber", icon: HelpCircle },
  { to: "/blog", label: "Blog", icon: BookOpen },
  { to: "/hizmetlerimiz", label: "Hizmetlerimiz", icon: Briefcase },
  { to: "/hakkimizda", label: "Hakkımızda", icon: User },
  { to: "/iletisim", label: "İletişim", icon: Phone },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>
      <nav
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/90 backdrop-blur-xl border border-slate-600/60 rounded-2xl shadow-xl shadow-black/20"
            : "bg-slate-800/60 backdrop-blur-md border border-slate-600/40 rounded-2xl"
        }`}
      >
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Sun className="w-7 h-7 text-orange-400 transition-all duration-300 group-hover:rotate-90 group-hover:text-amber-400" />
                <div className="absolute inset-0 bg-orange-500/25 blur-lg rounded-full group-hover:bg-amber-500/35 transition-colors duration-300" />
              </div>
              <span className="font-bold text-lg bg-linear-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                solarlat
              </span>
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label, icon: Icon }, index) => {
              const isActive = pathname === to;
              return (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={to}
                    className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white hover:text-orange-300"
                    }`}
                  >
                    {/* Sliding gradient pill (active) */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-linear-to-r from-orange-500 to-amber-500 rounded-xl"
                        layoutId="navbar-active-pill"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                      />
                    )}
                    {/* Glow bloom behind pill */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-linear-to-r from-orange-500 to-amber-500 rounded-xl blur-lg opacity-50"
                        layoutId="navbar-active-glow"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                      />
                    )}
                    <Icon className="relative z-10 w-3.5 h-3.5 shrink-0" />
                    <span className="relative z-10">{label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA desktop */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/hesaplayici"
                className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white rounded-full overflow-hidden group shadow-lg shadow-orange-500/20"
                style={{ background: "linear-gradient(to right, #f97316, #f59e0b)" }}
              >
                <span className="relative z-10">Ücretsiz Hesapla</span>
                <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-300 hover:bg-slate-600/50 transition-colors"
            onClick={() => setIsOpen(true)}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-80 bg-slate-900/95 backdrop-blur-xl border-l border-slate-600/50 shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full">
                {/* Drawer header */}
                <div className="flex items-center justify-between p-5 border-b border-slate-700/40">
                  <div className="flex items-center gap-2">
                    <Sun className="w-6 h-6 text-orange-400" />
                    <span className="font-bold bg-linear-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                      solarlat
                    </span>
                  </div>
                  <motion.button
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-700/50"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Drawer links */}
                <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
                  {links.map(({ to, label, icon: Icon }, i) => {
                    const isActive = pathname === to;
                    return (
                      <motion.div
                        key={to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 + 0.1 }}
                      >
                        <Link
                          to={to}
                          onClick={() => setIsOpen(false)}
                          className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors overflow-hidden ${
                            isActive ? "text-white" : "text-white hover:text-orange-300"
                          }`}
                        >
                          {isActive && (
                            <>
                              <motion.div
                                className="absolute inset-0 bg-linear-to-r from-orange-500 to-amber-500 rounded-xl"
                                layoutId="mobile-active-pill"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                              />
                              <motion.div
                                className="absolute inset-0 bg-linear-to-r from-orange-500 to-amber-500 rounded-xl blur-md opacity-50"
                                layoutId="mobile-active-glow"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                              />
                            </>
                          )}
                          <Icon className={`relative z-10 w-4 h-4 ${isActive ? "" : "text-orange-500"}`} />
                          <span className="relative z-10">{label}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Drawer CTA */}
                <motion.div
                  className="p-5 border-t border-slate-700/40"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/hesaplayici"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white rounded-full shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02]"
                    style={{ background: "linear-gradient(to right, #f97316, #f59e0b)" }}
                  >
                    Ücretsiz Hesapla
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
