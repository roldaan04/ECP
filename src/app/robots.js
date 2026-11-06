import { env } from '@/lib/env';
import { absoluteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

/**
 * robots.txt según NEXT_PUBLIC_INDEXING: con indexación, allow + sitemap; sin ella, disallow total.
 * @returns {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  if (!env.indexing) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/dev/' }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: env.siteUrl,
  };
}
