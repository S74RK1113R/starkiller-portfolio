# Page Contact Specification

## Purpose

The Contact section provides links to the developer's communication channels: WhatsApp, GitHub, LinkedIn, and Gmail. Each link displays the platform name and opens the corresponding URL in a new tab.

## Requirements

### Requirement: Contact Links Display

The system SHALL render four contact links: WhatsApp, GitHub, LinkedIn, and Gmail, each with an icon and label.

#### Scenario: All four contacts render

- GIVEN the Contact section renders
- WHEN the user views the section
- THEN four contact items SHALL be visible: WhatsApp, GitHub, LinkedIn, Gmail

### Requirement: Contact URLs

Each contact link SHALL point to the correct external URL.

#### Scenario: WhatsApp link

- GIVEN the user views the Contact section
- WHEN the user clicks the WhatsApp link
- THEN the browser SHALL navigate to `https://wa.link/ywwvk8`

#### Scenario: GitHub link

- GIVEN the user views the Contact section
- WHEN the user clicks the GitHub link
- THEN the browser SHALL navigate to `https://github.com/S74RK1113R`

#### Scenario: Gmail link

- GIVEN the user views the Contact section
- WHEN the user clicks the Gmail link
- THEN the browser SHALL open the mailto or Gmail compose URL for `randyes16@gmail.com`

#### Scenario: LinkedIn link

- GIVEN the user views the Contact section
- WHEN the user clicks the LinkedIn link
- THEN the browser SHALL navigate to the developer's LinkedIn profile

### Requirement: External Link Behavior

All contact links SHALL open in a new browser tab with security attributes.

#### Scenario: Links open in new tab

- GIVEN any contact link in the Contact section
- WHEN the user clicks it
- THEN the link SHALL open in a new tab with `rel="noopener noreferrer"`
- AND `target="_blank"` SHALL be set

### Requirement: Bilingual Labels

Contact link labels (platform names) SHOULD be the same across locales since platform names are language-independent.

#### Scenario: Labels unchanged across locales

- GIVEN the active locale switches between `es` and `en`
- WHEN the Contact section renders
- THEN all contact labels SHALL remain identical
