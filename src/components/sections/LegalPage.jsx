import { site } from '@/config/site';
import { isPending } from '@/lib/pending';
import { LEGAL_PENDING_NOTE } from '@/content/legal';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import TechSheet from '@/components/ui/TechSheet';
import Section from '@/components/ui/Section';
import styles from './LegalPage.module.css';

/**
 * Página legal sobria. Los datos del titular salen de site.legal; si están pendientes,
 * se muestra un aviso neutro (la página va en noindex mientras tanto).
 * @param {{ content: { title: string, sections: { h: string, p: string[], holder?: boolean }[] } }} props
 */
export default function LegalPage({ content }) {
  const { legal } = site;
  const holderRows = [
    { label: 'Titular', value: legal.ownerName },
    { label: 'NIF', value: legal.nif },
    { label: 'Domicilio', value: legal.address },
    { label: 'Email', value: legal.email },
    { label: 'Teléfono', value: site.phone.display },
  ];
  const holderPending = [legal.ownerName, legal.nif].some(isPending);

  return (
    <>
      <section className={styles.hero} data-tone="dark" aria-labelledby="legal-title">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: content.title }]} />
          <h1 id="legal-title" className={styles.title}>
            {content.title}
          </h1>
        </div>
      </section>
      <Section tone="paper">
        <div className={styles.body}>
          {content.sections.map((s) => (
            <section key={s.h} className={styles.block}>
              <h2 className={styles.h2}>{s.h}</h2>
              {s.p.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.holder ? (
                <>
                  <TechSheet rows={holderRows} />
                  {holderPending ? <p className={styles.pending}>{LEGAL_PENDING_NOTE}</p> : null}
                </>
              ) : null}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
