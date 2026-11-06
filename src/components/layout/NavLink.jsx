'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { handleHomeClick } from '@/lib/scrollTop';
import styles from './NavLink.module.css';

/**
 * Enlace de navegación con indicador activo (subrayado rojo de 2 px) y aria-current.
 * @param {{ href: string, children: import('react').ReactNode, ariaLabel?: string, className?: string,
 *           onClick?: () => void, variant?: 'bar'|'plain' }} props
 */
export default function NavLink({ href, children, ariaLabel, className = '', onClick, variant = 'bar' }) {
  const pathname = usePathname() || '/';
  const norm = (p) => (p.endsWith('/') ? p : `${p}/`);
  const active = norm(pathname) === norm(href);
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
      className={[variant === 'bar' ? styles.link : '', className].filter(Boolean).join(' ')}
      onClick={(e) => {
        if (href === '/') handleHomeClick(e, pathname);
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
}
