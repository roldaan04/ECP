---
name: contenido-ecp
description: Voz, tono, copywriting y reglas de veracidad para todos los textos de la web de ECP (Emilio Congosto Pérez). Incluye qué se puede afirmar, términos prohibidos, microcopy de CTAs, textos base por sección y la propuesta de tarifas estimadas (pendiente de validar). Usar al escribir o revisar cualquier texto, FAQ, CTA, alt o precio.
---

# ECP: Contenido, voz y tarifas

## 1. Voz de marca
Emilio habla **en primera persona** y tutea al usuario. Es un profesional joven, cercano y exigente: sabe de lo que habla, pero no presume.

| Es | No es |
|---|---|
| Directo, concreto, técnico cuando aporta | Grandilocuente, motivacional vacío |
| Cercano («te escucho, vemos de dónde partes») | Coleguita o infantil |
| Exigente con criterio («cada carga tiene un porqué») | Agresivo («sin excusas», «no pain no gain») |
| Honesto con lo que ofrece | Prometedor de resultados |

Frases cortas. Verbos de acción. Un dato concreto vale más que tres adjetivos.

## 2. Qué se puede afirmar (fuente: cliente, nov 2026)
- Emilio Congosto Pérez, «ECP».
- Preparador físico y entrenador personal.
- Graduado en CAFYD.
- Preparador físico en Laso Academy (categorías cadete e infantil).
- Entrenador de baloncesto en Mirasur School.
- Jugador de baloncesto de Primera Autonómica Oro en Mirasur School (confirmar la redacción exacta de la competición).
- Estudia Fisioterapia, **solo como dato formativo en Sobre mí**.
- Presencial en todo Madrid y online para cualquier ciudad.
- Trabaja con todas las edades. Menores de 14: autorización de padres o tutores.
- Contacto: WhatsApp/teléfono +34 638 06 88 34 · Instagram @eemilioo45.

**Todo lo demás** (años de experiencia, número de clientes, instalaciones, horarios, duración de sesiones, método exacto, resultados) va con marcador `TODO_VALIDAR` en `src/config/site.js` y no se muestra en producción.

Las menciones a Laso Academy y Mirasur School describen la **experiencia de Emilio**, no un respaldo de esas entidades. No usar sus logos sin permiso escrito.

## 3. Términos prohibidos y alternativas
El script `scripts/check-content.mjs` falla si encuentra estos términos en páginas indexables (insensible a mayúsculas y acentos):

| Prohibido | Por qué | Alternativa |
|---|---|---|
| fisioterapeuta, fisioterapia (como servicio), tratamiento, terapia | Es estudiante, no está habilitado | «Graduado en CAFYD» |
| rehabilitación, readaptación de lesiones, recuperar lesiones | Actividad sanitaria | «Si vienes de una lesión, coordinamos el trabajo con tu fisioterapeuta o médico» |
| curar, eliminar el dolor, quitar el dolor | Promesa sanitaria | — |
| prevenir lesiones (como promesa), sin lesiones | No demostrable | «preparar el cuerpo para las exigencias de tu deporte» |
| garantizado, garantía de resultados, en X días/semanas | Promesa | «con constancia y un plan adaptado» |
| el mejor, nº 1, líder | Sin evidencia | — |
| transforma tu cuerpo, tu mejor versión, siguiente nivel, desbloquea tu potencial, sin excusas | Cliché de IA o fitness | Hablar de algo concreto |
| perder X kg | Promesa | «mejorar tu composición corporal» con prudencia |

Excepción: «Fisioterapia» puede aparecer en `/sobre-mi/` dentro de la frase «Actualmente estudio Fisioterapia». La guarda lo permite solo en esa ruta.

## 4. CTAs y microcopy
- Principal: **«Escríbeme por WhatsApp»**. Variante corta en header y barra móvil: «WhatsApp».
- Secundario: **«Ver tarifas»** / «Consultar tarifas».
- En landings: «Cuéntame tu caso por WhatsApp», «Quiero empezar», «Pregúntame por la preparación física».
- Tarifas por plan: «Me interesa este plan» → WhatsApp con el nombre del plan.
- Bajo los CTAs principales: «Respondo personalmente. Cuéntame tu objetivo y vemos cómo encajarlo.» (no prometer plazos de respuesta hasta que Emilio los confirme).
- Evitar «Contactar», «Enviar» o «Más info» como texto único de botón.

## 5. Textos base (borradores editables)

**Hero Home**
- Microetiqueta: `PREPARADOR FÍSICO · ENTRENADOR PERSONAL · MADRID / ONLINE`
- H1 (opciones): «Fuerza. Condición. Método.» / «Entrena con criterio.» / «Fuerza con método.»
- Lead: «Soy Emilio Congosto, graduado en CAFYD y preparador físico. Diseño tu entrenamiento de fuerza y condición física a partir de tu punto de partida, en Madrid o online.»

**Para quién**
1. «Quiero ganar fuerza y sentirme mejor»: empezar o retomar con un plan claro.
2. «Soy deportista y quiero rendir más»: preparación física adaptada a tu deporte y temporada.
3. «Juego al baloncesto»: físico y pista con alguien que también juega y entrena.
4. «No puedo entrenar presencialmente»: plan y seguimiento online.

