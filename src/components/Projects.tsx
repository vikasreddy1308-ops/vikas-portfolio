import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
  {
    title: 'Lasy – Study & Material Portal',
    description:
      'A web-based portal for students to access and upload study materials, notes, and PYQs organized by year and course. Built with focus on ease of use, client-side filtering, and secure upload flows.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'JavaScript'],
    image: 'https://images.pexels.com/photos/278941/pexels-photo-278941.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/yourusername/lasyplatform',
    live: 'https://lasyplatform.web.app',
    gradient: 'from-teal-500 to-blue-500',
  },
  {
    title: 'Global Tech Conference 2025 Website',
    description:
      'Developed a fully responsive informational and registration website for a major industry conference with multi-track sessions, speaker profiles, and dynamic agenda filtering — emphasizing accessibility and performance.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'REST API'],
    image: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/yourusername/conference-website',
    live: 'https://conference.yourdomain.com',
    gradient: 'from-indigo-500 to-purple-500',
  },
];


  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500`} />

              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative overflow-hidden h-48 sm:h-64 md:h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`} />
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-lg text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-sm font-medium`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
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
