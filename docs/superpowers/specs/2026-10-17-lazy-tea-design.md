# lazy-tea — design

## Purpose and approved decisions

A Polish guide for brewing loose-leaf tea in a mug or teapot. Six teas, parameters
and tips from PRODUCT.md; a dose of 1 g / 100 ml. No gongfu, pu-erh or herbal
infusions. The selected direction was “Kuchenna ściąga”, with a diagram before code.

## Layout and accessibility

A 10-inch landscape tablet has volume controls at the top, a six-tea table on the
left, and the timer and selected tea details on the right. Columns: tea, water,
time including the default timer, and leaves. Basic parameters for all six entries
fit at 1024 × 768. Phones show six selection buttons, large parameters for one tea,
volume, timer and tips.

Warm white, dark green, fine rules, a readable local font with Polish characters,
and tabular numerals. Touch buttons are at least 48px, with visible focus and full
keyboard access. No horizontal scrolling from 320px. Zoom switches the page to one
column and vertical scrolling rather than clipping content. No photographs or
decorative animation.

## Volume

250, 350, 500 ml or a custom integer from 1 to 10,000 ml. Initially 350 ml and green
tea. Grams = ml / 100, displayed with Polish decimal formatting and at most two
decimal places. An invalid or empty value displays a message and “—” instead of
grams; it does not interrupt an existing timer.

## Timer invariants

One timer: idle, running, paused, done. Default duration depends on the tea.
Editing before start accepts minutes 0–99 and seconds 0–59, with a positive total.

- Start sets a deadline; elapsed time does not depend on the interval count.
- Pause preserves remaining milliseconds; resume uses that value.
- Browsing other teas does not change a running or paused session; the timer
  continues to show the name of the tea being brewed.
- Time editing is available before start and after reset.
- Reset stops the session and clears “Gotowe”. With the same tea, it restores the
  configured duration; with another selected tea, it loads that tea's default.
- Repeating a completed session uses the configured duration.
- Completion occurs exactly once; time is never negative.
- visibilitychange and pageshow correct the display when the tab returns.
- Closing or reloading the tab ends the session; no state persistence.

## Alarm

Two short, quiet sine tones with gentle attack and release through Web Audio API,
without a library, audio file or looping. AudioContext is unlocked on Start.
Unavailable or blocked audio does not prevent the countdown; the user receives a
message and “Gotowe” remains visually available. Screen readers announce completion,
not every second.

The browser may suspend code or sound when the device locks. A visible note advises
leaving the tab open. No promise of an alarm while locked, operation after tab
closure or system notifications.

## Architecture and deployment

No framework, bundler or runtime dependencies. public/index.html and styles.css
define the semantic interface. public/tea.js contains tea data, dose validation and
the timer model without DOM access. public/app.js handles the interface, forms,
events and audio. Only public/ is published, excluding documentation and the contract.

Tests use node:test. CI follows the inspected lazy-list setup: PR/main verification,
cancellation of superseded runs, previews only for PRs from this repository, and
production deployment after a push to main. Pages Direct Upload follows current
Cloudflare documentation and replaces Workers. Secrets remain in GitHub Actions;
no automatic comments are sent to other people.

## Verification

Tests cover dose calculation, validation, timer transitions, delayed intervals,
single completion, pause and reset. Check syntax, lint and formatting. Browser flow:
selection, volume, editing, pause, tea changes, reset, completion and blocked audio.
Capture a 390 × 844 phone, a narrow 320px view, a 1024 × 768 tablet and desktop.
Run the Impeccable detector, obtain an independent review and document the built system.
