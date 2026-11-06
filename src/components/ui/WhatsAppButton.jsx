import Button from '@/components/ui/Button';
import { waLink } from '@/lib/whatsapp';

/**
 * CTA principal a WhatsApp con mensaje contextual. Botón de marca (rojo), nunca verde WhatsApp.
 * @param {{
 *   context?: import('@/lib/whatsapp').WaContext,
 *   extra?: string,
 *   children?: import('react').ReactNode,
 *   size?: 'sm'|'md'|'lg',
 *   variant?: 'primary'|'outline-dark'|'outline-light',
 *   className?: string,
 * }} props
 */
export default function WhatsAppButton({
  context = 'home',
  extra,
  children = 'Escríbeme por WhatsApp',
  size = 'md',
  variant = 'primary',
  className,
}) {
  return (
    <Button
      href={waLink(context, extra)}
      variant={variant}
      size={size}
      icon="whatsapp"
      arrow={size !== 'sm'}
      className={className}
      track="click_whatsapp"
      trackContext={context}
    >
      {children}
    </Button>
  );
}
