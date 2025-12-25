import { GraduationCap, Cpu, LineChart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT — MAIN DESCRIPTION */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-200">
                Academic Background
              </h3>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4">
              I am a Computer Science undergraduate at the Indian Institute of
              Technology (IIT) Patna, with a strong academic foundation in
              algorithms, data structures, operating systems, and machine
              learning.
            </p>

            <p className="text-slate-300 leading-relaxed">
              My academic training emphasizes rigorous problem solving,
              mathematical reasoning, and translating theoretical concepts into
              efficient, real-world systems.
            </p>
          </div>

          {/* RIGHT — FOCUS AREAS */}
          <div className="space-y-6">
            {/* CARD 1 */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-200">
                  Systems & Algorithms
                </h4>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Strong interest in algorithm design, graph theory, and
                performance-critical systems. Comfortable analyzing time and
                space complexity and implementing optimized solutions in C++ and
                Python.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <LineChart className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-200">
                  Data & Machine Learning
                </h4>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Hands-on experience building machine learning models for
                prediction and classification tasks, with a focus on data
                preprocessing, model evaluation, and interpretability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
