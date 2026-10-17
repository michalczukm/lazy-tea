---
name: lazy-tea
description: A calm tea brewing dashboard using the shared lazy theme.
colors:
  lazy-color-bg: '#fbfaf5'
  lazy-color-surface: '#fbfaf5'
  lazy-color-ink: '#263d33'
  lazy-color-muted: '#58675c'
  lazy-color-accent: '#59784f'
  lazy-color-on-accent: '#fbfaf5'
  lazy-color-soft: '#e5eadd'
  lazy-color-line: '#cdd5ca'
  lazy-color-focus: '#263d33'
  lazy-color-error: '#8f392b'
  lazy-color-pressed: '#d4dfcd'
  lazy-action-bg: '#263d33'
  lazy-action-hover: '#59784f'
  lazy-action-active: '#263d33'
typography:
  wordmark:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '2rem'
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: '-0.035em'
  heading:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)'
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: '-0.025em'
  body:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.5
  title:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 600
    lineHeight: 1.2
  note:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 400
  countdown:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '5.5rem'
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: '-0.025em'
  parameter:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '2rem'
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: '-0.025em'
rounded:
  control: '0.625rem'
  row: '0'
  indicator: '50%'
spacing:
  '1': '0.25rem'
  '2': '0.5rem'
  '3': '0.75rem'
  '4': '1rem'
  '5': '1.25rem'
  '6': '1.5rem'
  '8': '2rem'
components:
  button-primary:
    backgroundColor: '{colors.lazy-action-bg}'
    textColor: '{colors.lazy-color-on-accent}'
    rounded: '{rounded.control}'
    padding: '0.75rem 1.5rem'
  button-primary-hover:
    backgroundColor: '{colors.lazy-action-hover}'
    textColor: '{colors.lazy-color-on-accent}'
  button-primary-active:
    backgroundColor: '{colors.lazy-action-active}'
    textColor: '{colors.lazy-color-on-accent}'
  button-reset:
    backgroundColor: '{colors.lazy-color-surface}'
    textColor: '{colors.lazy-color-ink}'
    rounded: '{rounded.control}'
    padding: '12px 18px'
  button-text:
    backgroundColor: 'transparent'
    textColor: '{colors.lazy-color-accent}'
    rounded: '{rounded.control}'
    padding: '0'
  choice:
    backgroundColor: '{colors.lazy-color-surface}'
    textColor: '{colors.lazy-color-ink}'
    rounded: '{rounded.control}'
    padding: '0.625rem 1rem'
  choice-selected:
    backgroundColor: '{colors.lazy-action-bg}'
    textColor: '{colors.lazy-color-on-accent}'
  field:
    backgroundColor: '{colors.lazy-color-surface}'
    textColor: '{colors.lazy-color-ink}'
    rounded: '{rounded.control}'
    padding: '0.625rem 0.75rem'
  selected-row:
    backgroundColor: '{colors.lazy-color-soft}'
    textColor: '{colors.lazy-color-ink}'
    rounded: '{rounded.row}'
  wordmark:
    textColor: '{colors.lazy-color-ink}'
    typography: '{typography.wordmark}'
  countdown:
    textColor: '{colors.lazy-color-ink}'
    typography: '{typography.countdown}'
---

# Design System: lazy-tea

## Overview

**Creative North Star: "Dashboard by the kettle"**

A light dashboard on paper, with green ink, a calm green accent and readable brewing values. Flat sections and compact labels keep the tea table easy to scan; a regular-weight timer balances the stronger values and wordmark.

The shared `@lazy/theme` package owns the visual foundation. The app owns its responsive brewing layout, tablet density and inline time editor. This migration preserves the established light appearance and device sizing.

**Key Characteristics:**

- Paper background, green ink and a green accent by default.
- Shared, self-hosted Atkinson Hyperlegible Next and tabular numerals.
- Flat dividers, outlined choices and gently rounded controls.
- A lightweight timer and a stronger wordmark with an accent dot.

## Colors

The frontmatter records the installed package's default light values. Canonical definitions live in `@lazy/theme/css/tokens.css`, upstream at `https://github.com/michalczukm/lazy-theme`. The dependency is pinned to `v0.1.0`, resolved to `4e03501afe2d0df97eceb3545ba1740f30402e4f`. App CSS consumes semantic `--lazy-*` properties directly; there is no private palette or alias layer.

### Primary

- **Accent green** (`lazy-color-accent`): links, the wordmark dot, selection dots and completed digits.
- **Action fill** (`lazy-action-bg`, `lazy-action-hover`, `lazy-action-active`): primary and selected-choice backgrounds; paired with `lazy-color-on-accent` text. The frontmatter snapshots their resolved light colors.

### Neutral

- **Paper** (`lazy-color-bg`, `lazy-color-surface`): page and control surfaces.
- **Green ink** (`lazy-color-ink`): primary text.
- **Muted green** (`lazy-color-muted`): supporting text, units and field boundaries.
- **Light sage** (`lazy-color-soft`): selected table rows and neutral hover states.
- **Pressed sage** (`lazy-color-pressed`): neutral active states.
- **Sage line** (`lazy-color-line`): decorative dividers and choice borders.
- **Focus ink** (`lazy-color-focus`): keyboard focus outlines.
- **Brick error** (`lazy-color-error`): invalid fields and feedback.

**The Semantic actions Rule.** Use action tokens for filled controls and selections; never derive action fill from ink.

The root explicitly selects light. The package also supports opt-in `data-lazy-theme="dark"`: charcoal-green surfaces, warm gold actions and dark action text. This is package compatibility, with the same markup and geometry; the app introduces no theme selector or automatic OS switching. Keep both palettes in the package.

## Typography

