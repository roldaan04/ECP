import { site } from '@/config/site';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { ui } from '@/content/ui';
import styles from './Testimonials.module.css';

/**
 * Prueba social: SOLO con testimonios reales y con permiso escrito (site.testimonials).
 * Si no hay ninguno, la sección no existe.
 */
export default function Testimonials() {
  const items = site.testimonials;
  if (!items?.length) return null;
  return (
    <Section tone="dark" labelledBy="testimonios">
      <SectionHeading
        id="testimonios"
        label={ui.testimonials.label}
        title={ui.testimonials.title}
        accent={ui.testimonials.accent}
      />
      <ul role="list" className={styles.list}>
        {items.map((t) => (
          <li key={t.name} className={styles.item}>
            <blockquote>
              <p className={styles.text}>«{t.text}»</p>
              <footer className={styles.who}>
                {t.name}
                {t.context ? <span> · {t.context}</span> : null}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </Section>
  );
}
