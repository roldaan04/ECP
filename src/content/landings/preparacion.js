/** Landing: Preparador físico en Madrid. Deportistas de cualquier disciplina y nivel. */
export const preparacion = {
  variant: 'preparacion',
  waContext: 'preparacion',
  seo: {
    title: 'Preparador físico en Madrid | Emilio Congosto Pérez',
    description:
      'Preparación física individual para deportistas: fuerza, potencia, velocidad y condición física adaptadas a tu deporte. Presencial en Madrid u online.',
    path: '/preparador-fisico-madrid/',
  },
  breadcrumb: 'Preparador físico en Madrid',
  schema: {
    serviceType: 'Preparación física',
    name: 'Preparación física para deportistas en Madrid',
    description:
      'Preparación física individual para deportistas de cualquier disciplina, presencial en Madrid u online.',
    area: 'madrid',
    planIds: ['sesion', 'bono4', 'bono8', 'online-plus'],
  },

  hero: {
    label: 'Preparación física · Deportistas · Madrid y online',
    title: 'Preparador físico en Madrid',
    lead: 'Preparo a deportistas de cualquier disciplina para que lleguen más fuertes, más rápidos y con más capacidad a su temporada. Un plan individual que tiene en cuenta tu deporte, tu nivel y tu calendario.',
    cta: 'Pregúntame por la preparación física',
    notationCaption: 'Ejemplo de estructura',
    notation: [
      { label: 'Semana 1–4', value: 'Base · fuerza general' },
      { label: 'Semana 5–8', value: 'Fuerza máxima · potencia' },
      { label: 'Semana 9–12', value: 'Transferencia al deporte' },
      { label: 'Competición', value: 'Mantener y afinar' },
    ],
  },

  blocks: [
    {
      type: 'list',
      tone: 'paper',
      label: 'Para quién',
      title: 'Deportistas que quieren rendir más',
      accent: 'rendir',
      intro:
        'Da igual tu disciplina: lo que cambia es qué exige tu deporte y en qué momento de la temporada estás.',
      items: [
        {
          title: 'Deportistas amateur',
          text: 'Corres, juegas al pádel, haces trail o deportes de equipo y quieres rendir mejor sin depender de la intuición.',
        },
        {
          title: 'Deportistas federados',
          text: 'Compites y necesitas un trabajo físico individual que complemente los entrenamientos de tu club.',
        },
        {
          title: 'Jóvenes en formación',
          text: 'Jugadores y jugadoras que están construyendo su base física, con un trabajo adaptado a su edad y desarrollo.',
        },
        {
          title: 'Tienes una fecha en el calendario',
          text: 'Una carrera, una prueba o el inicio de temporada. Planificamos hacia ese objetivo para que llegues en tu mejor momento de forma.',
        },
      ],
    },
    {
      type: 'grid',
      tone: 'dark',
      label: 'Capacidades',
      title: 'Lo que entrenamos',
      accent: 'entrenamos',
      items: [
        {
          tag: 'Fuerza',
          title: 'La base del rendimiento',
          text: 'Fuerza general y específica: el punto de partida para todo lo demás.',
        },
        {
          tag: 'Potencia',
          title: 'Aplicar fuerza rápido',
          text: 'Saltos, lanzamientos y trabajo balístico para producir fuerza en poco tiempo.',
        },
        {
          tag: 'Velocidad',
          title: 'Aceleración y cambios de dirección',
          text: 'Arrancar, frenar y cambiar de dirección con eficacia, como pide tu deporte.',
        },
        {
          tag: 'Resistencia',
          title: 'Aguantar el ritmo',
          text: 'Capacidad aeróbica y resistencia intermitente ajustadas al esfuerzo real de tu disciplina.',
        },
      ],
    },
    {
      type: 'split',
      tone: 'paper',
      label: 'Planificación',
      title: 'Tu temporada manda',
      accent: 'temporada',
      paragraphs: [
        'No se entrena igual en pretemporada que en plena competición. Planifico por bloques según tu calendario: construir base cuando hay margen, afinar cuando llegan los partidos o las pruebas importantes.',
        'Me coordino con lo que ya haces con tu club o tu entrenador para que el trabajo físico sume y no te llegue cansado al fin de semana.',
        'El objetivo es preparar tu cuerpo para las exigencias de tu deporte con un trabajo de fuerza bien dosificado.',
      ],
      aside: {
        type: 'sheet',
        caption: 'Ejemplo de temporada',
        rows: [
          { label: 'Pretemporada', value: 'Base de fuerza y capacidad' },
          { label: 'Inicio de liga', value: 'Potencia y velocidad' },
          { label: 'Competición', value: 'Mantener y llegar fresco' },
          { label: 'Transición', value: 'Recuperar y reconstruir' },
        ],
      },
    },
    {
      type: 'profile',
      tone: 'dark',
      label: 'Experiencia',
      title: 'Preparador físico en categorías de formación',
      accent: 'formación',
      paragraphs: [
        'Trabajo como preparador físico en Laso Academy con jugadores de categoría cadete e infantil. Es un trabajo que exige planificar con cuidado, adaptar cargas a cada deportista y explicar el porqué de cada ejercicio.',
        'Soy graduado en CAFYD y además juego y entreno baloncesto, así que conozco la preparación física desde los dos lados: el del preparador y el del deportista.',
      ],
    },
    {
      type: 'note',
      tone: 'paper',
      label: 'Jóvenes deportistas',
      title: 'Menores y familias',
      text: 'Entreno con deportistas de todas las edades. Para menores de 14 años es necesaria la autorización de madre, padre o tutor legal, y la familia está informada del plan en todo momento.',
    },
    {
      type: 'related',
      tone: 'dark',
      label: 'Especialidad',
      title: '¿Juegas al baloncesto?',
      accent: 'baloncesto',
      text: 'Es mi deporte y mi especialidad. Combino la preparación física específica con trabajo técnico individual en pista.',
      href: '/entrenador-baloncesto-madrid/',
      linkLabel: 'Entrenamiento personalizado de baloncesto',
      more: [
        { href: '/entrenamiento-online/', label: 'Preparación física online' },
        { href: '/entrenador-personal-madrid/', label: 'Entrenamiento personal sin competir' },
      ],
    },
    {
      type: 'pricing',
      tone: 'ink',
      label: 'Tarifas',
      title: 'Presencial u online',
      accent: 'online',
      intro:
        'Sesiones presenciales en Madrid o planificación online con seguimiento si entrenas por tu cuenta.',
      planIds: ['bono4', 'bono8', 'online-plus'],
      cta: 'Ver todas las tarifas',
    },
  ],

  faq: {
    label: 'Preguntas frecuentes',
    title: 'Dudas sobre la preparación física',
    accent: 'preparación',
    items: [
      {
        q: '¿Trabajas con deportistas de cualquier deporte?',
        a: 'Sí. Analizo qué exige tu disciplina (esfuerzos, gestos, calendario) y construyo el plan a partir de ahí. En baloncesto tengo además experiencia directa como jugador y entrenador.',
      },
      {
        q: '¿Es compatible con los entrenamientos de mi club?',
        a: 'Sí, y debe serlo. Ajusto el volumen y la intensidad a lo que ya entrenas para que el trabajo físico sume y no te sobrecargue.',
      },
      {
        q: '¿A partir de qué edad se puede hacer preparación física?',
        a: 'El trabajo físico se adapta a cada etapa. Con jóvenes priorizo la técnica, la coordinación y una base de fuerza segura. Menores de 14 años, con autorización de madre, padre o tutor legal.',
      },
      {
        q: '¿Puedo hacer la preparación física online?',
        a: 'Sí. Si entrenas en tu gimnasio o con tu equipo, te planifico el trabajo físico y hacemos seguimiento para ajustarlo.',
      },
      {
        q: 'Vengo de una lesión, ¿puedo empezar?',
        a: 'Yo no trato lesiones: eso corresponde a un fisioterapeuta o médico. Cuando tengas el alta, podemos coordinarnos con ellos para volver a entrenar de forma progresiva.',
      },
    ],
  },

  cta: {
    label: 'Tu temporada',
    title: 'Llega más preparado.',
    accent: 'preparado.',
    text: 'Cuéntame tu deporte, tu nivel y tu calendario. Te respondo personalmente y vemos cómo plantear la preparación.',
    cta: 'Pregúntame por la preparación física',
    phoneLabel: 'o llámame al',
  },
};
