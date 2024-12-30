import React from "react";
import { featuredProjects } from "../data/projects";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="flex items-center whitespace-nowrap text-2xl font-bold text-slate-200 mb-16">
          <span className="font-mono text-emerald-400 text-lg mr-2">05.</span>
          Some Things I've Built
          <span className="relative ml-6 w-full h-[1px] bg-slate-700" />
        </h2>

        {/* Featured Projects */}
        <div className="space-y-32">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Side: Project Image */}
              <div className="lg:col-span-5">
                <div className="relative h-full rounded overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Side: Project Details */}
              <div className="lg:col-span-7">
                <p className="font-mono text-emerald-400 text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold text-slate-200 mb-4 hover:text-teal-300">
                  {project.title}
                </h3>
                <div className="  rounded-lg mb-4 ">
                  <p className="text-slate-400">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-4 text-slate-300 font-mono text-sm mb-8">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-teal-400/10  text-teal-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-slate-300 hover:text-emerald-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      className="text-slate-300 hover:text-emerald-400"
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
      </div>
    </section>
  );
};
