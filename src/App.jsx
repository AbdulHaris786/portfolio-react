
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

import Home from "./pages/home.jsx";

import About from "./pages/about.jsx";
import Skills from "./pages/skills.jsx";
import Projects from "./pages/projects.jsx";
import Education from "./pages/education.jsx";
import Contact from "./pages/contact.jsx";

import Certifications from "./pages/certification.jsx";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route
            path="/certifications"
            element={<Certifications />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
