import { env } from '@/lib/env';
import { waLink } from '@/lib/whatsapp';
import Button from '@/components/ui/Button';
import Label from '@/components/ui/Label';
import Icon from '@/components/ui/Icon';
import PlanPrice from '@/components/pricing/PlanPrice';
import styles from './PlanSheet.module.css';

/**
 * Columnas de planes como hoja de planificación. Plan recomendado: borde superior rojo de 3 px.
 * Cada plan lleva su CTA a WhatsApp con el nombre del plan prellenado.
 * @param {{ plans: import('@/config/pricing').Plan[], labels: { recommended: string, includes: string, planCta: string, consultCta: string } }} props
 */
export default function PlanSheet({ plans, labels }) {
  const consult = env.pricingMode === 'consultar';
  return (
    <ul role="list" className={styles.sheet} data-count={plans.length}>
      {plans.map((p) => (
        <li key={p.id} className={`${styles.plan} ${p.recommended ? styles.rec : ''}`}>
          <div className={styles.head}>
            <Label as="span" tone={p.recommended ? 'red' : 'muted'}>
              {p.recommended ? labels.recommended : p.mode === 'online' ? 'Online' : 'Presencial'}
            </Label>
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.summary}>{p.summary}</p>
          </div>
          <div className={styles.price}>
            <PlanPrice plan={p} />
          </div>
          <div className={styles.includes}>
            <p className={styles.includesLabel}>{labels.includes}</p>
            <ul role="list">
              {p.includes.map((it) => (
                <li key={it}>
                  <Icon name="check" size={16} className={styles.check} />
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <Button
            href={waLink('tarifas', p.name)}
            variant={p.recommended ? 'primary' : 'outline-light'}
            icon="whatsapp"
            arrow={false}
            className={styles.cta}
            track="click_whatsapp"
            trackContext={`tarifas-${p.id}`}
          >
            {consult ? labels.consultCta : labels.planCta}
          </Button>
        </li>
      ))}
    </ul>
  );
}
