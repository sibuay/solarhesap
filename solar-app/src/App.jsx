import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

ReactGA.initialize("G-1H1NBYK81Z");

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: "pageview", page: pathname });
  }, [pathname]);
  return null;
}
import Navbar from "./components/Navbar";
import Anasayfa from "./pages/Anasayfa";
import Hesaplayici from "./pages/Hesaplayici";
import NasilCalisir from "./pages/NasilCalisir";
import Hizmetlerimiz from "./pages/Hizmetlerimiz";
import Hakkimda from "./pages/Hakkimda";
import Iletisim from "./pages/Iletisim";
import SSS from "./pages/SSS";
import Blog from "./pages/Blog";
import BlogYazi from "./pages/BlogYazi";
import Iller from "./pages/Iller";
import IlDetay from "./pages/IlDetay";
import SolarBackground from "./components/SolarBackground";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SolarBackground />
      <Navbar />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/hesaplayici" element={<Hesaplayici />} />
          <Route path="/rehber" element={<NasilCalisir />} />
          <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
          <Route path="/hakkimizda" element={<Hakkimda />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/sss" element={<SSS />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogYazi />} />
          <Route path="/iller" element={<Iller />} />
          <Route path="/il/:slug" element={<IlDetay />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
