import { test, expect } from '@playwright/test';
import { LANDINGS, ROUTES } from './routes.js';

const decode = (href) => decodeURIComponent(href.split('?text=')[1] || '');

test.describe('Conversión: WhatsApp y tarifas', () => {
  test('todos los enlaces de WhatsApp son wa.me correctos y se abren en pestaña nueva', async ({ page }) => {
    for (const path of ROUTES) {
      await page.goto(path);
      const links = page.locator('a[href*="wa.me"]');
      const n = await links.count();
      expect(n, `${path} sin CTA de WhatsApp`).toBeGreaterThan(0);
      for (let i = 0; i < n; i++) {
        const a = links.nth(i);
        expect(await a.getAttribute('href')).toMatch(/^https:\/\/wa\.me\/34638068834\?text=.+/);
        expect(await a.getAttribute('target')).toBe('_blank');
        expect(await a.getAttribute('rel')).toContain('noopener');
      }
    }
  });

  test('mensaje de la Home', async ({ page }) => {
    await page.goto('/');
    const href = await page.locator('main a[href*="wa.me"]').first().getAttribute('href');
    expect(decode(href)).toBe('Hola Emilio, he visto tu web y me gustaría información sobre entrenamiento.');
  });

  for (const [path, msg] of Object.entries(LANDINGS)) {
    test(`mensaje contextual en ${path}`, async ({ page }) => {
      await page.goto(path);
      const href = await page.locator('main a[href*="wa.me"]').first().getAttribute('href');
      expect(decode(href)).toContain(msg);
    });
  }

  test('cada plan prellena su nombre', async ({ page }) => {
    await page.goto('/tarifas/');
    const href = await page
      .locator('[role="tabpanel"]:not([hidden]) a[href*="wa.me"]')
      .first()
      .getAttribute('href');
    expect(decode(href)).toBe('Hola Emilio, me interesa el plan Sesión individual.');
  });

  test('sin precios publicados mientras no estén validados', async ({ page }) => {
    await page.goto('/tarifas/');
    await expect(page.locator('main')).not.toContainText('€');
  });

  test('teléfono enlazado en contacto y footer', async ({ page }) => {
    await page.goto('/contacto/');
    await expect(page.locator('main a[href="tel:+34638068834"]')).toHaveCount(1);
    await expect(page.locator('footer a[href="tel:+34638068834"]')).toHaveCount(1);
  });

  test('barra CTA móvil aparece tras el hero y se oculta al final', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'solo móvil');
    await page.goto('/');
    const bar = page.locator('[data-sticky-cta]');
    await expect(bar).not.toHaveAttribute('data-visible', '');
    await page.evaluate(() => window.scrollTo(0, 3000));
    await expect(bar).toHaveAttribute('data-visible', '');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(bar).not.toHaveAttribute('data-visible', '');
  });

  test('el formulario no se renderiza sin endpoint', async ({ page }) => {
    await page.goto('/contacto/');
    await expect(page.locator('form')).toHaveCount(0);
  });
});
