---
name: lazy-tea
description: A light tea brewing guide with a timer.
colors:
  bg: '#fbfaf5'
  surface: '#fbfaf5'
  ink: '#263d33'
  muted: '#58675c'
  accent: '#59784f'
  on-accent: '#fbfaf5'
  soft: '#e5eadd'
  line: '#cdd5ca'
  focus: '#263d33'
  error: '#8f392b'
typography:
  wordmark:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '32px'
    fontWeight: 700
    letterSpacing: '-0.035em'
  headline:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '24px'
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: '-0.025em'
  title:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '18px'
    fontWeight: 600
  body:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.5
  note:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '14px'
    fontWeight: 400
  label:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '14px'
    fontWeight: 600
  table-number:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '24px'
    fontWeight: 600
  mobile-parameter:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '32px'
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: '-0.025em'
  countdown:
    fontFamily: 'Atkinson Hyperlegible Next, sans-serif'
    fontSize: '88px'
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: '-0.025em'
rounded:
  control: '10px'
  row: '0'
  indicator: '50%'
spacing:
  tight: '6px'
  small: '8px'
  control-gap: '10px'
  related: '12px'
  standard: '16px'
  section-small: '20px'
  section: '24px'
  page-inline: '32px'
  columns: '36px'
components:
  button-primary:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.bg}'
    rounded: '{rounded.control}'
    padding: '12px 24px'
  button-reset:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.control}'
    padding: '12px 18px'
  button-text:
    backgroundColor: 'transparent'
    textColor: '{colors.accent}'
    rounded: '{rounded.control}'
    padding: '0'
  volume-choice:
    backgroundColor: 'transparent'
    textColor: '{colors.ink}'
    rounded: '{rounded.control}'
    padding: '10px 16px'
  choice-selected:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.bg}'
  tea-choice-mobile:
    backgroundColor: 'transparent'
    textColor: '{colors.ink}'
    rounded: '{rounded.control}'
    padding: '10px 4px'
  field:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.control}'
    padding: '10px 12px'
  tea-row-selected:
    backgroundColor: '{colors.soft}'
    textColor: '{colors.ink}'
    rounded: '{rounded.row}'
  button-primary-hover:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.bg}'
  wordmark:
    textColor: '{colors.ink}'
    typography: '{typography.wordmark}'
---

# Design System: lazy-tea

## Overview

**Creative North Star: "Dashboard by the kettle"**

A light dashboard on a paper background, with green ink and a calm green accent. The direction matches the dashboard selected by the user: large, readable parameters, a lighter timer and the lazy-tea. wordmark with a green dot.

Flat dividers and compact typography make brewing data easy to scan. The layout adjusts its density for phones and landscape tablets while preserving comfortable controls, clear selection and a clear timer state.

**Key Characteristics:**

- Paper background, dark green ink and a green accent.
- Locally hosted Atkinson Hyperlegible Next and tabular numerals.
- Flat dividers, outlined choices and gently rounded controls.
- A lightweight timer and a stronger wordmark with a green dot.

## Colors

The normative frontmatter values match the variables in `public/styles.css`.

### Primary

- **Accent green** (`accent`): links, brand and selection dots, the completed timer and the Start hover state.
- **Green ink** (`ink`): text, the primary action and selected option fills.
- **Paper on accent** (`on-accent`): an existing token with the same value as the background; current primary actions and choices use `bg` directly.

### Neutral

- **Paper** (`bg`, `surface`): shared background for the page, fields and Reset; sections do not form separate cards.
- **Muted green** (`muted`): labels, units, status and field outlines.
- **Light sage** (`soft`): the selected row and hover states for unselected choices or Reset.
- **Sage line** (`line`): separators and option outlines.
- **Focus ink** (`focus`): keyboard focus outlines and text-action hover states.

**Brick error** (`error`) marks invalid fields and their messages.

**The Clear selection Rule.** Selected options have an ink fill and light text; the selected row has a sage background and a green dot.

## Typography

**Display Font:** Atkinson Hyperlegible Next, sans-serif.
**Body Font:** Atkinson Hyperlegible Next, sans-serif.

Local files provide weights (400, 600, 700), with `font-display: swap` and synthesis disabled. One readable family serves the entire interface; base text is (16px) with line height (1.5).

### Hierarchy

- **Wordmark:** the `wordmark` role, a compact brand mark (700).
- **Headline:** the `headline` role, the question above phone tea selection (600).
- **Title:** the `title` role, the timer heading (600); (16px) on phones.
- **Body:** the `body` role; tips use line height (1.45) and a maximum width of (65ch).
- **Note / Label:** the `note` and `label` roles; footnotes and default durations use (12px).
- **Table number:** the `table-number` role; tea names use (18px, 600), units (0.65em, 400).
- **Mobile parameter:** the `mobile-parameter` role; below (360px), values shrink to (28px), with (14px) units.
- **Countdown:** the `countdown` role, light weight (400); phones and compact tablets use (80px), short tablets (72px). The time editor uses the same typography. Larger tablet variants are specified in Layout.