**Método (orientativo hasta validar)**
- Bloque 01 · Valoración: «Hablamos de tu objetivo, tu historial y tu disponibilidad, y vemos cómo te mueves.»
- Bloque 02 · Planificación: «Diseño un plan con sentido: qué trabajamos, cuánto y por qué.»
- Bloque 03 · Entrenamiento: «Sesiones en las que cada ejercicio tiene una razón.»
- Bloque 04 · Seguimiento: «Revisamos, medimos lo que importa y ajustamos.»

**Bloque menores (landings de PF y baloncesto)**
«Entreno con deportistas de todas las edades. Para menores de 14 años es necesaria la autorización de madre, padre o tutor legal, y la familia está informada del plan en todo momento.»

**Lesiones (FAQ)**
«¿Puedo entrenar si tengo o he tenido una lesión? Yo no trato lesiones: eso corresponde a un fisioterapeuta o médico. Si ya tienes el alta o su visto bueno, adaptamos el entrenamiento y podemos coordinarnos con él.»

**FAQ comunes** (adaptar por landing, sin repetir textos idénticos entre páginas): ¿Cómo es la primera sesión? · ¿Dónde entrenamos? (`TODO_VALIDAR`) · ¿Necesito experiencia previa? · ¿Cuánto dura una sesión? (`TODO_VALIDAR`) · ¿Trabajas con menores? · ¿Cómo funciona el online? · ¿Cómo reservo? → WhatsApp.

**Alt de imágenes:** descriptivo y sin keyword stuffing. Ej.: «Emilio Congosto guiando una sentadilla con barra en sala de fuerza». Decorativas: `alt=""`.

## 6. Tarifas: PROPUESTA ESTIMADA (pendiente de validar por Emilio)
David pidió fijar precios estimados. Son una **propuesta orientativa basada en precios habituales de entrenamiento personal en Madrid para un profesional que está empezando a construir cartera**. No son datos del cliente. Se guardan en `src/config/pricing.js` con `validated: false`.

| Plan | Modalidad | Propuesta |
|---|---|---|
| Sesión individual | Presencial (60′) | 40 € |
| Bono 4 sesiones | Presencial | 150 € (37,50 €/sesión) |
| Bono 8 sesiones | Presencial | 280 € (35 €/sesión) |
| Sesión en pareja | Presencial | 25 €/persona |
| Baloncesto individual (físico + pista) | Presencial (60′) | 40 € · bono 4: 150 € |
| Plan online: planificación | Online, mensual | 60 €/mes |
| Plan online: planificación + seguimiento semanal | Online, mensual | 90 €/mes |
| Valoración inicial | — | **Decisión de Emilio**: incluida en la primera sesión, o llamada gratuita de 15′ |

Pendiente de Emilio: duración real, si el precio incluye desplazamiento o instalación, caducidad de bonos, política de cancelación, forma de pago y si emite factura con IVA (entrenamiento personal: verificar con su gestor el tipo aplicable).

**Modos de visualización** (`NEXT_PUBLIC_PRICING_DISPLAY_MODE`):
- `consultar` (por defecto mientras `validated:false`): se muestran planes y qué incluyen **sin importes** y con CTA «Consúltame el precio por WhatsApp». `/tarifas/` en `noindex`.
- `orientativo`: importes con «Desde» + nota «Tarifas orientativas. Te confirmo el precio según modalidad y desplazamiento.» Solo con el OK verbal de Emilio. Sigue en `noindex`.
- `publicado`: importes definitivos, `validated:true`, indexable y `Offer` en schema.

```js
// src/config/pricing.js
/** @typedef {{ id:string, name:string, mode:"presencial"|"online", price:number, unit:string, recommended:boolean }} Plan */
export const pricing = {
  validated: false, // ⚠️ NO cambiar sin confirmación escrita de Emilio
  currency: 'EUR',
  plans: [
    { id: 'sesion', name: 'Sesión individual', mode: 'presencial', price: 40, unit: 'sesión', recommended: false },
    { id: 'bono4', name: 'Bono 4 sesiones', mode: 'presencial', price: 150, unit: 'bono', recommended: true },
    { id: 'bono8', name: 'Bono 8 sesiones', mode: 'presencial', price: 280, unit: 'bono', recommended: false },
    { id: 'pareja', name: 'Sesión en pareja', mode: 'presencial', price: 25, unit: 'persona', recommended: false },
    { id: 'basket', name: 'Baloncesto individual', mode: 'presencial', price: 40, unit: 'sesión', recommended: false },
    { id: 'online', name: 'Online · Planificación', mode: 'online', price: 60, unit: 'mes', recommended: false },
    { id: 'online-plus', name: 'Online · Planificación + seguimiento', mode: 'online', price: 90, unit: 'mes', recommended: true },
  ],
};
```

## 7. Revisión antes de publicar un texto
- [ ] ¿Cada afirmación está en §2 o lleva marcador?
- [ ] ¿Contiene algún término de §3?
- [ ] ¿Se entiende quién, qué, dónde y cómo contactar en los primeros 2 párrafos?
- [ ] ¿El texto es distinto del de otras landings (no un sinónimo cambiado)?
- [ ] ¿Suena a Emilio (primera persona, concreto) y no a plantilla?
- [ ] ¿Los precios respetan el modo de visualización?
