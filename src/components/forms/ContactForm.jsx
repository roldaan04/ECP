'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { track } from '@/lib/track';
import styles from './ContactForm.module.css';

const MIN_MS = 3000; // tiempo mínimo antes de enviar (antispam)

/**
 * Formulario secundario. Envía con fetch a un endpoint externo (Formspree, Web3Forms…).
 * Solo se renderiza si hay endpoint (lo decide la página). Nunca simula un envío.
 * Incluye honeypot, tiempo mínimo, privacidad sin premarcar y casilla de edad obligatoria.
 * @param {{ endpoint: string, t: typeof import('@/content/contact').contact.form }} props
 */
export default function ContactForm({ endpoint, t }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const startedAt = useRef(0);

  const markStart = () => {
    if (!startedAt.current) startedAt.current = Date.now();
  };

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nextErrors = {};
    for (const f of ['name', 'contact', 'message'])
      if (!String(data.get(f) || '').trim()) nextErrors[f] = t.required;
    if (!data.get('privacy')) nextErrors.privacy = t.required;
    if (!data.get('age')) nextErrors.age = t.required;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    if (data.get('website')) return; // honeypot: bot
    if (!startedAt.current || Date.now() - startedAt.current < MIN_MS) {
      setErrors({ form: t.tooFast });
      return;
    }
    data.delete('website');
    setStatus('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('success');
      track('form_submit');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const err = (name) =>
    errors[name] ? (
      <p id={`${name}-error`} className={styles.error}>
        <Icon name="alert" size={16} /> {errors[name]}
      </p>
    ) : null;
  const aria = (name) => ({
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form className={styles.form} onSubmit={onSubmit} onFocus={markStart} noValidate>
      <div className={styles.field}>
        <label htmlFor="cf-name">{t.fields.name} *</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required {...aria('name')} />
        {err('name')}
      </div>
      <div className={styles.field}>
        <label htmlFor="cf-contact">{t.fields.contact} *</label>
        <input id="cf-contact" name="contact" type="text" autoComplete="tel" required {...aria('contact')} />
        {err('contact')}
      </div>
      <div className={styles.field}>
        <label htmlFor="cf-service">{t.fields.service}</label>
        <select id="cf-service" name="service" defaultValue={t.serviceOptions[0]}>
          {t.serviceOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="cf-message">{t.fields.message} *</label>
        <textarea id="cf-message" name="message" rows={5} required {...aria('message')} />
        {err('message')}
      </div>

      {/* Honeypot: oculto a personas, visible a bots */}
      <div className={styles.hp} aria-hidden="true">
        <label htmlFor="cf-website">Web</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.check}>
        <input id="cf-privacy" name="privacy" type="checkbox" required {...aria('privacy')} />
        <label htmlFor="cf-privacy">
          {t.privacy} <Link href="/politica-privacidad/">{t.privacyLink}</Link> *
        </label>
        {err('privacy')}
      </div>
      <div className={styles.check}>
        <input id="cf-age" name="age" type="checkbox" required {...aria('age')} />
        <label htmlFor="cf-age">{t.age} *</label>
        {err('age')}
      </div>

      {err('form')}
      <button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {status === 'sending' ? t.sending : t.submit}
      </button>
      <div aria-live="polite" className={styles.status}>
        {status === 'success' ? (
          <p className={styles.success}>
            <Icon name="check" size={18} /> {t.success}
          </p>
        ) : null}
        {status === 'error' ? (
          <p className={styles.error}>
            <Icon name="alert" size={18} /> {t.error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
