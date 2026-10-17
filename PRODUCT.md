# lazy-tea

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

- Plain HTML, CSS and JavaScript; no framework or bundler.
- Target repository: https://github.com/michalczukm/lazy-tea.
- Target hosting: Cloudflare Pages.
- Read lazy-list, lazy-dirt and their instructions before configuring CI or deployment. Do not guess the configuration.
- HTML, CSS and JavaScript modules live in separate files under `public/`.

## Users

Someone brewing loose-leaf tea in a mug or teapot, using a phone or a 10-inch tablet while brewing.

## Product Purpose

A Polish interactive brewing guide: quick access to water temperature, steeping time, leaf quantity and a timer. Phones prioritize large, readable parameters and comfortable touch controls. A 10-inch landscape tablet should show the basic parameters for all six teas on one screen.

## Capabilities and Constraints

- Six entries: black, Earl Grey, green, white, oolong and rooibos.
- Earl Grey is a separate entry based on black tea.
- No gongfu, pu-erh or herbal infusions.
- Tea selection and water volumes of 250, 350, 500 ml or a custom value.
- Starting dose: **1 g / 100 ml**, scaled proportionally. Examples: 250 ml → 2.5 g; 350 ml → 3.5 g; 500 ml → 5 g.
- The dose is a starting point to adjust to taste.
- A timer with a default duration for each tea, manual editing, start, pause and reset.
- Time editing replaces the large digits with minute and second fields in the same position. No additional panel; changes can be saved or cancelled.
- Each tea provides water temperature, a steeping range, default timer, leaf quantity, advice about another infusion and one short tip.
- Work sequence: agree on content, design with Impeccable, then implement.
- Agreed design process: diagrams and descriptions before code. Do not generate image mockups before implementation.
- Alarm: a short, subtle Web Audio API sound and a persistent “Gotowe” message. No audio library or file.
- The timer corrects its display when the page returns from the background. No guaranteed alarm while the device is locked and no system notifications.
- The visible page automatically requests Screen Wake Lock, even before the timer starts, and requests it again when the tab becomes visible. The system or browser may deny it; missing API support does not block brewing.
- No footer or additional notes below the main content.

## Approved Content

The user approved this content with a dose of 1 g / 100 ml. Polish names and quoted text below are the approved interface copy.

| Tea       | Water    | Steeping | Timer |
| --------- | -------- | -------- | ----- |
| Czarna    | 90–100°C | 3–5 min  | 4:00  |
| Earl Grey | 95°C     | 3–5 min  | 4:00  |
| Zielona   | 75–80°C  | 1–3 min  | 2:00  |
| Biała     | 80–85°C  | 3–5 min  | 3:00  |
| Oolong    | 85–95°C  | 2–4 min  | 3:00  |
| Rooibos   | 95–100°C | 5–7 min  | 5:00  |

These are simplified starting values, not universal recipes. White teas and oolongs vary particularly widely. Interpret all guidance according to **“Zalecenia na opakowaniu mają pierwszeństwo”** (package instructions take priority).

| Tea       | Another infusion                        | Tip                                                                         |
| --------- | --------------------------------------- | --------------------------------------------------------------------------- |
| Czarna    | Możliwe, zwykle delikatniejsze          | Po parzeniu wyjmij sitko lub oddziel napar od liści                         |
| Earl Grey | Możliwe, zwykle delikatniejsze          | Mocniejszy napar uzyskaj większą ilością liści, zamiast przedłużać parzenie |
| Zielona   | Warto spróbować; dostosuj czas do smaku | Gdy gorzka, spróbuj chłodniejszej wody lub krótszego czasu                  |
| Biała     | Warto spróbować; dostosuj czas do smaku | Duże liście odmierzaj wagą; łyżeczka jest mało dokładna                     |
| Oolong    | Warto spróbować; dostosuj czas do smaku | Zostaw liściom dużo miejsca na rozwinięcie                                  |
| Rooibos   | Najlepiej zacząć od świeżej porcji      | Użyj drobnego sitka                                                         |

Do not prescribe a fixed number of infusions.

## Confirmed Layout

Selected style: the light dashboard at `http://127.0.0.1:4198/dashboard.html`, consistent with the green identity of `../lazy-diet`. It replaces the dark “Kuchenny pulpit” direction: paper background #fbfaf5, ink #263d33, green accent #59784f and locally hosted Atkinson Hyperlegible Next. Use lighter numerals, flat dividers and the `lazy-tea.` wordmark with a green dot.

Landscape tablet: a six-tea table with the timer on the right. All basic content, including the complete text under “Kolejne parzenie”, should fit on screen. Target device: Lenovo TB310FU. Smaller landscape CSS widths retain the table instead of switching to the large phone view.

Phone: tea selection, large parameters for one tea, volume, timer and short tips. Touch targets remain at least 48 px.

The tablet runs in fullscreen. A photograph of the actual device showed that text was too small despite fitting vertically. Actual text and controls were enlarged, then reduced in small steps after device checks. After correcting the preview address, the user requested the previous, slightly larger variant. At 1280×800, parameters are now 34 px, tea names 25 px, notes 18 px, controls 20 px and the timer 112 px. Scale depends on viewport width and height; do not force page height or stretch table rows. Shorter screens retain the compact variant.

The new style is previewed locally first. Publishing this change awaits user approval.

## Brand Commitments

- Name: lazy-tea; the wordmark ends with a dot (`lazy-tea.`).
- Interface and product copy remain in Polish.
- Design work uses the impeccable:impeccable skill.

## Evidence on Hand

The content synthesizes several guides; it is not a recipe for a specific product:

- https://www.harney.com/pages/steeping-temperatures
- https://inpursuitoftea.com/pages/how-to-make-tea
- https://www.teatulia.com/brewing/how-to-brew-tea.html
- https://us.palaisdesthes.com/en_us/blog/tips-and-advice/how-to-prepare-tea/
- https://us.palaisdesthes.com/en_us/us-earl-grey-queen-blend-organic-d8010am.html
- https://us.palaisdesthes.com/en_us/the-des-amants-rooibos.html

## Product Principles

- Make brewing parameters quick to read while brewing.
- Package instructions take priority over this guide.
- Offer simple starting points that can be adjusted to taste.
- Let touch usability and readability guide interface decisions.

## Accessibility & Inclusion

Large, readable text and comfortable touch controls on phones. Basic parameters for all six teas visible on one landscape screen of a 10-inch tablet.
