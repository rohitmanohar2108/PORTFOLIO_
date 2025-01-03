import React, { useState } from 'react';
import { jobs } from '../../data/experience';

export const Work = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="font-mono text-emerald-400 text-base mr-2">02.</span>
          Where I've Worked
        </h2>

        <div className="grid grid-cols-12 gap-4 max-w-3xl">
          {/* Company Tabs */}
          <div className="col-span-12 md:col-span-3">
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-slate-700">
              {jobs.map((job, index) => (
                <button
                  key={index}
                  className={`py-3 px-4 text-left font-mono text-sm whitespace-nowrap ${
                    activeTab === index
                      ? 'text-emerald-400 bg-emerald-400/10 md:bg-transparent md:border-l-2 md:border-emerald-400 md:-ml-[2px]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {job.company}
                </button>
              ))}
            </div>
          </div>

          {/* Job Details */}
          <div className="col-span-12 md:col-span-9 md:pl-8">
            {jobs[activeTab] && (
              <div>
                <h3 className="text-xl text-slate-200">
                  {jobs[activeTab].title}{' '}
                  <span className="text-emerald-400">@ {jobs[activeTab].company}</span>
                </h3>
                <p className="font-mono text-sm text-slate-400 mt-1 mb-4">
                  {jobs[activeTab].range}
                </p>
                <ul className="space-y-4">
                  {jobs[activeTab].duties.map((duty, index) => (
                    <li key={index} className="flex items-start text-white">
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