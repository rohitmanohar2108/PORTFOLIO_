export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  featured?: boolean;
}

export interface Job {
  company: string;
  title: string;
  location: string;
  range: string;
  duties: string[];
}