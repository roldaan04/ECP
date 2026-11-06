---
name: diseno-ecp
description: Dirección de arte, sistema visual y UX/UI de la web de ECP (Emilio Congosto Pérez, fuerza y acondicionamiento). Consultar obligatoriamente antes de crear, modificar o revisar páginas, componentes, CSS, animaciones o responsive. Marca negro, blanco y rojo (del escudo), nunca naranja. Incluye la checklist anti-"web hecha con IA".
---

# ECP: Dirección de arte y sistema de diseño

## 0. Reglas que no se discuten
1. **ECP es rojo, negro y blanco.** Cero naranja. Cualquier `orange`, `#f47721`, `#d85f0d` o similar se sustituye por tokens ECP.
2. **No es una plantilla.** Si un componente podría estar en cualquier landing de fitness o SaaS generada por IA, se rediseña (ver §11).
3. **El escudo manda; la UI acompaña.** El logo es metálico, 3D y muy cargado. La web es **plana, editorial y precisa** para que el escudo respire. Nunca se imitan sus biseles, brillos ni metal en botones, tarjetas o títulos.
4. **Nada falso.** Ni fotos, ni números, ni testimonios, ni logos de entidades sin confirmar.

## 1. Concepto creativo: «Hoja de entrenamiento»
La web se diseña como el **cuaderno de trabajo de un preparador físico** cruzado con una **revista deportiva editorial**. Sale del mundo real de Emilio: planificación, series, cargas, progresión, pista y hormigón de la sala de fuerza.

Tres ideas visuales que lo sostienen y que lo diferencian de cualquier web genérica:

**A. La línea de progresión.** La flecha ascendente del logo se convierte en un recurso gráfico: una línea roja fina (2 px) que sube en diagonal escalonada (como una curva de carga progresiva). Aparece en el hero y reaparece como hilo conductor entre secciones: como separador, en el bloque de método o tras el CTA final. Es SVG y se dibuja una sola vez con `stroke-dashoffset` al entrar en viewport (desactivado con `prefers-reduced-motion`). **Es la firma visual de ECP.** No abusar: 3–4 apariciones en toda la Home.

**B. Notación de entrenamiento como sistema tipográfico.** Las microetiquetas y datos usan el lenguaje de una planificación:
- Numeración de secciones tipo bloque de sesión: `BLOQUE 01 · VALORACIÓN`, `BLOQUE 02 · PLAN`.
- Datos como prescripción: `4 × 6 · RPE 8`, `60′ · PRESENCIAL`, `SEMANA 1–4`. Se usan como **recurso decorativo-editorial en etiquetas, no como promesas** (no inventar programas concretos: son estéticos, y si parecen un plan real se acompañan de «ejemplo»).
- Cifras con `font-variant-numeric: tabular-nums`.

**C. Material: hormigón + pista.** La textura `ecp-hero-hormigon` (de los assets) es el material de marca. Se usa en **máximo dos zonas** (hero y CTA final), oscurecida y con un velo negro del 70–85 %. Las líneas finas de 1 px en gris oscuro evocan marcas de pista y de plataforma de halterofilia. Sirven de rejilla visible discreta en secciones oscuras.

Resultado buscado: sobrio, potente, con criterio técnico. Más cerca de una marca de material deportivo premium o de un medio deportivo editorial que de un gimnasio low-cost.

## 2. Referencia: cómo usarla
Referente de estructura y enfoque comercial: `https://victorsanchezmolina.com/`.
**Tomar:** secuencia comercial clara (hero → perfil → servicios → método → prueba social → contacto), protagonismo del profesional, CTAs directos, páginas de servicio separadas.
**Superar:** tipografía más editorial, mejor jerarquía, narrativa más clara, móvil más cuidado, menos bloques intercambiables, rendimiento superior.
**Nunca:** copiar maquetación, textos, fotos, colores exactos ni componentes. Antes de dar por buena una sección, pregúntate si alguien que conozca la referencia diría «es la misma web con otro logo». Si la respuesta es sí, rehazla.

## 3. Color (derivado del escudo, contraste verificado)
El rojo del logo es un rojo puro sin azul, con sombras granate profundas. No es un carmesí rosado.

