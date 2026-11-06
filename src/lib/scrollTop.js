/**
 * Sube al principio de la página (suave, salvo con prefers-reduced-motion).
 * Next no hace scroll al pulsar un enlace a la ruta en la que ya estás.
 */
export function scrollToTop() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, left: 0, behavior: reduce ? 'auto' : 'smooth' });
}

/**
 * Manejador de clic para enlaces a «/»: si ya estás en la Home, evita la no-navegación y sube arriba.
 * Desde otra ruta deja que Next navegue (y empiece arriba).
 * @param {import('react').MouseEvent} e
 * @param {string} pathname
 */
export function handleHomeClick(e, pathname) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  if (pathname === '/' || pathname === '') {
    e.preventDefault();
    scrollToTop();
  }
}
