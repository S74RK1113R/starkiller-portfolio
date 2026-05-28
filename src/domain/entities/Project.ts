export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
  };
}
