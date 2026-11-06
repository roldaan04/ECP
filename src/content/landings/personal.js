/** Landing: Entrenador personal en Madrid. Público general: salud, fuerza, condición física y hábitos. */
export const personal = {
  variant: 'personal',
  waContext: 'personal',
  seo: {
    title: 'Entrenador personal en Madrid | Emilio Congosto Pérez',
    description:
      'Entrenamiento personal adaptado a tus objetivos: fuerza, condición física y hábitos. Sesiones presenciales en Madrid u online con un graduado en CAFYD.',
    path: '/entrenador-personal-madrid/',
  },
  breadcrumb: 'Entrenador personal en Madrid',
  schema: {
    serviceType: 'Entrenamiento personal',
    name: 'Entrenamiento personal en Madrid',
    description: 'Entrenamiento personal de fuerza y condición física, presencial en Madrid u online.',
    area: 'madrid',
    planIds: ['sesion', 'bono4', 'bono8', 'pareja'],
  },

  hero: {
    label: 'Entrenamiento personal · Madrid y online',
    title: 'Entrenador personal en Madrid',
    lead: 'Entreno a personas que quieren ganar fuerza, moverse mejor y sentirse en forma, tanto si empiezan de cero como si vuelven después de un tiempo. Sesiones 1 a 1 en Madrid o, si lo prefieres, un plan online.',
    cta: 'Cuéntame tu caso por WhatsApp',
    sheet: [
      { label: 'Para', value: 'Adultos de cualquier edad y nivel' },
      { label: 'Objetivo', value: 'Fuerza, condición física y hábitos' },
      { label: 'Formato', value: 'Sesiones 1 a 1 o en pareja' },
      { label: 'Dónde', value: 'Presencial en Madrid · Online' },
    ],
  },

  blocks: [
    {
      type: 'list',
      tone: 'paper',
      label: 'Para quién',
      title: 'Si te reconoces aquí, empezamos',
      accent: 'empezamos',
      intro:
        'No hace falta estar en forma para empezar. Hace falta un punto de partida claro y un plan que lo respete.',
      items: [
        {
          title: 'Empiezas de cero',
          text: 'Nunca has entrenado fuerza o no sabes por dónde empezar. Aprendemos la técnica con calma y construimos una base sólida.',
        },
        {
          title: 'Vuelves después de un parón',
          text: 'Entrenabas, lo dejaste y quieres retomarlo sin pasarte el primer mes ni estancarte el segundo.',
        },
        {
          title: 'Quieres ganar fuerza',
          text: 'Levantar más, sentirte más capaz en el día a día y notar que tu cuerpo responde.',
        },
        {
          title: 'Vas al gimnasio sin plan',
          text: 'Entrenas, pero improvisas. Te doy una estructura con progresión para que cada semana tenga sentido.',
        },
      ],
    },
    {
      type: 'grid',
      tone: 'dark',
      label: 'Qué trabajamos',
      title: 'Cuatro pilares, un mismo plan',
      accent: 'plan',
      items: [
        {
          tag: 'Fuerza',
          title: 'La base de todo',
          text: 'Sentadilla, bisagra de cadera, empujes y tracciones. Ejercicios básicos bien ejecutados y con una carga que progresa.',
        },
        {
          tag: 'Condición física',
          title: 'Más capacidad, menos fatiga',
          text: 'Trabajo cardiovascular e intervalos adaptados a tu nivel para que subir escaleras o jugar con tus hijos no te cueste.',
        },
        {
          tag: 'Movimiento',
          title: 'Técnica y control',
          text: 'Moverte con soltura en todos los rangos y entender qué haces en cada ejercicio, para entrenar con confianza.',
        },
        {
          tag: 'Hábitos',
          title: 'Lo que pasa fuera de la sesión',
          text: 'Descanso, actividad diaria y constancia. Pequeños ajustes realistas que sostienen el progreso.',
        },
      ],
    },
    {
      type: 'steps',
      tone: 'paper',
      label: 'Una sesión tipo · Ejemplo orientativo',
      title: 'Así es una sesión conmigo',
      accent: 'sesión',
      steps: [
        {
          label: 'Fase 01 · Activación',
          title: 'Preparar el cuerpo',
          text: 'Movilidad y activación específicas para lo que vamos a entrenar ese día.',
        },
        {
          label: 'Fase 02 · Fuerza',
          title: 'Bloque principal',
          text: 'Los ejercicios clave de la sesión, con la carga y las series que marca tu plan.',
        },
        {
          label: 'Fase 03 · Condición',
          title: 'Trabajo complementario',
          text: 'Condición física o ejercicios accesorios según tu objetivo.',
        },
        {
          label: 'Fase 04 · Cierre',
          title: 'Revisar y anotar',
          text: 'Comentamos cómo te has sentido y lo anoto para ajustar la siguiente sesión.',
        },
      ],
      note: 'Ejemplo orientativo: cada sesión se adapta a ti y a cómo llegas ese día.',
    },
    {
      type: 'split',
      tone: 'dark',
      label: 'Modalidad',
      title: 'Presencial en Madrid u online',
      accent: 'online',
      paragraphs: [
        'El entrenamiento presencial cubre todo Madrid. Entrenamos juntos y corrijo cada repetición en directo: es la mejor opción si empiezas o si quieres aprender bien la técnica.',
        'Si tus horarios no encajan o no vives en Madrid, el entrenamiento online te da el mismo criterio: un plan hecho para ti y seguimiento para ajustarlo.',
        'También puedes combinar las dos: algunas sesiones presenciales para aprender y un plan online para entrenar por tu cuenta el resto de la semana.',
      ],
      aside: {
        type: 'links',
        title: 'Otras formas de entrenar',
        items: [
          { href: '/entrenamiento-online/', label: 'Entrenamiento online con seguimiento' },
          { href: '/preparador-fisico-madrid/', label: 'Preparación física si compites' },
        ],
      },
    },
    {
      type: 'profile',
      tone: 'paper',
      label: 'Por qué conmigo',
      title: 'Criterio de preparador físico',
      accent: 'criterio',
      paragraphs: [
        'Soy graduado en CAFYD y trabajo como preparador físico con deportistas en formación. Llevo ese mismo rigor al entrenamiento personal: valorar, planificar y ajustar.',
        'No te voy a vender un programa genérico. Cada ejercicio de tu plan tiene una razón y te la explico.',
      ],
    },
    {
      type: 'pricing',
      tone: 'ink',
      label: 'Tarifas',
      title: 'Sesiones y bonos',
      accent: 'bonos',
      intro: 'Puedes empezar con una sesión suelta y pasar a un bono cuando veas que te encaja.',
      planIds: ['sesion', 'bono4', 'pareja'],
      cta: 'Ver todas las tarifas',
    },
  ],

  faq: {
    label: 'Preguntas frecuentes',
    title: 'Dudas sobre el entrenamiento personal',
    accent: 'personal',
    items: [
      {
        q: '¿Cuántos días a la semana tengo que entrenar?',
        a: 'Depende de tu objetivo y de tu tiempo. Con dos días a la semana bien planificados se puede progresar; lo vemos en la valoración y ajustamos el plan a tu realidad.',
      },
      {
        q: 'Nunca he hecho pesas. ¿Es para mí?',
        a: 'Sí. Empezamos con cargas ligeras y mucha atención a la técnica. La progresión llega cuando el movimiento está controlado.',
      },
      {
        q: '¿Puedo entrenar con mi pareja o un amigo?',
        a: 'Sí, hay sesiones en pareja. Cada uno trabaja con las cargas y ejercicios que necesita dentro de la misma sesión.',
      },
      {
        q: '¿Me ayudas también con la alimentación?',
        a: 'Te doy pautas generales de hábitos que acompañan al entrenamiento. Si necesitas un plan nutricional, lo adecuado es un dietista-nutricionista, y me coordino con él si hace falta.',
      },
      {
        q: '¿Puedo entrenar si tengo o he tenido una lesión?',
        a: 'Yo no trato lesiones: eso corresponde a un fisioterapeuta o médico. Si ya tienes el alta o su visto bueno, adaptamos el entrenamiento y podemos coordinarnos con él.',
      },
    ],
  },

  cta: {
    label: 'Primer paso',
    title: 'Empieza con un plan.',
    accent: 'plan.',
    text: 'Escríbeme con tu objetivo y tu disponibilidad. Vemos de dónde partes y cómo encajar el entrenamiento en tu semana.',
    cta: 'Quiero empezar',
    phoneLabel: 'o llámame al',
  },
};
