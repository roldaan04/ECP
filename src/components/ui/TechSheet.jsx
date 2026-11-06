import { isPending } from '@/lib/pending';
import styles from './TechSheet.module.css';

/**
 * Ficha técnica (elemento principal de credibilidad). Omite las filas con valores pendientes.
 * @param {{
 *   rows: { label: string, value: import('react').ReactNode }[],
 *   caption?: string,
 *   className?: string,
 *   size?: 'md'|'lg',
 * }} props
 */
export default function TechSheet({ rows, caption, className = '', size = 'md' }) {
  const visible = rows.filter((r) => !isPending(r.value));
  if (!visible.length) return null;
  return (
    <div className={[styles.sheet, styles[size], className].filter(Boolean).join(' ')}>
      {caption ? <p className={styles.caption}>{caption}</p> : null}
      <dl className={styles.list}>
        {visible.map((r) => (
          <div className={styles.row} key={r.label}>
            <dt className={styles.label}>{r.label}</dt>
            <dd className={styles.value}>{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
