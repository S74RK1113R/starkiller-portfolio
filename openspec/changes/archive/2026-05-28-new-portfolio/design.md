# Design: New Portfolio — Next.js + Clean Architecture

## Technical Approach

The project will be a complete rewrite using **Next.js 15+ with App Router** to leverage Server Components and improved routing. The architecture will follow **Clean Architecture** principles, separating the codebase into four distinct layers: `domain`, `application`, `infrastructure`, and `presentation`. This ensures that business logic (the portfolio content and its structure) is decoupled from the framework (Next.js) and the UI (Radix UI + TailwindCSS).

Since the content is entirely static, the **Infrastructure** layer will serve as the single source of truth, providing data through a repository pattern. The **Application** layer will orchestrate the retrieval of this data via use cases, and the **Presentation** layer will consume it through highly composable, atomic components.

## Architecture Decisions

| Decision | Choice | Alternatives | Rationale |
| :--- | :--- | :--- | :--- |
| **Architecture Pattern** | Clean Architecture | Standard Next.js pattern | Decouples domain logic from UI and data sources, making the code more testable and maintainable even for a small project. |
| **Routing** | Next.js App Router | Pages Router | App Router is the modern standard for Next.js, offering better performance via Server Components and more granular control over layouts. |
| **Component Library** | Radix UI + TailwindCSS v4 | Headless UI / Mantine | Radix provides unstyled, accessible primitives that pair perfectly with TailwindCSS for complete design control and minimal bundle size. |
| **i18n Strategy** | Infrastructure-based Dictionary + React Context | Next.js i18n routing (middleware) | Given the "Single-page layout" requirement, a client-side context with persisted locale (cookie/localStorage) allows seamless transitions without complex segment-based routing. |
| **Folder Structure** | 4-layer `src/` + `app/` root | Everything in `src/` | Follows Next.js conventions while strictly enforcing the requested Clean Architecture layers. |

## Data Flow

The data flows from static definitions in the infrastructure layer up to the presentational components.

```text
[Infrastructure] (Static Dicts/JSON)
       │
       ▼
[Infrastructure] (Repository Impl) ───► [Domain] (Entities)
       │
       ▼
[Application] (Use Cases) ───────────► [Application] (DTOs)
       │
       ▼
[Presentation] (Pages/Components)
```

1. **Request**: A user navigates to the site.
2. **Presentation**: The Next.js `app/page.tsx` (Server Component) triggers a Use Case.
3. **Application**: The `GetPortfolioContent` use case is invoked.
4. **Infrastructure**: The use case calls the `PortfolioRepository` interface. The implementation (`StaticPortfolioRepository`) selects the appropriate dictionary from `infrastructure/i18n/` based on the current locale.
5. **Domain**: The repository returns domain entities (e.g., `Project`, `Skill`) instead of raw JSON.
6. **Application**: The use case wraps these entities into a `PortfolioContentDTO`.
7. **Presentation**: The Page receives the DTO and distributes data to presentational components via props.

## File Changes

| File/Directory | Action | Description |
| :--- | :--- | :--- |
| `app/` | Create | Next.js App Router directory. |
| `public/` | Create/Modify | Static assets (images, fonts, icons). |
| `src/domain/` | Create | Entities (Project, Skill, etc.) and Repository interfaces. |
| `src/application/` | Create | Use cases (GetPortfolioContent) and DTOs. |
| `src/infrastructure/` | Create | Repository implementations and i18n dictionaries. |
| `src/presentation/` | Create | UI components (Atomic design) and Locale Context. |
| `package.json` | Replace | New dependencies (Next.js, Radix, Tailwind v4, etc.). |
| `src/` (old) | Delete | Old React/Vite codebase. |
| `vite.config.js` | Delete | Replaced by Next.js. |
| `tsconfig.json` | Create | TypeScript configuration. |

## Interfaces / Contracts

### Domain Layer

```typescript
// src/domain/entities/Project.ts
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

// src/domain/repositories/PortfolioRepository.ts
import { Project } from "../entities/Project";

export interface PortfolioRepository {
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<string[]>;
  getAboutMe(): Promise<string>;
  getHero(): Promise<{ title: string; subtitle: string; cta: string }>;
  getContact(): Promise<{ whatsapp: string; github: string; linkedin: string; email: string }>;
}
```

### Application Layer

```typescript
// src/application/dtos/PortfolioContentDTO.ts
import { Project } from "../../domain/entities/Project";

export interface PortfolioContentDTO {
  hero: { title: string; subtitle: string; cta: string };
  projects: Project[];
  skills: string[];
  about: string;
  contact: { whatsapp: string; github: string; linkedin: string; email: string };
}
```

## Testing Strategy

| Layer | What to Test | Approach |
| :--- | :--- | :--- |
| **Unit** | Domain Entities and Application Use Cases | Vitest |
| **Integration** | Repository to Use Case flow (data integrity) | Vitest |
| **E2E** | Critical paths (language switch, section navigation) | Playwright (deferred) |

## Component Tree (Presentation Layer)

The presentation layer will follow **Atomic Design** within `src/presentation/components/`.

- `MainLayout` (Organism)
    - `NavBar` (Organism)
        - `NavLinks` (Molecule)
        - `LangSwitcher` (Molecule)
    - `HeroSection` (Organism)
        - `Heading` (Atom)
        - `Button` (Atom)
    - `ProjectsSection` (Organism)
        - `ProjectCard` (Molecule)
            - `Tags` (Atom)
    - `SkillsSection` (Organism)
        - `SkillGrid` (Molecule)
            - `SkillIcon` (Atom)
    - `AboutSection` (Organism)
    - `ContactSection` (Organism)
        - `ContactLink` (Molecule)

## Open Questions

- [ ] Should we use Next.js Middleware for locale detection or rely entirely on client-side context for the single-page experience? (The proposal implies client-side/context for seamlessness, but Middleware is more robust for SEO).
