import { Link, useLocation } from "react-router-dom";
import { Sun } from "lucide-react";

const links = [
  { to: "/", label: "Anasayfa" },
  { to: "/hesaplayici", label: "Hesaplayıcı" },
  { to: "/nasil-calisir", label: "Nasıl Çalışır?" },
  { to: "/hakkimda", label: "Hakkımda" },
  { to: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-orange-500 text-lg">
          <Sun className="w-6 h-6" />
          <span>SolarHesap</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === to
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/hesaplayici"
            className="ml-3 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
          >
            Ücretsiz Hesapla
          </Link>
        </div>

        {/* Mobile — sadece logo gösterilir, gerekirse hamburger eklenebilir */}
        <Link
          to="/hesaplayici"
          className="md:hidden px-3 py-1.5 bg-orange-500 text-white rounded-lg text-sm font-medium"
        >
          Hesapla
        </Link>
      </div>
    </nav>
  );
}
