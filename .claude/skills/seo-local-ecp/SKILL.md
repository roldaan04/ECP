---
name: seo-local-ecp
description: SEO técnico, on-page y local (Madrid + online) de la web de ECP. Usar al crear o modificar rutas, contenido de landings, titles, descriptions, headings, schema JSON-LD, enlazado interno, sitemap, robots o al auditar antes de publicar.
---

# ECP: SEO local (Madrid) y online

## 0. Principios no negociables
- No garantizar posiciones ni tráfico.
- **Una intención por URL.** Sin canibalización: la Home no compite con las landings.
- Sin keyword stuffing, sin páginas puerta por barrio o ciudad, sin texto duplicado cambiando una palabra.
- Contenido principal y metadatos en el **HTML estático** generado en build por Next.js con `output: 'export'` (verificable con «Ver código fuente»).
- Schema solo con datos reales. **Sin `LocalBusiness` mientras no haya dirección abierta al público** (no la hay: es un servicio a domicilio, en instalaciones y online).
- Nada de reseñas o `aggregateRating` sin reseñas reales verificables.

## 1. Estrategia en una frase
La **Home** posiciona la marca y la temática paraguas (fuerza y acondicionamiento en Madrid). Cada **landing** captura una intención transaccional concreta. **Baloncesto** es un nicho con menos competencia donde Emilio tiene autoridad real, y suele ser la vía más rápida de conseguir tráfico cualificado.

## 2. Mapa de keywords e intención
| URL | Keyword principal | Secundarias (uso natural) | Intención |
|---|---|---|---|
| `/` | Emilio Congosto Pérez / ECP | preparador físico y entrenador personal en Madrid, entrenamiento de fuerza y acondicionamiento físico Madrid | Marca + paraguas |
| `/entrenador-personal-madrid/` | entrenador personal Madrid | entrenamiento personal Madrid, entrenador personal a domicilio Madrid*, entrenamiento de fuerza personalizado, ganar fuerza | Contratar EP |
| `/preparador-fisico-madrid/` | preparador físico Madrid | preparación física deportistas Madrid, preparador físico personal, acondicionamiento físico deportivo, fuerza para deportistas | Contratar PF |
| `/entrenador-baloncesto-madrid/` | entrenador de baloncesto personalizado Madrid | entrenamiento individual baloncesto Madrid, clases particulares de baloncesto Madrid, preparación física para baloncesto, tecnificación individual baloncesto | Contratar entrenamiento de basket |
| `/entrenamiento-online/` | entrenador personal online | preparador físico online, planificación de entrenamiento online, entrenamiento de fuerza online | Contratar online (cualquier ciudad) |
| `/sobre-mi/` | Emilio Congosto Pérez preparador físico | CAFYD, Laso Academy, Mirasur School | Confianza / marca |
| `/tarifas/` | precio entrenador personal Madrid | tarifas preparador físico, bonos entrenamiento personal | Comparar precio (**indexar solo con precios validados**) |
| `/contacto/` | contacto Emilio Congosto | — | Contacto |

\* «A domicilio» solo si Emilio confirma que se desplaza a domicilios. «Todo Madrid» está confirmado; el tipo de instalación (domicilio, parque, gimnasio, pista) no lo está todavía.

## 3. Especificación por página

### `/` Home
- **title:** `Preparador físico y entrenador personal en Madrid | ECP · Emilio Congosto` (≤ 60 caracteres aprox.; ajustar si se corta)
- **description:** `Entrenamiento de fuerza y acondicionamiento físico con Emilio Congosto Pérez, graduado en CAFYD. Presencial en Madrid y online. Escríbeme por WhatsApp.`
- **H1:** de marca o propuesta («Fuerza y condición física con método»), y en el lead, de forma natural: «preparador físico y entrenador personal en Madrid».
- Enlaza a las 4 landings con anchors descriptivos variados (no siempre la keyword exacta).

