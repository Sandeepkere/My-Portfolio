
import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATIONS, CERTIFICATIONS } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-cyan-500 rounded-2xl text-slate-950">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>

            <div className="space-y-6">
              {EDUCATIONS.map((edu, idx) => (
                <div key={idx} className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:border-cyan-500/30 transition-all">
                  <div className="text-cyan-400 font-bold mb-1">{edu.period}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-slate-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-blue-600 rounded-2xl text-white">
                <Award size={28} />
              </div>
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 bg-slate-800/40 border border-slate-700/50 rounded-2xl group hover:bg-slate-800 transition-all">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-slate-300 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
