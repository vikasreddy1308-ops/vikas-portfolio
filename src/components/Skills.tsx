import { Code, Database, Layout, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Tools & Technologies',
      icon: Zap,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300`} />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${category.color} bg-opacity-10 rounded-lg`}>
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
