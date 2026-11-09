'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/Icon';
import styles from './ServicesMenu.module.css';

/**
 * Desplegable «Servicios» del header (desktop). Botón con aria-expanded; cierra con Esc,
 * clic fuera o al salir el foco. Las entradas son texto estático (sin enlaces a las landings).
 * @param {{ label: string, items: { path: string, label: string, short?: string, description?: string }[] }} props
 */
export default function ServicesMenu({ label, items }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);
  const button = useRef(null);
  const panelId = useId();
  const pathname = usePathname();
  const active = items.some((i) => i.path === pathname);

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    const onClick = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onClick);
    };
  }, [open]);

  return (
    <div
      className={styles.wrap}
      ref={wrap}
      onBlur={(e) => {
        if (wrap.current && !wrap.current.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={panelId}
        data-active={active ? '' : undefined}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <Icon name="chevron" size={16} className={styles.chevron} />
      </button>
      <div id={panelId} className={styles.panel} hidden={!open}>
        <ul role="list" className={styles.list}>
          {items.map((it, i) => (
            <li key={it.path}>
              <div className={styles.item}>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={styles.body}>
                  <span className={styles.title}>{it.short || it.label}</span>
                  {it.description ? <span className={styles.desc}>{it.description}</span> : null}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
