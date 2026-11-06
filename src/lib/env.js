/**
 * Lectura y validación de variables NEXT_PUBLIC_* con valores por defecto seguros
 * (sin indexar, tarifas en modo «consultar», sin formulario, sin analítica).
 * Las referencias a process.env son literales para que Next las incruste en build.
 */
import { pricing } from '@/config/pricing';

const PRICING_MODES = ['consultar', 'orientativo', 'publicado'];
const ANALYTICS = ['plausible', 'umami'];
const DEFAULT_URL = 'https://emiliocongostoperez.com';

function siteUrl() {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_URL).trim();
  try {
    return new URL(raw).origin;
  } catch {
    return DEFAULT_URL;
  }
}

function pricingMode() {
  const raw = (process.env.NEXT_PUBLIC_PRICING_DISPLAY_MODE || 'consultar').trim();
  const mode = PRICING_MODES.includes(raw) ? raw : 'consultar';
  // «publicado» exige precios validados por escrito: si no, se degrada a «orientativo».
  if (mode === 'publicado' && !pricing.validated) return 'orientativo';
  return mode;
}

function formEndpoint() {
  const raw = (process.env.NEXT_PUBLIC_FORM_ENDPOINT || '').trim();
  return /^https:\/\//.test(raw) ? raw : '';
}

function analytics() {
  const raw = (process.env.NEXT_PUBLIC_ANALYTICS || '').trim().toLowerCase();
  return ANALYTICS.includes(raw) ? raw : '';
}

/**
 * @type {{ siteUrl: string, indexing: boolean, pricingMode: 'consultar'|'orientativo'|'publicado',
 *          formEndpoint: string, analytics: ''|'plausible'|'umami', isProduction: boolean }}
 */
export const env = {
  siteUrl: siteUrl(),
  indexing: process.env.NEXT_PUBLIC_INDEXING === 'true',
  pricingMode: /** @type {any} */ (pricingMode()),
  formEndpoint: formEndpoint(),
  analytics: /** @type {any} */ (analytics()),
  isProduction: process.env.NODE_ENV === 'production',
};
