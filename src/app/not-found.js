import Link from 'next/link';
import { services } from '@/config/navigation';
import { notFoundContent } from '@/content/notFound';
import Label from '@/components/ui/Label';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import styles from './not-found.module.css';

export const metadata = {
  title: { absolute: notFoundContent.metaTitle },
  robots: { index: false, follow: true },
};

/** 404 real: imagen completa del hormigón con escudo (único sitio donde se usa) y enlaces útiles. */
export default function NotFound() {
  return (
    <section className={styles.nf} data-tone="concrete" aria-labelledby="nf-title">
      <div className={`container ${styles.inner}`}>
        <Label tone="muted" rule>
          {notFoundContent.label}
        </Label>
        <h1 id="nf-title" className={styles.title}>
          {notFoundContent.title}
        </h1>
        <p className={styles.text}>{notFoundContent.text}</p>
        <div className={styles.ctas}>
          <Button href="/" variant="outline-dark">
            {notFoundContent.home}
          </Button>
          <WhatsAppButton context="home" />
        </div>
        <ul role="list" className={styles.links} aria-label={notFoundContent.servicesLabel}>
          {services.map((s) => (
            <li key={s.path}>
              <Link href={s.path}>
                {s.short} <Icon name="arrow" size={16} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
