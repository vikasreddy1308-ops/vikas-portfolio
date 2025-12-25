import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profile from "../assets/vikas.jpg";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center">
        
        {/* IMAGE — 40% */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-2xl" />
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-1.5 bg-slate-900 border border-slate-700">
              <img
                src={profile}
                alt="Vikas Reddy Meka"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* TEXT — 60% */}
        <div>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm text-cyan-400 border border-cyan-500/20 rounded-full">
            Software Engineering Portfolio
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Vikas Reddy Meka
            </span>
          </h1>

          <h2 className="text-xl md:text-3xl text-slate-300 mb-6">
            Computer Science Engineer <span className="text-cyan-400">|</span> IIT Patna
          </h2>

          <p className="text-slate-400 max-w-xl mb-8 leading-relaxed">
            Strong foundation in algorithms, graph theory, and machine learning.
            Experienced in building efficient, data-driven systems with real
            performance guarantees.
          </p>

          <div className="flex gap-6 mb-6">
            <Social href="https://github.com/vikasreddy1308-ops">
              <Github />
            </Social>
            <Social href="https://www.linkedin.com/in/vikas-reddy-b6ab8b397">
              <Linkedin />
            </Social>
            <Social href="mailto:vikasreddy1308@gmail.com">
              <Mail />
            </Social>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition"
          >
            Explore Profile <ArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
}

function Social({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-400 transition"
    >
      {children}
    </a>
  );
}
