
import React from 'react';
import { Shield, Search, Terminal, Briefcase } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const Icons: Record<string, any> = {
  Shield: Shield,
  Search: Search,
  Terminal: Terminal,
  Briefcase: Briefcase
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise in cybersecurity, digital forensics, and data analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const IconComponent = Icons[category.icon];
            return (
              <div 
                key={idx} 
                className="group p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 bg-slate-800/50 text-slate-400 text-xs font-medium rounded-full border border-slate-700/50 group-hover:border-cyan-500/20 group-hover:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
