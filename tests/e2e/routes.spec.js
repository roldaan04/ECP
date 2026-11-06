import { test, expect } from '@playwright/test';
import { ROUTES } from './routes.js';

test.describe('Rutas', () => {
  for (const path of ROUTES) {
    test(`${path} responde y tiene un único H1`, async ({ page }) => {
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('header a[href="/"]').first()).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
    });
  }

  test('404 real con enlaces útiles', async ({ page }) => {
    const res = await page.goto('/no-existe/');
    expect(res?.status()).toBe(404);
    await expect(page.locator('h1')).toContainText(/no existe/i);
    await expect(page.locator('main a[href="/"]')).toBeVisible();
    await expect(page.locator('main a[href^="https://wa.me/"]')).toBeVisible();
  });

  test('el kit de desarrollo no se publica', async ({ page }) => {
    const res = await page.goto('/dev/kit/');
    expect(res?.status()).toBe(404);
  });

  test('el contenido está en el HTML sin JavaScript', async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto('/entrenador-baloncesto-madrid/');
    await expect(page.locator('h1')).toHaveText(/Entrenador de baloncesto personalizado en Madrid/i);
    await expect(page.getByText('Físico y pista', { exact: false }).first()).toBeVisible();
    // Las FAQ funcionan sin JS (<details> nativo)
    await page.locator('summary').first().click();
    await expect(page.locator('details[open]')).toHaveCount(1);
    await ctx.close();
  });
});
