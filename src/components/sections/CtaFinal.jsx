import { site } from '@/config/site';
import Label from '@/components/ui/Label';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ProgressLine from '@/components/ui/ProgressLine';
import Reveal from '@/components/ui/Reveal';
import { Accent } from '@/components/ui/SectionHeading';
import styles from './CtaFinal.module.css';

/**
 * CTA final sobre hormigón a todo el ancho (mosaico espejado bajo un velo): titular enorme,
 * WhatsApp grande, teléfono visible y la línea de progresión que termina en flecha.
 * Oculta la barra CTA móvil mientras está en viewport (data-sticky-end).
 * @param {{ content: { label?: string, title: string, accent?: string, text: string, cta: string, phoneLabel: string },
 *           context?: import('@/lib/whatsapp').WaContext }} props
 */
export default function CtaFinal({ content, context = 'home' }) {
  return (
    <section className={styles.cta} data-tone="concrete" data-sticky-end="" aria-labelledby="cta-final">
      <div className={`container ${styles.inner}`}>
        {content.label ? (
          <Label tone="muted" rule>
            {content.label}
          </Label>
        ) : null}
        <h2 id="cta-final" className={styles.title}>
          <Accent text={content.title} accent={content.accent} />
        </h2>
        <p className={styles.text}>{content.text}</p>
        <div className={styles.actions}>
          <WhatsAppButton context={context} size="lg">
            {content.cta}
          </WhatsAppButton>
          <p className={styles.phone}>
            {content.phoneLabel}{' '}
            <a href={site.phone.href} className="tnum" data-track="click_tel">
              {site.phone.display}
            </a>
          </p>
        </div>
      </div>
      <Reveal mode="draw" className={styles.lineWrap}>
        <ProgressLine steps={5} run={150} rise={44} lead={60} arrow />
      </Reveal>
    </section>
  );
}
