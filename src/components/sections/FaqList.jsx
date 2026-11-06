import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './FaqList.module.css';

/**
 * FAQ con <details>/<summary> nativos (funciona sin JS). El contenido está siempre en el HTML.
 * @param {{ content: { label?: string, title: string, accent?: string, items: { q: string, a: string }[] },
 *           tone?: 'paper'|'dark', id?: string }} props
 */
export default function FaqList({ content, tone = 'paper', id = 'faq' }) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className={styles.grid}>
        <SectionHeading id={id} label={content.label} title={content.title} accent={content.accent} />
        <div className={styles.list}>
          {content.items.map((it) => (
            <details key={it.q} className={styles.item}>
              <summary className={styles.summary}>
                <h3 className={styles.q}>{it.q}</h3>
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <div className={styles.a}>
                <p>{it.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
