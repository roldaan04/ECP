import { site } from '@/config/site';

/**
 * Filas de la ficha técnica de Emilio a partir de los datos confirmados.
 * Las filas con valores pendientes las omite <TechSheet>.
 * @param {{ extended?: boolean }} [opts] Versión ampliada para /sobre-mi/.
 * @returns {{ label: string, value: string }[]}
 */
export function profileSheetRows({ extended = false } = {}) {
  const { education, career, area } = site;
  const rows = [
    { label: 'Formación', value: extended ? education.degree : 'Grado en CAFYD' },
    { label: 'Actualmente', value: `${career.laso.role} · ${career.laso.org}` },
    { label: 'Baloncesto', value: `Entrenador y jugador · ${career.mirasurCoach.org}` },
    { label: 'Modalidad', value: `Presencial (${area.city}) · Online` },
  ];
  if (extended) {
    rows.splice(1, 0, { label: 'Universidad', value: education.university });
    rows.splice(3, 0, { label: 'Categorías', value: career.laso.detail });
    rows.push({ label: 'Competición', value: career.mirasurPlayer.competition });
    rows.push({ label: 'Público', value: 'Todas las edades' });
  }
  return rows;
}
