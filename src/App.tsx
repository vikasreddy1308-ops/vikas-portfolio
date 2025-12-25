import Navigation from "././components/Navigation.tsx";
import Hero from "././components/Hero.tsx";
import About from "././components/About.tsx";
import Skills from "././components/Skills.tsx";
import Projects from "././components/Projects.tsx";
import Contact from "././components/Contact.tsx";
import Logo from "././components/Logo.tsx";


function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />

      <Navigation />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

     <footer className="relative z-10 border-t border-slate-800 py-10 mt-20 text-center text-slate-400">
  {/* Logo */}
  <div className="flex justify-center mb-4">
    <Logo size="sm" />
  </div>

  {/* Credit */}
  <p className="text-sm">
    Designed &amp; Built by <span className="text-slate-300">Tharun Thirupathi</span>
  </p>

  {/* Copyright */}
  <p className="mt-1 text-xs text-slate-500">
    © {new Date().getFullYear()} All rights reserved
  </p>
</footer>


    </div>
  );
}

export default App;
