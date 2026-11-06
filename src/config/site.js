/**
 * Datos del sitio. Solo datos CONFIRMADOS por el cliente; todo lo demás va como TODO_VALIDAR
 * y los componentes lo ocultan (ver src/lib/pending.js y docs/PENDIENTES-EMILIO.md).
 */
import { TODO_VALIDAR } from '@/lib/pending';

export const site = {
  name: 'Emilio Congosto Pérez',
  shortName: 'Emilio Congosto',
  brand: 'ECP',
  brandFull: 'ECP · Emilio Congosto Pérez',
  jobTitles: ['Preparador físico', 'Entrenador personal'],
  locale: 'es-ES',

  phone: { display: '+34 638 06 88 34', e164: '+34638068834', href: 'tel:+34638068834' },
  whatsapp: { number: '34638068834', display: '638 06 88 34' },
  instagram: { handle: '@eemilioo45', url: 'https://www.instagram.com/eemilioo45/' },
  email: TODO_VALIDAR,

  area: {
    city: 'Madrid',
    inPerson: 'Presencial en todo Madrid',
    online: 'Online desde cualquier ciudad',
    /** Dónde se entrena en presencial (domicilio, gimnasio, parque, pista…) */
    venue: TODO_VALIDAR,
  },

  education: {
    degree: 'Grado en Ciencias de la Actividad Física y del Deporte (CAFYD)',
    degreeShort: 'Graduado en CAFYD',
    university: TODO_VALIDAR,
    year: TODO_VALIDAR,
    /** Dato formativo: solo en /sobre-mi/. Nunca como servicio. */
    currentStudies: 'Fisioterapia',
    /** Otras titulaciones o cursos (NSCA, entrenador de baloncesto…) */
    otherCredentials: [],
  },

  career: {
    laso: { org: 'Laso Academy', role: 'Preparador físico', detail: 'Categorías cadete e infantil' },
    mirasurCoach: { org: 'Mirasur School', role: 'Entrenador de baloncesto' },
    mirasurPlayer: {
      org: 'Mirasur School',
      role: 'Jugador',
      competition: 'Primera Autonómica Oro (Madrid)',
      federation: TODO_VALIDAR,
    },
  },

  /** Información pendiente: no se muestra hasta que Emilio la confirme. */
  pending: {
    sessionDuration: TODO_VALIDAR,
    firstAssessment: TODO_VALIDAR,
    onlineTools: TODO_VALIDAR,
    basketTechnicalScope: TODO_VALIDAR,
    responseTime: TODO_VALIDAR,
  },

  legal: {
    ownerName: TODO_VALIDAR,
    nif: TODO_VALIDAR,
    address: TODO_VALIDAR,
    email: TODO_VALIDAR,
  },

  /**
   * Fotos reales (con derechos). Se activan al procesarlas con `npm run images`
   * (ver ecp-assets/fotos/LEEME.md). Mientras sean null, la web usa el escudo.
   * Ejemplo: hero: { name: 'hero', alt: 'Emilio Congosto en la sala de fuerza' }
   * @type {{ hero: null|{name:string, alt:string}, perfil: null|{name:string, alt:string}, baloncesto: null|{name:string, alt:string} }}
   */
  photos: { hero: null, perfil: null, baloncesto: null },

  /**
   * Testimonios reales con permiso escrito. Vacío = la sección no existe.
   * @type {{ name: string, context: string, text: string }[]}
   */
  testimonials: [],
};
