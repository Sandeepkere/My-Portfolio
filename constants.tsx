
import React from 'react';
import { Shield, Search, Terminal, Database, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Project, Experience, Education, SkillCategory } from './types';

export const HERO_CONTENT = {
  name: "Sandeep Kere",
  tagline: "Junior Cybersecurity Professional | MSc Cyber Security | Digital Forensics & Threat Detection Specialist",
  intro: "Cybersecurity professional with hands-on experience in digital forensics, malware analysis, and threat detection. Currently seeking Detection & Response and SOC roles in the UK.",
};

export const PROJECTS: Project[] = [
  {
    title: "Misinformation Detection Using LLMs",
    description: "Academic research project analyzing misinformation using AI/ML techniques.",
    technologies: ["Python", "DeBERTa-v3-large", "DeepSeek-LLM-7B", "Phi-2"],
    achievements: [
      "Trained and evaluated multiple language models across diverse datasets",
      "Performed comparative analysis to identify optimal detection approaches",
      "Analyzed false positives/negatives to assess misclassification risks",
      "Utilized LIAR, FakeNewsNet, and real-time RSS feeds for data"
    ],
    skills: ["Machine learning", "Data preprocessing", "Model evaluation", "Security analytics"],
    links: { github: "#", details: "#" }
  },
  {
    title: "PESU Placement Manager",
    description: "Secure web application for automating student placement workflows.",
    technologies: ["PHP", "MySQL"],
    achievements: [
      "Built dynamic platform with automated eligibility checks",
      "Implemented role-based access control (RBAC)",
      "Integrated with central database for secure data retrieval",
      "Developed automated resume builder"
    ],
    skills: ["Web security", "Access control", "Database management", "Data validation"],
    links: { github: "#", details: "#" }
  },
  {
    title: "EDUOnline - Secure Video Conferencing",
    description: "Android application for real-time video communication.",
    technologies: ["Kotlin", "Firebase"],
    achievements: [
      "Implemented user authentication and access control",
      "Managed secure data transmission for audio/video streams",
      "Integrated Firebase for real-time database and notifications",
      "Built secure, modular architecture"
    ],
    skills: ["Mobile security", "API integration", "Secure communications"],
    links: { github: "#", details: "#" }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Gurugram Police",
    role: "Cyber Security Intern",
    period: "Jun 2021 - Jul 2021",
    achievements: [
      "Performed digital forensics on phishing, malware, and unauthorized access cases",
      "Conducted malware and log analysis for incident resolution",
      "Assisted with case documentation and stakeholder reporting",
      "Followed chain-of-custody and evidence handling best practices"
    ]
  },
  {
    company: "New You Solutions",
    role: "Social Media Manager",
    period: "Aug 2021 - Dec 2021",
    achievements: [
      "Managed multi-platform content strategy across Instagram, Facebook, LinkedIn, Twitter",
      "Monitored performance metrics and refined strategy based on data insights",
      "Recognized with Outstanding Organizer award"
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: "Robert Gordon University",
    degree: "MSc in Cyber Security",
    period: "Jan 2024 - Jul 2025"
  },
  {
    institution: "PES University",
    degree: "MCA, Network & Communication",
    period: "Dec 2021 - Oct 2023"
  },
  {
    institution: "Shree Medha Degree College",
    degree: "BCA, Computer Science",
    period: "Aug 2018 - Sep 2021"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Detection & Response",
    skills: ["Threat detection", "Phishing & malware analysis", "Log & network traffic analysis", "Evidence handling"],
    icon: "Shield"
  },
  {
    name: "Forensics & Tools",
    skills: ["Wireshark", "Autopsy", "FTK Imager", "SpiderFoot", "Nmap", "Metasploit", "Burp Suite", "SQLmap"],
    icon: "Search"
  },
  {
    name: "Data & Dev",
    skills: ["Python (pandas, NumPy, scikit-learn)", "LLM-based analysis", "MySQL", "PHP", "Model fine-tuning"],
    icon: "Terminal"
  },
  {
    name: "Professional",
    skills: ["Problem-solving", "Stakeholder communication", "Teamwork", "Technical documentation"],
    icon: "Briefcase"
  }
];

export const CERTIFICATIONS = [
  "Diploma in Information Technology",
  "Essential 101: Cyber Security Certification",
  "Advanced Ethical Hacking Program",
  "Outstanding New Jaycee 2021",
  "Zone Coordinator - Technical Support 2021"
];