### `/entrenador-personal-madrid/`
- **title:** `Entrenador personal en Madrid | Emilio Congosto Pérez`
- **description:** `Entrenamiento personal adaptado a tus objetivos: fuerza, condición física y hábitos. Sesiones presenciales en Madrid u online con un graduado en CAFYD.`
- **H1:** `Entrenador personal en Madrid`
- **Bloques:** para quién (adultos, principiantes, vuelta al entrenamiento, personas que quieren ganar fuerza); qué se trabaja; cómo es una sesión (orientativo); presencial en Madrid / online; por qué Emilio (CAFYD, experiencia); tarifas (enlace); FAQ (5); CTA WhatsApp.
- **Diferencia con preparador físico:** aquí el público es general y los objetivos son de salud, fuerza y bienestar. No hablar de rendimiento competitivo.
- Contenido único mínimo: unas 700–1000 palabras útiles.

### `/preparador-fisico-madrid/`
- **title:** `Preparador físico en Madrid | Emilio Congosto Pérez`
- **description:** `Preparación física individual para deportistas: fuerza, potencia, velocidad y condición física adaptadas a tu deporte. Presencial en Madrid u online.`
- **H1:** `Preparador físico en Madrid`
- **Bloques:** deportistas de cualquier disciplina y nivel (amateur, federado, en formación); capacidades que se trabajan; planificación según temporada y calendario; experiencia en categorías de formación (Laso Academy); jóvenes deportistas (autorización para menores de 14); enlace a la landing de baloncesto como especialidad; FAQ; CTA.
- Prohibido: «rehabilitación», «readaptación», «fisioterapia», «prevenir lesiones» como promesa. Permitido de forma prudente: «trabajo de fuerza que ayuda a preparar el cuerpo para las exigencias del deporte».

### `/entrenador-baloncesto-madrid/`
- **title:** `Entrenador de baloncesto personalizado en Madrid | ECP`
- **description:** `Entrenamiento individual de baloncesto en Madrid: técnica, fundamentos y preparación física específica con Emilio Congosto, jugador, entrenador y preparador físico.`
- **H1:** `Entrenador de baloncesto personalizado en Madrid`
- **Ángulo único:** combina **acondicionamiento físico específico de baloncesto** (salto, cambios de dirección, fuerza, resistencia intermitente) **con entrenamiento técnico individual** (fundamentos, tiro, bote, toma de decisiones: confirmar alcance con Emilio). Lo hace alguien que es jugador (Primera Autonómica Oro), entrenador (Mirasur School) y preparador físico (Laso Academy).
- **Bloques:** dos pilares (físico + pista); para quién (jugadores en formación, familias, amateurs, jugadores federados); cómo es una sesión; experiencia en baloncesto; menores y autorización; dónde se entrena (pendiente: pista o instalación); FAQ (edad mínima, nivel, ¿necesito pista?, ¿grupos pequeños?, ¿online?); CTA.
- **Es la landing que más trayectoria puede mostrar:** aquí sí van Mirasur y Laso con detalle.

### `/entrenamiento-online/`
- **title:** `Entrenador personal online | Emilio Congosto Pérez`
- **description:** `Planificación de fuerza y condición física online con seguimiento, para entrenar desde cualquier ciudad con un graduado en CAFYD.`
- **H1:** `Entrenamiento online con seguimiento`
- Cubre «cualquier ciudad» **sin crear páginas por ciudad**. Explicar cómo funciona (valoración, plan, seguimiento y canal) solo cuando Emilio lo confirme; mientras tanto, marcadores. Si no hay contenido suficiente al lanzar, se deja `noindex` y se publica después.

### `/sobre-mi/`
- **title:** `Sobre mí | Emilio Congosto Pérez, preparador físico`
- **H1:** `Emilio Congosto Pérez` (etiqueta de nav «ECP»).
- Formación, trayectoria (Mirasur School: entrenador y jugador; Laso Academy: preparador físico), filosofía, enlaces a servicios. Schema `Person` + `ProfilePage`.

### `/tarifas/`
- `noindex, follow` hasta `pricing.validated === true`. Después: title `Tarifas de entrenamiento personal en Madrid | ECP`.
- Con precios validados, añadir `Offer` dentro de cada `Service` (precio, `priceCurrency: EUR`).

