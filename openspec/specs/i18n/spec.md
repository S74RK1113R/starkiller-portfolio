# Internationalization (i18n) Specification

## Purpose

The i18n system provides bilingual content switching between Spanish (`es`) and English (`en`) throughout the portfolio. It manages content dictionaries, locale state, language switching, and persistence of the user's language preference.

## Requirements

### Requirement: Locale State Management

The system SHALL maintain the current active locale as application state accessible to all pages and components.

#### Scenario: Default locale is Spanish

- GIVEN the user visits the portfolio for the first time
- WHEN no locale preference is stored
- THEN the active locale SHALL default to `es`

#### Scenario: Locale is accessible everywhere

- GIVEN the active locale is `es`
- WHEN any component reads the current locale
- THEN the value SHALL be `es`

### Requirement: Language Switching

The system SHALL provide a mechanism for the user to toggle between `es` and `en` locales. Switching the locale SHALL update all visible content on the current page without a full browser reload.

#### Scenario: Switch from Spanish to English

- GIVEN the active locale is `es` and content displays in Spanish
- WHEN the user activates the language switcher to `en`
- THEN all visible text content SHALL update to English
- AND the page SHALL NOT perform a full reload

#### Scenario: Switch from English to Spanish

- GIVEN the active locale is `en` and content displays in English
- WHEN the user activates the language switcher to `es`
- THEN all visible text content SHALL update to Spanish
- AND the page SHALL NOT perform a full reload

### Requirement: Locale Persistence

The system SHALL persist the user's locale preference and restore it across page navigations and browser sessions.

#### Scenario: Preference survives navigation

- GIVEN the user has selected `en`
- WHEN the user navigates to a different section
- THEN the content SHALL remain in English

#### Scenario: Preference survives browser close

- GIVEN the user has selected `en`
- WHEN the user closes and reopens the browser
- THEN the content SHALL render in English

### Requirement: Content Dictionaries

The system SHALL define a content dictionary for each locale containing all translatable strings for every section.

#### Scenario: Spanish dictionary completeness

- GIVEN the active locale is `es`
- WHEN any section requests its content
- THEN the system SHALL return the Spanish version of that content

#### Scenario: English dictionary completeness

- GIVEN the active locale is `en`
- WHEN any section requests its content
- THEN the system SHALL return the English version of that content

### Requirement: Fallback Behavior

If a content key is missing for the active locale, the system SHOULD fall back to the other locale rather than rendering an empty or broken state.

#### Scenario: Missing key falls back to English

- GIVEN the active locale is `es`
- WHEN a content key is missing from the Spanish dictionary
- THEN the system SHALL return the English value for that key
