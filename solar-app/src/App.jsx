import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Anasayfa from "./pages/Anasayfa";
import Hesaplayici from "./pages/Hesaplayici";
import NasilCalisir from "./pages/NasilCalisir";
import Hizmetlerimiz from "./pages/Hizmetlerimiz";
import Hakkimda from "./pages/Hakkimda";
import Iletisim from "./pages/Iletisim";
import SolarBackground from "./components/SolarBackground";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <SolarBackground />
      <Navbar />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/hesaplayici" element={<Hesaplayici />} />
          <Route path="/nasil-calisir" element={<NasilCalisir />} />
          <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
          <Route path="/hakkimda" element={<Hakkimda />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
