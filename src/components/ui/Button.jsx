import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import styles from './Button.module.css';

/**
 * Botón/enlace de marca. Siempre con texto visible, ≥44 px de alto.
 * Enlaces internos con next/link; externos (http, tel:) con <a>.
 *
 * @param {{
 *   href: string,
 *   children: import('react').ReactNode,
 *   variant?: 'primary'|'outline-dark'|'outline-light'|'link',
 *   size?: 'md'|'sm'|'lg',
 *   icon?: string,
 *   arrow?: boolean,
 *   external?: boolean,
 *   className?: string,
 *   track?: string,
 *   trackContext?: string,
 *   ariaLabel?: string,
 * }} props
 */
export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon,
  arrow = variant !== 'outline-dark' && variant !== 'outline-light',
  external,
  className = '',
  track,
  trackContext,
  ariaLabel,
}) {
  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);
  const cls = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ');
  const content = (
    <>
      {icon ? (
        <Icon name={/** @type {any} */ (icon)} size={size === 'sm' ? 18 : 20} className={styles.icon} />
      ) : null}
      <span className={styles.text}>{children}</span>
      {arrow ? <Icon name="arrow" size={18} className={styles.arrow} /> : null}
    </>
  );
  const data = track ? { 'data-track': track, 'data-track-context': trackContext } : {};

  if (isExternal) {
    const blank = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(blank ? { target: '_blank', rel: 'noopener' } : {})}
        {...data}
      >
        {content}
        {blank ? <span className="sr-only"> (se abre en una ventana nueva)</span> : null}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel} {...data}>
      {content}
    </Link>
  );
}
