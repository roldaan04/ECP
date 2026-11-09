import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Chip from '@/components/ui/Chip';
import Button from '@/components/ui/Button';
import Label from '@/components/ui/Label';
import CourtLines from '@/components/ui/CourtLines';
import Reveal from '@/components/ui/Reveal';
import styles from './ServiceIndex.module.css';

/**
 * Índice de servicios tipo revista: H2 fijo a la izquierda (sticky en desktop) y lista a la derecha.
 * El ítem `featured` (baloncesto) va destacado en granate con líneas de pista.
 * @param {{ content: { label: string, title: string, accent?: string, intro?: string,
 *   items: { name: string, text: string, chips: string[], href: string, linkLabel: string,
 *            featured?: boolean, featuredLabel?: string }[] } }} props
 */
export default function ServiceIndex({ content }) {
  return (
    <Section tone="paper" labelledBy="servicios" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.aside}>
          <SectionHeading
            id="servicios"
            label={content.label}
            title={content.title}
            accent={content.accent}
            intro={content.intro}
          />
        </div>
        <ol role="list" className={styles.list}>
          {content.items.map((it, i) => (
            <Reveal as="li" key={it.href} className={`${styles.item} ${it.featured ? styles.featured : ''}`}>
              {it.featured ? <CourtLines className={styles.court} /> : null}
              <div className={styles.itemHead}>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {it.featured && it.featuredLabel ? (
                  <Label as="span" rule>
                    {it.featuredLabel}
                  </Label>
                ) : null}
              </div>
              <h3 className={styles.name}>{it.name}</h3>
              <p className={styles.text}>{it.text}</p>
              <div className={styles.foot}>
                <ul role="list" className={styles.chips} aria-label="Modalidad">
                  {it.chips.map((c) => (
                    <li key={c}>
                      <Chip>{c}</Chip>
                    </li>
                  ))}
                </ul>
                <Button href={it.href} variant="link">
                  {it.linkLabel}
                </Button>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
