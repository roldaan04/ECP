import { test, expect } from '@playwright/test';
import { ROUTES } from './routes.js';

const NOINDEX_ALWAYS = ['/aviso-legal/', '/politica-privacidad/', '/politica-cookies/', '/tarifas/'];

test.describe('SEO técnico', () => {
  test.skip(({ isMobile }) => isMobile, 'una sola pasada basta');

  const titles = new Set();
  for (const path of ROUTES) {
    test(`${path}: title, description, canonical, OG y JSON-LD`, async ({ page }) => {
      await page.goto(path);
      const title = await page.title();
      expect(title.length).toBeGreaterThan(10);
      expect(title.length).toBeLessThanOrEqual(70);
      expect(titles.has(title), `title duplicado: ${title}`).toBe(false);
      titles.add(title);

      const desc = await page.locator('meta[name="description"]').getAttribute('content');
      expect(desc?.length).toBeGreaterThan(50);
      expect(desc?.length).toBeLessThanOrEqual(165);

      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toMatch(/^https:\/\/[^/]+\/.*$/);
      expect(canonical?.endsWith(path)).toBe(true);

      await expect(page.locator('html')).toHaveAttribute('lang', 'es');
      expect(await page.locator('meta[property="og:image"]').getAttribute('content')).toMatch(
        /^https:\/\/.+og-image/,
      );

      const robots = await page.locator('meta[name="robots"]').getAttribute('content');
      if (NOINDEX_ALWAYS.includes(path)) expect(robots).toContain('noindex');

      for (const raw of await page.locator('script[type="application/ld+json"]').allTextContents()) {
        expect(raw).not.toContain('TODO_VALIDAR');
        const data = JSON.parse(raw);
        expect(data['@context']).toBe('https://schema.org');
        const types = data['@graph'].map((n) => n['@type']);
        expect(types).not.toContain('LocalBusiness');
        expect(raw).not.toContain('aggregateRating');
      }

      const html = await page.content();
      expect(html).not.toMatch(/TODO_VALIDAR|lorem|example\.com/i);
    });
  }

  test('robots.txt y sitemap.xml existen', async ({ request }) => {
    const robots = await request.get('/robots.txt');
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toMatch(/User-Agent: \*/i);
    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.status()).toBe(200);
    const xml = await sitemap.text();
    expect(xml).not.toContain('/dev/');
    expect(xml).not.toContain('/aviso-legal/');
    expect(xml).not.toContain('/tarifas/');
  });

  test('favicons y manifest', async ({ request }) => {
    for (const f of [
      '/favicon.ico',
      '/apple-touch-icon.png',
      '/site.webmanifest',
      '/og/og-image-negro.jpg',
    ]) {
      expect((await request.get(f)).status(), f).toBe(200);
    }
    const manifest = await (await request.get('/site.webmanifest')).json();
    expect(manifest.theme_color).toBe('#0E0E0E');
    expect(manifest.short_name).toBe('ECP');
  });
});