**Display Font:** Atkinson Hyperlegible Next, sans-serif.
**Body Font:** Atkinson Hyperlegible Next, sans-serif.

The package registers local weights (400, 600, 700), uses `font-display: swap` and disables synthesis. Its rem-based body and control roles respect browser font preferences. The app neither registers a second family nor keeps standalone font files.

### Hierarchy

- **Wordmark:** bold, compact tracking and an accent dot; uses the shared `wordmark` role.
- **Heading:** the shared fluid `heading` role for the phone tea question.
- **Title:** semibold timer and selected-tea headings; local phone headings use (16px).
- **Body / Note:** shared body and supporting roles; tips use line height (1.45) and measure (65ch).
- **Parameters:** shared semibold `parameter` role on phones; below (360px), values use (28px). Table values start at (24px), names at (18px), and units at (0.65em).
- **Countdown:** regular `countdown` role for digits and the in-place editor. Phones and compact landscape tablets use (80px), short tablets (72px), and large tablets scale up to (112px).

**The Calm numbers Rule.** Parameters and the timer use tabular numerals; units and labels remain smaller than their values.

## Layout

The shared page centers at (80rem), with default padding (24px 32px). The app owns the two-column brewing layout: `minmax(0, 1.8fr) minmax(300px, 1fr)` with a (36px) gap. Table columns begin at (30%, 25%, 27%); horizontal rules separate rows.

Up to (899px) in portrait, or up to (759px) in any orientation, the app uses one column, a (600px) maximum width and (20px) padding. Tea choices replace the table: wrapping flex items start with a third-width basis and retain intrinsic label width. Parameter groups wrap at intrinsic widths. Volume choices use `repeat(auto-fit, minmax(4rem, 1fr))`, with unbroken labels. These patterns let controls reflow with 200% browser font sizing. Below (360px), horizontal padding becomes (16px).

At (760–1280px) in landscape, columns become `minmax(0, 1.5fr) minmax(250px, 1fr)`, gap (24px), padding (12px 24px) and cell padding (4px 8px). Controls remain at least (48px) high. At heights up to (560px), page padding becomes (8px) vertically and surrounding spacing tightens; the document retains natural height.

Landscape tablets at least (720px) high use fluid sizing bounded by width and height. At (1280×800), tea names reach (25px), parameters (34px), table headings and default durations (16px), controls (20px), supporting text (18px) and digits (112px). Page padding is (20px 28px), cell padding (8px 10px), and columns are `minmax(0, 1.7fr) minmax(300px, 1fr)` with a (28px) gap. Preserve these app-specific readability adjustments when updating shared components.

## Elevation & Depth

The system uses no shadows. Shared surfaces, whitespace and (1px) horizontal rules separate groups. Tonal changes mark selection, while focus uses an outline.

**The Flat surfaces Rule.** Separate groups with a rule, spacing or an existing soft surface tone.

## Shapes

Shared controls have gently rounded `control` corners. Table rows and tea-name buttons stay square; selection dots are circular (6px). Fields and choices have (1px) borders. The table has no surrounding card or vertical rules.

## Components

### Buttons

Shared primary, secondary and text actions supply typography, borders, state colors and focus. Start uses semantic action fill and has a default minimum height of (56px). Reset adds local padding (12px 18px). Text actions remove padding, retain a (48px) minimum target and underline their text. Compact landscape sizing stays local; large tablets restore (56px) primary and Reset targets.

Primary hover and active states use action tokens; neutral hover and active states use soft and pressed tones. Hover rules respect hover capability. Disabled native controls use opacity (0.55) and a disabled cursor. Keyboard focus is (3px), offset (4px). Shared state transitions last (160ms ease-out); reduced motion disables transitions and animations.

### Choice controls

Shared outlined buttons express selection with `aria-pressed`, action fill and on-accent text. Volume labels use lighter units; phone tea and volume groups use the wrapping geometry in Layout. Selection does not rely on color alone.

### Inputs / Fields

Shared fields have a muted border, surface background, accent caret and minimum height (48px). The custom-volume field is locally (112px) wide. Invalid state uses the error role and associated feedback. Visible labels accompany the volume field; inline editor fields have accessible names.

### Tea table

The shared semantic table supplies horizontal rules and soft selected rows. App-owned tea-name buttons fill the first cell and add an accent selection dot. Local sizing governs numbers, units and row density; row background transitions use shared motion tokens.

### Timer and inline editor

A flat section holds a regular-weight countdown, status and actions in a `1fr auto` grid. Editing replaces the digits in the same position with (2ch) fields, matching display typography and using only a bottom border. Save and cancel are text actions separated by (24px). Completion emphasizes status with semibold ink and digits with accent. The digits do not animate each second.

### Brand link

The shared ink-colored wordmark ends in an accent dot and has a minimum (48px) target. Shared skip navigation appears on focus. The app has no separate navigation menu, card or chip system.

`public/index.html` loads the generated package stylesheet before `public/styles.css`; JavaScript markup uses shared component classes. `pnpm build` copies installed CSS, fonts and licenses into ignored `public/vendor/lazy-theme/`. Update the package dependency to change shared visual rules; edit app CSS for brewing geometry and device density.

## Do's and Don'ts

### Do:

- Do use shared semantic tokens, fonts and component classes from @lazy/theme.
- Do preserve a lightweight timer, stronger values and smaller units.
- Do preserve visible focus and touch targets of at least 48 px.
- Do check complete content on phones, short landscape tablets and with enlarged browser fonts.

### Don't:

- Don't introduce a private palette, duplicate font registrations or generated vendor edits.
- Don't infer action fills from ink; dark compatibility depends on semantic action tokens.
- Don't split the six-tea table into cards in the landscape dashboard.
- Don't add decorative shadows, entrance animations or animation on every second.
