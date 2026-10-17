# lazy-tea — projekt

## Cel i zatwierdzone decyzje

Polska ściąga dla osoby parzącej susz liściasty w kubku lub dzbanku.
Sześć herbat, parametry i wskazówki z PRODUCT.md; dawka 1 g / 100 ml.
Bez gongfu, pu-erh i ziół. Wybrano „Kuchenną ściągę” i schemat przed kodem.

## Układ i dostępność

Tablet 10″ poziomo: objętość u góry, tabela sześciu herbat po lewej,
minutnik i szczegóły wybranej herbaty po prawej. Kolumny: herbata, woda,
czas wraz z domyślnym minutnikiem, susz. Podstawowe parametry sześciu
pozycji mieszczą się w 1024 × 768. Telefon: sześć przycisków wyboru, duże
parametry jednej herbaty, objętość, minutnik i wskazówki.

Ciepła biel, ciemna zieleń, cienkie linie, czytelny lokalny font z polskimi
znakami, cyfry o stałej szerokości. Dotykowe przyciski minimum 48 px,
widoczny fokus i pełna obsługa klawiaturą. Brak poziomego przewijania od
320 px. Powiększenie powoduje przejście w jedną kolumnę i przewijanie
pionowe, nie ucinanie treści. Bez zdjęć i dekoracyjnych animacji.

## Objętość

250, 350, 500 ml lub własna pełna liczba od 1 do 10 000 ml.
Początkowo 350 ml i zielona. Gramy = ml / 100, polski zapis z maksymalnie
dwoma miejscami po przecinku. Nieprawidłowa lub pusta wartość daje
komunikat i „—” zamiast gramów; nie przerywa istniejącego minutnika.

## Minutnik — niezmienniki

Jeden minutnik: idle, running, paused, done. Czas domyślny według herbaty.
Edycja przed startem: minuty 0–99, sekundy 0–59, łącznie więcej niż zero.

- Start ustala termin zakończenia; czas nie zależy od liczby interwałów.
- Pauza zachowuje pozostałe milisekundy; wznowienie używa tej wartości.
- Przeglądanie innych herbat nie zmienia sesji running ani paused;
  minutnik nadal pokazuje nazwę odliczanej herbaty.
- Edycja czasu jest dostępna przed startem i po resecie.
- Reset zatrzymuje sesję i usuwa Gotowe. Przy tej samej herbacie przywraca
  ustawiony czas; przy innej wybranej herbacie ładuje jej domyślny czas.
- Powtórzenie zakończonej sesji używa ustawionego czasu.
- Zakończenie następuje dokładnie raz; czas nigdy nie jest ujemny.
- visibilitychange i pageshow korygują odczyt po powrocie do karty.
- Zamknięcie lub przeładowanie karty kończy sesję; brak zapisu stanu.

## Alarm

Dwa krótkie, ciche tony sinusoidalne z łagodnym narastaniem i wygaszeniem
przez Web Audio API, bez biblioteki, pliku audio i zapętlania. AudioContext
odblokowywany przy Start. Brak lub blokada audio nie blokuje odliczania;
użytkownik dostaje informację, a Gotowe pozostaje dostępne wizualnie.
Czytnik ekranu ogłasza zakończenie, nie każdą sekundę.

Przeglądarka może wstrzymać kod lub dźwięk przy blokadzie urządzenia.
Widoczna uwaga zaleca pozostawienie otwartej karty. Brak obietnicy alarmu
przy blokadzie, działania po zamknięciu karty i powiadomień systemowych.

## Architektura i publikacja

Bez frameworka, bundlera i zależności uruchomieniowych.
public/index.html i styles.css definiują semantyczny interfejs.
public/tea.js: dane herbat, walidacja dawki i model minutnika bez DOM.
public/app.js: interfejs, formularze, zdarzenia i audio.
Publikowany jest wyłącznie public/, bez dokumentacji i kontraktu.

Testy: node:test. CI bazuje na odczytanym lazy-list: weryfikacja PR/main,
anulowanie zastąpionych przebiegów, podgląd tylko PR z tego repo i produkcja
po pushu na main. Pages Direct Upload według aktualnej dokumentacji
Cloudflare zastępuje Workers. Sekrety pozostają w GitHub Actions;
brak automatycznych komentarzy wysyłanych innym osobom.

## Weryfikacja

Testy dawki, walidacji i przejść minutnika, pominiętych interwałów,
jednokrotnego końca, pauzy i resetu. Składnia, lint i formatowanie.
Przepływ w przeglądarce: wybór, objętość, edycja, pauza, zmiana herbaty,
reset, koniec i blokada audio. Zrzuty telefonu 390 × 844, wąskiego 320 px,
tabletu 1024 × 768 i desktopu. Detektor Impeccable, niezależny przegląd
i dokumentacja zbudowanego systemu.
