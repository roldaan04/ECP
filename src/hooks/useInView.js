'use client';

import { useEffect, useState } from 'react';

/**
 * Observa si un elemento está en el viewport.
 * @param {import('react').RefObject<Element|null>} ref
 * @param {{ rootMargin?: string, threshold?: number|number[], once?: boolean }} [opts]
 * @returns {boolean}
 */
export function useInView(ref, { rootMargin = '0px', threshold = 0, once = false } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && once) io.disconnect();
      },
      { rootMargin, threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin, threshold, once]);

  return inView;
}
