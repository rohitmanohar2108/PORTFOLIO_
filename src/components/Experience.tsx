import React, { useState } from 'react';
import { jobs } from '../data/experience';

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="#experience" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-100 mb-16">Where I've Worked</h2>
        
        <div className="grid grid-cols-12 gap-4 max-w-3xl">
          <div className="col-span-3">
            <div className="flex flex-col border-l border-slate-700">
              {jobs.map((job, index) => (
                <button
                  key={index}
                  className={`py-3 px-4 text-left font-mono text-sm ${
                    activeTab === index
                      ? 'text-emerald-400 border-l-2  border-emerald-400 -ml-[2px]'
                      : 'text-slate-400 hover:text-slate-200  hover:bg-slate-800'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {job.company}
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-9 pl-8">
            {jobs[activeTab] && (
              <div>
                <h3 className="text-xl text-slate-200  mb-1">
                  {jobs[activeTab].title}{' '}
                  <span className="text-emerald-400">@ {jobs[activeTab].company}</span>
                </h3>
                <p className="font-mono text-sm text-slate-400 mb-4">
                  {jobs[activeTab].range}
                </p>
                <ul className="space-y-4">
                  {jobs[activeTab].duties.map((duty, index) => (
                    <li key={index} className="flex items-start text-slate-400">
                      <span className="text-emerald-400 mr-2">▹</span>
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
