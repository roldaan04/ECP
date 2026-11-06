'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { waLink } from '@/lib/whatsapp';
import Icon from '@/components/ui/Icon';
import styles from './StickyCta.module.css';

/**
 * Barra CTA móvil [WhatsApp] [Tarifas]. Aparece tras el hero ([data-sticky-start]) y se oculta
 * cuando un [data-sticky-end] (CTA final, footer) está en viewport. Respeta safe-area.
 * @param {{ context?: import('@/lib/whatsapp').WaContext }} props
 */
export default function StickyCta({ context = 'home' }) {
  const pathname = usePathname();
  const [pastStart, setPastStart] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setPastStart(false);
    setAtEnd(false);
  }

  useEffect(() => {
    const start = document.querySelector('[data-sticky-start]');
    const ends = Array.from(document.querySelectorAll('[data-sticky-end]'));
    const visibleEnds = new Set();
    const observers = [];

    if (start) {
      const io = new IntersectionObserver(([e]) =>
        setPastStart(!e.isIntersecting && e.boundingClientRect.top < 0),
      );
      io.observe(start);
      observers.push(io);
    } else {
      // Páginas sin hero marcado: aparece tras un primer scroll.
      const onScroll = () => setPastStart(window.scrollY > 320);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      observers.push({ disconnect: () => window.removeEventListener('scroll', onScroll) });
    }
    if (ends.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => (e.isIntersecting ? visibleEnds.add(e.target) : visibleEnds.delete(e.target)));
        setAtEnd(visibleEnds.size > 0);
      });
      ends.forEach((el) => io.observe(el));
      observers.push(io);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  const ctx = /** @type {any} */ (
    {
      '/entrenador-personal-madrid/': 'personal',
      '/preparador-fisico-madrid/': 'preparacion',
      '/entrenador-baloncesto-madrid/': 'baloncesto',
      '/entrenamiento-online/': 'online',
    }[pathname] || context
  );
  const visible = pastStart && !atEnd;

  return (
    <div
      className={styles.bar}
      data-sticky-cta=""
      data-visible={visible ? '' : undefined}
      aria-hidden={!visible}
      inert={!visible}
    >
      <a
        href={waLink(ctx)}
        className={styles.primary}
        target="_blank"
        rel="noopener"
        data-track="click_whatsapp"
        data-track-context={`sticky-${ctx}`}
      >
        <Icon name="whatsapp" size={20} /> WhatsApp
        <span className="sr-only"> (se abre en una ventana nueva)</span>
      </a>
      <Link href="/tarifas/" className={styles.secondary} data-track="click_tarifas">
        Tarifas
      </Link>
    </div>
  );
}
