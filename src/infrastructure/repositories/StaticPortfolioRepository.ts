import type { PortfolioRepository } from "../../domain/repositories/PortfolioRepository";
import type { Hero } from "../../domain/entities/Hero";
import type { Project } from "../../domain/entities/Project";
import type { Contact } from "../../domain/entities/Contact";
import type { I18nDictionary } from "../i18n/types";

export class StaticPortfolioRepository implements PortfolioRepository {
  constructor(private readonly dictionary: I18nDictionary) {}

  async getHero(): Promise<Hero> {
    return {
      greeting: this.dictionary.greeting,
      name: this.dictionary.name,
      role: this.dictionary.role,
      aboutText: this.dictionary.aboutText,
    };
  }

  async getProjects(): Promise<Project[]> {
    const keys = Object.keys(this.dictionary.projectNames) as Array<
      keyof typeof this.dictionary.projectNames
    >;

    return keys.map((key) => ({
      id: key,
      title: this.dictionary.projectNames[key],
      description: this.dictionary.projectDescriptions[key],
      techStack: this.dictionary.projectTech[key],
      links: {
        demo: this.dictionary.projectUrls[key],
      },
    }));
  }

  async getSkills(): Promise<string[]> {
    return [...this.dictionary.skills];
  }

  async getAboutMe(): Promise<string> {
    return this.dictionary.aboutParagraphs.join(" ");
  }

  async getContact(): Promise<Contact> {
    return { ...this.dictionary.contact };
  }
}
