# Page About Specification

## Purpose

The About Me section displays a three-paragraph biography introducing the developer, covering their frontend development experience, graphic design background, and current learning journey.

## Requirements

### Requirement: About Content in Spanish

When the active locale is `es`, the system SHALL render three paragraphs describing the developer as a frontend developer with graphic design experience who is continuously learning new technologies.

#### Scenario: Three Spanish paragraphs render

- GIVEN the active locale is `es`
- WHEN the About section renders
- THEN the section SHALL display three distinct paragraphs of biographical content in Spanish

### Requirement: About Content in English

When the active locale is `en`, the system SHALL render three paragraphs with equivalent content describing the frontend development, graphic design, and learning journey in English.

#### Scenario: Three English paragraphs render

- GIVEN the active locale is `en`
- WHEN the About section renders
- THEN the section SHALL display three distinct paragraphs of biographical content in English

### Requirement: Content Parity

The Spanish and English versions of the About section SHOULD convey the same information about the developer's background, skills, and interests.

#### Scenario: Both locales cover the same themes

- GIVEN both locale versions of the About section
- WHEN comparing Spanish and English content
- THEN both versions SHALL cover frontend development experience, graphic design background, and current learning focus

### Requirement: Section Layout

The About section SHOULD present content in a readable single-column layout on all viewport sizes.

#### Scenario: Readable on mobile

- GIVEN the viewport width is 375px
- WHEN the About section renders
- THEN all three paragraphs SHALL be fully readable without horizontal scrolling
