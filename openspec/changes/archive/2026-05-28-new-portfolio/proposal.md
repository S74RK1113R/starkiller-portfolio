# Proposal: New Portfolio — Next.js + Clean Architecture

## Intent

Complete rewrite of the starkiller-portfolio from a React+Vite SPA (JavaScript) to a Next.js App Router application (TypeScript) using Clean Architecture. The current SPA has no architecture layering, no type safety, and no component library. This rewrite introduces a maintainable, scalable foundation while preserving all existing content (Home, Projects, Skills & Tools, About Me, Contact) and bilingual (ES/EN) support.

## Scope

### In Scope
- Next.js App Router setup (TypeScript, pnpm)
- Clean Architecture with 4 layers: domain, application, infrastructure, presentation
- Radix UI primitives + Radix Icons for component/icon system
- All 5 portfolio sections with bilingual content
- Language switcher (ES/EN) persisted
- Modern, clean visual design

### Out of Scope
- Backend or CMS integration (static content only)
- Authentication, comments, blog
- Animations/GSAP (deferred)
- E2E or visual regression tests (unit tests in scope)
- Dark mode toggle (deferred)

## Capabilities

### New Capabilities
- `page-home`: Hero section — greeting, name, role, call-to-action, GitHub link
- `page-projects`: Project cards — Plantrek, Dynam Jobs (title, desc, tech, links)
- `page-skills-tools`: Skills grid — React, TailwindCSS, Vite, JS, GSAP, Git, GitHub, CSS, HTML, VS Code
- `page-about`: About Me section — 3-paragraph bio
- `page-contact`: Contact section — WhatsApp, GitHub, LinkedIn, Gmail links
- `i18n`: Bilingual content switching (ES/EN) with language state persistence

### Modified Capabilities
- None (clean slate)

## Approach

### Architecture
- **Clean Architecture (screaming)**: `src/domain/` (entities, value objects, repository interfaces), `src/application/` (use cases, DTOs), `src/infrastructure/` (data sources, repository implementations, i18n dictionaries), `src/presentation/` (pages, components, layouts)
- **Next.js App Router**: `/app` directory with layout-driven routing, server components where possible
- **Component tree**: Atomic design within presentation layer (atoms, molecules, organisms)
- **i18n**: Infrastructure-level dictionary pattern with React context for current locale
- **Styling**: TailwindCSS v4 + Radix UI primitives for accessible, composable components

### Data Flow
- Static content defined in infrastructure layer → use cases read via repository pattern → presentational components consume via props or context

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/` | Removed | Old React SPA code (replaced entirely) |
| `package.json` | Removed | New Next.js project with different deps |
| `vite.config.js` | Removed | No longer needed |
| `openspec/config.yaml` | Modified | Tech stack context updated |
| `.gitignore` | Modified | Next.js-specific entries |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Over-engineering for a small portfolio | Medium | Keep domain layer minimal; only separate what genuinely changes independently |
| Language switcher persistence broken | Low | Use localStorage + fallback to default locale |
| Radix UI bundle size | Low | Tree-shake imports; Radix is modular by design |
| Branch divergence from old-portfolio | Low | Delete old branch after archive; new-portfolio is standalone |

## Rollback Plan

Switch back to `main` branch (old-portfolio). No data migration was performed — the rewrite lives entirely on the `new-portfolio` branch with no shared state.

## Dependencies

- Next.js 15+ (App Router)
- Radix UI primitives (as needed per section)
- Radix Icons
- pnpm (already configured)

## Success Criteria

- [ ] `pnpm build` succeeds with zero TypeScript errors
- [ ] All 5 sections render on screen with correct content (ES + EN)
- [ ] Language switcher toggles all content without page reload
- [ ] Language preference persists across page navigation
- [ ] Lighthouse performance score ≥ 90 on desktop
- [ ] No React hydration errors in console
