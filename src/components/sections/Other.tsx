import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { otherProjects } from '../../data/projects';

export const Other = () => {
  return (
    <div className="mt-32">
      <h3 className="text-center text-slate-200 text-2xl font-bold mb-16">
        Other Noteworthy Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProjects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-lg p-8 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex justify-between items-center mb-8">
              <Folder size={40} className="text-emerald-400" />
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.external && (
                  <a
                    href={project.external}
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-slate-200 text-xl font-bold mb-2">
              <a href={project.external} className="hover:text-emerald-400 transition-colors">
                {project.title}
              </a>
            </h3>
            <p className="text-slate-400 mb-8">{project.description}</p>
            <ul className="flex flex-wrap gap-3 text-slate-300 font-mono text-xs">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};