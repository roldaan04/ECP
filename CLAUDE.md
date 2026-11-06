# ECP — Emilio Congosto Pérez · Contexto maestro para Claude Code

> Versión 3 · 5 nov 2026. Sustituye a cualquier versión anterior. Si algo antiguo (naranja, Astro, TypeScript, rutas `/sobre-emilio/`, tres servicios iguales…) contradice este archivo, **manda este archivo**.
> **El despliegue está fuera de alcance**: lo gestiona David. No configures hosting, CI, FTP, `.htaccess` ni subidas. Tu entrega termina en un build que funciona en local.

## 0. Antes de tocar nada
1. Lee este archivo entero.
2. Lee las skills, en este orden:
   - `.claude/skills/diseno-ecp/SKILL.md`: dirección de arte, sistema visual y componentes.
   - `.claude/skills/contenido-ecp/SKILL.md`: voz, copy, qué se puede afirmar, tarifas en borrador.
   - `.claude/skills/seo-local-ecp/SKILL.md`: arquitectura SEO, metadatos, schema, enlazado.
3. Lee `ecp-assets/LEEME.md`, revisa `ecp-assets/` (ver §8) y `docs/PENDIENTES-EMILIO.md`.
4. Audita el repo: busca `orange`, `naranja`, `#f47721`, `#d85f0d`, `sobre-emilio`, archivos `.ts/.tsx`, textos inventados. Corrígelos.

## 1. Misión
Web profesional, rápida, accesible y orientada a conversión para **Emilio Congosto Pérez (ECP)**, preparador físico y entrenador personal en Madrid, con servicio presencial y online. Idioma: español de España (`es-ES`).

**Objetivo de negocio:** que el visitante entienda en 5 segundos quién es Emilio y qué ofrece, confíe en él y haga una de estas dos acciones:
1. **Escribir por WhatsApp** (conversión principal).
2. **Ir a Tarifas** (secundaria, que lleva de nuevo a WhatsApp).

El cliente quiere una web que **no parezca hecha con IA**: con personalidad, editorial, deportiva y premium. Es el criterio de éxito más importante para él.

## 2. Posicionamiento (decisión del cliente, nov 2026)
- **Web principal = fuerza y acondicionamiento físico.** Preparación física y entrenamiento personal para cualquier persona: adultos, deportistas de cualquier disciplina y jóvenes. El baloncesto **no** protagoniza la Home.
- **Baloncesto = landing propia**: «Entrenador de baloncesto personalizado en Madrid». Combina acondicionamiento físico específico para baloncesto con entrenamiento técnico individual. Es la especialidad diferencial de Emilio (jugador, entrenador y preparador físico en baloncesto).
- **Sobre mí (apartado «ECP»)**: aquí va su trayectoria: entrenador de baloncesto en Mirasur School y preparador físico en Laso Academy.
- El logo dice **«STRENGTH · CONDITIONING»**. La Home debe ser coherente: fuerza, condición física, rendimiento.

Propuesta de valor (editable, a validar): **«Fuerza y condición física con método. Para entrenar mejor, rendir más y moverte con confianza.»**
Diferenciales reales: graduado en CAFYD, preparación física en categorías de formación, jugador y entrenador de baloncesto, entrenamiento individualizado, presencial y online.

## 3. Datos CONFIRMADOS (no inventar nada más)
| Dato | Valor |
|---|---|
| Nombre / marca | «ECP» y «Emilio Congosto Pérez», se usan ambos |
| Profesión | Preparador físico y entrenador personal |
| Formación | Graduado en CAFYD. Actualmente estudia Fisioterapia: **nunca presentarlo como fisioterapeuta ni ofrecer tratamientos sanitarios** |
| Trayectoria | Entrenador de baloncesto y jugador de Primera Autonómica Oro en Mirasur School · Preparador físico en Laso Academy (categorías cadete e infantil) |
| Zona | Todo Madrid, presencial. Online para cualquier ciudad |
| Modalidad | Presencial y online, según las necesidades del cliente |
| Público | Todas las edades. Menores de 14: autorización de padres o tutores obligatoria |
| Teléfono / WhatsApp | +34 638 06 88 34 → `https://wa.me/34638068834` |
| Instagram | @eemilioo45 → `https://www.instagram.com/eemilioo45/` |
| Dominio | `emiliocongostoperez` (**TLD por confirmar**). Usar `NEXT_PUBLIC_SITE_URL` |
| Conversión | CTAs a WhatsApp y a Tarifas |

