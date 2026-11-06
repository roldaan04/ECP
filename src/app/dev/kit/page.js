import { notFound } from 'next/navigation';
import { env } from '@/lib/env';
import { home } from '@/content/home';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Label from '@/components/ui/Label';
import Chip from '@/components/ui/Chip';
import ProgressLine from '@/components/ui/ProgressLine';
import TechSheet from '@/components/ui/TechSheet';
import Shield from '@/components/ui/Shield';
import CourtLines from '@/components/ui/CourtLines';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import ServiceIndex from '@/components/sections/ServiceIndex';
import FaqList from '@/components/sections/FaqList';
import { profileSheetRows } from '@/lib/profile';
import styles from './kit.module.css';

export const metadata = { title: 'Kit de componentes · ECP', robots: { index: false, follow: false } };

const COLORS = [
  ['--ecp-red', 'Rojo ECP'],
  ['--ecp-red-hover', 'Rojo hover'],
  ['--ecp-red-deep', 'Granate'],
  ['--ecp-red-bright', 'Rojo brillante (texto grande)'],
  ['--ecp-black', 'Negro'],
  ['--ecp-ink', 'Tinta'],
  ['--ecp-graphite', 'Grafito'],
  ['--ecp-line-dark', 'Línea oscura'],
  ['--ecp-steel', 'Acero'],
  ['--ecp-paper', 'Papel'],
  ['--ecp-line-light', 'Línea clara'],
  ['--ecp-muted', 'Texto secundario (claro)'],
];

const ICONS = [
  'arrow',
  'arrow-up-right',
  'whatsapp',
  'phone',
  'instagram',
  'pin',
  'plus',
  'menu',
  'close',
  'chevron',
  'check',
  'alert',
];

/** Kit de componentes para revisión. Solo en desarrollo: en producción devuelve 404. */
export default function KitPage() {
  if (env.isProduction) notFound();
  return (
    <>
      <Section tone="dark">
        <SectionHeading
          level={1}
          size="h1"
          label="Dev · Kit de componentes"
          title="Kit ECP"
          accent="ECP"
          intro="Revisión de la gramática visual antes de montar páginas."
        />
      </Section>

      <Section tone="paper" spacing="tight">
        <Label tone="muted" rule>
          Color
        </Label>
        <ul role="list" className={styles.swatches}>
          {COLORS.map(([v, name]) => (
            <li key={v} className={styles.swatch}>
              <span className={styles.chip} style={{ background: `var(${v})` }} />
              <span className={styles.swName}>{name}</span>
              <code className={styles.code}>{v}</code>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark" spacing="tight">
        <Label tone="muted" rule>
          Tipografía
        </Label>
        <div className={styles.type}>
          <p className={styles.display}>Fuerza. Condición.</p>
          <p className={styles.h1}>Entrenador personal en Madrid</p>
          <p className={styles.h2}>
            Cada carga tiene un <span className={styles.red}>porqué</span>
          </p>
          <p className={styles.h3}>Quiero ganar fuerza y sentirme mejor</p>
          <p className={styles.lead}>
            Lead · Diseño tu entrenamiento de fuerza y condición física a partir de tu punto de partida.
          </p>
          <p>
            Cuerpo · Frases cortas, verbos de acción. Un dato concreto vale más que tres adjetivos. Máximo 65
            caracteres por línea.
          </p>
          <Label>Bloque 01 · Valoración · Semana 1–4 · 4 × 6 · RPE 8 (ejemplo)</Label>
        </div>
      </Section>

      <Section tone="dark" spacing="tight">
        <Label tone="muted" rule>
          Botones (oscuro)
        </Label>
        <div className={styles.row}>
          <WhatsAppButton context="home" />
          <Button href="/tarifas/" variant="outline-dark">
            Ver tarifas
          </Button>
          <Button href="/sobre-mi/" variant="link">
            Conoce mi trayectoria
          </Button>
          <WhatsAppButton context="home" size="sm">
            WhatsApp
          </WhatsAppButton>
        </div>
        <div className={styles.row}>
          {ICONS.map((n) => (
            <span key={n} className={styles.icon} title={n}>
              <Icon name={n} size={24} />
            </span>
          ))}
        </div>
        <div className={styles.row}>
          <Chip>Presencial</Chip>
          <Chip>Online</Chip>
          <Chip tone="solid">Especialidad</Chip>
        </div>
      </Section>

      <Section tone="paper" spacing="tight">
        <Label tone="muted" rule>
          Botones (claro)
        </Label>
        <div className={styles.row}>
          <WhatsAppButton context="personal">Cuéntame tu caso por WhatsApp</WhatsAppButton>
          <Button href="/tarifas/" variant="outline-light">
            Ver tarifas
          </Button>
          <Button href="/contacto/" variant="link">
            Otras formas de contacto
          </Button>
        </div>
        <Label tone="red">Etiqueta roja sobre papel · Bloque 02 · Plan</Label>
      </Section>

      <Section tone="dark" spacing="tight">
        <Label tone="muted" rule>
          Línea de progresión (firma)
        </Label>
        <Reveal mode="draw" className={styles.lineDemo}>
          <ProgressLine steps={4} run={170} rise={60} lead={40} />
        </Reveal>
        <Reveal mode="draw" className={styles.lineDemo}>
          <ProgressLine steps={3} run={200} rise={40} arrow />
        </Reveal>
      </Section>

      <Section tone="dark" spacing="tight">
        <div className={styles.split}>
          <div>
            <Label tone="muted" rule>
              Ficha técnica
            </Label>
            <TechSheet caption="Ficha técnica" rows={profileSheetRows()} size="lg" />
          </div>
          <div className={styles.shieldBox}>
            <Label tone="muted" rule>
              Escudo (máx. 340 px, solo en oscuro)
            </Label>
            <Shield width={340} />
          </div>
        </div>
      </Section>

      <Section tone="paper" spacing="tight">
        <Label tone="muted" rule>
          Líneas de pista (baloncesto)
        </Label>
        <div className={styles.court}>
          <CourtLines tone="light" />
        </div>
      </Section>

      <ServiceIndex content={home.services} />
      <FaqList content={{ ...home.faq, items: home.faq.items.slice(0, 3) }} id="kit-faq" />

      <Section tone="dark" spacing="tight">
        <Label tone="muted" rule>
          Barra CTA móvil (vista estática)
        </Label>
        <div className={styles.stickyDemo}>
          <WhatsAppButton context="home" size="sm">
            WhatsApp
          </WhatsAppButton>
          <Button href="/tarifas/" variant="outline-dark" size="sm">
            Tarifas
          </Button>
        </div>
      </Section>
    </>
  );
}
