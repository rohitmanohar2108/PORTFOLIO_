import React from 'react';
import { skills } from '../../data/skills';

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="font-mono text-emerald-400 text-base mr-2">04.</span>
          Skills
        </h2>

        {/* Updated grid structure */}
        <div className="grid grid-cols-2 gap-8 max-w-4xl md:grid-cols-2 lg:grid-cols-4">
          {/* Languages Section */}
          <div>
            <h3 className="text-emerald-400 font-mono mb-4">Languages</h3>
            <ul className="space-y-2">
              {skills.languages.map((skill, index) => (
                <li key={index} className="flex items-center text-white">
                  <span className="text-emerald-400 mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Frameworks Section */}
          <div>
            <h3 className="text-emerald-400 font-mono mb-4">Frameworks</h3>
            <ul className="space-y-2">
              {skills.frameworks.map((skill, index) => (
                <li key={index} className="flex items-center text-white">
                  <span className="text-emerald-400 mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Section */}
          <div>
            <h3 className="text-emerald-400 font-mono mb-4">Tools</h3>
            <ul className="space-y-2">
              {skills.tools.map((skill, index) => (
                <li key={index} className="flex items-center text-white">
                  <span className="text-emerald-400 mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Design Section */}
          <div>
            <h3 className="text-emerald-400 font-mono mb-4">Design</h3>
            <ul className="space-y-2">
              {skills.design.map((skill, index) => (
                <li key={index} className="flex items-center text-white">
                  <span className="text-emerald-400 mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
