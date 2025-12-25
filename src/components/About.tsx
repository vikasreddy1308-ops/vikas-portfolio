import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">About</h2>

        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="text-cyan-400" />
            <div>
              <h3 className="text-xl font-semibold">
                B.Tech – Computer Science & Engineering
              </h3>
              <p className="text-slate-400">
                Indian Institute of Technology Patna (2024–2028)
              </p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">
            I am a Computer Science undergraduate at IIT Patna with strong
            academic and practical experience in data structures, algorithms,
            graph theory, and machine learning. I focus on building efficient
            systems, solving complex optimization problems, and applying
            theoretical concepts to real-world engineering challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
