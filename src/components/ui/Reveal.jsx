'use client';

import { useReveal } from '@/hooks/useReveal';

/**
 * Envoltorio de revelado al entrar en viewport (una vez). Sin efecto con prefers-reduced-motion.
 * - mode="fade": opacidad + translateY(16px).
 * - mode="draw": no oculta nada; solo activa el dibujo de las <ProgressLine> que contiene.
 *
 * @param {{
 *   children: import('react').ReactNode,
 *   as?: 'div'|'li'|'section'|'article'|'span',
 *   mode?: 'fade'|'draw',
 *   delay?: number,
 *   className?: string,
 * }} props
 */
export default function Reveal({ children, as: Tag = 'div', mode = 'fade', delay = 0, className }) {
  const [ref, revealed] = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal={mode}
      data-revealed={revealed ? '' : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
