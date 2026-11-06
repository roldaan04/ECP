import { routes } from '@/config/navigation';
import { absoluteUrl } from '@/lib/seo';
import { env } from '@/lib/env';

export const dynamic = 'force-static';

/**
 * Sitemap con solo rutas indexables (excluye /dev/, legales en borrador y /tarifas/ sin precios validados).
 * Sin NEXT_PUBLIC_INDEXING=true queda vacío: no se anuncia nada mientras el sitio no se publique.
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
  if (!env.indexing) return [];
  return routes
    .filter((r) => r.indexable)
    .map((r) => ({
      url: absoluteUrl(r.path),
      changeFrequency: 'monthly',
      priority: r.path === '/' ? 1 : 0.8,
    }));
}
