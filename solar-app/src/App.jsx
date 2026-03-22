import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Anasayfa from "./pages/Anasayfa";
import Hesaplayici from "./pages/Hesaplayici";
import NasilCalisir from "./pages/NasilCalisir";
import Hakkimda from "./pages/Hakkimda";
import Iletisim from "./pages/Iletisim";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/hesaplayici" element={<Hesaplayici />} />
        <Route path="/nasil-calisir" element={<NasilCalisir />} />
        <Route path="/hakkimda" element={<Hakkimda />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Routes>
    </BrowserRouter>
  );
}
