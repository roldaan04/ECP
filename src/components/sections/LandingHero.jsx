import { site } from '@/config/site';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Label from '@/components/ui/Label';
import Button from '@/components/ui/Button';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import TechSheet from '@/components/ui/TechSheet';
import CourtLines from '@/components/ui/CourtLines';
import ProgressLine from '@/components/ui/ProgressLine';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import Reveal from '@/components/ui/Reveal';
import styles from './LandingHero.module.css';

/**
 * Hero de landing. Misma gramática, distinta composición por variante:
 * - personal: 7/5 con ficha de servicio a la derecha.
 * - preparacion: titular + hoja de planificación (notación de entrenamiento, marcada como ejemplo).
 * - baloncesto: líneas de pista de fondo, roles en grande y foto de pista si existe.
 * - online: titular + ciclo plan → entreno → revisión → ajuste.
 *
 * @param {{ content: any, variant: 'personal'|'preparacion'|'baloncesto'|'online', breadcrumb: string,
 *           waContext: import('@/lib/whatsapp').WaContext }} props
 */
export default function LandingHero({ content, variant, breadcrumb, waContext }) {
  return (
    <section
      className={`${styles.hero} ${styles[variant]}`}
      data-tone="dark"
      data-sticky-start=""
      aria-labelledby="landing-title"
    >
      {variant === 'baloncesto' ? <CourtLines className={styles.court} /> : null}
      <div className={`container ${styles.inner}`}>
        <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: 'Servicios' }, { name: breadcrumb }]} />
        <div className={styles.grid}>
          <div className={styles.copy}>
            <Label tone="muted" rule>
              {content.label}
            </Label>
            <h1 id="landing-title" className={styles.title}>
              {content.title}
            </h1>
            <p className={styles.lead}>{content.lead}</p>
            <div className={styles.ctas}>
              <WhatsAppButton context={waContext}>{content.cta}</WhatsAppButton>
              <Button href="/tarifas/" variant="outline-dark" track="click_tarifas">
                Ver tarifas
              </Button>
            </div>
          </div>
          <div className={styles.side}>
            <HeroSide content={content} variant={variant} />
          </div>
        </div>
      </div>
      {variant !== 'baloncesto' ? (
        <Reveal mode="draw" className={styles.line}>
          <ProgressLine steps={3} run={200} rise={26} />
        </Reveal>
      ) : null}
    </section>
  );
}

/** Columna lateral según variante. */
function HeroSide({ content, variant }) {
  if (variant === 'personal') {
    return <TechSheet caption="Ficha del servicio" rows={content.sheet} />;
  }
  if (variant === 'preparacion') {
    return (
      <div className={styles.plan}>
        <TechSheet caption={content.notationCaption} rows={content.notation} size="lg" />
        <p className={styles.planNote}>
          Estructura orientativa. Cada plan se diseña según tu deporte y tu calendario.
        </p>
      </div>
    );
  }
  if (variant === 'baloncesto') {
    const photo = site.photos.baloncesto;
    return (
      <div className={styles.basket}>
        {photo ? (
          <ResponsiveImage
            name={photo.name}
            alt={photo.alt || content.photoAlt}
            sizes="(min-width: 1024px) 40vw, 100vw"
            priority
            className={styles.basketPhoto}
          />
        ) : null}
        <ul role="list" className={styles.roles}>
          {content.roles.map((r, i) => (
            <li key={r}>
              <span className={styles.roleNum} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              {r}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  // online
  return (
    <ol role="list" className={styles.cycle} aria-label="Cómo funciona el seguimiento">
      {content.cycle.map((c) => (
        <li key={c.label} className={styles.cycleItem}>
          <span className={styles.cycleNum} aria-hidden="true">
            {c.label}
          </span>
          <span className={styles.cycleTitle}>{c.title}</span>
          <span className={styles.cycleText}>{c.text}</span>
        </li>
      ))}
    </ol>
  );
}
