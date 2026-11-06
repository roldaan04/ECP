import manifest from '@/config/images.json';

/**
 * Imagen responsive AVIF/WebP generada por scripts/optimize-images.mjs (export estático, sin optimizador).
 * Lee anchos y dimensiones de src/config/images.json. Si la imagen no existe, no renderiza nada.
 *
 * @param {{
 *   name: string,
 *   alt: string,
 *   sizes?: string,
 *   priority?: boolean,
 *   className?: string,
 * }} props
 */
export default function ResponsiveImage({ name, alt, sizes = '100vw', priority = false, className }) {
  /** @type {{ width: number, height: number, widths: number[] } | undefined} */
  const meta = /** @type {any} */ (manifest)[name];
  if (!meta) return null;
  const set = (ext) => meta.widths.map((w) => `/images/${name}-${w}.${ext} ${w}w`).join(', ');
  const fallbackW = meta.widths.find((w) => w >= 800) ?? meta.widths[meta.widths.length - 1];
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      <img
        src={`/images/${name}-${fallbackW}.webp`}
        alt={alt}
        width={meta.width}
        height={meta.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  );
}
