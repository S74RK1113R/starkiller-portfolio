# Page Home Specification

## Purpose

The Home page displays a hero section with the developer's greeting, name, role, a call-to-action button, and a GitHub profile link. It is the landing section of the portfolio and the first content users see.

## Requirements

### Requirement: Hero Content Display

The system SHALL render a hero section containing a greeting, the developer's name, and the current role, sourced from the active locale.

#### Scenario: Display hero in Spanish

- GIVEN the active locale is `es`
- WHEN the Home page renders
- THEN the greeting SHALL display "Hola, soy "
- AND the name SHALL display "S74RK1113R"
- AND the role SHALL display "Desarollador frontend"

#### Scenario: Display hero in English

- GIVEN the active locale is `en`
- WHEN the Home page renders
- THEN the greeting SHALL display "Hello, I'm "
- AND the name SHALL display "S74RK1113R"
- AND the role SHALL display "Frontend developer"

### Requirement: Call-to-Action Button

The system SHALL provide a prominent CTA button in the hero section that invites the user to explore the portfolio.

#### Scenario: CTA navigates to projects

- GIVEN the user is viewing the hero section
- WHEN the user clicks the CTA button
- THEN the viewport SHALL scroll or navigate to the Projects section

### Requirement: GitHub Profile Link

The system SHALL render a link to the developer's GitHub profile in the hero section.

#### Scenario: GitHub link renders with correct URL

- GIVEN the user is viewing the hero section
- WHEN the user inspects the GitHub link
- THEN the link target SHALL be `https://github.com/S74RK1113R`

### Requirement: Responsive Layout

The hero section SHOULD adapt its layout for mobile, tablet, and desktop viewports without content loss.

#### Scenario: Layout stacks on narrow viewport

- GIVEN the viewport width is 375px
- WHEN the hero section renders
- THEN all content SHALL be vertically stacked and fully readable
