import Link from 'next/link';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Label from '@/components/ui/Label';
import Button from '@/components/ui/Button';
import TechSheet from '@/components/ui/TechSheet';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import MethodSteps from '@/components/sections/MethodSteps';
import PricingPreview from '@/components/sections/PricingPreview';
import BasketBridge from '@/components/sections/BasketBridge';
import { profileSheetRows } from '@/lib/profile';
import styles from './LandingBlock.module.css';

/**
 * Bloque de contenido de landing. El tipo decide la composición (no todas las secciones son iguales):
 * list · grid · steps · split · profile · career · note · related · pillars · pricing · court
 *
 * @param {{ block: any, index: number }} props
 */
export default function LandingBlock({ block, index }) {
  const id = `bloque-${index + 1}`;
  const tone = block.tone || 'paper';
  const heading = (
    <SectionHeading
      id={id}
      label={block.label}
      title={block.title}
      accent={block.accent}
      intro={block.intro}
    />
  );

  switch (block.type) {
    case 'steps':
      return <MethodSteps content={block} tone={tone} />;

    case 'pricing':
      return <PricingPreview content={block} />;

    case 'court':
      return <BasketBridge content={block} />;

    case 'list':
      return (
        <Section tone={tone} labelledBy={id}>
          {heading}
          <ol role="list" className={styles.list}>
            {block.items.map((it, i) => (
              <Reveal as="li" key={it.title} className={styles.listItem} delay={i * 60}>
                <span className={styles.listNum} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.listTitle}>{it.title}</h3>
                <p className={styles.listText}>{it.text}</p>
              </Reveal>
            ))}
          </ol>
        </Section>
      );

    case 'grid':
      return (
        <Section tone={tone} labelledBy={id}>
          <div className={styles.gridWrap}>
            {heading}
            <ul role="list" className={`${styles.grid} ${block.items.length === 2 ? styles.grid2 : ''}`}>
              {block.items.map((it) => (
                <li key={it.tag} className={styles.gridItem}>
                  <Label tone="red">{it.tag}</Label>
                  <h3 className={styles.gridTitle}>{it.title}</h3>
                  <p className={styles.gridText}>{it.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      );

    case 'split':
      return (
        <Section tone={tone} labelledBy={id}>
          <div className={styles.split}>
            <div className={styles.splitMain}>
              {heading}
              <div className={styles.prose}>
                {block.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <aside className={styles.splitAside} aria-label={block.aside?.title || block.aside?.caption}>
              {block.aside?.type === 'sheet' ? (
                <TechSheet caption={block.aside.caption} rows={block.aside.rows} />
              ) : null}
              {block.aside?.type === 'links' ? (
                <LinkList title={block.aside.title} items={block.aside.items} />
              ) : null}
            </aside>
          </div>
        </Section>
      );

    case 'profile':
    case 'career':
      return (
        <Section tone={tone} labelledBy={id}>
          <div className={styles.split}>
            <div className={styles.splitMain}>
              {heading}
              <div className={styles.prose}>
                {block.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <Button href="/sobre-mi/" variant={tone === 'paper' ? 'outline-light' : 'outline-dark'}>
                Conoce mi trayectoria
              </Button>
            </div>
            <div className={styles.splitAside}>
              <Reveal>
                <TechSheet
                  caption="Ficha técnica"
                  rows={block.type === 'career' ? block.rows : profileSheetRows()}
                  size="lg"
                />
              </Reveal>
            </div>
          </div>
        </Section>
      );

    case 'note':
      return (
        <Section tone={tone} spacing="tight" labelledBy={id}>
          <div className={styles.note}>
            <Label tone="muted" rule>
              {block.label}
            </Label>
            <h2 id={id} className={styles.noteTitle}>
              {block.title}
            </h2>
            <p className={styles.noteText}>{block.text}</p>
          </div>
        </Section>
      );

    case 'related':
      return (
        <Section tone={tone} labelledBy={id}>
          <div className={styles.related}>
            <div className={styles.splitMain}>
              {heading}
              <p className={styles.relatedText}>{block.text}</p>
              <Button href={block.href} variant="primary">
                {block.linkLabel}
              </Button>
            </div>
            {block.more?.length ? <LinkList title="Más opciones" items={block.more} /> : null}
          </div>
        </Section>
      );

    case 'pillars':
      return (
        <Section tone={tone} labelledBy={id}>
          {heading}
          <div className={styles.pillars}>
            {block.pillars.map((p) => (
              <div key={p.label} className={styles.pillar}>
                <Label tone="red">{p.label}</Label>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <ul role="list" className={styles.pillarList}>
                  {p.items.map((it) => (
                    <li key={it}>
                      <Icon name="plus" size={16} className={styles.pillarIcon} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      );

    default:
      return null;
  }
}

/** Lista de enlaces internos con flecha (enlazado entre landings). */
function LinkList({ title, items }) {
  return (
    <div className={styles.links}>
      {title ? <p className={styles.linksTitle}>{title}</p> : null}
      <ul role="list">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className={styles.linkItem}>
              <span>{it.label}</span>
              <Icon name="arrow" size={18} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