### Pendiente (marcadores, no inventar)
Precios definitivos · email profesional · fotos reales con derechos · CV y acreditaciones · método real y primera valoración · testimonios con permiso · datos legales del responsable · analítica y cookies · denominación oficial de «Laso Academy» y de la competición · TLD · versión plana del logo · lugar de las sesiones presenciales.

Todos los pendientes se centralizan en `src/config/site.js` con el valor `TODO_VALIDAR` y el helper `isPending()` de `src/lib/pending.js`. **Nunca** se renderiza un `TODO_VALIDAR` en producción: los componentes ocultan el dato y la guarda de build falla si aparece alguno (§11).

## 4. Stack (decidido)
| Pieza | Elección | Motivo |
|---|---|---|
| Framework | **Next.js 16 (16.4.x, App Router, Turbopack) + React 19 (19.3.x)** | React con HTML generado por ruta (SEO), API de metadatos, sitemap y robots nativos |
| Lenguaje | **JavaScript (ES2022+), sin TypeScript** | Petición del cliente. Archivos `.js`/`.jsx` (`.mjs` para scripts). Props documentadas con **JSDoc** |
| Renderizado | `output: 'export'` → **HTML estático** en `out/`, con `trailingSlash: true` | Cada página es HTML completo e indexable, sin servidor Node |
| Componentes | **Server Components por defecto**; `'use client'` solo en hojas interactivas | Menos JS en cliente, mejor rendimiento |
| Estilos | **CSS Modules** por componente + tokens en `src/styles/tokens.css` | Sin Tailwind ni librerías de UI (shadcn, MUI, Chakra…): son la causa nº 1 del aspecto «web de IA» |
| Fuentes | `next/font/google` (Barlow Condensed + Inter); en build se self-hostean | Sin peticiones a Google en runtime, sin CLS |
| Imágenes | `next/image` con `images.unoptimized: true` (requisito del export) + script `scripts/optimize-images.mjs` (sharp) que genera AVIF/WebP en varios anchos; componente `<ResponsiveImage>` con `<picture>` | Imágenes optimizadas sin servidor de imágenes |
| Animación | CSS + hook propio `useReveal` (IntersectionObserver) | Sin Framer Motion, GSAP ni librerías de scroll. JS de cliente en Home < 90 KB gzip (incluido el runtime de React) |
| Calidad | ESLint 9 con flat config (`eslint.config.mjs`: `eslint-config-next/core-web-vitals` + reglas de `jsx-a11y` recomendadas), Prettier, Playwright + `@axe-core/playwright`, script de guardas | — |

Restricciones del export estático (respetarlas): no hay Route Handlers dinámicos, Server Actions, middleware/proxy, ISR ni `next/image` optimizado en servidor. El formulario envía a un endpoint externo (§10).

**Cambios de Next 16 que afectan al proyecto** (migrado desde la 15 en nov 2026, `output: 'export'` sin problemas):
- `next lint` ya no existe y `next build` no ejecuta el lint: se usa `eslint .` directamente (`npm run lint`) con flat config. La opción `eslint` de `next.config` ya no se admite.
- Turbopack es el bundler por defecto en `next dev` y `next build`. Los CSS Modules exigen selectores «puros» (con al menos una clase local): `[aria-invalid]` suelto falla, hay que escribir `.form [aria-invalid]`.
- `middleware` pasa a llamarse `proxy` (no aplica: el export estático no lo admite) y las APIs de request (`params`, `cookies`…) son solo asíncronas (no aplica: no hay rutas dinámicas).
- `images.imageSizes` ya no incluye 16 por defecto (no aplica: `images.unoptimized: true`).
- Requiere Node ≥ 20.9 (`engines` en `package.json`).
- `react-hooks` (incluido en `eslint-config-next`) marca como error `setState` síncrono dentro de `useEffect`: para resetear estado al cambiar de ruta se ajusta durante el render comparando con la ruta anterior.

