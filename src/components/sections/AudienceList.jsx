import Link from 'next/link';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import styles from './AudienceList.module.css';

/**
 * «Para quién»: lista editorial a ancho completo (no tarjetas). Cada fila enlaza a su landing.
 * @param {{ content: { label: string, title: string, accent?: string, intro?: string,
 *   items: { title: string, text: string, href: string, linkLabel: string }[] }, tone?: 'paper'|'dark',
 *   quote?: boolean, id?: string }} props
 */
export default function AudienceList({ content, tone = 'paper', quote = true, id = 'para-quien' }) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className={styles.head}>
        <SectionHeading id={id} label={content.label} title={content.title} accent={content.accent} />
        {content.intro ? <p className={styles.intro}>{content.intro}</p> : null}
      </div>
      <ol role="list" className={styles.list}>
        {content.items.map((it, i) => (
          <Reveal as="li" key={it.href} className={styles.row} delay={i * 60}>
            <Link href={it.href} className={styles.link}>
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={styles.title}>{quote ? `«${it.title}»` : it.title}</span>
              <span className={styles.text}>{it.text}</span>
              <span className={styles.go}>
                <span className={styles.goLabel}>{it.linkLabel}</span>
                <Icon name="arrow" size={22} />
              </span>
            </Link>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
