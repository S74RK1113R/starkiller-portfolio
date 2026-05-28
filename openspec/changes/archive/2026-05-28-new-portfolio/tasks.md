# Tasks: New Portfolio — Next.js + Clean Architecture

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 800–1,500 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1: Data layers → PR 2: UI → PR 3: Tests + polish |
| Delivery strategy | ask-on-risk |
| Chain strategy | feature-branch-chain |

Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: feature-branch-chain
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Foundation + Domain + Application + Infrastructure | PR 1 | All pure TS — no UI, testable independently |
| 2 | Presentation (components, layout, pages) + i18n wiring | PR 2 | Builds on PR 1 types/data layer |
| 3 | Tests + build verification + cleanup | PR 3 | Vitest + final build |


## Phase 1: Foundation (Next.js + TypeScript + folder structure)

- [x] 1.1 Delete old `src/`, `vite.config.js`; replace `package.json` with Next.js deps (pnpm)
- [x] 1.2 Scaffold `next.config.ts`, `tsconfig.json` (strict), `postcss.config.mjs`
- [x] 1.3 Create `app/globals.css` with Tailwind v4 directives
- [x] 1.4 Create `src/` Clean Architecture folder structure: `domain/`, `application/`, `infrastructure/`, `presentation/`

## Phase 2: Domain & Application Layers (entities, interfaces, use cases, DTOs)

- [x] 2.1 Create `src/domain/entities/` — `Project.ts`, `Skill.ts`, `Hero.ts`, `Contact.ts` interfaces
- [x] 2.2 Create `src/domain/repositories/PortfolioRepository.ts` — repository interface
- [x] 2.3 Create `src/application/dtos/PortfolioContentDTO.ts` — aggregated DTO
- [x] 2.4 Create `src/application/use-cases/GetPortfolioContent.ts` — orchestrates repo calls

## Phase 3: Infrastructure (i18n, repositories, middleware)

- [x] 3.1 Create `src/infrastructure/i18n/` — types + `es.ts` + `en.ts` dictionaries with all section content
- [x] 3.2 Create `src/infrastructure/repositories/StaticPortfolioRepository.ts` — reads from i18n dicts
- [x] 3.3 Create `middleware.ts` (root) — Next.js Middleware for locale detection (hreflang, cookie, rewrite `/es`/`/en`)

## Phase 4: Presentation (components, layout, pages)

- [x] 4.1 Create `src/presentation/context/LocaleContext.tsx` — React context + localStorage persistence
- [x] 4.2 Create atoms: `Heading`, `Button`, `Tags`, `SkillIcon`
- [x] 4.3 Create molecules: `NavLinks`, `LangSwitcher`, `ProjectCard`, `SkillGrid`, `ContactLink`
- [x] 4.4 Create organisms: `NavBar`, `HeroSection`, `ProjectsSection`, `SkillsSection`, `AboutSection`, `ContactSection`
- [x] 4.5 Create `src/presentation/components/layouts/MainLayout.tsx` + `app/layout.tsx`
- [x] 4.6 Create `app/page.tsx` with all sections composed (single-page scroll)

## Phase 5: Testing (Vitest for domain + application)

- [x] 5.1 Install Vitest + create `vitest.config.ts`
- [x] 5.2 Write tests for domain entities (Project, Skill, Hero, Contact)
- [x] 5.3 Write tests for `GetPortfolioContent` use case (mock repository, verify DTO shape)
- [x] 5.4 Write tests for `StaticPortfolioRepository` (verify all i18n keys return correct content)

## Phase 6: Polish (cleanup, build verification)

- [x] 6.1 Run `pnpm build` — fix all TS errors and lint warnings
- [x] 6.2 Verify all sections render ES/EN content matching spec scenarios per page spec
