/**
 * Datos estructurados JSON-LD (schema.org) con @id estables. Solo datos reales:
 * sin LocalBusiness, sin address, sin aggregateRating. clean() elimina claves pendientes.
 */
import { site } from '@/config/site';
import { pricing } from '@/config/pricing';
import { absoluteUrl } from '@/lib/seo';
import { clean } from '@/lib/pending';

const id = (path, frag) => `${absoluteUrl(path)}#${frag}`;
const PERSON_ID = () => id('/', 'emilio');
const WEBSITE_ID = () => id('/', 'website');

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID(),
    name: site.name,
    alternateName: site.brand,
    jobTitle: site.jobTitles,
    url: absoluteUrl('/'),
    image: absoluteUrl('/og/og-image-negro.jpg'),
    telephone: site.phone.e164,
    email: site.email,
    sameAs: [site.instagram.url],
    alumniOf: { '@type': 'CollegeOrUniversity', name: site.education.university },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Grado en Ciencias de la Actividad Física y del Deporte',
    },
    knowsAbout: ['Preparación física', 'Entrenamiento de fuerza', 'Acondicionamiento físico', 'Baloncesto'],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID(),
    url: absoluteUrl('/'),
    name: site.brandFull,
    inLanguage: 'es-ES',
    publisher: { '@id': PERSON_ID() },
  };
}

/**
 * @param {{ path: string, serviceType: string, name: string, description: string,
 *           area?: 'madrid'|'spain', planIds?: string[] }} p
 */
export function serviceSchema({ path, serviceType, name, description, area = 'madrid', planIds = [] }) {
  const offers = pricing.validated
    ? pricing.plans
        .filter((pl) => planIds.includes(pl.id))
        .map((pl) => ({ '@type': 'Offer', name: pl.name, price: pl.price, priceCurrency: pricing.currency }))
    : [];
  return {
    '@type': 'Service',
    '@id': id(path, 'service'),
    serviceType,
    name,
    description,
    url: absoluteUrl(path),
    provider: { '@id': PERSON_ID() },
    areaServed:
      area === 'spain' ? { '@type': 'Country', name: 'España' } : [{ '@type': 'City', name: 'Madrid' }],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://wa.me/${site.whatsapp.number}`,
      servicePhone: { '@type': 'ContactPoint', telephone: site.phone.e164 },
    },
    offers,
  };
}

/** @param {{ name: string, path: string }[]} items */
export function breadcrumbSchema(items) {
  const last = items[items.length - 1];
  return {
    '@type': 'BreadcrumbList',
    '@id': id(last.path, 'breadcrumb'),
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

/** @param {string} path */
export function profilePageSchema(path) {
  return {
    '@type': 'ProfilePage',
    '@id': id(path, 'webpage'),
    url: absoluteUrl(path),
    inLanguage: 'es-ES',
    isPartOf: { '@id': WEBSITE_ID() },
    mainEntity: { '@id': PERSON_ID() },
  };
}

/**
 * Grafo único limpio.
 * @param {...object} nodes
 */
export function graph(...nodes) {
  return clean({ '@context': 'https://schema.org', '@graph': nodes });
}
