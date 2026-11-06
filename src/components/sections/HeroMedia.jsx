import Shield from '@/components/ui/Shield';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import styles from './HeroMedia.module.css';

/**
 * Panel de medios del hero (columna derecha, a sangre por la derecha y abajo).
 * - Sin foto: franja de hormigón recortada (sin escudo incrustado) + escudo PNG transparente (≤340 px).
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
        <div className={styles.shieldWrap}>
          <Shield width={340} priority className={styles.shield} />
        </div>
      )}
    </div>
  );
}
