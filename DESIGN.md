---
name: lazy-tea
description: Polska kuchenna ściąga do parzenia herbaty.
colors:
  paper: '#fbfaf5'
  ink: '#263d33'
  muted: '#58675c'
  line: '#cdd5ca'
  selected: '#dce5d9'
  soft: '#f0f2e9'
  error: '#963b27'
  wordmark-accent: '#5a7c51'
  primary-hover: '#354e3e'
  done: '#4b6b3e'
typography:
  wordmark:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '32px'
    fontWeight: 800
    letterSpacing: '-0.04em'
  headline:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '24px'
    fontWeight: 650
    letterSpacing: '-0.025em'
  title:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '18px'
    fontWeight: 700
  body:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.6
  note:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '14px'
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '12px'
    fontWeight: 600
  control:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '16px'
    fontWeight: 650
  table-number:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '25px'
    fontWeight: 500
  mobile-parameter:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '31px'
    fontWeight: 550
    letterSpacing: '-0.035em'
  countdown:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '88px'
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: '-0.04em'
rounded:
  control: '8px'
  row: '0'
  indicator: '50%'
spacing:
  tight: '6px'
  small: '8px'
  control-gap: '12px'
  related: '14px'
  standard: '16px'
  section-small: '20px'
  section: '24px'
  section-wide: '28px'
  columns: '48px'
components:
  button-primary:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.paper}'
    typography: '{typography.control}'
    rounded: '{rounded.control}'
    padding: '12px 24px'
  button-primary-hover:
    backgroundColor: '{colors.primary-hover}'
  button-reset:
    backgroundColor: 'transparent'
    textColor: '{colors.ink}'
    rounded: '{rounded.control}'
    padding: '12px 18px'
  button-text:
    backgroundColor: 'transparent'
    textColor: '{colors.muted}'
    rounded: '{rounded.control}'
    padding: '0'
  volume-choice:
    backgroundColor: 'transparent'
    textColor: '{colors.ink}'
    typography: '{typography.control}'
    rounded: '{rounded.control}'
    padding: '10px 16px'
  choice-selected:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.paper}'
  tea-choice-mobile:
    backgroundColor: 'transparent'
    textColor: '{colors.ink}'
    rounded: '{rounded.control}'
    padding: '10px 5px'
  field:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.ink}'
    rounded: '{rounded.control}'
    padding: '8px 12px'
  tea-row-selected:
    backgroundColor: '{colors.selected}'
    textColor: '{colors.ink}'
    rounded: '{rounded.row}'
---

# Design System: lazy-tea

## Overview

**Creative North Star: "Kuchenna ściąga"**

„Kuchenna ściąga” porządkuje parametry herbaty jak podręczną tabelę przy czajniku. Ciepły papier, zielony atrament i jeden czytelny sans tworzą spokojny, użytkowy charakter; duże liczby są pierwszym planem, krótkie podpisy pomagają je odczytać.

System jest płaski i oszczędny: cienkie poziome linie rozdzielają informacje, wypełnienie wskazuje wybór, a mocny przycisk prowadzi do uruchomienia minutnika. Różne szerokości ekranu zachowują tę samą hierarchię parametrów i stanu parzenia. Interfejs pozostaje po polsku.

**Key Characteristics:**

- Ciepły papier i przygaszona zieleń.
- Duże liczby, spokojne podpisy i czytelny Manrope.
- Prostokątne kontrolki z delikatnie zaokrąglonymi narożnikami.
- Płaskie powierzchnie, poziome linie i jednoznaczne zaznaczenie.

## Colors

Paleta jest ciepła, przygaszona i oparta na zieleni; wartości w frontmatter są normatywne i odpowiadają `public/styles.css`.

### Primary

- **Zielony atrament** (`ink`): tekst, zaznaczone przyciski, przycisk Start, fokus i kropka zaznaczenia.
- **Zieleń wyboru** (`selected`): zaznaczony wiersz i zaznaczenie tekstu.
- **Zieleń działania** (`primary-hover`): najechanie na główny przycisk.
- **Zieleń gotowości** (`done`): cyfry zakończonego minutnika; komunikat „Gotowe” dodatkowo wzmacnia stan.
- **Zieleń podpisu** (`wordmark-accent`): kropka znaku słownego.

### Neutral

- **Ciepły papier** (`paper`): tło strony, pól i jasny tekst na zielonym przycisku.
- **Cichy tekst** (`muted`): jednostki, podpisy, objaśnienia i pomocnicze kontrolki.
- **Linia papieru** (`line`): poziome podziały tabeli, sekcji i obrysy pól.
- **Miękka zieleń papieru** (`soft`): najechanie na niezaznaczone opcje i Reset oraz przycisk Ustaw.