```css
:root {
  /* Marca */
  --ecp-red:        #C8161D; /* principal: CTAs, acentos, línea de progresión */
  --ecp-red-hover:  #A51217; /* hover/pressed de botones */
  --ecp-red-deep:   #7A0E12; /* granate del escudo: fondos de acento puntuales */
  --ecp-red-bright: #E0282E; /* SOLO texto/acento rojo grande (≥24px) sobre negro */

  /* Neutros */
  --ecp-black:      #0E0E0E; /* fondo oscuro principal */
  --ecp-ink:        #161616; /* superficies oscuras elevadas */
  --ecp-graphite:   #232323; /* tarjetas/inputs en oscuro */
  --ecp-line-dark:  #2E2E2E; /* líneas 1px en oscuro */
  --ecp-steel:      #9A9A96; /* texto secundario en oscuro (6.8:1 sobre black) */
  --ecp-paper:      #F4F2EE; /* fondo claro: blanco roto cálido, "papel" */
  --ecp-white:      #FFFFFF;
  --ecp-line-light: #DAD7D0; /* líneas 1px en claro */
  --ecp-muted:      #6B6B68; /* texto secundario en claro (4.8:1 sobre paper) */

  /* Semánticos (independientes de marca) */
  --ecp-success: #1F7A3E;
  --ecp-error:   #B3261E;
  --ecp-focus:   #FFFFFF; /* anillo de foco en oscuro; en claro usar --ecp-black */
}
```

**Contrastes comprobados (WCAG 2.x):**
| Combinación | Ratio | Uso permitido |
|---|---|---|
| Blanco sobre `--ecp-red` | 5.85:1 | Botones y texto normal ✔ |
| Blanco sobre `--ecp-red-hover` | 7.78:1 | ✔ |
| `--ecp-red` sobre `--ecp-paper` | 5.23:1 | Texto rojo en claro ✔ |
| `--ecp-red` sobre `--ecp-black` | 3.30:1 | **Solo texto ≥24px o ≥19px bold**, líneas e iconos |
| `--ecp-red-bright` sobre `--ecp-black` | 4.15:1 | Solo texto grande |
| `--ecp-steel` sobre `--ecp-black` | 6.84:1 | Texto secundario ✔ |
| `--ecp-muted` sobre `--ecp-paper` | 4.78:1 | Texto secundario ✔ |

**Proporción:** negro y papel dominan (aprox. 85 %), rojo como acento (5–10 %). El rojo nunca es fondo de sección completa, salvo **una** banda en toda la web como máximo (p. ej. tira de credenciales) y en `--ecp-red-deep`. Prohibido: naranja, degradados rojo→naranja, neones, morados, «glow» rojo y un rojo distinto por sección. El estado nunca se indica solo con color.

**Ritmo de fondos en la Home** (alternancia con intención, no aleatoria):
negro (hero) → papel (para quién) → negro (servicios) → papel (método) → negro (perfil ECP) → hormigón (bloque baloncesto o CTA) → papel (FAQ) → negro (CTA final y footer).

## 4. Tipografía
- **Titulares: `Barlow Condensed` variable**, pesos 600–800, en mayúsculas para H1/H2 cortos y tracking `-0.01em` a `0.01em`. Conecta con la tipografía condensada y contundente del escudo.
- **Texto e interfaz: `Inter` variable**, pesos 400–600, `font-feature-settings: "ss01", "cv11"` opcional y `tabular-nums` en datos.
- Solo dos familias. Self-hosted, subset latin, `font-display: swap`, preload de los dos archivos variables.

