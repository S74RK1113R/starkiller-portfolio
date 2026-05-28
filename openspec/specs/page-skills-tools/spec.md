# Page Skills & Tools Specification

## Purpose

The Skills & Tools section displays a grid of technologies and tools the developer uses. Each item shows the technology name and its icon.

## Requirements

### Requirement: Skills Grid Rendering

The system SHALL render a grid of exactly ten skill items: React, TailwindCSS, Vite, JavaScript, GSAP, Git, GitHub, CSS, HTML, and VS Code.

#### Scenario: All skills render

- GIVEN the Skills & Tools section renders
- WHEN the user views the section
- THEN each of the ten skills SHALL be visible as a distinct grid item
- AND each item SHALL display its name

#### Scenario: Skills grid adapts to viewport

- GIVEN the Skills & Tools section renders
- WHEN the viewport changes from desktop to mobile
- THEN the grid SHALL reflow to fewer columns while showing all ten items

### Requirement: Skill Item Content

Each skill item SHOULD display a visual icon or logo alongside the skill name.

#### Scenario: Icon renders per skill

- GIVEN the Skills & Tools section renders
- WHEN the user views a skill item
- THEN an icon or logo corresponding to that technology SHALL be visible

### Requirement: Bilingual Labels

Skill names SHOULD be the same across locales (technology names are language-independent).

#### Scenario: Names unchanged across locales

- GIVEN the active locale switches between `es` and `en`
- WHEN the Skills & Tools section renders in either locale
- THEN all skill names SHALL remain identical (e.g., "React" in both locales)