**Presupuesto de JS (medido, nov 2026):** la Home carga unos 142 KB gzip en navegadores modernos (el chunk de polyfills de 39 KB es `noModule` y no se descarga). De ellos, unos 125 KB son React DOM y el runtime del App Router de Next; el código propio son unos 17 KB. El objetivo de < 90 KB de §4 no es alcanzable con Next + React: **pendiente de que David decida si se revisa el objetivo**.

## 5. Arquitectura
```
├── public/
│   ├── favicons + site.webmanifest     (copiados de ecp-assets/favicons, en la raíz de public/)
│   ├── brand/                           logo (png/webp/@2x)
│   ├── og/                              og-image.jpg, og-image-negro.jpg
│   ├── textures/                        hormigón optimizado
│   └── images/                          salida de optimize-images (fotos reales cuando lleguen)
├── src/
│   ├── app/                             ← SOLO routing, metadata y composición de secciones
│   │   ├── layout.js                    html lang="es", fuentes, SiteHeader, SiteFooter, StickyCta, skip link
│   │   ├── page.js                      Home
│   │   ├── entrenador-personal-madrid/page.js
│   │   ├── preparador-fisico-madrid/page.js
│   │   ├── entrenador-baloncesto-madrid/page.js
│   │   ├── entrenamiento-online/page.js
│   │   ├── sobre-mi/page.js
│   │   ├── tarifas/page.js
│   │   ├── contacto/page.js
│   │   ├── aviso-legal/page.js · politica-privacidad/page.js · politica-cookies/page.js
│   │   ├── dev/kit/page.js              kit de componentes (notFound() en producción)
│   │   ├── not-found.js                 404 real
│   │   ├── sitemap.js                   solo rutas indexables
│   │   └── robots.js                    según NEXT_PUBLIC_INDEXING
│   ├── components/
│   │   ├── layout/    SiteHeader, MobileNav*, SiteFooter, StickyCta*, Breadcrumbs, SkipLink
│   │   ├── ui/        Button, WhatsAppButton, Label, SectionHeading, ProgressLine, TechSheet,
│   │   │              Chip, ResponsiveImage, Reveal*, Icon (SVG propios)
│   │   ├── sections/  HeroHome, AudienceList, ServiceIndex, MethodSteps, ProfileTeaser,
│   │   │              BasketBridge, PricingPreview, FaqList, CtaFinal, LandingHero, LandingBlock
│   │   ├── pricing/   PricingTable* (selector presencial/online)
│   │   ├── forms/     ContactForm*
│   │   └── seo/       JsonLd
│   │   (* = 'use client')
│   ├── content/                         ← TEXTOS como datos, separados de la UI
│   │   ├── home.js, about.js, contact.js, faq.js
│   │   └── landings/ personal.js, preparacion.js, baloncesto.js, online.js
│   ├── config/
│   │   ├── site.js                      datos confirmados + TODO_VALIDAR
│   │   ├── navigation.js                menú principal, footer, servicios
│   │   └── pricing.js                   tarifas (validated: false)
│   ├── lib/
│   │   ├── whatsapp.js                  waLink(context, extra)
│   │   ├── seo.js                       buildMetadata({ title, description, path, noindex, ogImage })
│   │   ├── schema.js                    personSchema, websiteSchema, serviceSchema, breadcrumbSchema, graph()
│   │   ├── pending.js                   TODO_VALIDAR, isPending(), clean()
│   │   └── env.js                       lectura y validación de NEXT_PUBLIC_*
│   ├── hooks/                           useReveal, useInView, useMediaQuery
│   └── styles/                          tokens.css, globals.css (reset, base, tipografía, utilidades mínimas)
├── scripts/
│   ├── optimize-images.mjs
│   └── check-content.mjs                guardas sobre out/
├── tests/e2e/                           routes.spec.js, a11y.spec.js, seo.spec.js, whatsapp.spec.js
├── docs/PENDIENTES-EMILIO.md
├── jsconfig.json                        alias "@/*" → "src/*"
├── next.config.mjs                      output 'export', trailingSlash true, images.unoptimized true
└── .env.example
```

