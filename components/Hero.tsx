
import React from 'react';
import { FileText, ChevronRight, Mail, Terminal as TerminalIcon, ShieldCheck } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-8 tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Cyber Security Specialist
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
              SANDEEP<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">KERE.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-semibold mb-6 max-w-xl border-l-4 border-cyan-500 pl-6">
              {HERO_CONTENT.tagline}
            </p>
            
            <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
              {HERO_CONTENT.intro}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="group flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-2xl transition-all shadow-xl shadow-cyan-500/25 active:scale-95"
              >
                Explore Projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all border border-slate-700 active:scale-95">
                <FileText size={18} /> Download CV
              </button>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-8 text-slate-500">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:text-cyan-400 transition-colors">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-sm font-medium tracking-wide">SOC Analyst</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:text-cyan-400 transition-colors">
                  <TerminalIcon size={20} />
                </div>
                <span className="text-sm font-medium tracking-wide">Threat Hunting</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block group">
            <div className="relative z-10 p-2 border border-slate-700/50 bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Cybersecurity Concept" 
                className="rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover w-full h-[600px]"
              />
              
              <div className="absolute top-8 right-8 bg-slate-900/90 border border-slate-700/50 backdrop-blur-md p-4 rounded-2xl shadow-2xl translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="text-cyan-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-black">Security</div>
                    <div className="text-sm font-bold text-white">Verified</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Animated rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-cyan-500/5 rounded-full -z-10 animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-blue-500/5 rounded-full -z-10 animate-spin-slow direction-reverse" style={{ animationDuration: '30s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