Błąd pola używa rdzawej czerwieni (`error`) na obrysie i w komunikacie; to kolor walidacji, nie drugi akcent marki.

**The Czytelnego wyboru Rule.** Wybrana pozycja ma własne wypełnienie i stan aria-pressed; wiersz tabeli dodatkowo ma małą kropkę.

## Typography

**Display Font:** Manrope, sans-serif.
**Body Font:** Manrope, sans-serif.

Jeden lokalny font zmienny (`public/fonts/manrope.ttf`, wagi 200–800, `font-display: swap`) obsługuje całą stronę. Nie ma osobnego kroju ozdobnego ani monospace. Root ma wielkość (16px); cyfry tabeli, parametrów telefonu i minutnika używają `tabular-nums`.

### Hierarchy

- **Wordmark:** rola `wordmark`; na telefonie wielkość maleje do (28px).
- **Headline:** rola `headline`; krótkie pytanie nad wyborem herbaty w widoku telefonu.
- **Title:** rola `title` dla nagłówka minutnika; na telefonie wielkość (17px). Nazwa wybranej herbaty ma (19px, 650).
- **Body:** rola `body`; akapity mają interlinię (1.6).
- **Note:** rola `note` dla wskazówek, maksymalna szerokość (65ch); na telefonie wielkość rośnie do (16px), z zachowaniem interlinii (1.55).
- **Label:** rola `label` dla nagłówków kolumn i pomocniczych podpisów; komunikaty i kontrolki tekstowe często mają (13px), nazwa herbaty w nagłówku minutnika (14px).
- **Table number:** rola `table-number`; na tablecie wielkość (23px). Jednostka ma (0.55em), wagę (500) i odsunięcie (4px).
- **Mobile parameter:** rola `mobile-parameter`; poniżej (360px) wielkość (26px). Jednostki telefonu mają (13px) i odsunięcie (2px).
- **Countdown:** rola `countdown`; w zakresie tabletu wielkość (80px). Nie animuje zmiany sekund.

**The Spokojnych cyfr Rule.** Parametry i minutnik używają cyfr tabelarycznych; jednostki i podpisy pozostają mniejsze od wartości.

## Layout

Strona ma szerokość maksymalną (1280px), jest wyśrodkowana i ma padding (32px 40px 24px). Nagłówek jest krótki; odstęp pod nim wynosi (28px). Powtarzane odstępy zapisano w skali `spacing`; układ nie wymusza jednej matematycznej skali.

Od (900px) pasek objętości znajduje się nad dwukolumnowym układem. Lewa kolumna zawiera tabelę sześciu herbat; prawa minutnik, wskazówkę i kolejne parzenie. Kolumny: `minmax(0, 1.9fr) minmax(280px, 1fr)`, odstęp (48px). Tabela ma wyłącznie poziome linie, szerokości pierwszych trzech kolumn (30%, 25%, 27%) i padding komórek liczbowych (16px 12px). Pasek objętości ma padding (20px 0), odstępy (16px 28px) i margines dolny (28px).

W zakresie (900–1100px) strona ma padding (24px 28px 20px), odstęp nagłówka (16px), kolumny `minmax(0, 1.8fr) minmax(270px, 1fr)` i odstęp (28px). Pasek objętości ma padding (16px 0), odstępy (12px 20px) i margines dolny (24px). Komórki liczbowe mają padding (7px 10px), przycisk nazwy herbaty zachowuje padding (16px 4px 16px 0). To gęstsza kompozycja do odczytu sześciu wierszy i minutnika na poziomym tablecie 10″.

Do (899px) strona ma szerokość maksymalną (600px) i padding (22px 24px 24px). Tabela znika; wybór sześciu herbat jest siatką trzech kolumn z odstępem (8px). Poniżej są duże parametry jednej herbaty w proporcjach `1.2fr 1fr 0.8fr`, odstęp (12px), następnie objętość, minutnik i wskazówki. Pasek objętości ma odstęp (14px) i margines dolny (20px). Do (359px) boczny padding strony i odstęp parametrów maleją odpowiednio do (16px) i (8px).

## Elevation & Depth

Brak cieni i dekoracyjnych warstw. Różnicę między grupami tworzą odstępy i linie (1px), między stanami — wypełnienia. Fokus jest obrysem, nie cieniem.

**The Płaskiego papieru Rule.** Oddzielaj grupy linią, odstępem lub tonem tła; bieżący system nie używa cieni.

## Shapes

Przyciski i pola są prostokątne, z narożnikiem `control`. Wiersze i ich przyciski mają narożnik `row`; kropka wybranej herbaty ma średnicę (6px) i zaokrąglenie `indicator`. Tabela nie ma zewnętrznej karty ani pionowych linii. Bazowa grubość obrysu kontrolki i separatora wynosi (1px).

