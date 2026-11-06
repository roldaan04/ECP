import styles from './Shield.module.css';

const W = 668;
const H = 596;

/**
 * Escudo completo de ECP (PNG transparente → AVIF/WebP). Solo en tamaños grandes y fondos oscuros:
 * hero, footer y 404. Máximo 340 px CSS de ancho (fuente de 668 px = nítido a 2×).
 * @param {{ width?: number, priority?: boolean, className?: string, decorative?: boolean }} props
 */
export default function Shield({ width = 340, priority = false, className = '', decorative = false }) {
  const w = Math.min(width, 340);
  const h = Math.round((w * H) / W);
  return (
    <picture className={[styles.shield, className].filter(Boolean).join(' ')}>
      <source
        type="image/avif"
        srcSet="/brand/ecp-escudo-340.avif 340w, /brand/ecp-escudo-680.avif 668w"
        sizes={`${w}px`}
      />
      <source
        type="image/webp"
        srcSet="/brand/ecp-escudo-340.webp 340w, /brand/ecp-escudo-680.webp 668w"
        sizes={`${w}px`}
      />
      <img
        src="/brand/ecp-escudo-340.webp"
        alt={decorative ? '' : 'Logotipo de ECP, Emilio Congosto Pérez'}
        width={w}
        height={h}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </picture>
  );
}
