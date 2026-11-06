'use client';

import { useEffect } from 'react';
import { track } from '@/lib/track';

/**
 * Delegación de clics para analítica: cualquier elemento con data-track="evento"
 * (y opcional data-track-context) dispara track(). Solo se monta si hay analítica configurada.
 */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e) => {
      const el = e.target instanceof Element ? e.target.closest('[data-track]') : null;
      if (!el) return;
      const event = el.getAttribute('data-track');
      const context = el.getAttribute('data-track-context');
      track(event, context ? { context } : {});
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);
  return null;
}
