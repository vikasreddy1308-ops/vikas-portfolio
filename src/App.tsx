import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 relative">
      
      {/* BACKGROUND LAYERS (FORCED BEHIND) */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />

      {/* NAV */}
      <Navigation />

      {/* MAIN CONTENT */}
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Skills />
        <CompetitiveProgramming />
        <Projects />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
