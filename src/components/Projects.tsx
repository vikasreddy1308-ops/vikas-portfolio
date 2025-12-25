import { Github } from "lucide-react";
import routingImg from "../assets/emergency-routing.jpg";
import dropoutImg from "../assets/student-dropout-ml.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Emergency Facility Coverage and Routing System",
      description:
        "Graph-based system modeling a city-scale road network to analyze emergency response coverage. Implemented multi-source shortest-path algorithms to identify underserved regions and optimize facility placement, achieving ~30% reduction in worst-case response delay.",
      tech: "C++, STL, Graph Algorithms",
      github: "https://github.com/vikasreddy1308-ops/emergency-routing-system",
      image: routingImg,
    },
    {
      title: "Student Performance & Dropout Risk Prediction",
      description:
        "Machine learning models built on academic and attendance data to predict student dropout risk. Achieved ~93% accuracy with ROC-AUC up to 0.94, supported by cross-validation and feature importance analysis.",
      tech: "Python, Pandas, NumPy, Scikit-learn",
      github: "https://github.com/vikasreddy1308-ops/student-dropout-prediction",
      image: dropoutImg,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-cyan-400 text-center">
          Projects
        </h2>

        <div className="space-y-14">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 sm:p-6"
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                
                {/* IMAGE CONTAINER */}
                <div className="w-full">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-800/40 p-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center px-1 sm:px-2">
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-sm text-cyan-400 mb-6">
                    {project.tech}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
