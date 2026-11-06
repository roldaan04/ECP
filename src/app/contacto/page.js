import { buildMetadata } from '@/lib/seo';
import { env } from '@/lib/env';
import { site } from '@/config/site';
import { waLink } from '@/lib/whatsapp';
import { breadcrumbSchema, graph, personSchema } from '@/lib/schema';
import { contact } from '@/content/contact';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Label from '@/components/ui/Label';
import TechSheet from '@/components/ui/TechSheet';
import Icon from '@/components/ui/Icon';
import ContactForm from '@/components/forms/ContactForm';
import styles from './contacto.module.css';

export const metadata = buildMetadata(contact.seo);

export default function Page() {
  const { channels } = contact;
  return (
    <>
      <JsonLd
        data={graph(
          personSchema(),
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Contacto', path: contact.seo.path },
          ]),
        )}
      />
      <section className={styles.hero} data-tone="dark" data-sticky-start="" aria-labelledby="contacto-title">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: 'Contacto' }]} />
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <Label tone="muted" rule>
                {contact.hero.label}
              </Label>
              <h1 id="contacto-title" className={styles.title}>
                {contact.hero.title}
              </h1>
              <p className={styles.lead}>{contact.hero.lead}</p>
            </div>

            <ul role="list" className={styles.channels} aria-label={channels.title}>
              <li className={`${styles.channel} ${styles.primary}`}>
                <a
                  href={waLink('home')}
                  target="_blank"
                  rel="noopener"
                  className={styles.channelLink}
                  data-track="click_whatsapp"
                  data-track-context="contacto"
                >
                  <Label as="span">{channels.whatsapp.tag}</Label>
                  <span className={styles.channelTitle}>
                    <Icon name="whatsapp" size={28} /> {channels.whatsapp.title}
                  </span>
                  <span className={styles.channelText}>{channels.whatsapp.text}</span>
                  <span className={styles.channelCta}>
                    {channels.whatsapp.cta} <Icon name="arrow" size={18} />
                  </span>
                  <span className="sr-only"> (se abre en una ventana nueva)</span>
                </a>
              </li>
              <li className={styles.channel}>
                <a href={site.phone.href} className={styles.channelLink} data-track="click_tel">
                  <Label as="span" tone="muted">
                    {channels.phone.tag}
                  </Label>
                  <span className={`${styles.channelTitle} tnum`}>
                    <Icon name="phone" size={24} /> {site.phone.display}
                  </span>
                  <span className={styles.channelText}>{channels.phone.text}</span>
                </a>
              </li>
              <li className={styles.channel}>
                <a href={site.instagram.url} target="_blank" rel="noopener" className={styles.channelLink}>
                  <Label as="span" tone="muted">
                    {channels.instagram.tag}
                  </Label>
                  <span className={styles.channelTitle}>
                    <Icon name="instagram" size={24} /> {site.instagram.handle}
                  </span>
                  <span className={styles.channelText}>{channels.instagram.text}</span>
                  <span className="sr-only"> (se abre en una ventana nueva)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Section tone="paper" labelledBy="zona">
        <div className={styles.areaGrid}>
          <div className={styles.areaMain}>
            <SectionHeading
              id="zona"
              label={contact.area.label}
              title={contact.area.title}
              accent={contact.area.accent}
            />
            <TechSheet rows={contact.area.rows} />
            <p className={styles.notice}>{contact.metaNotice}</p>
          </div>
          {env.formEndpoint ? (
            <div className={styles.formCol}>
              <SectionHeading
                label={contact.form.label}
                title={contact.form.title}
                intro={contact.form.intro}
              />
              <ContactForm endpoint={env.formEndpoint} t={contact.form} />
            </div>
          ) : null}
        </div>
      </Section>
    </>
  );
}