**Escala (fluida con `clamp`):**
```css
--fs-display: clamp(3rem, 1.6rem + 7vw, 7.5rem);   /* H1 hero */
--fs-h1:      clamp(2.5rem, 1.6rem + 4.2vw, 5rem);  /* H1 landings */
--fs-h2:      clamp(2rem, 1.4rem + 2.8vw, 3.5rem);
--fs-h3:      clamp(1.375rem, 1.2rem + .8vw, 1.75rem);
--fs-lead:    clamp(1.125rem, 1.05rem + .4vw, 1.375rem);
--fs-body:    1.0625rem;  /* 17px */
--fs-small:   .9375rem;
--fs-label:   .8125rem;   /* microetiquetas uppercase, tracking .12em, Inter 600 */
--lh-tight: .92; --lh-heading: 1.0; --lh-body: 1.6;
```
**Gestos tipográficos de marca:**
- **Titular con palabra en rojo**: una sola palabra clave en rojo por titular, como máximo («FUERZA CON **MÉTODO**»). En oscuro, solo si el titular es grande (contraste 3.3:1).
- **Titular recortado/escalonado**: en el hero, el H1 en 2–3 líneas con sangría escalonada que sigue la línea de progresión.
- **Números editoriales gigantes** (`01`, `02`…) en Barlow Condensed 800 con contorno (`-webkit-text-stroke: 1px var(--ecp-line-dark)`, relleno transparente) como fondo de los pasos del método. Son decorativos y llevan `aria-hidden`.
- Párrafos con un máximo de 65 caracteres de ancho. Nunca párrafos en mayúsculas.

## 5. Layout, grid y espacio
- Contenedor `max-width: 1280px`; padding lateral `clamp(20px, 4vw, 64px)`.
- Grid de 12 columnas en desktop **con composiciones asimétricas** (7/5, 8/4, 5/7). Prohibido el «todo centrado» y las filas de 3 columnas iguales como patrón por defecto.
- Escala de espacio base 8: `4 8 12 16 24 32 48 64 96 128 160`. Secciones de 96–160 px en desktop y 64–88 px en móvil.
- **Rejilla visible**: en secciones oscuras se permiten líneas verticales de 1 px (`--ecp-line-dark`) alineadas a columnas, como guías de plano o pista. Sutil y nunca sobre texto.
- Mobile-first. Breakpoints: 480 / 768 / 1024 / 1280. Probar en 360, 390, 768, 1024, 1440 y con zoom al 200 %.
- Radios: **casi rectos**. `--radius-sm: 2px` (botones, inputs) y `--radius-md: 4px` (tarjetas). Nada de 16–24 px redondeados tipo app.
- Sombras: prácticamente ninguna. La profundidad se consigue con contraste de superficies y líneas de 1 px.

## 6. Componentes (cómo deben ser)

### Header
- Altura 72 px en desktop y 60 px en móvil. Fondo `--ecp-black`, que al hacer scroll pasa a `rgba(14,14,14,.92)` con `backdrop-filter: blur(8px)` (fallback opaco).
- Izquierda: `favicon.svg` (monograma) a 36 px + «ECP» en Barlow Condensed 700 + «Emilio Congosto Pérez» en `--fs-label` gris acero (oculto por debajo de 400 px). **No meter el escudo completo en el header**: es ilegible pequeño.
- Nav: Inicio · Servicios ▾ · ECP · Tarifas. Indicador activo: subrayado rojo de 2 px bajo el texto, no un fondo.
- Derecha: botón «WhatsApp» (variante primaria compacta).
- Menú móvil (componente cliente `MobileNav`, `'use client'`): panel a pantalla completa en negro, enlaces en Barlow Condensed 40 px numerados `01–05`, botones WhatsApp y Tarifas abajo, Instagram. Con trampa de foco, `Esc` para cerrar, `aria-expanded` y sin bloquear el zoom.

### Botones
| Variante | Estilo |
|---|---|
| Primario | Fondo `--ecp-red`, texto blanco, Inter 600, uppercase `--fs-label`, tracking .1em, padding 16×28, radio 2px. Hover `--ecp-red-hover` + flecha que se desplaza 4px |
| Secundario (oscuro) | Borde 1px blanco, texto blanco; hover: fondo blanco, texto negro |
| Secundario (claro) | Borde 1px negro; hover invertido |
| Enlace editorial | Texto + flecha `→` + subrayado que crece de 0 a 100 % |
Siempre con texto visible, mínimo 44 px de alto y foco con anillo de 2 px y offset de 3 px.
El botón de WhatsApp es un botón primario de marca con el icono de WhatsApp en blanco. **No usar el verde de WhatsApp** en el botón.

