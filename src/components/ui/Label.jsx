import styles from './Label.module.css';

/**
 * Microetiqueta en notación de entrenamiento: «BLOQUE 01 · VALORACIÓN», «4 × 6 · RPE 8».
 * @param {{ children: import('react').ReactNode, as?: 'span'|'p'|'div', tone?: 'default'|'red'|'muted',
 *           rule?: boolean, className?: string }} props
 */
export default function Label({ children, as: Tag = 'p', tone = 'default', rule = false, className = '' }) {
  return (
    <Tag
      className={[styles.label, styles[tone], rule ? styles.rule : '', className].filter(Boolean).join(' ')}
    >
      {children}
    </Tag>
  );
}
