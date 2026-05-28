import type { Project } from "../entities/Project";
import type { Hero } from "../entities/Hero";
import type { Contact } from "../entities/Contact";

export interface PortfolioRepository {
  getHero(): Promise<Hero>;
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<string[]>;
  getAboutMe(): Promise<string>;
  getContact(): Promise<Contact>;
}
