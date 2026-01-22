
import React from 'react';
import { MapPin, Briefcase, GraduationCap, Globe } from 'lucide-react';

const About: React.FC = () => {
  const details = [
    { icon: <MapPin className="text-cyan-400" />, label: "Location", value: "Aberdeen, UK" },
    { icon: <Globe className="text-cyan-400" />, label: "Visa Status", value: "UK Graduate Visa" },
    { icon: <Briefcase className="text-cyan-400" />, label: "Target Roles", value: "SOC / Detection & Response" },
    { icon: <GraduationCap className="text-cyan-400" />, label: "Education", value: "MSc Cyber Security" },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Junior Cybersecurity Professional</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Passionate about identifying and mitigating digital threats, I specialize in digital forensics and security analytics. My background combines rigorous academic training with practical, hands-on experience gained through high-stakes internships and multi-faceted roles.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              I am particularly adept at malware and phishing analysis, log monitoring, and data-driven security investigations. My journey spans from India to the UK, giving me a unique perspective on global cybersecurity trends and a strong sense of adaptability.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div className="p-2 bg-slate-900 rounded-lg">{detail.icon}</div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{detail.label}</div>
                    <div className="text-white font-medium">{detail.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-3xl">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              Core Strengths
            </h4>
            <ul className="space-y-4">
              {[
                "Malware & Phishing Analysis",
                "Incident Response Lifecycle",
                "Network Traffic (Wireshark) Diagnostics",
                "Data-driven Security Analytics",
                "Chain-of-Custody & Evidence Handling",
                "Cross-cultural Adaptability"
              ].map((strength, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
              <p className="text-cyan-100 italic text-center">
                "Driven by curiosity and a commitment to securing digital environments through analytical thinking and technical excellence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