### Reglas de arquitectura
- **`app/` no contiene JSX de diseño complejo**: cada `page.js` exporta `metadata` (vía `buildMetadata`), importa su contenido de `content/` y compone secciones. Ejemplo:
  ```js
  // src/app/preparador-fisico-madrid/page.js
  import { buildMetadata } from '@/lib/seo';
  import { preparacion } from '@/content/landings/preparacion';
  import LandingPage from '@/components/sections/LandingPage';

  export const metadata = buildMetadata(preparacion.seo);
  export default function Page() {
    return <LandingPage content={preparacion} />;
  }
  ```
- **Los textos nunca van hardcodeados en los componentes**: van en `content/` o `config/`. Así Emilio y David pueden cambiar copy sin tocar UI.
- **Una plantilla de landing no implica un diseño clónico**: `LandingPage` acepta `variant` (`personal | preparacion | baloncesto | online`) que cambia la composición del hero, el orden de bloques y el recurso gráfico (líneas de pista en baloncesto, por ejemplo).
- Componentes pequeños y de una sola responsabilidad; props documentadas con JSDoc; nada de lógica de negocio en la UI (va en `lib/`).
- `'use client'` lo más abajo posible del árbol. Un componente cliente no importa módulos pesados.
- Nombres: componentes en `PascalCase.jsx` con su `PascalCase.module.css` al lado; utilidades en `camelCase.js`.
- Sin dependencias superfluas: antes de instalar algo, justifica por qué no basta con la plataforma.

## 6. Rutas
| Ruta | Rol | Indexable |
|---|---|---|
| `/` | Home: fuerza y acondicionamiento, marca personal, servicios, método, CTA | Sí |
| `/entrenador-personal-madrid/` | Entrenamiento personal (salud, fuerza, hábitos) | Sí |
| `/preparador-fisico-madrid/` | Preparación física para deportistas de cualquier disciplina | Sí |
| `/entrenador-baloncesto-madrid/` | **Entrenador de baloncesto personalizado** (físico + técnico) | Sí |
| `/entrenamiento-online/` | Planificación y seguimiento online, cualquier ciudad | Sí, si el contenido es sustancial |
| `/sobre-mi/` | Apartado «ECP»: quién es Emilio, formación y trayectoria | Sí |
| `/tarifas/` | Planes y precios | **`noindex` hasta validar precios** |
| `/contacto/` | WhatsApp, teléfono, Instagram, formulario secundario | Sí |
| `/aviso-legal/`, `/politica-privacidad/`, `/politica-cookies/` | Legales | `noindex` mientras estén en borrador |
| 404 (`not-found.js`) | Con enlaces útiles | No |

**Navegación:** Inicio · Servicios (desplegable con las 4 landings) · ECP (→ `/sobre-mi/`) · Tarifas · **[WhatsApp]**.
La etiqueta «ECP» es petición del cliente: añade `aria-label="ECP, sobre mí: Emilio Congosto Pérez"` y H1 descriptivo en la página. (El nombre accesible empieza por el texto visible «ECP» para cumplir WCAG 2.5.3 *Label in Name*.)

## 7. Estructura de la Home
1. **Header**: monograma + «ECP» + nav + botón WhatsApp.
2. **Hero**: titular de fuerza y acondicionamiento; subtítulo con quién/dónde/modalidad; CTA «Escríbeme por WhatsApp» + «Ver tarifas»; credenciales en línea.
3. **Para quién**: 4 perfiles que enlazan a su landing.
4. **Servicios** (índice): personal, preparación física, online y **baloncesto como especialidad** diferenciada.
5. **Método**: 4 bloques (valoración → planificación → entrenamiento → seguimiento), como estructura orientativa.
6. **Perfil ECP**: foto + ficha técnica (CAFYD, Laso Academy, Mirasur School, modalidad) → `/sobre-mi/`.
7. **Puente al baloncesto** → landing.
8. **Avance de tarifas** según el modo de visualización.
9. **Prueba social**: solo con testimonios reales y con permiso. Si no hay, **la sección no existe**.
10. **FAQ** (5–7).
11. **CTA final** sobre hormigón → WhatsApp.
12. **Footer**.