### Hero de la Home
Composición asimétrica 7/5 en desktop:
- Fondo: negro con textura de hormigón al 15–25 % de opacidad + velo.
- Columna izquierda: microetiqueta `PREPARADOR FÍSICO · ENTRENADOR PERSONAL · MADRID / ONLINE`; H1 display en 2–3 líneas escalonadas (propuesta: **«FUERZA. CONDICIÓN. MÉTODO.»** o **«ENTRENA CON CRITERIO.»**, a validar); lead de 1–2 frases; CTAs [Escríbeme por WhatsApp] [Ver tarifas]; fila de credenciales separadas por líneas verticales finas: `Graduado en CAFYD | Preparador físico en Laso Academy | Presencial y online`.
- Columna derecha: **foto real de Emilio** (vertical, recortada a sangre por la derecha y abajo). Mientras no haya foto: placeholder de desarrollo honesto (bloque grafito con el escudo grande al 90 % y el texto «FOTO PENDIENTE — retrato vertical en sala de fuerza»), visible solo en desarrollo. En producción sin foto se usa el **escudo grande** como elemento gráfico principal sobre el hormigón.
- La línea de progresión roja cruza el hero en diagonal escalonada, por detrás del texto.
- Altura `min(100svh, 920px)` y nunca menos de lo que ocupa el contenido. Sin carrusel ni vídeo autoplay.

### «Para quién» (perfiles)
Lista editorial, **no tarjetas**: 4 filas a ancho completo separadas por líneas de 1 px. Cada fila lleva número (`01`), perfil en H3 condensado («Quiero ganar fuerza y sentirme mejor»), una frase y una flecha → landing. En hover, la fila se desplaza 8 px, el número pasa a rojo y la línea inferior a rojo. En móvil es un bloque apilado.

### Servicios: «índice de servicios»
Evitar las 3 tarjetas con icono. Formato **índice de revista**: a la izquierda un H2 grande fijo (sticky en desktop) y a la derecha la lista de servicios, cada uno con nombre grande, descripción, chips de modalidad (`PRESENCIAL` `ONLINE`) y enlace. **Baloncesto** va como último ítem destacado: fondo `--ecp-red-deep`, etiqueta `ESPECIALIDAD` y foto (cuando exista).

### Método (4 bloques)
Secuencia horizontal en desktop y vertical en móvil, con la línea de progresión uniendo los pasos y subiendo un escalón en cada uno. Cada paso lleva número gigante con contorno, etiqueta `BLOQUE 0X`, título y 2 líneas. Debajo, el texto «Proceso orientativo: se adapta a cada persona» hasta validar el proceso real.

### Perfil ECP (Home) y página Sobre mí
- Home: foto + texto breve en composición 5/7 con «ficha técnica» al lado:
  ```
  FORMACIÓN      Grado en CAFYD
  ACTUALMENTE    Preparador físico · Laso Academy
  BALONCESTO     Entrenador y jugador · Mirasur School
  MODALIDAD      Presencial (Madrid) · Online
  ```
  Tabla con líneas de 1 px y etiquetas en `--fs-label`. Es el elemento de credibilidad principal.
- `/sobre-mi/`: misma ficha ampliada + línea temporal vertical (sin fechas inventadas: si no hay fechas, sin fechas) + filosofía en primera persona + CTA. «Estudiante de Fisioterapia» como dato formativo, nunca como servicio.

### Bloque y landing de baloncesto
Puede tener un subacento propio dentro de la marca: **líneas de pista** (arco de triple y zona, dibujadas en SVG de 1 px en `--ecp-line-dark`) como fondo gráfico. Sin balones 3D ni clip-art.

### Tarifas
Tabla tipo **hoja de planificación**: columnas por plan y filas con lo que incluye; selector Presencial / Online (componente cliente `PricingTable`, `role="tablist"`). Plan recomendado marcado con borde superior rojo de 3 px, no con badge chillón. Si `validated:false`, ver skill de contenido (modo consultar/orientativo). Cada plan lleva CTA a WhatsApp con el nombre del plan prellenado.

