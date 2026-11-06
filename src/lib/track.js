/**
 * Eventos de analítica sin datos personales. No hace nada si no hay proveedor configurado
 * (NEXT_PUBLIC_ANALYTICS vacío) o si su script no está cargado.
 * Eventos: click_whatsapp {context} · click_tarifas · click_tel · form_submit
 * @param {string} event
 * @param {Record<string, string>} [props]
 */
export function track(event, props = {}) {
  if (typeof window === 'undefined') return;
  const provider = process.env.NEXT_PUBLIC_ANALYTICS;
  if (!provider) return;
  try {
    if (provider === 'plausible' && typeof window.plausible === 'function')
      window.plausible(event, { props });
    if (provider === 'umami' && window.umami?.track) window.umami.track(event, props);
  } catch {
    /* la analítica nunca rompe la navegación */
  }
}
