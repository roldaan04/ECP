import Link from 'next/link';
import { footerNav } from '@/config/navigation';
import { site } from '@/config/site';
import { waLink } from '@/lib/whatsapp';
import Shield from '@/components/ui/Shield';
import Icon from '@/components/ui/Icon';
import { ui } from '@/content/ui';
import styles from './SiteFooter.module.css';

/** Pie: escudo, navegación, contacto (tel, WhatsApp, Instagram), zona y legales. */
export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} data-tone="dark" data-sticky-end="">
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Shield width={150} />
          <p className={styles.tagline}>
            {ui.footer.tagline[0]}
            <br />
            {ui.footer.tagline[1]}
          </p>
        </div>

        <nav className={styles.cols} aria-label="Pie de página">
          <div>
            <p className={styles.colTitle}>{ui.footer.columns.servicios}</p>
            <ul role="list" className={styles.links}>
              {footerNav.servicios.map((l) => (
                <li key={l.path}>
                  <Link href={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>{ui.footer.columns.ecp}</p>
            <ul role="list" className={styles.links}>
              {footerNav.ecp.map((l) => (
                <li key={l.path}>
                  <Link href={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>{ui.footer.columns.contacto}</p>
            <ul role="list" className={styles.links}>
              <li>
                <a
                  href={waLink('home')}
                  target="_blank"
                  rel="noopener"
                  data-track="click_whatsapp"
                  data-track-context="footer"
                >
                  <Icon name="whatsapp" size={18} /> WhatsApp
                  <span className="sr-only"> (se abre en una ventana nueva)</span>
                </a>
              </li>
              <li>
                <a href={site.phone.href} data-track="click_tel">
                  <Icon name="phone" size={18} /> <span className="tnum">{site.phone.display}</span>
                </a>
              </li>
              <li>
                <a href={site.instagram.url} target="_blank" rel="noopener">
                  <Icon name="instagram" size={18} /> {site.instagram.handle}
                  <span className="sr-only"> en Instagram (se abre en una ventana nueva)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {site.brandFull}
        </p>
        <ul role="list" className={styles.legal}>
          {footerNav.legal.map((l) => (
            <li key={l.path}>
              <Link href={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
