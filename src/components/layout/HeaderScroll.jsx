'use client';

import { useEffect, useState } from 'react';

/**
 * Marcador mínimo de scroll: el header cambia de estilo vía CSS :has([data-active]).
 * @param {{ className?: string }} props
 */
export default function HeaderScroll({ className }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <span className={className} data-active={active ? '' : undefined} aria-hidden="true" />;
}
