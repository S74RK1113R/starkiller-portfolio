import { describe, it, expect } from "vitest";
import type { Project } from "@/domain/entities/Project";
import type { Skill } from "@/domain/entities/Skill";
import type { Hero } from "@/domain/entities/Hero";
import type { Contact } from "@/domain/entities/Contact";

describe("Domain Entities", () => {
  describe("Project", () => {
    it("should have correct shape with all fields", () => {
      const project: Project = {
        id: "plantrek",
        title: "Plantrek",
        description: "Test description",
        techStack: ["React", "TypeScript"],
        links: {
          github: "https://github.com/test/plantrek",
          demo: "https://plantrek.app",
        },
      };

      expect(project.id).toBe("plantrek");
      expect(project.title).toBe("Plantrek");
      expect(project.description).toBe("Test description");
      expect(project.techStack).toEqual(["React", "TypeScript"]);
      expect(project.links.github).toBe("https://github.com/test/plantrek");
      expect(project.links.demo).toBe("https://plantrek.app");
    });

    it("should allow optional github link to be omitted", () => {
      const project: Project = {
        id: "dynam-jobs",
        title: "Dynam Jobs",
        description: "Test description",
        techStack: ["React", "TailwindCSS"],
        links: {
          demo: "https://dynamjobs.com",
        },
      };

      expect(project.links.github).toBeUndefined();
      expect(project.links.demo).toBe("https://dynamjobs.com");
    });
  });

  describe("Skill", () => {
    it("should have correct shape with name", () => {
      const skill: Skill = {
        name: "React",
      };

      expect(skill.name).toBe("React");
    });
  });

  describe("Hero", () => {
    it("should have correct shape with all fields", () => {
      const hero: Hero = {
        greeting: "Hola, soy ",
        name: "S74RK1113R",
        role: "Desarollador frontend",
        aboutText:
          "Enfocado en la creación de sitios web atractivos y escalables con React.",
      };

      expect(hero.greeting).toBe("Hola, soy ");
      expect(hero.name).toBe("S74RK1113R");
      expect(hero.role).toBe("Desarollador frontend");
      expect(hero.aboutText).toBe(
        "Enfocado en la creación de sitios web atractivos y escalables con React.",
      );
    });
  });

  describe("Contact", () => {
    it("should have correct shape with all fields", () => {
      const contact: Contact = {
        information: "Contact info text",
        whatsapp: "https://wa.link/test",
        github: "https://github.com/test",
        linkedin: "https://linkedin.com/in/test",
        email: "test@example.com",
      };

      expect(contact.information).toBe("Contact info text");
      expect(contact.whatsapp).toBe("https://wa.link/test");
      expect(contact.github).toBe("https://github.com/test");
      expect(contact.linkedin).toBe("https://linkedin.com/in/test");
      expect(contact.email).toBe("test@example.com");
    });
  });
});
