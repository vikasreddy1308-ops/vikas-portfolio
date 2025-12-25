import { Code2, Network, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Programming Languages",
      icon: Code2,
      items: ["C++", "C", "Python"],
    },
    {
      title: "Data Structures & Algorithms",
      icon: Network,
      items: [
        "Graphs",
        "Dynamic Programming",
        "Greedy Algorithms",
        "BFS / DFS / Dijkstra",
      ],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      items: [
        "Logistic Regression",
        "Random Forest",
        "Model Evaluation",
        "Cross Validation",
      ],
    },
    {
      title: "Tools & Environment",
      icon: Wrench,
      items: ["Linux", "Git", "VS Code", "LaTeX"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-cyan-400 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-7"
              >
                {/* HEADER */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {skill.title}
                  </h3>
                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-lg bg-slate-800/60 border border-slate-700 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition"
                    >
                      {item}
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
