import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Home5 from "./pages/Home5";
import Home6 from "./pages/Home6";
import Home7 from "./pages/Home7";
import Company from "./pages/Company";
import Equipment from "./pages/Equipment";
import Business from "./pages/Business";
import Works from "./pages/Works";
import Recruit from "./pages/Recruit";
import Recruit2 from "./pages/Recruit2";
import RecruitField from "./pages/RecruitField";
import RecruitSales from "./pages/RecruitSales";
import RecruitStaffDetail from "./pages/RecruitStaffDetail";
import RecruitVoice from "./pages/RecruitVoice";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home7 />} />
          <Route path="company" element={<Company />} />
          <Route path="equipment" element={<Equipment />} />  
          <Route path="business" element={<Business />} />
          <Route path="works" element={<Works />} />
          <Route path="recruit" element={<Recruit />} />
          <Route path="recruit2" element={<Recruit2 />} />
          <Route path="recruit/field" element={<RecruitField />} />
          <Route path="recruit/field/:staffId" element={<RecruitStaffDetail />} />
          <Route path="recruit/sales" element={<RecruitSales />} />
          <Route path="recruit/voice/:id" element={<RecruitVoice />} />
          <Route path="contact" element={<Contact />} />
          <Route path="home" element={<Home />} />
          <Route path="home2" element={<Home2 />} />
          <Route path="home3" element={<Home3 />} />
          <Route path="home4" element={<Home4 />} />
          <Route path="home5" element={<Home5 />} />
          <Route path="home6" element={<Home6 />} />
          <Route path="home7" element={<Home7 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
