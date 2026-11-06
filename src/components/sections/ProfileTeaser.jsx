import { site } from '@/config/site';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import TechSheet from '@/components/ui/TechSheet';
import Button from '@/components/ui/Button';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import Reveal from '@/components/ui/Reveal';
import { profileSheetRows } from '@/lib/profile';
import styles from './ProfileTeaser.module.css';

/**
 * Perfil ECP en la Home: composición 5/7 con la ficha técnica como protagonista de la credibilidad.
 * Sin foto real, la columna de imagen es una composición tipográfica (iniciales en contorno).
 * @param {{ content: typeof import('@/content/home').home.profile }} props
 */
export default function ProfileTeaser({ content }) {
  const photo = site.photos.perfil;
  return (
    <Section tone="dark" labelledBy="perfil">
      <div className={styles.grid}>
        <div className={styles.media}>
          {photo ? (
            <ResponsiveImage
              name={photo.name}
              alt={photo.alt || content.photoAlt}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className={styles.photo}
            />
          ) : (
            <div className={styles.mono} aria-hidden="true">
              <span>E</span>
              <span>C</span>
              <span>P</span>
            </div>
          )}
        </div>
        <div className={styles.body}>
          <SectionHeading id="perfil" label={content.label} title={content.title} accent={content.accent} />
          <div className={styles.text}>
            {content.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Reveal>
            <TechSheet caption={content.sheetCaption} rows={profileSheetRows()} size="lg" />
          </Reveal>
          <Button href="/sobre-mi/" variant="outline-dark">
            {content.link}
          </Button>
        </div>
      </div>
    </Section>
  );
}
