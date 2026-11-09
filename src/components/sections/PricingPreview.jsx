import { pricing } from '@/config/pricing';
import { env } from '@/lib/env';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Label from '@/components/ui/Label';
import PlanPrice from '@/components/pricing/PlanPrice';
import { PRICING_NOTES } from '@/content/pricing';
import styles from './PricingPreview.module.css';

/**
 * Avance de tarifas (Home) según el modo de visualización: filas tipo hoja de planificación.
 * @param {{ content: { label: string, title: string, accent?: string, intro?: string, planIds: string[], cta: string, tone?: "ink"|"paper" } }} props
 */
export default function PricingPreview({ content }) {
  const plans = content.planIds.map((id) => pricing.plans.find((p) => p.id === id)).filter(Boolean);
  return (
    <Section tone={content.tone || "ink"} labelledBy="tarifas-avance">
      <div className={styles.grid}>
        <div className={styles.head}>
          <SectionHeading
            id="tarifas-avance"
            label={content.label}
            title={content.title}
            accent={content.accent}
            intro={content.intro}
          />
          <Button href="/tarifas/" variant="primary" track="click_tarifas">
            {content.cta}
          </Button>
        </div>
        <div>
          <ul role="list" className={styles.list}>
            {plans.map((p) => (
              <li key={p.id} className={`${styles.row} ${p.recommended ? styles.rec : ''}`}>
                <div className={styles.meta}>
                  <Label as="span" tone="muted">
                    {p.mode === 'online' ? 'Online' : 'Presencial'}
                    {p.recommended ? ' · Recomendado' : ''}
                  </Label>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.summary}>{p.summary}</p>
                </div>
                <PlanPrice plan={p} />
              </li>
            ))}
          </ul>
          <p className={styles.note}>{PRICING_NOTES[env.pricingMode]}</p>
        </div>
      </div>
    </Section>
  );
}
