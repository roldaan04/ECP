/**
 * Guardas de contenido sobre el export estático (out/). Se ejecuta tras `next build`.
 * Falla (exit 1) si:
 *  - aparece TODO_VALIDAR, lorem, example.com u «orange» (o sus hex) en páginas públicas o en el CSS;
 *  - una página pública no tiene title, description, canonical absoluto con barra final o un único H1;
 *  - aparecen términos prohibidos de la skill de contenido (insensible a mayúsculas y acentos).
 * Además elimina out/dev/ (el kit de componentes no se publica).
 */
import { readdir, readFile, rm, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const OUT = join(process.cwd(), 'out');

/** Rutas sin guardas de términos (textos legales: «tratamiento» de datos, etc.). */
const LEGAL = ['/aviso-legal/', '/politica-privacidad/', '/politica-cookies/'];
/** Rutas técnicas sin metadatos de página (404). */
const NO_META = ['/404/', '/_not-found/'];

const RAW_FORBIDDEN = [/TODO_VALIDAR/, /lorem/i, /example\.com/i];
const ORANGE = [/\borange\b/i, /#f47721/i, /#d85f0d/i, /naranja/i];

/** Términos prohibidos (texto normalizado sin acentos, en minúsculas). */
const TERMS = [
  ['fisioterapeuta', /\bfisioterapeutas?\b/],
  ['fisioterapia', /\bfisioterapia\b/],
  ['tratamiento', /\btratamientos?\b/],
  ['terapia', /\bterapias?\b/],
  ['rehabilitación', /\brehabilitacion\b/],
  ['readaptación', /\breadaptacion\b/],
  ['recuperar lesiones', /\brecuperar (de )?(tus |las )?lesion/],
  ['curar', /\bcurar\b/],
  ['eliminar/quitar el dolor', /\b(eliminar|quitar) el dolor\b/],
  ['prevenir lesiones', /\bprevenir (las |tus )?lesiones\b/],
  ['sin lesiones', /\bsin lesiones\b/],
  ['garantizado', /\bgarantizad[oa]s?\b/],
  ['garantía de resultados', /\bgarantia de resultados\b/],
  ['el mejor', /\b(el|la) mejor (entrenador|preparador|servicio|opcion de madrid)\b/],
  ['nº 1', /\bn\.?º ?1\b|\bnumero 1\b/],
  ['líder', /\blider(es)?\b/],
  ['transforma tu cuerpo', /\btransforma tu cuerpo\b/],
  ['tu mejor versión', /\btu mejor version\b/],
  ['siguiente nivel', /\bsiguiente nivel\b/],
  ['desbloquea tu potencial', /\bdesbloquea tu potencial\b/],
  ['sin excusas', /\bsin excusas\b/],
  ['perder X kg', /\bperder \d+ ?(kg|kilos)\b/],
  ['en X días/semanas', /\ben \d+ (dias|semanas)\b/],
];

/** Frases permitidas que se retiran antes de buscar términos. */
const ALLOW = [
  { re: /\b(un|tu) fisioterapeuta o medico\b/g },
  { re: /\bactualmente estudio fisioterapia\b/g, only: '/sobre-mi/' },
];

const normalize = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const decode = (s) =>
  s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

function visibleText(html) {
  const meta = [
    ...html.matchAll(/<(?:title)[^>]*>([^<]*)<\/title>|<meta\s+name="description"\s+content="([^"]*)"/g),
  ]
    .map((m) => m[1] || m[2])
    .join(' ');
  const alts = [...html.matchAll(/\s(?:alt|aria-label)="([^"]*)"/g)].map((m) => m[1]).join(' ');
  const body = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ');
  return decode(`${meta} ${alts} ${body}`).replace(/\s+/g, ' ');
}

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

async function main() {
  try {
    await stat(OUT);
  } catch {
    console.error('✖ No existe out/. Ejecuta `next build` primero.');
    process.exit(1);
  }
  await rm(join(OUT, 'dev'), { recursive: true, force: true });

  const files = await walk(OUT);
  const pages = files.filter((f) => f.endsWith(`${sep}index.html`));
  const css = files.filter((f) => f.endsWith('.css'));
  const errors = [];

  for (const file of pages) {
    const rel = relative(OUT, file).split(sep).join('/');
    const route = '/' + rel.replace(/index\.html$/, '');
    const html = await readFile(file, 'utf8');
    const isLegal = LEGAL.includes(route);

    for (const re of RAW_FORBIDDEN) if (re.test(html)) errors.push(`${route}: contiene ${re}`);
    for (const re of ORANGE)
      if (re.test(visibleText(html)) || re.test(html.replace(/<script[\s\S]*?<\/script>/g, '')))
        errors.push(`${route}: contiene ${re} (naranja prohibido)`);

    // Metadatos y estructura
    const skipMeta = NO_META.includes(route);
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim();
    const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.trim();
    const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
    const h1s = (html.match(/<h1[\s>]/g) || []).length;
    if (!title) errors.push(`${route}: sin <title>`);
    if (!skipMeta && !desc) errors.push(`${route}: sin meta description`);
    if (skipMeta) {
      // la 404 no lleva canonical
    } else if (!canonical) errors.push(`${route}: sin canonical`);
    else if (!/^https:\/\/[^/]+\/(.*\/)?$/.test(canonical))
      errors.push(`${route}: canonical no absoluto o sin barra final (${canonical})`);
    if (h1s !== 1) errors.push(`${route}: ${h1s} H1 (debe haber exactamente uno)`);

    // Términos prohibidos
    if (!isLegal) {
      let text = normalize(visibleText(html));
      for (const a of ALLOW) if (!a.only || a.only === route) text = text.replace(a.re, ' ');
      for (const [name, re] of TERMS) {
        const m = text.match(re);
        if (m) {
          const i = m.index ?? 0;
          errors.push(
            `${route}: término prohibido «${name}» → «…${text.slice(Math.max(0, i - 40), i + 50)}…»`,
          );
        }
      }
    }
  }

  for (const file of css) {
    const content = await readFile(file, 'utf8');
    for (const re of ORANGE) if (re.test(content)) errors.push(`${relative(OUT, file)}: contiene ${re}`);
  }

  if (errors.length) {
    console.error(`\n✖ Guardas de contenido: ${errors.length} problema(s)\n`);
    for (const e of errors) console.error('  - ' + e);
    process.exit(1);
  }
  console.log(`✓ Guardas de contenido OK (${pages.length} páginas, ${css.length} hojas de estilo).`);
}

await main();
