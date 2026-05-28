import { describe, it, expect } from "vitest";
import { StaticPortfolioRepository } from "@/infrastructure/repositories/StaticPortfolioRepository";
import { es } from "@/infrastructure/i18n/es";
import { en } from "@/infrastructure/i18n/en";

describe("StaticPortfolioRepository", () => {
  describe("ES locale", () => {
    const repo = new StaticPortfolioRepository(es);

    it("should return hero content matching ES dictionary", async () => {
      const hero = await repo.getHero();

      expect(hero.greeting).toBe("Hola, soy ");
      expect(hero.name).toBe("S74RK1113R");
      expect(hero.role).toBe("Desarollador frontend");
      expect(hero.aboutText).toBe(
        "Enfocado en la creación de sitios web atractivos y escalables con React.",
      );
    });

    it("should return exactly 2 projects with correct ES content", async () => {
      const projects = await repo.getProjects();

      expect(projects).toHaveLength(2);

      const plantrek = projects.find((p) => p.id === "plantrek")!;
      expect(plantrek).toBeDefined();
      expect(plantrek.title).toBe("Plantrek");
      expect(plantrek.description).toBe(
        "Esta web fue creada para la aplicación plantrek actualmente disponible en Play Store.",
      );
      expect(plantrek.techStack).toEqual([
        "React",
        "TailwindCSS",
        "Vite",
        "JavaScript",
      ]);
      expect(plantrek.links.demo).toBe("https://www.plantrek.app");

      const dynamJobs = projects.find((p) => p.id === "dynamJobs")!;
      expect(dynamJobs).toBeDefined();
      expect(dynamJobs.title).toBe("Dynam Jobs");
      expect(dynamJobs.description).toBe(
        "Página creada para los CEO de Dynam Jobs",
      );
      expect(dynamJobs.techStack).toEqual([
        "React",
        "TailwindCSS",
        "Vite",
        "JavaScript",
        "GSAP",
      ]);
      expect(dynamJobs.links.demo).toBe("https://www.dynamjobs.com/");
    });

    it("should return exactly 10 skills in ES locale", async () => {
      const skills = await repo.getSkills();

      expect(skills).toHaveLength(10);
      expect(skills).toEqual([
        "React",
        "TailwindCSS",
        "Vite",
        "JavaScript",
        "GSAP",
        "Git",
        "GitHub",
        "CSS",
        "HTML",
        "Visual Studio Code",
      ]);
    });

    it("should return about me with 3 paragraphs in ES locale", async () => {
      const about = await repo.getAboutMe();

      // About is joined with spaces; verify it contains all 3 paragraph texts
      expect(about).toContain(
        "Soy desarrollador frontend web graduado de Ingeniería Informática",
      );
      expect(about).toContain("me gusta el diseño gráfico");
      expect(about).toContain("aprender tecnologías nuevas");
    });

    it("should return contact content matching ES dictionary", async () => {
      const contact = await repo.getContact();

      expect(contact.information).toBe(
        "Si te gusta mi trabajo puedes contactarme a cualquiera de mis redes.",
      );
      expect(contact.whatsapp).toBe("https://wa.link/ywwvk8");
      expect(contact.github).toBe("https://github.com/S74RK1113R");
      expect(contact.linkedin).toContain("linkedin.com/in/randy-escalona");
      expect(contact.email).toBe("randyes16@gmail.com");
    });
  });

  describe("EN locale", () => {
    const repo = new StaticPortfolioRepository(en);

    it("should return hero content matching EN dictionary", async () => {
      const hero = await repo.getHero();

      expect(hero.greeting).toBe("Hello, I'm ");
      expect(hero.name).toBe("S74RK1113R");
      expect(hero.role).toBe("Frontend developer");
      expect(hero.aboutText).toBe(
        "Focused on creating attractive and scalable websites with React.",
      );
    });

    it("should return exactly 2 projects with correct EN content", async () => {
      const projects = await repo.getProjects();

      expect(projects).toHaveLength(2);

      const plantrek = projects.find((p) => p.id === "plantrek")!;
      expect(plantrek).toBeDefined();
      expect(plantrek.title).toBe("Plantrek");
      expect(plantrek.description).toBe(
        "This website was created for the plantrek app currently available on Play Store.",
      );

      const dynamJobs = projects.find((p) => p.id === "dynamJobs")!;
      expect(dynamJobs).toBeDefined();
      expect(dynamJobs.title).toBe("Dynam Jobs");
      expect(dynamJobs.description).toBe(
        "Website created for the CEO of Dynam Jobs",
      );
    });

    it("should return exactly 10 skills in EN locale", async () => {
      const skills = await repo.getSkills();

      expect(skills).toHaveLength(10);
      expect(skills).toEqual([
        "React",
        "TailwindCSS",
        "Vite",
        "JavaScript",
        "GSAP",
        "Git",
        "GitHub",
        "CSS",
        "HTML",
        "Visual Studio Code",
      ]);
    });

    it("should return about me with 3 paragraphs in EN locale", async () => {
      const about = await repo.getAboutMe();

      expect(about).toContain(
        "frontend web developer graduated in Computer Engineering",
      );
      expect(about).toContain("graphic design");
      expect(about).toContain("learning new technologies");
    });

    it("should return contact content matching EN dictionary", async () => {
      const contact = await repo.getContact();

      expect(contact.information).toBe(
        "If you like my work, you can contact me through any of my social accounts.",
      );
      expect(contact.whatsapp).toBe("https://wa.link/ywwvk8");
      expect(contact.github).toBe("https://github.com/S74RK1113R");
      expect(contact.linkedin).toContain("linkedin.com/in/randy-escalona");
      expect(contact.email).toBe("randyes16@gmail.com");
    });
  });

  describe("Cross-locale consistency", () => {
    it("should have same skills across locales", async () => {
      const esRepo = new StaticPortfolioRepository(es);
      const enRepo = new StaticPortfolioRepository(en);

      const esSkills = await esRepo.getSkills();
      const enSkills = await enRepo.getSkills();

      expect(esSkills).toEqual(enSkills);
    });

    it("should have same project count (2) across locales", async () => {
      const esRepo = new StaticPortfolioRepository(es);
      const enRepo = new StaticPortfolioRepository(en);

      const esProjects = await esRepo.getProjects();
      const enProjects = await enRepo.getProjects();

      expect(esProjects).toHaveLength(2);
      expect(enProjects).toHaveLength(2);
    });

    it("should return all required sections", async () => {
      const repo = new StaticPortfolioRepository(es);

      const hero = await repo.getHero();
      const projects = await repo.getProjects();
      const skills = await repo.getSkills();
      const about = await repo.getAboutMe();
      const contact = await repo.getContact();

      expect(hero).toBeDefined();
      expect(projects).toBeDefined();
      expect(skills).toBeDefined();
      expect(about).toBeDefined();
      expect(contact).toBeDefined();
    });
  });
});
