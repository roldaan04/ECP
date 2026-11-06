import styles from './CourtLines.module.css';

/**
 * Líneas de media pista de baloncesto (zona, tiro libre, arco de triple) en trazo de 1 px.
 * Recurso gráfico propio de la landing y el bloque de baloncesto. Decorativo.
 * @param {{ className?: string, tone?: 'dark'|'light' }} props
 */
export default function CourtLines({ className = '', tone = 'dark' }) {
  return (
    <svg
      className={[styles.court, styles[tone], className].filter(Boolean).join(' ')}
      viewBox="0 0 600 560"
      aria-hidden="true"
      focusable="false"
    >
      {/* Línea de fondo */}
      <path d="M0 0H600" />
      {/* Zona */}
      <rect x="210" y="0" width="180" height="232" />
      {/* Círculo de tiro libre */}
      <path d="M210 232a90 90 0 0 0 180 0" />
      <path d="M210 232a90 90 0 0 1 180 0" strokeDasharray="8 10" />
      {/* Aro y tablero */}
      <path d="M270 48H330" />
      <circle cx="300" cy="64" r="11" />
      {/* Semicírculo de no carga */}
      <path d="M262 64a38 38 0 0 0 76 0" />
      {/* Triple */}
      <path d="M36 0V120A266 266 0 0 0 564 120V0" />
      {/* Medio campo */}
      <path d="M0 559H600" />
      <path d="M240 559a60 60 0 0 1 120 0" />
    </svg>
  );
}
