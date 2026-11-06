'use client';

import { useSyncExternalStore } from 'react';

/**
 * Suscripción a una media query. En servidor devuelve `serverValue`.
 * @param {string} query p. ej. '(prefers-reduced-motion: reduce)'
 * @param {boolean} [serverValue=false]
 * @returns {boolean}
 */
export function useMediaQuery(query, serverValue = false) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}
