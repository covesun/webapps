import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Company from "./pages/Company";
import Business from "./pages/Business";
import Works from "./pages/Works";
import Recruit from "./pages/Recruit";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="business" element={<Business />} />
          <Route path="works" element={<Works />} />
          <Route path="recruit" element={<Recruit />} />
          <Route path="contact" element={<Contact />} />
          <Route path="home2" element={<Home2 />} />
          <Route path="home3" element={<Home3 />} />
          <Route path="home4" element={<Home4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
