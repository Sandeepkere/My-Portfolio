
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-800 hover:border-cyan-500 transition-colors pb-4">
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              </div>
              
              <div className="bg-slate-800/30 p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800/50 transition-all">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <div className="text-cyan-400 font-semibold text-lg">{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="flex gap-4 items-start text-slate-400 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 mt-2.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
