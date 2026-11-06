import Label from '@/components/ui/Label';
import styles from './SectionHeading.module.css';

/**
 * Encabezado de sección: microetiqueta + H2 (con una palabra en rojo como máximo) + entradilla.
 * @param {{
 *   id?: string,
 *   label?: string,
 *   title: string,
 *   accent?: string,
 *   intro?: import('react').ReactNode,
 *   level?: 1|2,
 *   size?: 'h1'|'h2',
 *   className?: string,
 * }} props
 */
export default function SectionHeading({
  id,
  label,
  title,
  accent,
  intro,
  level = 2,
  size = 'h2',
  className = '',
}) {
  const Tag = level === 1 ? 'h1' : 'h2';
  return (
    <div className={[styles.wrap, className].filter(Boolean).join(' ')}>
      {label ? (
        <Label tone="muted" rule>
          {label}
        </Label>
      ) : null}
      <Tag id={id} className={[styles.title, styles[size]].join(' ')}>
        <Accent text={title} accent={accent} />
      </Tag>
      {intro ? <div className={styles.intro}>{intro}</div> : null}
    </div>
  );
}

/**
 * Pinta en rojo una sola palabra del titular.
 * @param {{ text: string, accent?: string }} props
 */
export function Accent({ text, accent }) {
  if (!accent || !text.includes(accent)) return text;
  const i = text.indexOf(accent);
  return (
    <>
      {text.slice(0, i)}
      <span className={styles.accent}>{accent}</span>
      {text.slice(i + accent.length)}
    </>
  );
}
