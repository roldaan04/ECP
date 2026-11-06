import { buildMetadata } from '@/lib/seo';
import { env } from '@/lib/env';
import { pricing, plansByMode } from '@/config/pricing';
import { breadcrumbSchema, graph, personSchema } from '@/lib/schema';
import { tarifas, PRICING_NOTES } from '@/content/pricing';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Section from '@/components/ui/Section';
import Label from '@/components/ui/Label';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PricingTable from '@/components/pricing/PricingTable';
import PlanSheet from '@/components/pricing/PlanSheet';
import FaqList from '@/components/sections/FaqList';
import CtaFinal from '@/components/sections/CtaFinal';
import { home } from '@/content/home';
import styles from './tarifas.module.css';

// noindex mientras los precios no estén validados por escrito por Emilio.
export const metadata = buildMetadata({ ...tarifas.seo, noindex: !pricing.validated });

export default function Page() {
  const labels = {
    recommended: tarifas.recommendedLabel,
    includes: tarifas.includesLabel,
    planCta: tarifas.planCta,
    consultCta: tarifas.consultCta,
  };
  return (
    <>
      <JsonLd
        data={graph(
          personSchema(),
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Tarifas', path: tarifas.seo.path },
          ]),
        )}
      />
      <section className={styles.hero} data-tone="dark" data-sticky-start="" aria-labelledby="tarifas-title">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: 'Tarifas' }]} />
          <div className={styles.heroGrid}>
            <div>
              <Label tone="muted" rule>
                {tarifas.hero.label}
              </Label>
              <h1 id="tarifas-title" className={styles.title}>
                {tarifas.hero.title}
              </h1>
            </div>
            <p className={styles.lead}>{tarifas.hero.lead}</p>
          </div>
        </div>
      </section>

      <Section tone="paper" labelledBy="planes">
        <h2 id="planes" className="sr-only">
          {tarifas.plansHeading}
        </h2>
        <PricingTable
          tabs={[
            {
              id: 'presencial',
              label: tarifas.tabs.presencial,
              panel: <PlanSheet plans={plansByMode('presencial')} labels={labels} />,
            },
            {
              id: 'online',
              label: tarifas.tabs.online,
              panel: <PlanSheet plans={plansByMode('online')} labels={labels} />,
            },
          ]}
        />
        <div className={styles.foot}>
          <p className={styles.note}>{PRICING_NOTES[env.pricingMode]}</p>
          <div className={styles.assessment}>
            <h3 className={styles.assessTitle}>{tarifas.assessment.title}</h3>
            <p>{tarifas.assessment.text}</p>
            <WhatsAppButton context="tarifas" variant="outline-light">
              {tarifas.assessmentCta}
            </WhatsAppButton>
          </div>
        </div>
      </Section>

      <FaqList content={{ ...tarifas.faqHeading, items: tarifas.faq }} tone="dark" />
      <CtaFinal content={home.ctaFinal} context="tarifas" />
    </>
  );
}
