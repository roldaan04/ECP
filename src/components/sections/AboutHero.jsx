import { site } from '@/config/site';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Label from '@/components/ui/Label';
import SectionHeading from '@/components/ui/SectionHeading';
import TechSheet from '@/components/ui/TechSheet';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import Reveal from '@/components/ui/Reveal';
import { profileSheetRows } from '@/lib/profile';
import styles from './AboutHero.module.css';

/**
 * Cabecera de /sobre-mi/: H1 con el nombre, ficha técnica ampliada y texto en primera persona.
 * @param {{ content: typeof import('@/content/about').about }} props
 */
export default function AboutHero({ content }) {
  const photo = site.photos.perfil;
  return (
    <>
      <section className={styles.hero} data-tone="dark" data-sticky-start="" aria-labelledby="about-title">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: 'Sobre mí' }]} />
          <div className={styles.grid}>
            <div className={styles.copy}>
              <Label tone="muted" rule>
                {content.hero.label}
              </Label>
              <h1 id="about-title" className={styles.title}>
                {content.hero.title.split(' ').map((word) => (
                  <span key={word}>{word} </span>
                ))}
              </h1>
              <p className={styles.lead}>{content.hero.lead}</p>
              <WhatsAppButton context="home" />
            </div>
            <div className={styles.side}>
              {photo ? (
                <ResponsiveImage
                  name={photo.name}
                  alt={photo.alt || content.hero.photoAlt}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                  className={styles.photo}
                />
              ) : null}
              <TechSheet caption={content.sheetCaption} rows={profileSheetRows({ extended: true })} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.intro} data-tone="paper" aria-labelledby="about-intro">
        <div className={`container ${styles.introGrid}`}>
          <SectionHeading
            id="about-intro"
            label={content.intro.label}
            title={content.intro.title}
            accent={content.intro.accent}
          />
          <Reveal className={styles.prose}>
            {content.intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