### FAQ
Acordeón con `<details>`/`<summary>` nativos (funciona sin JS) y estilo propio: líneas de 1 px, `+` que rota a `×` y H3 en Inter 600.

### CTA final
Sección a pantalla casi completa sobre hormigón: titular enorme («¿EMPEZAMOS?» / «TU PRÓXIMO BLOQUE EMPIEZA AQUÍ»), una frase, botón WhatsApp grande, teléfono visible y la línea de progresión que termina en flecha.

### Barra CTA móvil (sticky)
Altura 64 px y fondo negro con línea superior de 1 px. Dos botones: [WhatsApp] (primario) y [Tarifas] (secundario). Aparece tras el hero y se oculta cuando el CTA final o el footer están en viewport. `padding-bottom: env(safe-area-inset-bottom)`.

### Footer
Negro. Escudo a unos 120 px, columnas de navegación, contacto (teléfono, WhatsApp, Instagram), «Madrid · Presencial y online», legales y © año. Tipografía pequeña y ordenada.

### Formulario (secundario)
Inputs con fondo `--ecp-graphite` en oscuro o blanco en claro, borde de 1 px y radio de 2 px. Label siempre visible encima (no placeholder como label). Errores en texto + icono + `aria-describedby`. Estados de envío, éxito y error reales.

## 7. Fotografía
- Prioridad: fotos reales de Emilio con derechos. Planos necesarios (lista para el cliente):
  1. Retrato vertical en sala de fuerza (hero), con espacio negativo a la izquierda.
  2. Emilio guiando un ejercicio de fuerza (sentadilla, peso muerto o trineo).
  3. Trabajo de condición física: sprints, saltos, cambios de dirección.
  4. En pista de baloncesto: entrenamiento individual.
  5. Detalles: tiza, discos, cronómetro, cuaderno de planificación.
  6. Retrato horizontal neutro (Sobre mí y OG).
- Tratamiento: contraste firme, negros profundos, temperatura neutra o ligeramente fría y **un acento rojo natural** en la escena si existe. Edición homogénea en toda la web. Sin HDR ni filtros.
- Nada de stock de culturistas, gente sonriendo con mancuernas rosas ni imágenes generadas por IA de «Emilio». Sin menores identificables sin autorización.

## 8. Iconografía
Mínima. Set lineal propio en SVG con trazo de 1.5 px y terminaciones rectas: flecha, WhatsApp, teléfono, Instagram, ubicación, plus. **Sin** Font Awesome, emojis, iconos de mancuerna repetidos ni iconos dentro de círculos de color.

## 9. Movimiento
- Duraciones de 150–250 ms en UI y 400–700 ms en revelados. Easing `cubic-bezier(.2,.7,.2,1)`.
- Revelados: opacidad + `translateY(16px)`, una vez por elemento, con `IntersectionObserver`. Solo en titulares de sección y bloques clave, no en cada párrafo.
- Línea de progresión: dibujo con `stroke-dashoffset` al entrar en viewport.
- Hover: desplazamientos de 4–8 px y cambios de color de línea.
- `@media (prefers-reduced-motion: reduce)`: sin transformaciones ni dibujo; todo visible de inicio.
- Prohibido: parallax pesado, scroll-jacking, carruseles automáticos, contadores animados, cursores custom, vídeo autoplay con sonido.

## 10. Accesibilidad y rendimiento (diseño)
- WCAG 2.2 AA. Respetar la tabla de contraste del §3. Foco siempre visible. Skip link «Saltar al contenido».
- Texto nunca sobre caras ni sobre zonas de foto sin velo suficiente.
- Imágenes con `width`/`height` o `aspect-ratio`. Hero en `eager` + `fetchpriority="high"`; el resto en `lazy`.
- Textura de hormigón: WebP/AVIF de 1600 px como máximo, por debajo de 150 KB, como `background-image` con `image-set`.
- Sin texto SEO dentro de imágenes.

