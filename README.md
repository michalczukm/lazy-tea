# lazy-tea

[Open app](https://lazy-tea.pages.dev/)

Tea brewing cheat sheet with a Polish UI. Six teas, temperature, steeping time,
leaf dosage and a timer. For mugs and teapots.

Plain HTML, CSS and JavaScript. No framework or bundler. Shared styles and local
fonts come from [@lazy/theme](https://github.com/michalczukm/lazy-theme), pinned to
`v0.1.0` in the lockfile.

## Run

Requires Node.js 22.19+, pnpm 11.8 and Python 3.

```sh
pnpm install
pnpm dev
```

Open http://127.0.0.1:4173. Run checks with `pnpm verify`.

## Deploy

Cloudflare Pages serves `public/`. `pnpm build` copies the installed theme and its
licenses to `public/vendor/lazy-theme/`; dev, verification and deployment run it
automatically. Generated theme assets are not committed.

```sh
pnpm run deploy
```

CI checks PRs and `main`. Same-repo PRs get previews; `main` deploys production.
Required GitHub secrets: `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN`
(with Cloudflare Pages Edit permission).

The visible page requests Screen Wake Lock. Browsers or power-saving settings may deny it.
Package brewing instructions take priority. [Brewing data and sources](PRODUCT.md).
[Font license](https://github.com/michalczukm/lazy-theme/blob/v0.1.0/fonts/OFL.txt).