### `/contacto/`
- **title:** `Contacto | Emilio Congosto Pérez · WhatsApp y teléfono`
- Teléfono, WhatsApp, Instagram y zona de servicio («Madrid y online»). Sin dirección.

## 4. Enlazado interno
- Header: todas las landings (desplegable Servicios). Footer: todas las indexables.
- Cada landing enlaza a: las otras landings relevantes, `/sobre-mi/`, `/tarifas/` y `/contacto/`.
  - Personal ↔ Online ↔ Preparación física.
  - Preparación física ↔ Baloncesto (en los dos sentidos, contexto «especialidad»).
- Breadcrumbs visibles en páginas internas (`Inicio › Servicios › Preparador físico en Madrid`) + `BreadcrumbList`.
- Anchors descriptivos y variados. Nunca «haz clic aquí».

## 5. SEO técnico (Next.js App Router, export estático)
- `next.config.mjs`: `output: 'export'`, `trailingSlash: true`. URLs en minúsculas con guiones.
- **Metadatos** con la API de Next, nunca con librerías de `<head>` en cliente. Helper `src/lib/seo.js`:
  ```js
  /** @param {{ title:string, description:string, path:string, noindex?:boolean, ogImage?:string }} p */
  export function buildMetadata({ title, description, path, noindex = false, ogImage = '/og/og-image-negro.jpg' }) {
    const indexable = env.indexing && !noindex;
    return {
      title, description,
      alternates: { canonical: path },            // absoluto gracias a metadataBase
      robots: indexable ? { index: true, follow: true } : { index: false, follow: env.indexing },
      openGraph: { type: 'website', locale: 'es_ES', siteName: 'ECP · Emilio Congosto Pérez',
                   url: path, title, description, images: [{ url: ogImage, width: 1200, height: 630 }] },
      twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
    };
  }
  ```
  En `app/layout.js`: `metadataBase: new URL(env.siteUrl)`, `icons`, `manifest`, `themeColor` (vía `export const viewport`), y `title.template` solo si no rompe los titles definidos.
- Si `NEXT_PUBLIC_INDEXING !== 'true'` (staging o local): `noindex,nofollow` en todas las páginas.
- `<html lang="es">`, un único H1 por página, jerarquía H2/H3 sin saltos.
- **`app/sitemap.js`**: lista generada desde `config/navigation.js` + un flag `indexable` por ruta; excluye `/dev/`, legales en borrador y `/tarifas/` mientras `pricing.validated === false`. Con `export const dynamic = 'force-static'`.
- **`app/robots.js`**: con indexación, `allow: '/'` + `sitemap`; sin indexación, `disallow: '/'`. También `force-static`.
- **404**: `app/not-found.js` con enlaces a Home, servicios y WhatsApp. El export genera `404.html`.
- **Todo el contenido en Server Components**: los textos de las landings no pueden depender de un componente cliente para aparecer en el HTML.
- Enlaces internos con `next/link` y siempre con barra final.
- Rendimiento: ver CLAUDE.md §11. La imagen LCP no se carga en lazy.

## 6. Datos estructurados (JSON-LD), helper `src/lib/schema.js`
Grafo único por página con `@id` estables:

```jsonc
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "{SITE}/#emilio",
      "name": "Emilio Congosto Pérez",
      "alternateName": "ECP",
      "jobTitle": ["Preparador físico", "Entrenador personal"],
      "url": "{SITE}/",
      "image": "{SITE}/og/og-image-negro.jpg",
      "telephone": "+34638068834",
      "sameAs": ["https://www.instagram.com/eemilioo45/"],
      "alumniOf": { "@type": "CollegeOrUniversity", "name": "TODO_VALIDAR universidad CAFYD" }, // omitir hasta saber la universidad
      "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Grado en Ciencias de la Actividad Física y del Deporte" },
      "knowsAbout": ["Preparación física", "Entrenamiento de fuerza", "Acondicionamiento físico", "Baloncesto"],
      "worksFor": null // omitir: Laso Academy no es su empresa
    },
    {
      "@type": "WebSite",
      "@id": "{SITE}/#website",
      "url": "{SITE}/",
      "name": "ECP · Emilio Congosto Pérez",
      "inLanguage": "es-ES",
      "publisher": { "@id": "{SITE}/#emilio" }
    },
    {
      "@type": "Service",
      "@id": "{SITE}/preparador-fisico-madrid/#service",
      "serviceType": "Preparación física",
      "provider": { "@id": "{SITE}/#emilio" },
      "areaServed": [{ "@type": "City", "name": "Madrid" }],
      "availableChannel": { "@type": "ServiceChannel", "serviceUrl": "https://wa.me/34638068834" }
      // "offers": solo con precios validados
    }
  ]
}
```
- Home: `Person` + `WebSite`. Landings: `Service` (de esa landing) + `BreadcrumbList` + referencia a `Person`. Online: `areaServed` = `{"@type":"Country","name":"España"}`. Sobre mí: `ProfilePage` con `mainEntity` → Person.
- **No** usar `LocalBusiness` ni `address`. **No** `FAQPage` con la expectativa de rich results (Google ya no los muestra para la mayoría de webs). El FAQ va en HTML.
- Eliminar las claves con `TODO_VALIDAR` o `null` antes de serializar (`clean()` de `lib/pending.js`).
- Render: componente server `<JsonLd data={graph(...)} />` → `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />`.
- Validar con https://search.google.com/test/rich-results y https://validator.schema.org.

## 7. SEO local sin dirección
- **Perfil de Empresa en Google** como *empresa de servicios a domicilio / área de servicio*, con la dirección **oculta** y el área de servicio «Madrid». Solo si Emilio cumple los requisitos de Google. Nunca una dirección virtual.
- NAP coherente: mismo nombre («Emilio Congosto Pérez · ECP»), teléfono (+34 638 06 88 34) y web en Google, Instagram (bio con enlace a la web) y directorios.
- Menciones legítimas: clubes o academias donde haya trabajado (solo con permiso), federación, directorios deportivos serios. Sin compra de enlaces.
- Reseñas: animar a clientes reales a dejar reseñas en el Perfil de Empresa. Nunca reseñas propias ni incentivadas.

## 8. Contenido futuro (fase 2)
`/blog/` solo con artículos firmados por Emilio con valor práctico real, uno o dos al mes. Ideas alineadas con las landings: «Fuerza para jugadores de baloncesto: por dónde empezar», «Cuántos días entrenar fuerza si empiezas», «Preparación física en categorías de formación: qué tener en cuenta». Sin contenido masivo generado.

## 9. Medición
Con dominio y consentimiento resueltos: Google Search Console (propiedad de dominio, envío del sitemap), analítica sin cookies preferente y eventos `click_whatsapp{context}`, `click_tarifas`, `click_tel` y `form_submit`. KPI: clics en WhatsApp por landing, impresiones y CTR por URL, y consultas por keyword de baloncesto frente a las genéricas.

## 10. Auditoría antes de publicar
- [ ] TLD y dominio definitivos en `NEXT_PUBLIC_SITE_URL`; `NEXT_PUBLIC_INDEXING=true` solo en el build de producción
- [ ] Una intención por URL; sin títulos ni H1 duplicados
- [ ] Titles ≤ ~60 y descriptions ≤ ~155 caracteres, únicos
- [ ] Canonical absoluto con barra final en todas las páginas
- [ ] HTML con el contenido completo en `out/**/index.html` (sin depender de JS)
- [ ] JSON-LD válido, sin claves vacías ni `TODO_VALIDAR`
- [ ] Sitemap solo con indexables; robots correcto; `404.html` generado
- [ ] `/tarifas/` en noindex si no hay precios validados
- [ ] Sin afirmaciones sanitarias ni promesas (ver skill de contenido)
- [ ] Imágenes con alt, OG correcta (comprobar con un depurador OG)
- [ ] Search Console verificado y sitemap enviado

## Fuentes oficiales
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- https://support.google.com/business/answer/9157481 (empresas de área de servicio)