## 11. Checklist anti-«web hecha con IA» (obligatoria antes de entregar)
Si se marca alguna de estas casillas, se corrige:
- [ ] Hero centrado con titular + subtítulo + dos botones + blob o degradado de fondo.
- [ ] Fila de 3 tarjetas idénticas con icono en círculo, título y dos líneas.
- [ ] Degradados decorativos (púrpura, azul, rojo→naranja), glassmorphism, «glow».
- [ ] Bordes muy redondeados (≥12 px) y sombras difusas en todas las tarjetas.
- [ ] Contadores tipo «+500 clientes», «98 % satisfacción», estrellas sin fuente.
- [ ] Testimonios de «María G.» con avatar genérico.
- [ ] Copy cliché: «Transforma tu cuerpo», «Desbloquea tu potencial», «Lleva tu entrenamiento al siguiente nivel», «Tu mejor versión».
- [ ] Emojis en titulares o listas.
- [ ] Todas las secciones con la misma estructura y alineación centrada.
- [ ] Librería de UI reconocible (shadcn, Tailwind UI, DaisyUI) sin personalizar.
- [ ] Fotos de stock o generadas por IA.
- [ ] Iconos de mancuernas o rayos por todas partes.
- [ ] El rojo usado como relleno en todo, o un rojo distinto en cada sección.

Y estas deben cumplirse:
- [ ] La línea de progresión aparece 3–4 veces y es reconocible como firma.
- [ ] Hay al menos 3 composiciones asimétricas distintas en la Home.
- [ ] La ficha técnica de Emilio es protagonista de la credibilidad.
- [ ] Las microetiquetas usan notación de entrenamiento con coherencia.
- [ ] El escudo se ve grande al menos una vez y nunca pequeño e ilegible.
- [ ] Un usuario que conozca victorsanchezmolina.com no diría «es la misma web».

## 12. Implementación en React (Next.js + JavaScript)
- **Tokens**: todo color, tipografía, espacio, radio y duración sale de `src/styles/tokens.css` (custom properties del §3–§5). Ningún hex suelto en los `.module.css`.
- **CSS Modules** por componente (`Button.module.css`); `globals.css` solo para reset, base tipográfica, `:focus-visible`, `.sr-only`, contenedor y `prefers-reduced-motion`.
- **Fuentes** con `next/font/google`, expuestas como variables CSS (`--font-display`, `--font-body`) en `<html>`.
- **Variantes explícitas** con props y JSDoc, no con clases sueltas: `<Button variant="primary|outline-dark|outline-light|link" size="md|sm" />`, `<Section tone="dark|paper|concrete" />`, `<LandingHero variant="personal|preparacion|baloncesto|online" />`.
- **Componentes de firma**:
  - `ProgressLine` (server): SVG con props `steps`, `direction` y `animate`. La animación de trazo la activa `Reveal` añadiendo una clase.
  - `TechSheet` (server): ficha técnica a partir de un array `{ label, value }` que omite los valores pendientes.
  - `Label` (server): microetiqueta en notación de entrenamiento.
  - `Reveal` (`'use client'`): envoltorio mínimo con `useReveal` (IntersectionObserver, `once: true`); no hace nada si hay `prefers-reduced-motion`.
- **Solo son cliente**: `MobileNav`, `StickyCta`, `PricingTable`, `ContactForm`, `Reveal`. FAQ con `<details>` nativo (server).
- Imágenes con `<ResponsiveImage>` (`<picture>` AVIF/WebP + `width`/`height`). Para la imagen LCP: `priority`, sin lazy.
- Iconos como componentes SVG propios en `components/ui/Icon.jsx`; nada de librerías de iconos.

## 13. Flujo para Claude Code
1. Implementar `tokens.css`, `globals.css` y las fuentes.
2. Construir `src/app/dev/kit/page.js` (llama a `notFound()` en producción y queda fuera del sitemap) con los botones, la tipografía, las microetiquetas, la línea de progresión, la ficha técnica, el índice de servicios, el FAQ y la barra móvil. Revisarlo antes de montar páginas.
3. Home → landings (misma gramática visual, distinta composición de hero por landing) → resto.
4. Revisión visual con la checklist §11 en móvil y desktop. Hacer capturas con Playwright en 390 y 1440 px y revisarlas.
