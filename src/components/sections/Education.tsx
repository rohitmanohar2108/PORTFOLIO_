import React, { useState } from "react";
import { education } from "../../data/education";

export const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold text-slate-100 whitespace-nowrap">
            <span className="font-mono text-emerald-400 text-base mr-2">
              03.
            </span>
            Education
          </h2>
          <div className="flex-grow h-px bg-slate-700 ml-4"></div>
        </div>
        <div className="grid grid-cols-12 gap-4 max-w-3xl">
          {/* Sidebar (Tabs) */}
          <div className="col-span-12 md:col-span-3">
            <div className="flex flex-row md:flex-col border-b md:border-b-0 md:border-l border-slate-700 overflow-x-auto md:overflow-visible">
              {education.map((edu, index) => (
                <button
                  key={index}
                  className={`py-3 px-4 text-left font-mono text-sm ${
                    activeTab === index
                      ? "text-emerald-400 border-l-2 md:border-l-2 bg-emerald-400/10 border-emerald-400 -ml-[2px]"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {edu.school}
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="col-span-12 md:col-span-9 pl-0 md:pl-8">
            {education[activeTab] && (
              <div>
                <h3 className="text-xl text-slate-200 mb-1">
                  {education[activeTab].degree}{" "}
                  <span className="text-emerald-400">
                    @ {education[activeTab].school}
                  </span>
                </h3>
                <p className="font-mono text-sm text-slate-400 mb-4">
                  {education[activeTab].range}
                </p>
                
                {Array.isArray(education[activeTab].description) ? (
                  <ul className="space-y-4">
                    {education[activeTab].description.map((course, index) => (
                      <li
                        key={index}
                        className="flex items-start text-slate-400"
                      >
                        <span className="text-emerald-400 mr-2">▹</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400">
                    {education[activeTab].description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
