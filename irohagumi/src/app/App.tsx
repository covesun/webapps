import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Company from "./pages/Company";
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
          <Route path="works" element={<Works />} />
          <Route path="recruit" element={<Recruit />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
