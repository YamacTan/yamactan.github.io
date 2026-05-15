export interface Skill {
  name: string;
  description: string;
  icon: string;
  span?: 'col-span-1' | 'col-span-2';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description?: string;
  logo?: string;
  current?: boolean;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface TimelineEntry {
  id: string;
  company: string;
  position: string;
  period: string;
  current?: boolean;
  details?: string[];
  technologies?: string[];
}

export interface EducationEntry {
  id: string;
  school: string;
  degree: string;
  field: string;
  period: string;
  details?: string[];
  skills?: string[];
}

export interface AcademicProject {
  id: string;
  title: string;
  year: string;
  description?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'cloud-devops' | 'ai-ml' | 'programming';
  credentialUrl?: string;
  credentialId?: string;
}
