/**
 * Registro de rutas, menú principal, servicios y footer.
 * `indexable` alimenta sitemap.js; robots/noindex de cada página se define en su metadata.
 */
import { pricing } from '@/config/pricing';

/** @typedef {{ path: string, label: string, short?: string, description?: string, indexable: boolean }} Route */

export const services = [
  {
    path: '/entrenador-personal-madrid/',
    label: 'Entrenador personal en Madrid',
    short: 'Entrenamiento personal',
    description: 'Fuerza, condición física y hábitos para cualquier persona.',
    indexable: true,
  },
  {
    path: '/preparador-fisico-madrid/',
    label: 'Preparador físico en Madrid',
    short: 'Preparación física',
    description: 'Rendimiento para deportistas de cualquier disciplina.',
    indexable: true,
  },
  {
    path: '/entrenamiento-online/',
    label: 'Entrenamiento online',
    short: 'Entrenamiento online',
    description: 'Plan y seguimiento desde cualquier ciudad.',
    indexable: true,
  },
  {
    path: '/entrenador-baloncesto-madrid/',
    label: 'Entrenador de baloncesto personalizado',
    short: 'Baloncesto',
    description: 'Físico específico y pista, con alguien que juega y entrena.',
    indexable: true,
  },
];

/** @type {Route[]} */
export const routes = [
  { path: '/', label: 'Inicio', indexable: true },
  ...services,
  { path: '/sobre-mi/', label: 'Sobre mí', indexable: true },
  { path: '/tarifas/', label: 'Tarifas', indexable: pricing.validated },
  { path: '/contacto/', label: 'Contacto', indexable: true },
  // Legales: noindex mientras estén en borrador (faltan los datos del responsable).
  { path: '/aviso-legal/', label: 'Aviso legal', indexable: false },
  { path: '/politica-privacidad/', label: 'Política de privacidad', indexable: false },
  { path: '/politica-cookies/', label: 'Política de cookies', indexable: false },
];

export const mainNav = [
  { path: '/', label: 'Inicio' },
  { label: 'Servicios', children: services },
  // La etiqueta «ECP» es petición del cliente: se acompaña de aria-label descriptivo.
  { path: '/sobre-mi/', label: 'ECP', ariaLabel: 'ECP, sobre mí: Emilio Congosto Pérez' },
  { path: '/tarifas/', label: 'Tarifas' },
];

export const footerNav = {
  servicios: services.map(({ path, short }) => ({ path, label: short })),
  ecp: [
    { path: '/sobre-mi/', label: 'Sobre mí' },
    { path: '/tarifas/', label: 'Tarifas' },
    { path: '/contacto/', label: 'Contacto' },
  ],
  legal: [
    { path: '/aviso-legal/', label: 'Aviso legal' },
    { path: '/politica-privacidad/', label: 'Privacidad' },
    { path: '/politica-cookies/', label: 'Cookies' },
  ],
};
