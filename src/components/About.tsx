import { GraduationCap, Code2, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-200">Education</h3>
                  <p className="text-slate-400">Indian Institute of Technology, Patna</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Pursuing excellence in technology and innovation at one of India's premier institutions,
                combining theoretical knowledge with practical implementation.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 group-hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">Passionate Developer</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Dedicated to crafting exceptional digital experiences through clean, efficient code
                      and modern development practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 group-hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">Innovation Focused</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Constantly exploring emerging technologies and best practices to deliver
                      cutting-edge solutions that make a difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
