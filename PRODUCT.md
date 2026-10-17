# lazy-tea

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

- Czysty HTML, CSS i JavaScript; bez frameworka i bundlera.
- Docelowe repozytorium: https://github.com/michalczukm/lazy-tea.
- Docelowy hosting: Cloudflare Pages.
- Przed konfiguracją CI i publikacji odczytać repozytoria lazy-list oraz
  lazy-dirt i ich instrukcje. Nie zgadywać konfiguracji.
- HTML, CSS i moduły JavaScript w osobnych plikach katalogu `public/`.

## Users

Osoba parząca herbatę liściastą w kubku lub dzbanku, korzystająca
z telefonu albo tabletu 10″ podczas parzenia.

## Product Purpose

Interaktywna ściąga po polsku: szybki podgląd temperatury, czasu i dawki
suszu oraz minutnik. Na telefonie najważniejsze są duże, czytelne parametry
i wygodna obsługa dotykiem. Na tablecie 10″ podstawowe parametry wszystkich
sześciu rodzajów powinny mieścić się na jednym ekranie w orientacji poziomej.

## Capabilities and Constraints

- Sześć pozycji: czarna, Earl Grey, zielona, biała, oolong i rooibos.
- Earl Grey jest osobną pozycją na bazie czarnej herbaty.
- Bez gongfu, pu-erh i ziół.
- Wybór herbaty i objętości wody: 250, 350, 500 ml oraz własna wartość.
- Dawka początkowa: **1 g / 100 ml**, przeliczana proporcjonalnie.
  Przykłady: 250 ml → 2,5 g; 350 ml → 3,5 g; 500 ml → 5 g.
- Dawka służy jako punkt startowy do dostosowania według smaku.
- Minutnik z czasem domyślnym dla herbaty, ręczną edycją, startem,
  pauzą i resetem.
- Edycja czasu zastępuje duże cyfry polami minut i sekund w tym samym
  miejscu. Bez dodatkowego panelu; dostępne zapisanie i anulowanie zmiany.
- Dla każdej herbaty: temperatura wody, zakres czasu, domyślny czas
  minutnika, dawka suszu, informacja o kolejnym parzeniu i jedna wskazówka.
- Kolejność prac: uzgodnienie treści, projekt z Impeccable, implementacja.
- Uzgodniony sposób projektowania: najpierw schematy i opis, następnie kod.
  Bez generowania makiet obrazowych przed implementacją.
- Alarm: subtelny krótki dźwięk przez Web Audio API i trwały komunikat
  „Gotowe”. Bez biblioteki i pliku audio.
- Odczyt czasu jest korygowany po powrocie z tła; brak gwarancji alarmu
  przy zablokowanym urządzeniu i brak powiadomień systemowych.

## Approved Content

Użytkownik zatwierdził poniższą treść wraz ze zmianą dawki na 1 g / 100 ml.

| Herbata   | Woda     | Czas    | Minutnik |
| --------- | -------- | ------- | -------- |
| Czarna    | 90–100°C | 3–5 min | 4:00     |
| Earl Grey | 95°C     | 3–5 min | 4:00     |
| Zielona   | 75–80°C  | 1–3 min | 2:00     |
| Biała     | 80–85°C  | 3–5 min | 3:00     |
| Oolong    | 85–95°C  | 2–4 min | 3:00     |
| Rooibos   | 95–100°C | 5–7 min | 5:00     |

To uproszczone wartości startowe, nie uniwersalne receptury. Szczególnie
białe herbaty i oolongi mają zróżnicowane zalecenia. Stała, widoczna uwaga:
**„Zalecenia na opakowaniu mają pierwszeństwo”.**

| Herbata   | Kolejne parzenie                        | Wskazówka                                                                   |
| --------- | --------------------------------------- | --------------------------------------------------------------------------- |
| Czarna    | Możliwe, zwykle delikatniejsze          | Po parzeniu wyjmij sitko lub oddziel napar od liści                         |
| Earl Grey | Możliwe, zwykle delikatniejsze          | Mocniejszy napar uzyskaj większą ilością liści, zamiast przedłużać parzenie |
| Zielona   | Warto spróbować; dostosuj czas do smaku | Gdy gorzka, spróbuj chłodniejszej wody lub krótszego czasu                  |
| Biała     | Warto spróbować; dostosuj czas do smaku | Duże liście odmierzaj wagą; łyżeczka jest mało dokładna                     |
| Oolong    | Warto spróbować; dostosuj czas do smaku | Zostaw liściom dużo miejsca na rozwinięcie                                  |
| Rooibos   | Najlepiej zacząć od świeżej porcji      | Użyj drobnego sitka                                                         |

Bez sztywnej liczby kolejnych parzeń.

## Confirmed Layout

Wybrany kierunek: „Kuchenna ściąga”. Tablet poziomo: tabela sześciu herbat
i minutnik po prawej. Telefon: wybór herbaty, duże parametry jednej pozycji,
objętość, minutnik i krótkie wskazówki.

## Brand Commitments

- Nazwa: lazy-tea.
- Interfejs i treść po polsku.
- Projektowanie z użyciem skilla impeccable:impeccable.

## Evidence on Hand

Treść jest syntezą poradników, a nie recepturą dla konkretnego produktu:

- https://www.harney.com/pages/steeping-temperatures
- https://inpursuitoftea.com/pages/how-to-make-tea
- https://www.teatulia.com/brewing/how-to-brew-tea.html
- https://us.palaisdesthes.com/en_us/blog/tips-and-advice/how-to-prepare-tea/
- https://us.palaisdesthes.com/en_us/us-earl-grey-queen-blend-organic-d8010am.html
- https://us.palaisdesthes.com/en_us/the-des-amants-rooibos.html

## Product Principles

- Szybki odczyt parametrów podczas parzenia.
- Zalecenia na opakowaniu mają pierwszeństwo przed ściągą.
- Proste punkty startowe z możliwością dostosowania do smaku.
- Obsługa dotykiem i czytelność prowadzą decyzje o interfejsie.

## Accessibility & Inclusion

Duży, czytelny tekst i wygodna obsługa dotykiem na telefonie. Podstawowe
parametry wszystkich sześciu herbat widoczne na jednym ekranie tabletu 10″
w orientacji poziomej.