## 8. Assets existentes (`ecp-assets/`)
```
favicons/  apple-touch-icon.png, favicon-16x16.png, favicon-32x32.png, favicon-48x48.png,
           favicon.ico, favicon.svg, icon-192.png, icon-512.png, icon-maskable-512.png, site.webmanifest
logo/      ecp-logo.png, ecp-logo.webp, ecp-logo@2x.png
social/    ecp-hero-hormigon.jpg/.webp, og-image.jpg, og-image-negro.jpg
LEEME.md
```
- **Favicons** → raíz de `public/`; declararlos en `metadata.icons` y `metadata.manifest` del layout. Revisar `site.webmanifest`: `name: "ECP · Emilio Congosto Pérez"`, `short_name: "ECP"`, `theme_color` y `background_color` `#0E0E0E`, y rutas correctas.
- **Logo** → `public/brand/`. Es un **escudo metálico 3D muy detallado** (rojo + plata, mancuerna, flecha ascendente, «STRENGTH · CONDITIONING / ELITE | CALIBER | PERFORMANCE»):
  - Por debajo de unos 56 px de alto es ilegible. En el header se usa `favicon.svg` (monograma) + «ECP» en texto HTML.
  - Escudo completo solo en: hero o bloque de marca, footer, OG y 404.
  - Verificar que tiene fondo transparente; si no, no ponerlo sobre fondos claros.
  - **La UI no imita el logo** (sin biseles, metal ni brillos): web plana y editorial para que el escudo destaque.
  - Falta una versión plana monocroma: está en pendientes.
- **Hormigón** (`social/ecp-hero-hormigon`) → `public/textures/` optimizado. Material de marca en 1–2 zonas (hero y CTA final).
  - **Ojo: la imagen original lleva el escudo incrustado en el centro.** `npm run images` recorta las franjas laterales limpias (`hormigon-izq` de 310×730 y `hormigon-der` de 250×730). No dan resolución para cubrir el ancho completo a 1440 px, así que el fondo general del hero y del CTA final es negro con grano CSS (`--grain`). La franja va en el panel derecho del hero, detrás del escudo, y las dos franjas en los laterales del CTA final, fundidas a negro. La imagen completa con escudo (`hormigon-escudo`) solo se usa en la 404.
- **`favicon.svg` no se declara** en `metadata.icons`: es un PNG de 37 KB incrustado en un SVG, no un vector. Se usan `favicon.ico` + PNG + `apple-touch-icon`. Pendiente: vector y versión plana del logo.
- **OG** → `public/og/`. Por defecto `og-image-negro.jpg` (verificar 1200×630).

## 9. Conversión: WhatsApp
- `src/lib/whatsapp.js` → `waLink(context, extra)` devuelve `https://wa.me/34638068834?text=…` (URL-encoded) con un mensaje distinto por contexto:
  - `home`: «Hola Emilio, he visto tu web y me gustaría información sobre entrenamiento.»
  - `personal`: «Hola Emilio, me interesa el entrenamiento personal.»
  - `preparacion`: «Hola Emilio, me interesa la preparación física.»
  - `baloncesto`: «Hola Emilio, me interesa el entrenamiento personalizado de baloncesto.»
  - `online`: «Hola Emilio, me interesa el entrenamiento online.»
  - `tarifas` + plan: «Hola Emilio, me interesa el plan {nombre}.»
- `<WhatsAppButton context="…" />`: texto visible siempre, `target="_blank" rel="noopener"`, icono SVG propio. El botón es de marca: el verde de WhatsApp no se usa.
- Móvil: `StickyCta` con [WhatsApp] [Tarifas]. Aparece tras el hero, se oculta cuando el CTA final está visible, respeta `safe-area-inset-bottom` y no tapa contenido.
- `tel:+34638068834` en contacto y footer.
- Eventos de analítica (solo si hay analítica configurada): `click_whatsapp {context}`, `click_tarifas`, `click_tel`, `form_submit`. Sin datos personales. Helper `track()` en `lib/` que no hace nada si no hay proveedor.

