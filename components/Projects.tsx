
import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-800/40 border border-slate-700/50 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all flex flex-col h-full"
            >
              <div className="h-48 relative overflow-hidden bg-slate-900">
                <img 
                  src={`https://picsum.photos/seed/${project.title}/600/400`} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="p-2 bg-slate-900/80 backdrop-blur-md rounded-lg text-cyan-400">
                    <Code size={18} />
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold uppercase tracking-wider text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  {project.achievements.map((item, iIdx) => (
                    <div key={iIdx} className="flex gap-3 items-start text-xs text-slate-300">
                      <div className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-700/50">
                  <a href={project.links.github} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={project.links.details} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold">
                    View Details <ExternalLink size={14} />
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
