export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  industry?: string;
  focus?: string;
  highlights?: string[];
  images?: string[];
}

export interface Experience {
  role: string;
  company: string;
  description: string;
  tasks: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
