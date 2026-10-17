# lazy-tea

Polska ściąga do parzenia herbaty liściastej w kubku lub dzbanku.
Czarna, Earl Grey, zielona, biała, oolong i rooibos. Temperatura, czas,
przelicznik suszu oraz minutnik z subtelnym dźwiękiem i komunikatem.

Czysty HTML, CSS i JavaScript. Bez frameworka, bundlera, backendu i zależności
uruchomieniowych. Na poziomym tablecie 10″ podstawowe parametry sześciu
herbat są widoczne naraz; telefon pokazuje duże parametry wybranej pozycji.

## Lokalnie

Wymagane: Node.js 22.19+ lub nowsze LTS, pnpm 11.8 i Python 3 dla serwera statycznego.

```sh
pnpm install
pnpm dev
```

Otwórz http://127.0.0.1:4173. Pliki strony znajdują się w public/.
Nie ma kroku budowania. Testy: pnpm test. Pełna weryfikacja: pnpm verify.
Formatowanie: pnpm fmt.

## Minutnik i dźwięk

Start odblokowuje wbudowane Web Audio API. Dwa ciche tony sinusoidalne
sygnalizują koniec; komunikat „Gotowe” pozostaje na ekranie.
Blokada audio nie zatrzymuje minutnika.

Odliczanie opiera się na terminie zakończenia, więc pominięte odświeżenia
nie wydłużają parzenia. Przeglądanie innej herbaty nie resetuje uruchomionej
ani wstrzymanej sesji. Minutnik stale podaje nazwę odliczanej herbaty.
Reset przywraca ustawiony czas tej samej herbaty; jeśli wybrano inną,
ustawia jej czas domyślny.

Zostaw kartę otwartą. Przeglądarka może wstrzymać alarm przy zablokowanym
urządzeniu. Brak powiadomień systemowych i działania po zamknięciu karty;
przeładowanie rozpoczyna nową sesję.

## Treść

Punkt startowy: 1 g / 100 ml; dawkę i czas dostosuj do smaku.
**Zalecenia na opakowaniu mają pierwszeństwo.**
Zatwierdzona treść i źródła: [PRODUCT.md](PRODUCT.md).
Font Manrope jest dostarczany lokalnie na licencji SIL OFL:
[licencja](public/fonts/OFL.txt), [źródło](https://github.com/google/fonts/tree/main/ofl/manrope).

## Cloudflare Pages i CI

Wzorzec odczytany z lazy-list: weryfikacja każdego PR i pushu na main,
anulowanie zastąpionych przebiegów oraz deploy dopiero po weryfikacji.
Konfiguracja jest dostosowana do Pages, bez serwera Workers i bundlera.

- Produkcja: push na main.
- Podgląd: PR z tego repozytorium, osobna gałąź Pages pr-NUMER.
- PR z forka: tylko weryfikacja, bez dostępu do sekretów.
- Wyłącznie katalog public/ jest publikowany.
- Workflow nie wysyła komentarzy do PR.

Jednorazowo utwórz projekt Pages Direct Upload lazy-tea z produkcyjną
gałęzią main i ustaw sekrety repozytorium CLOUDFLARE_API_TOKEN
(uprawnienie Account / Cloudflare Pages / Edit) oraz CLOUDFLARE_ACCOUNT_ID.
Nie zapisuj wartości w repozytorium.

```sh
pnpm exec wrangler pages project create lazy-tea --production-branch main --force
pnpm run deploy
```

Polecenie pnpm run deploy publikuje produkcję. Do lokalnego sprawdzania
obsługi nagłówków Pages można użyć pnpm exec wrangler pages dev public.

Flaga --force jest potrzebna tylko przy utworzeniu projektu: zachowuje
wybrany Cloudflare Pages, zamiast domyślnego przekierowania nowego projektu
do Workers w obecnej wersji Wrangler. Kolejne deploye istniejącego projektu
Pages nie wymagają tej flagi.

Dokumentacja:
[Pages Direct Upload z CI](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/),
[konfiguracja Wrangler dla Pages](https://developers.cloudflare.com/pages/functions/wrangler-configuration/).
