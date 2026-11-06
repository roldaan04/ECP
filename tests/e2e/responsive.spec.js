import { test, expect } from '@playwright/test';
import { ROUTES } from './routes.js';

const WIDTHS = [320, 360, 390, 414, 768, 1024];

test.describe('Responsive', () => {
  test.skip(({ isMobile }) => isMobile, 'los anchos se recorren aquí');

  for (const width of WIDTHS) {
    test(`${width}px: sin scroll horizontal ni palabras partidas en titulares`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      const problems = [];
      for (const path of [...ROUTES, '/no-existe/']) {
        await page.goto(path);
        const result = await page.evaluate(() => {
          const out = [];
          if (document.documentElement.scrollWidth > window.innerWidth + 1) {
            out.push(`scroll horizontal (${document.documentElement.scrollWidth}px)`);
          }
          // Una palabra está partida si su rango ocupa rectángulos en más de una línea.
          for (const h of document.querySelectorAll('h1, h2, h3')) {
            if (h.clientWidth <= 1) continue; // titulares solo para lectores de pantalla (sr-only)
            // Desbordamiento (aunque un ancestro lo recorte con overflow: hidden)
            if (
              h.scrollWidth > h.clientWidth + 1 ||
              h.getBoundingClientRect().right > window.innerWidth + 1
            ) {
              out.push(`titular desbordado «${h.textContent.trim()}»`);
            }
            const walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
            let node;
            while ((node = walker.nextNode())) {
              const re = /\S+/g;
              let m;
              while ((m = re.exec(node.textContent))) {
                const r = document.createRange();
                r.setStart(node, m.index);
                r.setEnd(node, m.index + m[0].length);
                const tops = new Set([...r.getClientRects()].map((x) => Math.round(x.top)));
                if (tops.size > 1) out.push(`palabra partida «${m[0]}» en «${h.textContent.trim()}»`);
              }
            }
          }
          return out;
        });
        for (const p of result) problems.push(`${path}: ${p}`);
      }
      expect(problems, problems.join('\n')).toEqual([]);
    });
  }

  test('menú móvil funciona tras hacer scroll', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, 2500));
    await page.waitForTimeout(300);
    const toggle = page.getByRole('button', { name: 'Menú', exact: true });
    await toggle.click();
    const dialog = page.getByRole('dialog', { name: 'Menú principal' });
    await expect(dialog).toBeVisible();
    // El panel ocupa toda la pantalla (no queda recortado dentro del header)
    const box = await dialog.boundingBox();
    expect(box?.y).toBe(0);
    expect(box?.height).toBeGreaterThanOrEqual(840);
    await expect(page.getByRole('link', { name: 'Tarifas', exact: true }).last()).toBeVisible();
    await page.getByRole('link', { name: 'Tarifas', exact: true }).last().click();
    await expect(page).toHaveURL(/\/tarifas\/$/);
    await expect(dialog).toBeHidden();
  });
});

test.describe('Inicio lleva arriba de la Home', () => {
  test('desde la Home con scroll (nav y logo)', async ({ page, isMobile }) => {
    test.skip(isMobile, 'escritorio');
    await page.goto('/');
    for (const link of [
      page.locator('header nav[aria-label="Principal"] a[href="/"]'),
      page.locator('header a[href="/"]').first(),
    ]) {
      await page.evaluate(() => window.scrollTo({ top: 3000, behavior: 'instant' }));
      await link.click();
      await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(5);
    }
  });

  test('desde otra página con scroll', async ({ page, isMobile }) => {
    test.skip(isMobile, 'escritorio');
    await page.goto('/entrenador-personal-madrid/');
    await page.evaluate(() => window.scrollTo({ top: 2500, behavior: 'instant' }));
    await page.locator('header nav[aria-label="Principal"] a[href="/"]').click();
    await expect(page).toHaveURL(/localhost:\d+\/$/);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(5);
  });

  test('menú móvil: Inicio sube arriba tras hacer scroll', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.evaluate(() => window.scrollTo({ top: 3000, behavior: 'instant' }));
    await page.getByRole('button', { name: 'Menú', exact: true }).click();
    await page.getByRole('dialog').getByRole('link', { name: 'Inicio', exact: true }).click();
    await expect(page.getByRole('dialog')).toBeHidden();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(5);
  });
});
