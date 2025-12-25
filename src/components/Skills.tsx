import { Code2, Cpu, LineChart, Wrench } from "lucide-react";

const Skills = () => {
  const skillGroups = [
    {
      title: "Algorithms & Computer Science",
      icon: Cpu,
      skills: [
        "Data Structures",
        "Graph Algorithms",
        "Dynamic Programming",
        "Greedy Algorithms",
        "Binary Search",
        "Time & Space Complexity Analysis",
      ],
    },
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        "C++",
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      title: "Machine Learning & Data",
      icon: LineChart,
      skills: [
        "Supervised Learning",
        "Model Evaluation (Accuracy, ROC-AUC)",
        "Feature Engineering",
        "Scikit-learn",
        "Pandas & NumPy",
      ],
    },
    {
      title: "Tools & Development",
      icon: Wrench,
      skills: [
        "Git & GitHub",
        "Linux",
        "REST APIs",
        "Vite",
        "Firebase",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* SKILL GROUPS */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/40 transition"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-300 text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition"
                    >
                      {skill}
                    </span>
                  ))}
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
