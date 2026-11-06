# ECP: Lo que necesitamos de Emilio para publicar

Ya confirmado: marca, dominio (falta el TLD), zona y modalidad, oferta, edades, teléfono/WhatsApp, Instagram, trayectoria, objetivo de conversión, nombre oficial «Laso Academy» y competición «Primera Autonómica Oro (Madrid)».

Cada dato pendiente está en `src/config/site.js` como `TODO_VALIDAR`. La web lo oculta hasta que se rellene.

## Imprescindible para lanzar
- [ ] **Dominio**: ¿.com o .es? (→ `NEXT_PUBLIC_SITE_URL`)
- [ ] **Fotos reales** con derechos (mínimo 3): retrato vertical en sala de fuerza (`hero.jpg`), retrato para el perfil (`perfil.jpg`), en pista de baloncesto (`baloncesto.jpg`). Sin menores identificables. Se dejan en `ecp-assets/fotos/` y se procesan con `npm run images` (ver `ecp-assets/fotos/LEEME.md`). El hero ya está preparado para pasar de escudo a foto sin tocar el diseño.
- [ ] **Precios**: validar o corregir la propuesta (sesión 40 €, bono 4 = 150 €, bono 8 = 280 €, pareja 25 €/persona, baloncesto 40 €, online 60 / 90 €/mes). Además: duración de sesión, si incluye desplazamiento, caducidad de bonos, cancelación, forma de pago y si emite factura con IVA. Mientras tanto la web muestra los planes sin importes («Precio por WhatsApp») y `/tarifas/` va en noindex.
- [ ] **Dónde se entrena** en presencial: domicilio, gimnasio, parque, pista… ¿Se desplaza a cualquier zona de Madrid? (Hoy la web dice «Presencial en todo Madrid» y «lo concretamos según tu zona».)
- [ ] **Datos legales**: nombre completo, NIF, domicilio y email del responsable (aviso legal y privacidad). Las páginas legales están en borrador y en noindex hasta tenerlos. Conviene que las revise un asesor.
- [ ] **Email profesional** (aunque el contacto principal sea WhatsApp).

## Muy recomendable
- [x] ~~Redacción exacta de «Primera Autonómica Oro» y nombre oficial de «Laso Academy»~~ → «Primera Autonómica Oro (Madrid)» y «Laso Academy».
- [ ] **Federación** de la competición (para citarla con su nombre completo).
- [ ] Universidad del grado en CAFYD (y año, si quiere). Se mostrará en la ficha técnica y en el schema.
- [ ] Otras titulaciones o cursos (NSCA, entrenador de baloncesto nivel X…).
- [ ] Cómo es su **primera valoración** y su método real. Hoy el bloque «Método» y las «sesiones tipo» llevan la nota «orientativo».
- [ ] Cómo funciona el **online**: app, frecuencia de revisión, canal. Hoy la web dice «te explico la herramienta y el canal antes de empezar».
- [ ] **Baloncesto**: confirmar que la parte técnica incluye fundamentos, trabajo de pies, bote, tiro y lectura de juego (es lo que dice la landing). ¿Necesita pista el cliente? ¿Acepta dos jugadores a la vez?
- [ ] **Vector y versión plana monocroma del logo** (blanco y negro). `favicon.svg` es un PNG incrustado de 37 KB y no se usa. Con el vector se podrá poner un monograma en el header y en el favicon.
- [ ] Plazo de respuesta por WhatsApp (si quiere comprometer uno).

## Más adelante
- [ ] Testimonios reales con permiso escrito (nombre y texto) → `site.testimonials`. Sin ellos, la sección no aparece.
- [ ] ¿Quiere analítica? (recomendado: Plausible, sin cookies ni banner → `NEXT_PUBLIC_ANALYTICS=plausible`).
- [ ] ¿Quiere formulario además de WhatsApp? Si es así, ¿a qué email llegan las solicitudes? (→ crear endpoint en Formspree/Web3Forms y ponerlo en `NEXT_PUBLIC_FORM_ENDPOINT`).
- [ ] Perfil de Empresa en Google (área de servicio Madrid, sin dirección pública).