**The Calm numbers Rule.** Parameters and the timer use tabular numerals; units and labels remain smaller than their values.

## Layout

The page is centered, with a maximum width of (1280px) and padding (24px 32px). Fine rules divide the header and shared volume bar. The table and timer form columns of `minmax(0, 1.8fr) minmax(300px, 1fr)`, separated by (36px). The table uses horizontal dividers; its first three columns occupy (30%, 25%, 27%).

Up to (899px) in portrait, or up to (759px) in any orientation, the page has a maximum width of (600px), padding (20px) and one column. A three-column choice grid replaces the table, with gaps of (8px). Parameters for one tea use `1.4fr 1fr 0.85fr` proportions and gaps of (10px). Below (360px), horizontal padding shrinks to (16px).

At (760–1280px) in landscape, the two columns use `minmax(0, 1.5fr) minmax(250px, 1fr)` and a gap of (24px). Page padding is (12px 24px), parameter cells use (4px 8px), and the timer uses (80px). Parameters remain (24px), tea names (18px), and buttons at least (48px) high. At heights up to (560px), vertical page padding shrinks to (8px), the timer to (72px), and spacing around the header and tips tightens. The page has a natural height, with no forced minimum or stretched table rows.

At heights of at least (720px), actual text size scales with viewport width and height. At (1280×800), tea names are (25px), parameters (34px), table headings (16px), default durations (16px), controls (20px), notes and status (18px), and the timer and its editor (112px). After correcting the preview address, the user requested a larger scale. Page padding is (20px 28px), cell padding (8px 10px), and parameter line height (1.2). Columns use `minmax(0, 1.7fr) minmax(300px, 1fr)` with a gap of (28px). `clamp()` and `min()` limit scale on narrower or shorter viewports. Shorter screens retain the compact variant. Sizes were corrected using a photograph of the actual device: fitting content alone does not prove readability. Additional fields and messages may increase content height.

## Elevation & Depth

The system uses no shadows. The page and sections share a background; spacing and (1px) rules separate groups. Tonal changes mark selection, while focus remains an outline.

**The Flat surfaces Rule.** Separate groups with a rule, spacing or an existing sage surface tone.

## Shapes

Buttons and fields use `control` corners; rows and tea-name buttons stay square (`row`). The selection dot has a diameter of (6px). Field, option and separator borders are (1px). The table has no surrounding card or vertical rules.

## Components

### Buttons

The ink-colored Start uses `button-primary`, text (18px, 600), a minimum height of (56px) and an `ink` border. Hover changes the background and border to `accent`. Phones and compact tablets use (16px) text; compact tablets have a minimum height of (48px) and padding (10px 18px). The larger tablet scale is specified in Layout.

Reset uses `button-reset`, a `line` border and a `soft` hover background. Text actions use `button-text`, (16px) text, an underline offset of (4px) and a minimum width of (48px); hover uses `focus`.

All buttons have a minimum height of (48px). Button, field and link focus uses an outline of (3px solid focus), offset by (4px). Disabled buttons use `muted`, opacity (0.55) and a `not-allowed` cursor; disabled text actions lose their underline. There is no separate visual `:active` state.

### Choice controls

Volume uses outlined `volume-choice`, weight (600), lighter units (400) and gaps of (6px). Phones distribute the options evenly and reduce padding to (10px 8px). Tea selection uses `tea-choice-mobile` and text (16px, 600). Both groups use the ink-colored `choice-selected`, `aria-pressed` and sage hover states for unselected options.

### Inputs / Fields

The `field` variant has a minimum height of (48px), a `muted` outline and an `accent` caret. The custom-volume field is (112px) wide. The timer editor replaces the digits in place: fields are (2ch) wide, with no padding and only a `muted` bottom border. Save and cancel are text actions separated by (24px). `aria-invalid` changes the border to `error`; the message uses (14px).

### Tea table

The selected row uses `tea-row-selected`, and its tea-name button fills the first cell. Hover and selection use `soft`; a green dot distinguishes selection. Row backgrounds transition over (`160ms ease-out`); `prefers-reduced-motion: reduce` disables transitions. Digits do not animate every second.

### Timer and notes

The timer is a flat section with a bottom rule and padding (20px), reduced to (12px) on tablets. Status reserves (24px) of height, or (20px) on tablets. Actions form a `1fr auto` grid with a gap of (12px). Completion emphasizes status with weight (600) and `ink`, and digits with `accent`. Tips are short paragraphs.

### Brand link

`lazy-tea.` uses ink-colored text without an underline, a green dot and a minimum height of (48px). The skip link appears on focus. There is no separate navigation menu, card or chip system; choices are buttons.

## Do's and Don'ts

### Do:

- Do use the paper background, green ink and locally hosted Atkinson Hyperlegible Next.
- Do preserve a lightweight timer, stronger values and smaller units.
- Do preserve visible focus and touch targets of at least 48 px.
- Do check complete content on phones and short landscape tablets.

### Don't:

- Don't restore the replaced dark palette with a gold accent.
- Don't split the six-tea table into cards in the landscape dashboard.
- Don't add decorative shadows, entrance animations or animation on every second.
