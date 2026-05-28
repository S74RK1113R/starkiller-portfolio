# Page Projects Specification

## Purpose

The Projects section displays project cards for Plantrek and Dynam Jobs. Each card shows the project title, description, tech stack, and relevant links, with content sourced from the active locale.

## Requirements

### Requirement: Project Cards Rendering

The system SHALL render exactly two project cards: Plantrek and Dynam Jobs, each with title, description, and links.

#### Scenario: Plantrek card in Spanish

- GIVEN the active locale is `es`
- WHEN the Projects section renders
- THEN the Plantrek card SHALL display title "Plantrek"
- AND the description SHALL be "Esta web fue creada para la aplicación plantrek actualmente disponible en Play Store."

#### Scenario: Plantrek card in English

- GIVEN the active locale is `en`
- WHEN the Projects section renders
- THEN the Plantrek card SHALL display title "Plantrek"
- AND the description SHALL be "This website was created for the plantrek app currently available on Play Store."

#### Scenario: Dynam Jobs card in Spanish

- GIVEN the active locale is `es`
- WHEN the Projects section renders
- THEN the Dynam Jobs card SHALL display title "Dynam Jobs"
- AND the description SHALL be "Página creada para los CEO de Dynam Jobs"

#### Scenario: Dynam Jobs card in English

- GIVEN the active locale is `en`
- WHEN the Projects section renders
- THEN the Dynam Jobs card SHALL display title "Dynam Jobs"
- AND the description SHALL be "Website created for the CEO of Dynam Jobs"

### Requirement: Tech Stack Display

Each project card SHOULD display the technologies used in the project.

#### Scenario: Both cards show tech tags

- GIVEN the Projects section is rendered
- WHEN the user views a project card
- THEN the card SHALL display one or more technology tags relevant to that project

### Requirement: External Project Links

Each project card MAY include one or more external links (GitHub, live demo, or store page).

#### Scenario: Link opens in new tab

- GIVEN a project card with an external link
- WHEN the user clicks the link
- THEN the link SHALL open in a new browser tab with `rel="noopener noreferrer"`
