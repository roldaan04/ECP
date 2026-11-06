# Assets ECP

## Estructura (copiar a `public/`)
- `logo/ecp-logo.png|webp|@2x.png` → logo recortado, fondo transparente (668×596; @2x es reescalado, no más nítido)
- `favicons/` → favicon.ico, favicon-16/32/48, favicon.svg, apple-touch-icon, icon-192/512, icon-maskable-512, site.webmanifest
- `social/og-image.jpg` (1200×630, con textura) y `og-image-negro.jpg` (logo sobre negro liso) para Open Graph / Twitter
- `social/ecp-hero-hormigon.jpg|webp` → imagen original 1300×730 optimizada (fondo para hero/banners)

## Código para `<head>`
```html
<link rel="icon" href="/favicons/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
<link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png">
<link rel="manifest" href="/favicons/site.webmanifest">
<meta name="theme-color" content="#101010">
<meta property="og:image" content="https://TU-DOMINIO/social/og-image.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://TU-DOMINIO/social/og-image.jpg">
```
Las URLs de og:image deben ser absolutas con el dominio real.

## Avisos
- El logo tiene texto en inglés ("Strength · Conditioning / Elite Caliber Performance") y su rojo/plata difiere del rojo provisional #C8102E de la skill de diseño.
- Origen: JPG de 1300 px, sin vector. Para impresión o más nitidez, pedir el original o vectorizarlo.
- Alt sugerido: "Logotipo de ECP, Emilio Congosto Pérez".