## 10. Legal (España)
- RGPD + LOPDGDD + LSSI. Datos del responsable: marcador.
- Formulario (`ContactForm`, cliente): nombre, contacto, servicio, mensaje; checkbox de privacidad sin premarcar; casilla obligatoria «Soy mayor de 14 años o cuento con autorización de mi madre, padre o tutor legal»; honeypot + tiempo mínimo; estados de envío, éxito y error reales. Envía con `fetch` a `NEXT_PUBLIC_FORM_ENDPOINT` (Formspree, Web3Forms o similar). **Si la variable está vacía, el formulario no se renderiza** y solo queda WhatsApp. Nunca se simula un envío.
- Aviso de que, al escribir por WhatsApp, los datos los trata también Meta.
- Sin cookies no esenciales ni analítica hasta configurar consentimiento. Recomendado: analítica sin cookies.

## 11. Calidad, accesibilidad y rendimiento
- WCAG 2.2 AA: contrastes de la skill de diseño, foco visible, teclado completo, `prefers-reduced-motion`, objetivos de 44×44, labels reales, skip link, menú móvil con trampa de foco y `Esc`.
- Core Web Vitals objetivo (p75): LCP ≤ 2,5 s · INP ≤ 200 ms · CLS ≤ 0,1. Imagen LCP con `priority` / `fetchPriority="high"`, sin lazy.
- Probar en 360 / 390 / 768 / 1024 / 1440 px y con zoom al 200 %.
- **Guardas** (`scripts/check-content.mjs`, ejecutado en `npm run build` después de `next build`, sobre `out/`):
  - falla si hay `TODO_VALIDAR`, `lorem`, `example.com` u `orange` en páginas indexables;
  - falla si una página indexable no tiene title, description, canonical o un único H1;
  - falla con los términos prohibidos de la skill de contenido.
- Scripts de `package.json`: `dev`, `build` (`next build && node scripts/check-content.mjs`), `start` (sirve `out/` en local con `scripts/serve.mjs`, sin dependencias: `serve` se descartó porque arrastra una vulnerabilidad en `compression`), `lint` (`eslint .`), `format`, `test:e2e`, `images` (optimize-images), `check` (`lint` + `test:e2e`). Extra: `node scripts/screenshots.mjs [url]` genera capturas a 390 y 1440 px en `docs/capturas/`.
- Todo en verde antes de entregar.

## 12. Variables de entorno (`.env.example`)
```
NEXT_PUBLIC_SITE_URL=https://emiliocongostoperez.com   # confirmar TLD
NEXT_PUBLIC_INDEXING=false                              # true solo en el build de producción validado
NEXT_PUBLIC_PRICING_DISPLAY_MODE=consultar              # consultar | orientativo | publicado
NEXT_PUBLIC_FORM_ENDPOINT=                              # vacío = formulario oculto
NEXT_PUBLIC_ANALYTICS=                                  # vacío = sin analítica
```
`src/lib/env.js` las lee con valores por defecto seguros (sin indexar, modo consultar).

## 13. Flujo de trabajo
1. Auditoría del repo y los assets → informe breve.
2. Proponer en texto la arquitectura concreta, el sistema visual y 2–3 composiciones de hero. **Esperar el OK de David.**
3. Configuración: Next + JS, `jsconfig`, ESLint/Prettier, tokens, fuentes, layout, header/footer, botones, `lib/`.
4. `/dev/kit/` con todos los componentes base → capturas a 390 y 1440 px → revisión.
5. Home completa.
6. Landings (contenido propio cada una) → Sobre mí → Tarifas → Contacto → legales → 404.
7. SEO técnico: metadata, canonical, JSON-LD, sitemap, robots.
8. Guardas, tests, revisión visual con la checklist anti-IA y correcciones.
9. README: instalación, scripts, variables de entorno, cómo generar el build estático (`out/`), cómo editar textos y precios, y pendientes de Emilio.

## 14. Definición de terminado (MVP)
- Se reconoce como ECP: negro, blanco y rojo del escudo, cero naranja, sin aspecto de plantilla.
- Home centrada en fuerza y acondicionamiento; baloncesto como especialidad con su landing.
- Todos los CTAs llevan a WhatsApp (mensaje contextual) o a Tarifas.
- Contenido veraz: ningún dato inventado ni precio publicado sin validar.
- SEO por URL, sin canibalización, con HTML completo en `out/`.
- Código React/JS limpio, modular y con textos separados de la UI.
- Lint, tests, guardas y `next build` en verde.
