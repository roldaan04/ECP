/**
 * Tarifas: PROPUESTA ESTIMADA, pendiente de validar por Emilio.
 * Mientras validated sea false, la web solo puede mostrarlas en modo «consultar» u «orientativo»
 * y /tarifas/ queda en noindex.
 *
 * @typedef {{
 *   id: string, name: string, mode: 'presencial'|'online', price: number, unit: string,
 *   recommended: boolean, summary: string, includes: string[], perSession?: number
 * }} Plan
 */
export const pricing = {
  validated: false, // ⚠️ NO cambiar sin confirmación escrita de Emilio
  currency: 'EUR',
  /** @type {Plan[]} */
  plans: [
    {
      id: 'sesion',
      name: 'Sesión individual',
      mode: 'presencial',
      price: 40,
      unit: 'sesión',
      recommended: false,
      summary: 'Para empezar, probar o entrenar de forma puntual.',
      includes: [
        'Entrenamiento 1 a 1 en Madrid',
        'Trabajo adaptado a tu objetivo y nivel',
        'Sin compromiso de continuidad',
      ],
    },
    {
      id: 'bono4',
      name: 'Bono 4 sesiones',
      mode: 'presencial',
      price: 150,
      perSession: 37.5,
      unit: 'bono',
      recommended: true,
      summary: 'Un primer bloque de trabajo con continuidad.',
      includes: [
        '4 sesiones 1 a 1',
        'Planificación entre sesiones',
        'Precio por sesión más bajo que la sesión suelta',
      ],
    },
    {
      id: 'bono8',
      name: 'Bono 8 sesiones',
      mode: 'presencial',
      price: 280,
      perSession: 35,
      unit: 'bono',
      recommended: false,
      summary: 'Para entrenar con regularidad y ver progresión.',
      includes: [
        '8 sesiones 1 a 1',
        'Planificación y ajustes según tu evolución',
        'El precio por sesión más bajo',
      ],
    },
    {
      id: 'pareja',
      name: 'Sesión en pareja',
      mode: 'presencial',
      price: 25,
      unit: 'persona',
      recommended: false,
      summary: 'Entrenar acompañado, con el trabajo adaptado a cada uno.',
      includes: [
        '2 personas en la misma sesión',
        'Ejercicios y cargas ajustados a cada persona',
        'Precio por persona',
      ],
    },
    {
      id: 'basket',
      name: 'Baloncesto individual',
      mode: 'presencial',
      price: 40,
      unit: 'sesión',
      recommended: false,
      summary: 'Físico específico y pista en la misma sesión.',
      includes: [
        'Preparación física para baloncesto',
        'Trabajo técnico individual',
        'También en bono de 4 sesiones',
      ],
    },
    {
      id: 'online',
      name: 'Online · Planificación',
      mode: 'online',
      price: 60,
      unit: 'mes',
      recommended: false,
      summary: 'Tu plan de fuerza y condición física para entrenar por tu cuenta.',
      includes: ['Planificación mensual adaptada', 'Ejercicios explicados', 'Desde cualquier ciudad'],
    },
    {
      id: 'online-plus',
      name: 'Online · Planificación + seguimiento',
      mode: 'online',
      price: 90,
      unit: 'mes',
      recommended: true,
      summary: 'El plan más revisiones semanales para ajustar sobre la marcha.',
      includes: ['Planificación mensual adaptada', 'Seguimiento semanal', 'Ajustes según tu evolución'],
    },
  ],
};

/** @param {'presencial'|'online'} mode */
export const plansByMode = (mode) => pricing.plans.filter((p) => p.mode === mode);

/**
 * Formato de precio es-ES: 37,50 € · 150 €
 * @param {number} n
 */
export function formatPrice(n) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(n);
}
