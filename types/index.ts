export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
}

export interface TechItem {
  name: string;
  icon?: string;
  level?: number; // 0-100
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  color: string;
  category: 'AI Apps' | 'Full Stack' | 'Automation';
  featured?: boolean;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  tech?: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface ProjectOutcome {
  icon: string;
  title: string;
  description: string;
  outcome: string;
  tech: string[];
}

export interface NavLink {
  name: string;
  href: string;
}
