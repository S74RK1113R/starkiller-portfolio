import type { Hero } from "../../domain/entities/Hero";
import type { Project } from "../../domain/entities/Project";
import type { Contact } from "../../domain/entities/Contact";

export interface PortfolioContentDTO {
  hero: Hero;
  projects: Project[];
  skills: string[];
  about: string;
  contact: Contact;
}
