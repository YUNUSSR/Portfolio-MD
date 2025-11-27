import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
