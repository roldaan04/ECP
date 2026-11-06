import styles from './ProgressLine.module.css';

/**
 * Firma visual de ECP: línea roja fina que sube en escalones (curva de carga progresiva),
 * derivada de la flecha ascendente del escudo. Decorativa (aria-hidden).
 * El trazo se dibuja cuando un <Reveal mode="draw"> ancestro añade data-revealed.
 *
 * @param {{
 *   steps?: number,
 *   run?: number,
 *   rise?: number,
 *   lead?: number,
 *   arrow?: boolean,
 *   animate?: boolean,
 *   tone?: 'red'|'muted',
 *   className?: string,
 * }} props
 */
export default function ProgressLine({
  steps = 4,
  run = 160,
  rise = 56,
  lead = 0,
  arrow = false,
  animate = true,
  tone = 'red',
  className = '',
}) {
  const pad = 8;
  const width = lead + run * (steps + 1) + pad;
  const height = rise * steps + pad * 2;
  let x = 0;
  let y = height - pad;
  let d = `M0 ${y}`;
  if (lead) {
    x += lead;
    d += ` H${x}`;
  }
  for (let i = 0; i < steps; i++) {
    x += run;
    d += ` H${x}`;
    y -= rise;
    d += ` V${y}`;
  }
  x += run - (arrow ? 2 : 0);
  d += ` H${x}`;
  const head = arrow ? `M${x - 14} ${y - 9} L${x} ${y} L${x - 14} ${y + 9}` : null;

  return (
    <svg
      className={[styles.line, styles[tone], animate ? styles.animate : '', className]
        .filter(Boolean)
        .join(' ')}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMinYMax meet"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} pathLength="1" className={styles.path} />
      {head ? <path d={head} pathLength="1" className={`${styles.path} ${styles.head}`} /> : null}
    </svg>
  );
}
