# ECP · Emilio Congosto Pérez: web

Web de Emilio Congosto Pérez (ECP), preparador físico y entrenador personal en Madrid, presencial y online.
Next.js 16 (App Router) + React 19, en JavaScript, exportada como **HTML estático** en `out/`.

> El despliegue no forma parte de este repo (lo gestiona David). Este README cubre el desarrollo y el build local.

## Requisitos

- Node.js ≥ 20.9 (probado con Node 24)
- npm

## Instalación

```bash
npm install
npx playwright install chromium   # solo para los tests e2e y las capturas
cp .env.example .env.local        # y ajusta las variables
```

## Scripts

| Script                               | Qué hace                                                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `npm run dev`                        | Servidor de desarrollo en http://localhost:3000. El kit de componentes está en `/dev/kit/`                               |
| `npm run build`                      | `next build` (export estático en `out/`) y después las guardas de contenido (`scripts/check-content.mjs`)                |
| `npm start`                          | Sirve `out/` en http://localhost:3000 (`scripts/serve.mjs`, sin dependencias)                                            |
| `npm run lint`                       | ESLint (flat config, Next + jsx-a11y)                                                                                    |
| `npm run format`                     | Prettier                                                                                                                 |
| `npm run test:e2e`                   | Playwright: rutas, accesibilidad (axe, WCAG 2.2 AA), SEO y WhatsApp, a 1440 y 390 px. **Requiere `npm run build` antes** |
| `npm run check`                      | `lint` + `test:e2e`                                                                                                      |
| `npm run images`                     | Genera texturas, variantes del escudo y fotos optimizadas (AVIF/WebP) desde `ecp-assets/`                                |
| `node scripts/screenshots.mjs [url]` | Capturas a 390 y 1440 px en `docs/capturas/` (con el sitio sirviéndose)                                                  |

## Variables de entorno

| Variable                           | Valores                                        | Por defecto                                                               |
| ---------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`             | URL pública (TLD por confirmar)                | `https://emiliocongostoperez.com`                                         |
| `NEXT_PUBLIC_INDEXING`             | `true` solo en el build de producción validado | `false` → `noindex,nofollow` en todo, robots `Disallow: /`, sitemap vacío |
| `NEXT_PUBLIC_PRICING_DISPLAY_MODE` | `consultar` · `orientativo` · `publicado`      | `consultar` (sin importes)                                                |
| `NEXT_PUBLIC_FORM_ENDPOINT`        | URL https de Formspree, Web3Forms…             | vacío → el formulario no se muestra                                       |
| `NEXT_PUBLIC_ANALYTICS`            | `plausible` (sin cookies)                      | vacío → sin analítica                                                     |

`publicado` solo funciona si `pricing.validated` es `true` en `src/config/pricing.js`; si no, se degrada a `orientativo`.

## Build estático

```bash
NEXT_PUBLIC_INDEXING=true NEXT_PUBLIC_SITE_URL=https://emiliocongostoperez.com npm run build
```

El resultado queda en `out/`: un `index.html` por ruta (con `trailingSlash`), `404.html`, `sitemap.xml`, `robots.txt`, favicons y assets. Se puede servir desde cualquier hosting estático.

El build **falla** si alguna página pública contiene `TODO_VALIDAR`, `lorem`, `example.com`, naranja o términos prohibidos (p. ej. «fisioterapeuta» como servicio, «garantizado»), o si le falta title, description, canonical o tiene más de un H1.

## Cómo editar

- **Textos**: `src/content/` (`home.js`, `about.js`, `contact.js`, `pricing.js`, `legal.js`, `notFound.js`, `landings/*.js`). Los componentes no llevan texto incrustado. Antes de cambiar copy, revisa `.claude/skills/contenido-ecp/SKILL.md`.
- **Datos de Emilio** (teléfono, trayectoria, pendientes, fotos, testimonios, datos legales): `src/config/site.js`. Lo que vale `TODO_VALIDAR` no se muestra.
- **Precios**: `src/config/pricing.js`. Para publicarlos: actualizar importes, poner `validated: true` (solo con confirmación escrita de Emilio) y construir con `NEXT_PUBLIC_PRICING_DISPLAY_MODE=publicado`. Con eso, `/tarifas/` pasa a indexable, entra en el sitemap y los `Service` del schema llevan `Offer`.
- **Menú y rutas**: `src/config/navigation.js`.
- **Fotos reales**: déjalas en `ecp-assets/fotos/` (`hero.jpg`, `perfil.jpg`, `baloncesto.jpg`), ejecuta `npm run images` y activa cada una en `site.photos` con su `alt`. El hero pasa del escudo a la foto sin tocar el layout.
- **Testimonios**: `site.testimonials` (solo reales y con permiso). Si la lista está vacía, la sección no existe.
- **Diseño**: tokens en `src/styles/tokens.css`; CSS Modules junto a cada componente. Dirección de arte en `.claude/skills/diseno-ecp/SKILL.md`.

## Estructura

```
src/app/          rutas (solo metadata + composición)
src/components/   layout/, ui/, sections/, pricing/, forms/, seo/
src/content/      textos
src/config/       site, navigation, pricing, images.json (generado)
src/lib/          env, seo, schema, whatsapp, pending, track, profile
src/hooks/        useReveal, useInView, useMediaQuery
scripts/          optimize-images, check-content, serve, screenshots
tests/e2e/        Playwright
```

## Pendientes de Emilio

Ver [`docs/PENDIENTES-EMILIO.md`](docs/PENDIENTES-EMILIO.md): dominio, fotos, precios, lugar de las sesiones, datos legales, email, federación, universidad, método real, online, alcance técnico de baloncesto, vector del logo y testimonios.
