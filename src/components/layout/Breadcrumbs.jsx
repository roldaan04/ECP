import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

/**
 * Migas de pan visibles (Inicio › Servicios › Página). El JSON-LD BreadcrumbList va aparte.
 * @param {{ items: { name: string, path?: string }[] }} props  El último elemento es la página actual.
 */
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Migas de pan" className={styles.nav}>
      <ol role="list" className={styles.list}>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.name} className={styles.item}>
              {last || !it.path ? (
                <span aria-current={last ? 'page' : undefined}>{it.name}</span>
              ) : (
                <Link href={it.path}>{it.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
