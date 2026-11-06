/**
 * Capturas de revisión visual a 390 y 1440 px (página completa).
 * Requiere el sitio sirviéndose (npm run dev o npm start). Guarda en docs/capturas/.
 * Uso: node scripts/screenshots.mjs [baseUrl] [ruta1 ruta2 ...]
 */
import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const base = process.argv[2] || 'http://localhost:3000';
const paths = process.argv.slice(3).length
  ? process.argv.slice(3)
  : [
      '/',
      '/entrenador-personal-madrid/',
      '/preparador-fisico-madrid/',
      '/entrenador-baloncesto-madrid/',
      '/entrenamiento-online/',
      '/sobre-mi/',
      '/tarifas/',
      '/contacto/',
      '/aviso-legal/',
      '/no-existe/',
    ];
const widths = [390, 1440];

await mkdir('docs/capturas', { recursive: true });
const browser = await chromium.launch();
for (const w of widths) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: w < 768 ? 844 : 900 },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  for (const p of paths) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    // Revela todo lo que se anima al hacer scroll para que la captura sea fiel.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1600);
    // La barra CTA móvil es fixed: en capturas de página completa aparecería a mitad del documento.
    await page.addStyleTag({ content: '[data-sticky-cta]{display:none!important}' });
    const name = (p === '/' ? 'home' : p.replace(/\//g, '-').replace(/^-|-$/g, '')) + `-${w}.png`;
    await page.screenshot({ path: `docs/capturas/${name}`, fullPage: true });
    console.log('✓', name);
  }
  await ctx.close();
}
await browser.close();
