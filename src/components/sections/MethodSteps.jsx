import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Label from '@/components/ui/Label';
import Reveal from '@/components/ui/Reveal';
import styles from './MethodSteps.module.css';

/**
 * Método en 4 bloques: escalera ascendente (desktop) dibujada con la línea de progresión
 * (huella roja + contrahuella por bloque, que se trazan al entrar en viewport), con números gigantes
 * en contorno. En móvil, secuencia vertical con la línea a la izquierda.
 * @param {{ content: { label: string, title: string, accent?: string,
 *   steps: { label: string, title: string, text: string }[], note?: string }, tone?: 'paper'|'dark' }} props
 */
export default function MethodSteps({ content, tone = 'paper' }) {
  return (
    <Section tone={tone} labelledBy="metodo">
      <SectionHeading id="metodo" label={content.label} title={content.title} accent={content.accent} />
      <Reveal mode="draw" className={styles.stage}>
        <ol role="list" className={styles.steps}>
          {content.steps.map((s, i) => (
            <li key={s.label} className={styles.step} style={{ '--i': i }}>
              <span className={styles.giant} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <Label tone="red">{s.label}</Label>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
      {content.note ? <p className={styles.note}>{content.note}</p> : null}
    </Section>
  );
}
