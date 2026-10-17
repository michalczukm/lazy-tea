---
version: 1
slug: "public-index-html"
primary_target: "public/index.html"
related_targets: ["public/styles.css","public/app.js","public/tea.js","public/wake-lock.js"]
---

# Surface brief — public/index.html

Mode: Operate. Job: read brewing parameters and start the timer while brewing.
Confirmed direction: the user-selected light dashboard at
http://127.0.0.1:4198/dashboard.html and the green identity of ../lazy-diet.
Code-led restoration of the light design; replaces the dark “Kuchenny pulpit”.
Local preview first; production deployment requires user approval.
Target: Lenovo TB310FU in landscape; retain the table below 900 CSS px.
Use natural document height, without a viewport minimum or stretched rows.
At heights of at least 720px, enlarge actual type rather than row padding.
At 1280×800: tea names 25px, values 34px, controls 20px, notes 18px, clock 112px.
These sizes follow the request for larger text after correcting the preview address.
Size scales with viewport width and height; the user's real-device photograph
is the authority for physical readability. Short screens retain the compact
layout. Phones show one selected tea with large parameters. No footer.
Signature interaction: selecting a row connects its parameters and preset timer;
browsing remains independent of an active session. Time editing replaces the
existing digits in place, without an additional panel.
Motion: a short selection-background transition; no entrance or per-second animation.

## Direction contract

THESIS: Dashboard by the kettle — six teas to compare and one prominent timer.
OWN-WORLD: Paper #fbfaf5, ink #263d33, labels #58675c, green #59784f,
selection #e5eadd and rules #cdd5ca. Atkinson matches the selected dashboard,
with a lightweight timer, flat dividers, outlined choices, a dark green Start
and a lazy-tea. wordmark with a green dot.
STORY: Choose a tea, read the water and grams, start the timer, see “Gotowe”.
FIRST VIEWPORT: A landscape tablet has a short header and shared volume controls
above the table, with large digits and a dark green Start on the right.
Large parameters remain readable; tighter spacing and a timer sized for the
viewport leave room for all text under “Kolejne parzenie”. Touch targets remain
at least 48px. Phones keep six choices and one tea's parameters before the timer.
FORM: The user's explicit request restores the light dashboard design and
lazy-diet family identity. No new direction roll; the supplied dashboard is the
visual authority.
FINISH: Unreviewed and undocumented work is unfinished. Finish with the review,
verdict, DESIGN.md and provenance for every shipped raster asset.
