import HomeLink from '@/components/layout/HomeLink';
import { mainNav, services } from '@/config/navigation';
import { site } from '@/config/site';
import { waLink } from '@/lib/whatsapp';
import Icon from '@/components/ui/Icon';
import NavLink from '@/components/layout/NavLink';
import ServicesMenu from '@/components/layout/ServicesMenu';
import MobileNav from '@/components/layout/MobileNav';
import HeaderScroll from '@/components/layout/HeaderScroll';
import styles from './SiteHeader.module.css';

/**
 * Cabecera: marca en texto (sin escudo: ilegible pequeño) + nav + WhatsApp.
 * El menú móvil y el desplegable de servicios son hojas cliente.
 */
export default function SiteHeader() {
  return (
    <header className={styles.header} id="cabecera">
      <HeaderScroll className={styles.scrolled} />
      <div className={`container ${styles.inner}`}>
        <HomeLink className={styles.brand}>
          <span className={styles.mark}>{site.brand}</span>
          <span className={styles.name}>{site.name}</span>
          <span className="sr-only">, ir al inicio</span>
        </HomeLink>

        <nav className={styles.nav} aria-label="Principal">
          <ul role="list" className={styles.list}>
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <ServicesMenu label={item.label} items={services} />
                </li>
              ) : (
                <li key={item.path}>
                  <NavLink href={item.path} ariaLabel={item.ariaLabel}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a
            href={waLink('home')}
            className={styles.wa}
            target="_blank"
            rel="noopener"
            data-track="click_whatsapp"
            data-track-context="header"
          >
            <Icon name="whatsapp" size={18} />
            <span>WhatsApp</span>
            <span className="sr-only"> (se abre en una ventana nueva)</span>
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
