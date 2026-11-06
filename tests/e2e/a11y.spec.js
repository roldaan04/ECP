import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { ROUTES } from './routes.js';

test.describe('Accesibilidad (axe, WCAG 2.2 AA)', () => {
  for (const path of [...ROUTES, '/no-existe/']) {
    test(`${path} sin violaciones`, async ({ page }) => {
      await page.goto(path);
      // Revela todo (los elementos animados empiezan con opacidad 0).
      await page.addStyleTag({
        content:
          '*,*::before,*::after{transition:none!important;animation:none!important}[data-reveal]{opacity:1!important;transform:none!important}',
      });
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      const summary = results.violations.map(
        (v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(' | ')}`,
      );
      expect(summary, summary.join('\n')).toEqual([]);
    });
  }

  test('skip link lleva al contenido', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: 'Saltar al contenido' });
    await expect(skip).toBeFocused();
    await skip.press('Enter');
    await expect(page).toHaveURL(/#contenido$/);
  });

  test('menú móvil: trampa de foco y Esc', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'solo móvil');
    await page.goto('/');
    const toggle = page.getByRole('button', { name: 'Menú', exact: true });
    await toggle.click();
    const dialog = page.getByRole('dialog', { name: 'Menú principal' });
    await expect(dialog).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    // El foco no sale del diálogo
    for (let i = 0; i < 20; i++) await page.keyboard.press('Tab');
    const inside = await page.evaluate(() =>
      document.getElementById('menu-movil')?.contains(document.activeElement),
    );
    expect(inside).toBe(true);
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(toggle).toBeFocused();
  });

  test('selector de tarifas con teclado', async ({ page }) => {
    await page.goto('/tarifas/');
    const presencial = page.getByRole('tab', { name: 'Presencial' });
    const onlineTab = page.getByRole('tab', { name: 'Online' });
    await expect(presencial).toHaveAttribute('aria-selected', 'true');
    await presencial.focus();
    await page.keyboard.press('ArrowRight');
    await expect(onlineTab).toHaveAttribute('aria-selected', 'true');
    await expect(onlineTab).toBeFocused();
    await expect(page.getByRole('tabpanel')).toContainText('Online · Planificación');
  });
});
