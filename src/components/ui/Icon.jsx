/**
 * Set de iconos lineales propios (trazo 1.5, terminaciones rectas). Decorativos por defecto.
 * @param {{ name: 'arrow'|'arrow-up-right'|'whatsapp'|'phone'|'instagram'|'pin'|'plus'|'menu'|'close'|'chevron'|'check'|'alert',
 *           size?: number, className?: string, title?: string }} props
 */
export default function Icon({ name, size = 20, className, title }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'square',
    strokeLinejoin: 'miter',
    className,
    focusable: 'false',
    ...(title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true }),
  };

  switch (name) {
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M3 12h17M14 6l6 6-6 6" />
        </svg>
      );
    case 'arrow-up-right':
      return (
        <svg {...common}>
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...common}>
          <path d="M4.2 19.8 5.4 16A8.3 8.3 0 1 1 8.2 18.7Z" />
          <path d="M9.1 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.1.1-.1.3 0 .5.6 1 1.4 1.8 2.4 2.4.2.1.4.1.5 0l.6-.6c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5v.5c0 .4-.2.8-.6 1-.6.3-1.4.4-2.2.1-2.4-.9-4.3-2.8-5.2-5.2-.3-.8-.2-1.6.1-2.2Z" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...common}>
          <path d="M5 3.5h3.2l1.6 4.2-2 1.3a11 11 0 0 0 7.2 7.2l1.3-2 4.2 1.6V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.2 6.8h.01" strokeWidth="2" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.8" r="2.3" />
        </svg>
      );
    case 'plus':
      return (
        <svg {...common}>
          <path d="M12 4v16M4 12h16" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...common}>
          <path d="M3 7h18M3 12h18M3 17h12" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common}>
          <path d="M5 5l14 14M19 5 5 19" />
        </svg>
      );
    case 'chevron':
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />
        </svg>
      );
    case 'alert':
      return (
        <svg {...common}>
          <path d="M12 3 2.5 20h19L12 3Z" />
          <path d="M12 10v4.5M12 17v.01" />
        </svg>
      );
    default:
      return null;
  }
}
