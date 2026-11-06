/**
 * Marcadores de datos pendientes de validar por Emilio.
 * Nunca se renderiza un TODO_VALIDAR: los componentes ocultan el dato y la guarda de build falla si aparece.
 */
export const TODO_VALIDAR = 'TODO_VALIDAR';

/**
 * ¿El valor está pendiente o vacío?
 * @param {unknown} value
 * @returns {boolean}
 */
export function isPending(value) {
  if (value === null || value === undefined || value === '') return true;
  if (typeof value === 'string') return value.includes(TODO_VALIDAR);
  if (Array.isArray(value)) return value.length === 0;
  return false;
}

/** Objeto vacío, o nodo schema.org que solo conserva su @type (p. ej. alumniOf sin universidad). */
function isEmptyObject(v) {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return false;
  const keys = Object.keys(v).filter((k) => k !== '@type');
  return keys.length === 0;
}

/**
 * Elimina en profundidad claves pendientes, nulas o vacías (para JSON-LD y listas de datos).
 * @template T
 * @param {T} input
 * @returns {T}
 */
export function clean(input) {
  if (Array.isArray(input)) {
    return /** @type {T} */ (input.map(clean).filter((v) => !isPending(v) && !isEmptyObject(v)));
  }
  if (input && typeof input === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(input)) {
      const c = clean(v);
      if (!isPending(c) && !isEmptyObject(c)) out[k] = c;
    }
    return /** @type {T} */ (out);
  }
  return input;
}
