'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Revelado una sola vez al entrar en viewport (IntersectionObserver, once: true).
 * Con prefers-reduced-motion no se oculta nada (lo resuelve el CSS) y no se observa.
 * @param {{ rootMargin?: string }} [opts]
 * @returns {[import('react').RefObject<HTMLDivElement|null>, boolean]}
 */
export function useReveal({ rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    // Con reduced-motion (o sin IntersectionObserver) el CSS ya muestra todo: no hace falta observar.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return [ref, revealed];
}
