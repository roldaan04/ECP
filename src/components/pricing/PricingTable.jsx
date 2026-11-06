'use client';

import { useId, useRef, useState } from 'react';
import styles from './PricingTable.module.css';

/**
 * Selector Presencial / Online (tablist accesible con flechas). Los dos paneles se renderizan en el
 * HTML estático; el cliente solo alterna cuál se ve. Los paneles llegan ya montados desde el servidor.
 * @param {{ tabs: { id: string, label: string, panel: import('react').ReactNode }[] }} props
 */
export default function PricingTable({ tabs }) {
  const [active, setActive] = useState(tabs[0].id);
  const base = useId();
  const refs = useRef({});

  const onKey = (e, i) => {
    let next = null;
    if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
    if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = tabs.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(tabs[next].id);
    refs.current[tabs[next].id]?.focus();
  };

  return (
    <div className={styles.wrap}>
      <div role="tablist" aria-label="Modalidad" className={styles.tablist}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[t.id] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`${base}-panel-${t.id}`}
            tabIndex={active === t.id ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${base}-panel-${t.id}`}
          aria-labelledby={`${base}-tab-${t.id}`}
          hidden={active !== t.id}
          tabIndex={0}
          className={styles.panel}
        >
          {t.panel}
        </div>
      ))}
    </div>
  );
}
