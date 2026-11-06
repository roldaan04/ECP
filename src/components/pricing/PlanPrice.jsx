import { env } from '@/lib/env';
import { formatPrice } from '@/config/pricing';
import styles from './PlanPrice.module.css';

/**
 * Importe de un plan según el modo de visualización (NEXT_PUBLIC_PRICING_DISPLAY_MODE):
 * - consultar: sin importe («Precio por WhatsApp»).
 * - orientativo: «Desde X €».
 * - publicado: importe definitivo (solo con pricing.validated = true; si no, env lo degrada).
 * @param {{ plan: import('@/config/pricing').Plan, mode?: 'consultar'|'orientativo'|'publicado' }} props
 */
export default function PlanPrice({ plan, mode = env.pricingMode }) {
  if (mode === 'consultar') {
    return <p className={styles.consult}>Precio por WhatsApp</p>;
  }
  return (
    <p className={styles.price}>
      {mode === 'orientativo' ? <span className={styles.from}>Desde </span> : null}
      <span className={styles.amount}>{formatPrice(plan.price)}</span>
      <span className={styles.unit}> / {plan.unit}</span>
      {plan.perSession ? <span className={styles.per}>{formatPrice(plan.perSession)} por sesión</span> : null}
    </p>
  );
}
