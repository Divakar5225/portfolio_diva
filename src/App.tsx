import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Expertise from "./components/Expertise/Expertise";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Research from "./components/Research/Research";
import TechnicalSkills from "./components/Technicalskills/Technicalskills";
import Achievements from "./components/Achivements/Achivements";
import Publications from "./components/Publications/Publications";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Navbar />
      <main className="route-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<><About /><Experience /><Education /><Achievements /></>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<><Research /><Publications /><Certifications /></>} />
          <Route path="/skills" element={<><Expertise /><TechnicalSkills /></>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

