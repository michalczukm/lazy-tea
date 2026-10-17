import { cpSync, mkdirSync, rmSync } from 'node:fs'

const source = new URL('.', import.meta.resolve('@lazy/theme'))
const target = new URL('../public/vendor/lazy-theme/', import.meta.url)

rmSync(target, { recursive: true, force: true })
mkdirSync(target, { recursive: true })
for (const asset of ['theme.css', 'fonts.css', 'css', 'fonts', 'LICENSE']) {
  cpSync(new URL(asset, source), new URL(asset, target), { recursive: true })
}
