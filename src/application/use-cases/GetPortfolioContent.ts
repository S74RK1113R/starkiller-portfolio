import type { PortfolioRepository } from "../../domain/repositories/PortfolioRepository";
import type { PortfolioContentDTO } from "../dtos/PortfolioContentDTO";

export class GetPortfolioContent {
  constructor(private readonly repository: PortfolioRepository) {}

  async execute(): Promise<PortfolioContentDTO> {
    const [hero, projects, skills, about, contact] = await Promise.all([
      this.repository.getHero(),
      this.repository.getProjects(),
      this.repository.getSkills(),
      this.repository.getAboutMe(),
      this.repository.getContact(),
    ]);

    return {
      hero,
      projects,
      skills,
      about,
      contact,
    };
  }
}
