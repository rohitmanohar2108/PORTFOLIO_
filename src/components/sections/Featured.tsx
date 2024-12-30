import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { featuredProjects } from '../../data/projects';

export const Featured = () => {
  return (
    <div className="space-y-32">
      {featuredProjects.map((project, index) => (
        <div
          key={index}
          className={`relative grid grid-cols-12 items-center gap-4 ${
            index % 2 === 0 ? '' : 'text-right'
          }`}
        >
          {/* Project Image */}
          <div
            className={`col-span-full lg:col-span-7 lg:${
              index % 2 === 0 ? 'col-start-1' : 'col-start-6'
            } relative rounded group`}
          >
            <a href={project.external} target="_blank" rel="noopener noreferrer">
              <div className="relative h-[350px] rounded overflow-hidden">
                <div className="absolute inset-0 bg-emerald-400/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </a>
          </div>

          {/* Project Content */}
          <div
            className={`col-span-full lg:col-span-6 lg:${
              index % 2 === 0 ? 'col-start-7' : 'col-start-1'
            } lg:row-start-1 z-10`}
          >
            <p className="font-mono text-emerald-400 text-sm mb-2">Featured Project</p>
            <h3 className="text-2xl font-bold text-slate-200 mb-4">
              <a href={project.external} className="hover:text-emerald-400 transition-colors">
                {project.title}
              </a>
            </h3>
            <div className="bg-slate-800/90 p-6 rounded-lg mb-4 backdrop-blur shadow-xl">
              <p className="text-slate-400">{project.description}</p>
            </div>
            <ul className={`flex flex-wrap gap-4 text-slate-300 font-mono text-sm mb-8 ${
              index % 2 === 0 ? '' : 'justify-end'
            }`}>
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'justify-end'}`}>
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
        </div>
      ))}
    </div>
  );
};