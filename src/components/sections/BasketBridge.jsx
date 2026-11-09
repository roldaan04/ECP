import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import CourtLines from '@/components/ui/CourtLines';
import ProgressLine from '@/components/ui/ProgressLine';
import Reveal from '@/components/ui/Reveal';
import styles from './BasketBridge.module.css';

/**
 * Bloque de baloncesto: composición invertida con líneas de pista y la línea de progresión.
 * Se usa en la landing de baloncesto (bloque `court`). Si el contenido trae `cta`, añade el botón a la landing.
 * @param {{ content: { label: string, title: string, accent?: string, text: string, notation: string[], cta?: string } }} props
 */
export default function BasketBridge({ content }) {
  return (
    <Section tone="paper" labelledBy="baloncesto" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.graphic} aria-hidden="true">
          <CourtLines tone="light" className={styles.court} />
        </div>
        <div className={styles.body}>
          <SectionHeading
            id="baloncesto"
            label={content.label}
            title={content.title}
            accent={content.accent}
          />
          <p className={styles.text}>{content.text}</p>
          <ul role="list" className={styles.notation}>
            {content.notation.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          {content.cta ? (
            <Button href="/entrenador-baloncesto-madrid/" variant="outline-light">
              {content.cta}
            </Button>
          ) : null}
        </div>
      </div>
      <Reveal mode="draw" className={styles.lineWrap}>
        <ProgressLine steps={3} run={200} rise={40} arrow />
      </Reveal>
    </Section>
  );
}
