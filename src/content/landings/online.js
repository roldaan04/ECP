/** Landing: Entrenamiento online con seguimiento (cualquier ciudad, sin páginas por ciudad). */
export const online = {
  variant: 'online',
  waContext: 'online',
  seo: {
    title: 'Entrenador personal online | Emilio Congosto Pérez',
    description:
      'Planificación de fuerza y condición física online con seguimiento, para entrenar desde cualquier ciudad con un graduado en CAFYD.',
    path: '/entrenamiento-online/',
  },
  breadcrumb: 'Entrenamiento online',
  schema: {
    serviceType: 'Entrenamiento personal online',
    name: 'Entrenamiento online con seguimiento',
    description: 'Planificación de fuerza y condición física online con seguimiento, desde cualquier ciudad.',
    area: 'spain',
    planIds: ['online', 'online-plus'],
  },

  hero: {
    label: 'Online · Desde cualquier ciudad',
    title: 'Entrenamiento online con seguimiento',
    lead: 'Un plan de fuerza y condición física hecho para ti, que entrenas cuando y donde puedas, y un seguimiento para ajustarlo según cómo responde tu cuerpo. El mismo criterio que en presencial, vivas donde vivas.',
    cta: 'Cuéntame tu caso por WhatsApp',
    cycle: [
      { label: '01', title: 'Plan', text: 'Diseñado para tu objetivo, tu material y tus días.' },
      { label: '02', title: 'Entrenas', text: 'A tu ritmo, con cada ejercicio explicado.' },
      { label: '03', title: 'Revisamos', text: 'Me cuentas cómo ha ido y lo analizo.' },
      { label: '04', title: 'Ajustamos', text: 'El plan evoluciona contigo.' },
    ],
  },

  blocks: [
    {
      type: 'list',
      tone: 'paper',
      label: 'Para quién',
      title: 'Si no puedes entrenar conmigo en persona',
      accent: 'persona',
      items: [
        {
          title: 'No vives en Madrid',
          text: 'El online funciona desde cualquier ciudad. Lo que importa es el plan y el seguimiento, no el código postal.',
        },
        {
          title: 'Tus horarios cambian',
          text: 'Turnos, viajes o semanas imprevisibles. Entrenas cuando puedes y el plan se adapta a tu semana real.',
        },
        {
          title: 'Ya tienes gimnasio',
          text: 'Tienes dónde entrenar pero te falta una estructura con progresión. Te la doy.',
        },
        {
          title: 'Eres deportista y entrenas por tu cuenta',
          text: 'Necesitas planificar tu trabajo físico alrededor de tu deporte y tu calendario.',
        },
      ],
    },
    {
      type: 'steps',
      tone: 'dark',
      label: 'Cómo funciona',
      title: 'Del primer mensaje al primer bloque',
      accent: 'bloque',
      steps: [
        {
          label: 'Paso 01 · Valoración',
          title: 'Hablamos',
          text: 'Tu objetivo, tu historial, tu disponibilidad y el material con el que cuentas.',
        },
        {
          label: 'Paso 02 · Plan',
          title: 'Te preparo el plan',
          text: 'Sesiones con ejercicios, series, repeticiones y cargas orientativas, explicadas.',
        },
        {
          label: 'Paso 03 · Entrenamiento',
          title: 'Entrenas',
          text: 'Sigues el plan y registras cómo te ha ido cada sesión.',
        },
        {
          label: 'Paso 04 · Seguimiento',
          title: 'Ajustamos',
          text: 'Reviso tu evolución y modifico el plan para que siga funcionando.',
        },
      ],
      note: 'Te explico la herramienta y el canal de seguimiento antes de empezar.',
    },
    {
      type: 'grid',
      tone: 'paper',
      label: 'Dos formatos',
      title: 'Planificación o planificación con seguimiento',
      accent: 'seguimiento',
      items: [
        {
          tag: 'Planificación',
          title: 'Tu plan mensual',
          text: 'Un plan adaptado a ti para entrenar por tu cuenta. Ideal si ya tienes experiencia y buena autonomía.',
        },
        {
          tag: 'Planificación + seguimiento',
          title: 'Tu plan y revisiones semanales',
          text: 'El plan más un seguimiento semanal para resolver dudas, revisar cómo vas y ajustar sobre la marcha.',
        },
      ],
    },
    {
      type: 'split',
      tone: 'dark',
      label: 'Qué necesitas',
      title: 'Poco material, mucha constancia',
      accent: 'constancia',
      paragraphs: [
        'Puedes entrenar en un gimnasio, en casa o al aire libre. El plan se construye con lo que tengas: si cuentas con barra y discos, aprovechamos; si solo tienes mancuernas o bandas, también se puede progresar.',
        'Lo que no se puede sustituir es la constancia. Mi trabajo es darte un plan que puedas cumplir y ajustarlo cuando la vida se complique.',
        'Si alguna vez pasas por Madrid, podemos combinar el online con alguna sesión presencial para revisar la técnica.',
      ],
      aside: {
        type: 'links',
        title: 'También te puede interesar',
        items: [
          { href: '/entrenador-personal-madrid/', label: 'Entrenamiento personal presencial en Madrid' },
          { href: '/preparador-fisico-madrid/', label: 'Preparación física para deportistas' },
        ],
      },
    },
    {
      type: 'profile',
      tone: 'paper',
      label: 'Quién te planifica',
      title: 'Un graduado en CAFYD detrás de tu plan',
      accent: 'plan',
      paragraphs: [
        'Soy Emilio Congosto, preparador físico y entrenador personal. Diseño cada plan online con el mismo criterio con el que preparo a deportistas en formación.',
      ],
    },
    {
      type: 'pricing',
      tone: 'ink',
      label: 'Tarifas',
      title: 'Planes online',
      accent: 'online',
      intro: 'Planes mensuales, sin desplazamientos, desde cualquier ciudad.',
      planIds: ['online', 'online-plus'],
      cta: 'Ver todas las tarifas',
    },
  ],

  faq: {
    label: 'Preguntas frecuentes',
    title: 'Dudas sobre el entrenamiento online',
    accent: 'online',
    items: [
      {
        q: '¿Funciona igual que el presencial?',
        a: 'El criterio es el mismo: valorar, planificar y ajustar. La diferencia es que no corrijo cada repetición en directo, así que te pido que me cuentes cómo vas y, si hace falta, que me envíes algún vídeo de la técnica.',
      },
      {
        q: '¿Necesito experiencia previa?',
        a: 'Ayuda, pero no es imprescindible. Si empiezas de cero, el plan arranca con ejercicios sencillos y explicaciones claras, y el formato con seguimiento es el más recomendable.',
      },
      {
        q: '¿Qué material necesito?',
        a: 'Depende de tu objetivo. Se puede entrenar en un gimnasio, en casa con poco material o al aire libre. El plan se adapta a lo que tengas.',
      },
      {
        q: '¿Puedo combinarlo con sesiones presenciales?',
        a: 'Sí, si estás en Madrid o pasas por aquí. Es una buena forma de revisar la técnica y seguir entrenando por tu cuenta el resto del tiempo.',
      },
      {
        q: '¿Cómo empiezo?',
        a: 'Escríbeme por WhatsApp con tu objetivo, tus días disponibles y el material que tienes. Te respondo personalmente y te explico los siguientes pasos.',
      },
    ],
  },

  cta: {
    label: 'Desde donde estés',
    title: 'Tu plan, tu ciudad.',
    accent: 'ciudad.',
    text: 'Cuéntame tu objetivo y cuántos días puedes entrenar. Te respondo personalmente y vemos qué formato te encaja.',
    cta: 'Cuéntame tu caso por WhatsApp',
    phoneLabel: 'o llámame al',
  },
};
