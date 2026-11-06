/** Textos de /contacto/ y del formulario secundario. */
export const contact = {
  seo: {
    title: 'Contacto | Emilio Congosto Pérez · WhatsApp y teléfono',
    description:
      'Escríbeme por WhatsApp o llámame al +34 638 06 88 34. Entrenamiento personal y preparación física presencial en Madrid y online.',
    path: '/contacto/',
  },
  hero: {
    label: 'Contacto · Madrid y online',
    title: 'Hablemos',
    lead: 'La forma más rápida de empezar es escribirme por WhatsApp. Cuéntame tu objetivo, de dónde partes y tu disponibilidad, y te respondo personalmente.',
  },
  channels: {
    label: 'Canales',
    title: 'Elige cómo contactar',
    whatsapp: {
      tag: 'Recomendado',
      title: 'WhatsApp',
      text: 'Escríbeme y cuéntame tu caso.',
      cta: 'Escríbeme por WhatsApp',
    },
    phone: { tag: 'Teléfono', title: 'Llámame', text: 'Si prefieres hablar directamente.' },
    instagram: { tag: 'Instagram', title: 'Sígueme', text: 'Entrenamientos, ideas y día a día.' },
  },
  area: {
    label: 'Zona de servicio',
    title: 'Madrid y online',
    accent: 'online',
    rows: [
      { label: 'Presencial', value: 'Todo Madrid' },
      { label: 'Online', value: 'Desde cualquier ciudad' },
      { label: 'Público', value: 'Todas las edades (menores de 14, con autorización)' },
    ],
  },
  metaNotice:
    'Si me escribes por WhatsApp, ten en cuenta que esa conversación la gestiona también Meta Platforms (propietaria de WhatsApp) según su propia política de privacidad.',
  form: {
    label: 'Formulario',
    title: '¿Prefieres un formulario?',
    intro: 'Déjame tus datos y te contesto. Si es urgente, mejor por WhatsApp.',
    fields: {
      name: 'Nombre',
      contact: 'Teléfono o email',
      service: 'Servicio que te interesa',
      message: 'Cuéntame tu objetivo',
    },
    serviceOptions: [
      'Entrenamiento personal',
      'Preparación física',
      'Entrenamiento de baloncesto',
      'Entrenamiento online',
      'Aún no lo sé',
    ],
    privacy: 'He leído y acepto la',
    privacyLink: 'política de privacidad',
    age: 'Soy mayor de 14 años o cuento con autorización de mi madre, padre o tutor legal.',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    success: 'Mensaje enviado. Te responderé lo antes posible.',
    error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme por WhatsApp.',
    required: 'Este campo es obligatorio.',
    tooFast: 'Revisa el formulario y vuelve a enviarlo.',
  },
};
