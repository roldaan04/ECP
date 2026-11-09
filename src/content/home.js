/**
 * Textos de la Home. Editables sin tocar componentes.
 * Voz: primera persona, tuteo, concreto. Revisar contra la skill contenido-ecp antes de cambiar.
 */
export const home = {
  seo: {
    title: 'Preparador físico y entrenador personal en Madrid | ECP',
    description:
      'Entrenamiento de fuerza y acondicionamiento físico con Emilio Congosto Pérez, graduado en CAFYD. Presencial en Madrid y online. Escríbeme por WhatsApp.',
    path: '/',
  },

  hero: {
    label: 'Preparador físico · Entrenador personal',
    titleLines: ['Fuerza.', 'Condición.', 'Método.'],
    accentLine: 2,
    lead: 'Soy Emilio Congosto, preparador físico y entrenador personal en Madrid, graduado en CAFYD. Diseño tu entrenamiento de fuerza y condición física a partir de tu punto de partida, en persona y también online.',
    primaryCta: 'Escríbeme por WhatsApp',
    secondaryCta: 'Ver tarifas',
    note: 'Respondo personalmente. Cuéntame tu objetivo y vemos cómo encajarlo.',
    credentials: ['Graduado en CAFYD', 'Preparador físico en Laso Academy', 'Presencial y online'],
    photoAlt: 'Emilio Congosto en la sala de fuerza',
  },

  services: {
    label: '¿Entrenamos?', 
    title: 'Cuatro formas de entrenar conmigo',
    accent: 'entrenar',
    intro: 'Misma base en todas: valorar, planificar, entrenar y revisar. Cambia el objetivo y el formato.',
    items: [
      {
        name: 'Entrenamiento personal',
        text: 'Fuerza, condición física y hábitos para cualquier persona y edad. Sesiones 1 a 1 en las que cada ejercicio tiene una razón.',
        chips: ['Presencial', 'Online'],
        href: '/entrenador-personal-madrid/',
        linkLabel: 'Ver entrenamiento personal',
      },
      {
        name: 'Preparación física',
        text: 'Para deportistas de cualquier disciplina: fuerza, potencia, velocidad y resistencia planificadas según tu calendario.',
        chips: ['Presencial', 'Online'],
        href: '/preparador-fisico-madrid/',
        linkLabel: 'Ver preparación física',
      },
      {
        name: 'Entrenamiento online',
        text: 'Tu planificación de fuerza y condición física con seguimiento, para entrenar desde cualquier ciudad.',
        chips: ['Online'],
        href: '/entrenamiento-online/',
        linkLabel: 'Ver entrenamiento online',
      },
      {
        name: 'Baloncesto',
        text: 'Acondicionamiento físico específico y trabajo técnico individual. Lo hace alguien que juega, entrena y prepara a jugadores.',
        chips: ['Presencial'],
        href: '/entrenador-baloncesto-madrid/',
        linkLabel: 'Ver entrenamiento de baloncesto',
        featured: true,
        featuredLabel: 'Especialidad',
      },
    ],
  },

  method: {
    title: 'Cada carga tiene un porqué',
    accent: 'porqué',
    steps: [
      {
        label: 'Bloque 01 · Valoración',
        title: 'De dónde partes',
        text: 'Hablamos de tu objetivo, tu historial y tu disponibilidad, y vemos cómo te mueves.',
      },
      {
        label: 'Bloque 02 · Planificación',
        title: 'Un plan con sentido',
        text: 'Diseño un plan con sentido: qué trabajamos, cuánto y por qué.',
      },
      {
        label: 'Bloque 03 · Entrenamiento',
        title: 'Sesiones con intención',
        text: 'Sesiones en las que cada ejercicio tiene una razón.',
      },
      {
        label: 'Bloque 04 · Seguimiento',
        title: 'Revisar y ajustar',
        text: 'Revisamos, medimos lo que importa y ajustamos.',
      },
    ],
    note: 'Proceso orientativo: se adapta a cada persona.',
  },

  profile: {
    label: 'Perfil · ECP',
    title: 'Quién te va a entrenar',
    accent: 'entrenar',
    paragraphs: [
      'Me llamo Emilio Congosto Pérez. Soy graduado en CAFYD y trabajo como preparador físico en Laso Academy con jugadores de categoría cadete e infantil.',
      'El baloncesto es mi deporte: lo juego y lo entreno en Mirasur School. Esa mezcla de sala de fuerza, pista y ciencia del entrenamiento es la que aplico con cada persona.',
    ],
    sheetCaption: 'Ficha técnica',
    link: 'Conoce mi trayectoria',
    photoAlt: 'Retrato de Emilio Congosto Pérez',
  },

  pricing: {
    label: 'Tarifas',
    title: 'Elige cómo entrenar',
    accent: 'entrenar',
    intro: 'Sesiones sueltas, bonos o planes online. Te oriento sobre cuál encaja con tu objetivo.',
    planIds: ['sesion', 'bono4', 'online-plus'],
    cta: 'Ver todas las tarifas',
  },

  faq: {
    label: 'Preguntas frecuentes',
    title: 'Antes de empezar',
    accent: 'empezar',
    items: [
      {
        q: '¿Necesito experiencia previa para entrenar contigo?',
        a: 'No. Empezamos desde donde estás. La valoración inicial sirve precisamente para ajustar el punto de partida, tanto si nunca has entrenado fuerza como si llevas años.',
      },
      {
        q: '¿Cómo es la primera sesión?',
        a: 'Hablamos de tu objetivo, tu historial deportivo y tu disponibilidad, y vemos cómo te mueves con algunos ejercicios básicos. Con eso planteo el primer bloque de trabajo.',
      },
      {
        q: '¿Entrenas presencialmente en todo Madrid?',
        a: 'Sí, el servicio presencial cubre todo Madrid. Si no te encaja el presencial, el entrenamiento online funciona desde cualquier ciudad. Escríbeme y vemos dónde y cuándo entrenar.',
      },
      {
        q: '¿Trabajas con menores?',
        a: 'Sí, entreno con deportistas de todas las edades. Para menores de 14 años es necesaria la autorización de madre, padre o tutor legal, y la familia está informada del plan en todo momento.',
      },
      {
        q: '¿Puedo entrenar si tengo o he tenido una lesión?',
        a: 'Yo no trato lesiones: eso corresponde a un fisioterapeuta o médico. Si ya tienes el alta o su visto bueno, adaptamos el entrenamiento y podemos coordinarnos con él.',
      },
      {
        q: '¿Cómo reservo?',
        a: 'Escríbeme por WhatsApp contándome tu objetivo y tu disponibilidad. Te respondo personalmente y concretamos la primera sesión.',
      },
    ],
  },

  ctaFinal: {
    title: 'Entrena con criterio.',
    accent: 'criterio.',
    text: 'Cuéntame tu objetivo y de dónde partes. Te respondo personalmente y vemos cómo encajarlo.',
    cta: 'Escríbeme por WhatsApp',
    phoneLabel: 'o llámame al',
  },
};
