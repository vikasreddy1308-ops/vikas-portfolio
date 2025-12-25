import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profile from "../assets/Tharun-thirupathi.jpg";


export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-center">


        {/* PHOTO */}
       <div className="flex justify-center md:justify-center">
          <div className="relative">
            {/* Halo */}
            <div className="absolute -inset-4 md:-inset-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-2xl" />

            {/* Image */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full p-1.5 bg-slate-900/40 backdrop-blur border border-slate-700">
              <img
                src={profile}
                alt="Tharun Thirupathi"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left md:pl-6">

          <span className="inline-block px-3 py-1.5 mb-4 text-xs sm:text-sm text-cyan-400 border border-cyan-500/20 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
            Welcome to my portfolio
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 whitespace-nowrap">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Tharun Thirupathi
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-3xl text-slate-300 mb-4">
            Analytics-Driven Engineer
            <span className="hidden sm:inline text-cyan-400 mx-2">|</span>
            <span className="block sm:inline text-slate-400 sm:ml-2">
              IIT Patna
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-6 max-w-xl mx-auto md:mx-0">
            Transforming complex problems into clear, scalable solutions using
            data, technology, and structured thinking.
          </p>

          {/* SOCIALS */}
          <div className="flex justify-center md:justify-start gap-4 sm:gap-6 mb-6">
            <Social href="https://github.com/TharunThirupathi">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </Social>
            <Social href="https://www.linkedin.com/in/tharunthirupathi/">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </Social>
            <Social href="mailto:tharunthirupathi55@gmail.com">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </Social>
          </div>

          {/* CTA */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-sm sm:text-base text-slate-400 hover:text-cyan-400 transition"
          >
            Explore More <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}

function Social({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 sm:p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-400 transition"
    >
      {children}
    </a>
  );
}


