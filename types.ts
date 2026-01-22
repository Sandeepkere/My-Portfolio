
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  skills: string[];
  links: {
    github?: string;
    details?: string;
  };
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  location?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  logo?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}
