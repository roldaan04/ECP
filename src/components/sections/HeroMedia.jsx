import Shield from '@/components/ui/Shield';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import styles from './HeroMedia.module.css';

/**
 * Panel de medios del hero (columna derecha, a sangre por la derecha y abajo).
 * - Sin foto: franja de hormigón recortada (sin escudo incrustado) + «plano» técnico (marco con
 *   guías de pista y marcas de corte) con el escudo PNG transparente (≤340 px) en el centro.
 * - Con foto: retrato vertical que ocupa el panel (object-fit: cover). Mismo contenedor, mismo layout.
 *
 * @param {{ photo: null|{ name: string, alt: string }, alt?: string, variant?: 'home'|'landing' }} props
 */
export default function HeroMedia({ photo, alt, variant = 'home' }) {
  return (
    <div className={`${styles.media} ${styles[variant]}`} data-has-photo={photo ? '' : undefined}>
      {photo ? (
        <ResponsiveImage
          name={photo.name}
          alt={photo.alt || alt || ''}
          sizes="(min-width: 1024px) 42vw, 100vw"
          priority
          className={styles.photo}
        />
      ) : (
        <div className={styles.plate}>
          <PlateFrame />
          <div className={styles.shieldWrap}>
            <Shield width={340} priority className={styles.shield} />
          </div>
        </div>
      )}
    </div>
  );
}

/** Marco tipo plano: borde, guías verticales, ejes discontinuos y marcas de corte en las esquinas. */
function PlateFrame() {
  return (
    <svg className={styles.frame} viewBox="0 0 600 600" aria-hidden="true" focusable="false">
      <g className={styles.frameLines}>
        <rect x="0.5" y="0.5" width="599" height="599" />
        <line x1="195" y1="0" x2="195" y2="600" />
        <line x1="405" y1="0" x2="405" y2="600" />
      </g>
      <g className={styles.frameDashed}>
        <line x1="250" y1="0" x2="250" y2="600" />
        <line x1="350" y1="0" x2="350" y2="600" />
        <line x1="0" y1="300" x2="600" y2="300" />
      </g>
      <g className={styles.frameTicks}>
        <path d="M-28 0H-8M0 -28V-8" />
        <path d="M608 0H628M600 -28V-8" />
        <path d="M-28 600H-8M0 608V628" />
        <path d="M608 600H628M600 608V628" />
      </g>
    </svg>
  );
}
