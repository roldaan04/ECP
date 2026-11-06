import { env } from '@/lib/env';
import { site } from '@/config/site';

const DEFAULT_OG = '/og/og-image-negro.jpg';

/**
 * Metadatos por página (API de metadatos de Next). Canonical relativo → absoluto vía metadataBase.
 * Sin NEXT_PUBLIC_INDEXING=true, todas las páginas salen con noindex,nofollow.
 * @param {{ title: string, description: string, path: string, noindex?: boolean, ogImage?: string }} p
 * @returns {import('next').Metadata}
 */
export function buildMetadata({ title, description, path, noindex = false, ogImage = DEFAULT_OG }) {
  const indexable = env.indexing && !noindex;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: env.indexing },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      siteName: site.brandFull,
      url: path,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Logotipo de ECP, Emilio Congosto Pérez' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
  };
}

/**
 * URL absoluta a partir de una ruta.
 * @param {string} path
 */
export const absoluteUrl = (path = '/') => new URL(path, env.siteUrl).toString();
