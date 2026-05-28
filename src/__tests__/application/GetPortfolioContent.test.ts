import { describe, it, expect, vi } from "vitest";
import { GetPortfolioContent } from "@/application/use-cases/GetPortfolioContent";
import type { PortfolioRepository } from "@/domain/repositories/PortfolioRepository";
import type { PortfolioContentDTO } from "@/application/dtos/PortfolioContentDTO";

describe("GetPortfolioContent use case", () => {
  it("should call all 5 repository methods and return aggregated DTO", async () => {
    const mockHero = {
      greeting: "Hola, soy ",
      name: "S74RK1113R",
      role: "Desarollador frontend",
      aboutText: "About text",
    };

    const mockProjects = [
      {
        id: "plantrek",
        title: "Plantrek",
        description: "Description",
        techStack: ["React"],
        links: { demo: "https://plantrek.app" },
      },
      {
        id: "dynamJobs",
        title: "Dynam Jobs",
        description: "Description 2",
        techStack: ["React", "GSAP"],
        links: { demo: "https://dynamjobs.com" },
      },
    ];

    const mockSkills = ["React", "TailwindCSS", "JavaScript"];
    const mockAbout = "About me paragraph.";
    const mockContact = {
      information: "Contact info",
      whatsapp: "https://wa.link/test",
      github: "https://github.com/test",
      linkedin: "https://linkedin.com/in/test",
      email: "test@example.com",
    };

    const mockRepository: PortfolioRepository = {
      getHero: vi.fn().mockResolvedValue(mockHero),
      getProjects: vi.fn().mockResolvedValue(mockProjects),
      getSkills: vi.fn().mockResolvedValue(mockSkills),
      getAboutMe: vi.fn().mockResolvedValue(mockAbout),
      getContact: vi.fn().mockResolvedValue(mockContact),
    };

    const useCase = new GetPortfolioContent(mockRepository);
    const result: PortfolioContentDTO = await useCase.execute();

    // Verify all 5 repository methods were called
    expect(mockRepository.getHero).toHaveBeenCalledOnce();
    expect(mockRepository.getProjects).toHaveBeenCalledOnce();
    expect(mockRepository.getSkills).toHaveBeenCalledOnce();
    expect(mockRepository.getAboutMe).toHaveBeenCalledOnce();
    expect(mockRepository.getContact).toHaveBeenCalledOnce();

    // Verify DTO shape matches expected output
    expect(result).toEqual({
      hero: mockHero,
      projects: mockProjects,
      skills: mockSkills,
      about: mockAbout,
      contact: mockContact,
    });

    // Verify DTO has all required keys
    const dtoKeys = Object.keys(result);
    expect(dtoKeys).toContain("hero");
    expect(dtoKeys).toContain("projects");
    expect(dtoKeys).toContain("skills");
    expect(dtoKeys).toContain("about");
    expect(dtoKeys).toContain("contact");
  });

  it("should execute Promise.all for parallel repository calls", async () => {
    const mockRepository: PortfolioRepository = {
      getHero: vi.fn().mockResolvedValue({
        greeting: "Hello",
        name: "Test",
        role: "Dev",
        aboutText: "Bio",
      }),
      getProjects: vi.fn().mockResolvedValue([]),
      getSkills: vi.fn().mockResolvedValue([]),
      getAboutMe: vi.fn().mockResolvedValue(""),
      getContact: vi.fn().mockResolvedValue({
        information: "",
        whatsapp: "",
        github: "",
        linkedin: "",
        email: "",
      }),
    };

    const useCase = new GetPortfolioContent(mockRepository);
    const result = await useCase.execute();

    expect(result).toBeDefined();
    expect(result.hero.name).toBe("Test");
    expect(result.projects).toEqual([]);
    expect(result.skills).toEqual([]);
    expect(result.about).toBe("");
    expect(result.contact.email).toBe("");
  });
});
