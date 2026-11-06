import styles from './Section.module.css';

/**
 * Sección con tono de fondo. El tono define colores de texto, líneas y foco para sus hijos.
 * @param {{
 *   tone?: 'dark'|'paper'|'ink'|'concrete',
 *   children: import('react').ReactNode,
 *   id?: string,
 *   className?: string,
 *   container?: boolean,
 *   spacing?: 'default'|'tight'|'none',
 *   labelledBy?: string,
 *   as?: 'section'|'div'|'aside',
 *   dataAttrs?: Record<string, string>,
 * }} props
 */
export default function Section({
  tone = 'dark',
  children,
  id,
  className = '',
  container = true,
  spacing = 'default',
  labelledBy,
  as: Tag = 'section',
  dataAttrs = {},
}) {
  return (
    <Tag
      id={id}
      data-tone={tone}
      aria-labelledby={labelledBy}
      className={[styles.section, styles[tone], styles[`sp-${spacing}`], className].filter(Boolean).join(' ')}
      {...dataAttrs}
    >
      {container ? <div className="container">{children}</div> : children}
    </Tag>
  );
}
