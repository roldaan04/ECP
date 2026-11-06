/** Landing: Entrenador de baloncesto personalizado en Madrid. Físico específico + técnica individual. */
export const baloncesto = {
  variant: 'baloncesto',
  waContext: 'baloncesto',
  seo: {
    title: 'Entrenador de baloncesto personalizado en Madrid | ECP',
    description:
      'Entrenamiento individual de baloncesto en Madrid: técnica, fundamentos y preparación física específica con Emilio Congosto, jugador, entrenador y preparador físico.',
    path: '/entrenador-baloncesto-madrid/',
  },
  breadcrumb: 'Entrenador de baloncesto personalizado',
  schema: {
    serviceType: 'Entrenamiento personalizado de baloncesto',
    name: 'Entrenamiento individual de baloncesto en Madrid',
    description:
      'Entrenamiento individual de baloncesto que combina preparación física específica y trabajo técnico, presencial en Madrid.',
    area: 'madrid',
    planIds: ['basket'],
  },

  hero: {
    label: 'Especialidad · Baloncesto · Madrid',
    title: 'Entrenador de baloncesto personalizado en Madrid',
    lead: 'Entrenamiento individual que une lo que un jugador necesita: preparación física específica para baloncesto y trabajo técnico en pista. Con alguien que juega, entrena a un equipo y prepara físicamente a jugadores.',
    cta: 'Cuéntame tu caso por WhatsApp',
    roles: ['Jugador', 'Entrenador', 'Preparador físico'],
    photoAlt: 'Emilio Congosto entrenando en pista de baloncesto',
  },

  blocks: [
    {
      type: 'pillars',
      tone: 'paper',
      label: 'Dos pilares · Una sesión',
      title: 'Físico y pista',
      accent: 'pista',
      intro:
        'En baloncesto no basta con estar fuerte ni con tener buena mano. El juego pide las dos cosas a la vez, y así lo entrenamos.',
      pillars: [
        {
          label: 'Pilar 01 · Físico',
          title: 'Acondicionamiento específico',
          items: [
            'Salto y capacidad de repetirlo',
            'Aceleración, frenada y cambios de dirección',
            'Fuerza de tren inferior y de tronco para el contacto',
            'Resistencia intermitente: esfuerzos cortos y repetidos',
          ],
        },
        {
          label: 'Pilar 02 · Pista',
          title: 'Técnica individual',
          items: [
            'Fundamentos y trabajo de pies',
            'Bote y manejo de balón bajo presión',
            'Mecánica y rutina de tiro',
            'Lectura de situaciones de juego',
          ],
        },
      ],
    },
    {
      type: 'list',
      tone: 'dark',
      label: 'Para quién',
      title: 'Jugadores que quieren dar un salto',
      accent: 'salto',
      items: [
        {
          title: 'Jugadores en formación',
          text: 'Infantiles, cadetes y juniors que quieren mejorar su físico y su técnica fuera del entrenamiento de equipo.',
        },
        {
          title: 'Familias',
          text: 'Padres y madres que buscan un trabajo individual serio y bien explicado para su hijo o hija.',
        },
        {
          title: 'Jugadores federados',
          text: 'Compites y quieres un trabajo físico y técnico individual que complemente lo que haces con tu club.',
        },
        {
          title: 'Amateurs',
          text: 'Juegas en una liga de amigos o empresa y quieres rendir más y disfrutar más en pista.',
        },
      ],
    },
    {
      type: 'steps',
      tone: 'paper',
      label: 'Una sesión tipo · Ejemplo orientativo',
      title: 'Cómo es una sesión',
      accent: 'sesión',
      steps: [
        {
          label: 'Fase 01 · Activación',
          title: 'Preparar para jugar',
          text: 'Movilidad, activación y coordinación orientadas a los gestos del baloncesto.',
        },
        {
          label: 'Fase 02 · Físico',
          title: 'Fuerza y potencia',
          text: 'Saltos, aceleraciones y fuerza específica según el momento de tu temporada.',
        },
        {
          label: 'Fase 03 · Pista',
          title: 'Técnica individual',
          text: 'Fundamentos, bote y tiro con el foco en lo que más necesitas mejorar.',
        },
        {
          label: 'Fase 04 · Juego',
          title: 'Aplicar',
          text: 'Situaciones que se parecen al partido para llevar lo trabajado al juego real.',
        },
      ],
      note: 'Ejemplo orientativo: el peso de cada parte depende de tu nivel y tu objetivo.',
    },
    {
      type: 'career',
      tone: 'dark',
      label: 'Experiencia en baloncesto',
      title: 'Lo vivo desde dentro',
      accent: 'dentro',
      paragraphs: [
        'El baloncesto es mi deporte. Juego en Primera Autonómica Oro con Mirasur School, donde también soy entrenador. Y trabajo como preparador físico en Laso Academy con jugadores de categoría cadete e infantil.',
        'Esa triple mirada (jugador, entrenador y preparador físico) es lo que me permite entender qué necesita un jugador en la pista y cómo prepararle para ello.',
      ],
      rows: [
        { label: 'Jugador', value: 'Mirasur School · Primera Autonómica Oro (Madrid)' },
        { label: 'Entrenador', value: 'Mirasur School' },
        { label: 'Preparador físico', value: 'Laso Academy · Cadete e infantil' },
        { label: 'Formación', value: 'Graduado en CAFYD' },
      ],
    },
    {
      type: 'note',
      tone: 'paper',
      label: 'Menores',
      title: 'Jugadores de todas las edades',
      text: 'Entreno con deportistas de todas las edades. Para menores de 14 años es necesaria la autorización de madre, padre o tutor legal, y la familia está informada del plan en todo momento.',
    },
    {
      type: 'related',
      tone: 'dark',
      label: 'Si no buscas pista',
      title: 'Solo la parte física',
      accent: 'física',
      text: 'Si lo que necesitas es únicamente la preparación física, para baloncesto o para cualquier otro deporte, también puedo ayudarte.',
      href: '/preparador-fisico-madrid/',
      linkLabel: 'Preparación física para deportistas',
      more: [
        { href: '/entrenamiento-online/', label: 'Plan físico online para jugadores' },
        { href: '/sobre-mi/', label: 'Mi trayectoria completa' },
      ],
    },
    {
      type: 'pricing',
      tone: 'ink',
      label: 'Tarifas',
      title: 'Baloncesto individual',
      accent: 'individual',
      intro: 'Sesión individual de físico y pista, también en bono de 4 sesiones.',
      planIds: ['basket'],
      cta: 'Ver todas las tarifas',
    },
  ],

  faq: {
    label: 'Preguntas frecuentes',
    title: 'Dudas sobre el entrenamiento de baloncesto',
    accent: 'baloncesto',
    items: [
      {
        q: '¿Desde qué edad entrenas a jugadores?',
        a: 'Trabajo con jugadores de todas las edades, adaptando el contenido a cada etapa. Para menores de 14 años es necesaria la autorización de madre, padre o tutor legal.',
      },
      {
        q: '¿Qué nivel necesito?',
        a: 'Ninguno en concreto. Empiezo viendo cómo juegas y qué necesitas, tanto si estás empezando como si compites en categoría federada.',
      },
      {
        q: '¿Necesito tener pista?',
        a: 'Escríbeme y vemos las opciones según tu zona de Madrid. Parte del trabajo físico se puede hacer fuera de pista.',
      },
      {
        q: '¿Puedo entrenar con un compañero?',
        a: 'Las sesiones están pensadas como individuales. Si queréis entrenar dos jugadores juntos, pregúntame y lo valoramos.',
      },
      {
        q: '¿Se puede hacer online?',
        a: 'La parte física sí: te planifico el trabajo y hacemos seguimiento. La técnica en pista es presencial.',
      },
    ],
  },

  cta: {
    label: 'A pista',
    title: 'Entrena como juegas.',
    accent: 'juegas.',
    text: 'Cuéntame tu posición, tu nivel y qué quieres mejorar. Te respondo personalmente y planteamos la primera sesión.',
    cta: 'Cuéntame tu caso por WhatsApp',
    phoneLabel: 'o llámame al',
  },
};
