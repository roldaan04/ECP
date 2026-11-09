'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { services } from '@/config/navigation';
import { site } from '@/config/site';
import { waLink } from '@/lib/whatsapp';
import Icon from '@/components/ui/Icon';
import { handleHomeClick } from '@/lib/scrollTop';
import styles from './MobileNav.module.css';

const PRIMARY = [
  { path: '/', label: 'Inicio' },
  { path: '/sobre-mi/', label: 'ECP', ariaLabel: 'ECP, sobre mí: Emilio Congosto Pérez' },
  { path: '/tarifas/', label: 'Tarifas' },
  { path: '/contacto/', label: 'Contacto' },
];

/**
 * Menú móvil a pantalla completa: trampa de foco, Esc para cerrar, devuelve el foco al botón,
 * bloquea el scroll del fondo (no el zoom).
 * El panel se monta en un portal en <body>: dentro del header no funcionaría tras hacer scroll,
 * porque el backdrop-filter del header convierte a este en el contenedor de los elementos fixed.
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  const panel = useRef(null);
  const pathname = usePathname();

  const close = useCallback(() => {
    setOpen(false);
    button.current?.focus();
  }, []);

  // Cierra el menú al cambiar de ruta (ajuste de estado durante el render, sin efecto).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return undefined;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = 'hidden';
    const focusables = () =>
      Array.from(panel.current?.querySelectorAll('a[href], button:not([disabled])') ?? []);
    focusables()[0]?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab') return;
      const els = focusables();
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  const items = [PRIMARY[0], { label: 'Servicios', children: services }, ...PRIMARY.slice(1)];

  return (
    <>
      <button
        ref={button}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={open ? 'menu-movil' : undefined}
        onClick={() => setOpen(true)}
      >
        <Icon name="menu" size={24} />
        <span className={styles.toggleText}>Menú</span>
      </button>

      {open
        ? createPortal(
            <div
              id="menu-movil"
              ref={panel}
              className={styles.panel}
              role="dialog"
              aria-modal="true"
              aria-label="Menú principal"
            >
              <div className={styles.top}>
                <span className={styles.brand} aria-hidden="true">
                  {site.brand}
                </span>
                <button type="button" className={styles.close} onClick={close}>
                  <Icon name="close" size={24} />
                  <span className="sr-only">Cerrar menú</span>
                </button>
              </div>

              <nav aria-label="Menú móvil" className={styles.nav}>
                <ol role="list" className={styles.list}>
                  {items.map((it, i) => (
                    <li key={it.label} className={styles.item}>
                      <span className={styles.num} aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {it.children ? (
                        <div>
                          <span className={styles.groupLabel}>{it.label}</span>
                          <ul role="list" className={styles.sub}>
                            {it.children.map((c) => (
                              <li key={c.path}>
                                <span className={styles.subLink}>{c.short}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          href={it.path}
                          aria-label={it.ariaLabel}
                          className={styles.link}
                          aria-current={pathname === it.path ? 'page' : undefined}
                          onClick={(e) => {
                            if (it.path === '/') handleHomeClick(e, pathname);
                            setOpen(false);
                          }}
                        >
                          {it.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>

              <div className={styles.foot}>
                <a
                  className={styles.waBtn}
                  href={waLink('home')}
                  target="_blank"
                  rel="noopener"
                  data-track="click_whatsapp"
                  data-track-context="menu"
                >
                  <Icon name="whatsapp" size={20} /> Escríbeme por WhatsApp
                  <span className="sr-only"> (se abre en una ventana nueva)</span>
                </a>
                <Link
                  className={styles.secBtn}
                  href="/tarifas/"
                  onClick={() => setOpen(false)}
                  data-track="click_tarifas"
                >
                  Ver tarifas
                </Link>
                <a className={styles.ig} href={site.instagram.url} target="_blank" rel="noopener">
                  <Icon name="instagram" size={18} /> {site.instagram.handle}
                  <span className="sr-only"> en Instagram (se abre en una ventana nueva)</span>
                </a>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