## Components

### Buttons

Główny przycisk jest spokojnym, mocnym polem zielonego atramentu z jasnym tekstem. Używa wariantu `button-primary`, obrysu (1px) i minimalnej wysokości (52px), na telefonie (56px). Waga tekstu wynosi (650). Stan najechania używa `button-primary-hover`. Etykieta odzwierciedla stan: Start, Pauza, Wznów lub Parz ponownie.

Reset używa wariantu `button-reset`, cienkiego obrysu i miękkiego tła po najechaniu. Zmień czas używa wariantu `button-text`, tekstu (13px) i podkreślenia odsuniętego o (4px); wyłączony traci podkreślenie. Przycisk Ustaw ma tło `soft`, padding (8px 12px) i obrys `line`.

Wspólne minimum przycisków to (48px). Fokus klawiatury przycisków, pól i linków ma obrys (3px solid ink) z odsunięciem (4px). Wyłączone przyciski mają opacity (0.55) i domyślny kursor. Bieżący kod nie definiuje osobnego wizualnego stanu `:active`.

### Choice controls

Objętość używa wariantu `volume-choice`, odstępu (6px), wagi (650) i lżejszego (400) oznaczenia ml. Na tablecie padding wynosi (10px 12px); na telefonie (10px 8px) i tekst (14px), a przyciski równo wypełniają szerokość.

Telefoniczny wybór herbaty używa `tea-choice-mobile`, tekstu (14px, 600) i siatki opisanej w Layout. Obie grupy mają ciemne wypełnienie zaznaczenia (`choice-selected`) oraz `aria-pressed`. Niezaznaczone opcje po najechaniu używają tła `soft`.

### Inputs / Fields

Wariant `field` ma minimalną wysokość (48px), obrys (1px solid line), tło papieru i caret w kolorze atramentu. Pole własnej objętości ma szerokość (112px). Edytor minutnika układa minuty, sekundy i przycisk Ustaw w kolumnach `1fr 1fr auto` z odstępem (8px); pola mają padding (8px). Niepoprawne pola używają obrysu `error`, komunikatu tekstowego (13px) i `aria-invalid`.

### Tea table

Wybrany wiersz używa `tea-row-selected`; nazwa herbaty ma (18px, 650), na tablecie (17px). Przycisk obejmuje dostępną szerokość pierwszej komórki. Najechanie używa tła `soft`, a reguła zaznaczenia ma pierwszeństwo. Jedyna krótka animacja systemu to zmiana tła wiersza (`background-color 160ms ease-out`); `prefers-reduced-motion: reduce` wyłącza przejścia.

### Timer and notes

Minutnik jest częścią płaskiej prawej kolumny, z dolną linią i paddingiem dolnym (24px). Nazwa odliczanej herbaty jest obok nagłówka; status rezerwuje wysokość (24px), a liczby używają roli `countdown`. Działania są siatką `1fr auto` z odstępem (12px). „Gotowe” pozostaje widocznym komunikatem; status ma wówczas wagę (800), a cyfry kolor `done`.

Przeglądanie innej herbaty podczas odliczania albo pauzy nie zmienia sesji minutnika. Przy rozbieżnym wyborze pojawia się tekst wskazujący nadal odliczaną herbatę. Edycja czasu jest wówczas wyłączona. Wskazówki odnoszą się do przeglądanej pozycji i pozostają krótkimi akapitami.

### Brand link and assets

Jedyny widoczny link marki to tekstowy `lazy-tea.` prowadzący do strony głównej. Podkreślenie jest usunięte, a zielona kropka stanowi akcent. Link pomijający nagłówek pojawia się po otrzymaniu fokusu. Projekt nie ma osobnego menu nawigacji, kart ani obrazów rastrowych; dostarczone zasoby to lokalny font z licencją i mały favicon SVG.

## Do's and Don'ts

### Do:

- Do zachowuj polskie etykiety, czytelne jednostki i wyraźną hierarchię liczb.
- Do używaj istniejących kolorów i lokalnego Manrope.
- Do zachowuj widoczny fokus, dotykowe pola oraz tekstowy komunikat „Gotowe”.
- Do sprawdzaj obie kompozycje po obu stronach granicy 899/900 px oraz wąski telefon.

### Don't:

- Don't rozbijaj tabeli sześciu herbat na sześć kart w widoku poziomego tabletu.
- Don't zastępuj małych jednostek i podpisów równie dużym tekstem jak wartości.
- Don't dodawaj ozdobnych cieni, wejść ani animacji każdej sekundy do tej płaskiej ściągi.
- Don't utożsamiaj przeglądanej herbaty z herbatą aktywnego minutnika; stan sesji ma własny podpis.
