import { site } from '@/config/site';
import Label from '@/components/ui/Label';
import Button from '@/components/ui/Button';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ProgressLine from '@/components/ui/ProgressLine';
import Reveal from '@/components/ui/Reveal';
import HeroMedia from '@/components/sections/HeroMedia';
import styles from './HeroHome.module.css';

/**
 * Hero de la Home, composición A «Escalón» (7/5). H1 escalonado siguiendo la línea de progresión.
 * La columna derecha es un panel de medios: escudo sobre hormigón hoy; retrato vertical a sangre
 * cuando exista site.photos.hero (evolución a la composición C sin rehacer el layout).
 *
 * @param {{ content: typeof import('@/content/home').home.hero }} props
 */
export default function HeroHome({ content }) {
  const photo = site.photos.hero;
  return (
    <section className={styles.hero} data-tone="dark" data-sticky-start="" aria-labelledby="hero-title">
      <Reveal mode="draw" className={styles.lineWrap}>
        <ProgressLine steps={4} run={220} rise={27} lead={260} arrow className={styles.line} />
      </Reveal>

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <Label tone="muted" rule className={styles.label}>
            {content.label}
          </Label>

          <h1 id="hero-title" className={styles.title}>
            {content.titleLines.map((line, i) => (
              <span
                key={line}
                className={`${styles.line_} ${i === content.accentLine ? styles.accent : ''}`}
                style={{ '--i': i }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className={styles.lead}>{content.lead}</p>

          <div className={styles.ctas}>
            <WhatsAppButton context="home" size="lg">
              {content.primaryCta}
            </WhatsAppButton>
            <Button href="/tarifas/" variant="outline-dark" size="lg" track="click_tarifas">
              {content.secondaryCta}
            </Button>
          </div>
          <p className={styles.note}>{content.note}</p>

          <ul role="list" className={styles.creds} aria-label="Credenciales">
            {content.credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <HeroMedia photo={photo} alt={content.photoAlt} />
    </section>
  );
}
