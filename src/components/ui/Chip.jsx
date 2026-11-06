import styles from './Chip.module.css';

/**
 * Chip de modalidad o categoría (PRESENCIAL · ONLINE · ESPECIALIDAD). Informativo, no interactivo.
 * @param {{ children: import('react').ReactNode, tone?: 'default'|'solid' }} props
 */
export default function Chip({ children, tone = 'default' }) {
  return <span className={[styles.chip, styles[tone]].join(' ')}>{children}</span>;
}
