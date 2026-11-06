'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { handleHomeClick } from '@/lib/scrollTop';

/**
 * Enlace a la Home que, estés donde estés, te deja arriba de la página principal.
 * @param {{ children: import('react').ReactNode, className?: string }} props
 */
export default function HomeLink({ children, className }) {
  const pathname = usePathname();
  return (
    <Link href="/" className={className} onClick={(e) => handleHomeClick(e, pathname)}>
      {children}
    </Link>
  );
}
