import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Label from '@/components/ui/Label';
import Reveal from '@/components/ui/Reveal';
import styles from './AboutTimeline.module.css';

/**
 * Línea temporal vertical de formación y experiencia. Sin fechas: no hay fechas confirmadas.
 * @param {{ content: typeof import('@/content/about').about.timeline }} props
 */
export default function AboutTimeline({ content }) {
  return (
    <Section tone="dark" labelledBy="trayectoria">
      <div className={styles.grid}>
        <SectionHeading
          id="trayectoria"
          label={content.label}
          title={content.title}
          accent={content.accent}
        />
        <div>
          <ol role="list" className={styles.list}>
            {content.items.map((it, i) => (
              <Reveal as="li" key={`${it.tag}-${it.title}`} className={styles.item} delay={i * 60}>
                <Label tone="muted">{it.tag}</Label>
                <h3 className={styles.title}>{it.title}</h3>
                <p className={styles.text}>{it.text}</p>
              </Reveal>
            ))}
          </ol>
          <p className={styles.note}>{content.note}</p>
        </div>
      </div>
    </Section>
  );
}
