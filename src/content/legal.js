/**
 * Textos legales en BORRADOR (RGPD, LOPDGDD, LSSI). Faltan los datos del responsable (site.legal):
 * mientras estén pendientes, las páginas van en noindex y muestran un aviso neutro en su lugar.
 * Revisar con un asesor antes de publicar.
 */
export const LEGAL_PENDING_NOTE =
  'Los datos identificativos del titular se incorporarán antes de la publicación definitiva de este texto.';

export const legal = {
  avisoLegal: {
    seo: {
      title: 'Aviso legal | ECP · Emilio Congosto Pérez',
      description: 'Aviso legal del sitio web de Emilio Congosto Pérez (ECP).',
      path: '/aviso-legal/',
    },
    title: 'Aviso legal',
    sections: [
      {
        h: 'Titular del sitio web',
        p: [
          'En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), se informa de los datos del titular de este sitio web:',
        ],
        holder: true,
      },
      {
        h: 'Objeto',
        p: [
          'Este sitio web informa sobre los servicios de preparación física y entrenamiento personal de Emilio Congosto Pérez, presenciales en Madrid y online, y facilita el contacto por WhatsApp, teléfono e Instagram.',
        ],
      },
      {
        h: 'Condiciones de uso',
        p: [
          'El acceso al sitio es gratuito y atribuye la condición de usuario, que se compromete a hacer un uso adecuado de los contenidos conforme a la ley y a estas condiciones.',
          'La información publicada tiene carácter orientativo. Los servicios y sus condiciones se concretan de forma personalizada antes de empezar.',
        ],
      },
      {
        h: 'Propiedad intelectual e industrial',
        p: [
          'Los textos, el logotipo de ECP, el diseño y el resto de elementos del sitio son titularidad de su titular o se usan con autorización. No se permite su reproducción sin consentimiento previo.',
          'Las menciones a entidades deportivas describen la trayectoria del titular y no implican su respaldo.',
        ],
      },
      {
        h: 'Enlaces externos',
        p: [
          'El sitio enlaza a servicios de terceros (WhatsApp, Instagram). El titular no se responsabiliza de sus contenidos ni de sus políticas.',
        ],
      },
      {
        h: 'Legislación aplicable',
        p: ['Estas condiciones se rigen por la legislación española.'],
      },
    ],
  },

  privacidad: {
    seo: {
      title: 'Política de privacidad | ECP · Emilio Congosto Pérez',
      description: 'Cómo se tratan tus datos personales en la web de Emilio Congosto Pérez (ECP).',
      path: '/politica-privacidad/',
    },
    title: 'Política de privacidad',
    sections: [
      {
        h: 'Responsable del tratamiento',
        p: [
          'Conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD), te informamos de quién es el responsable del tratamiento de tus datos:',
        ],
        holder: true,
      },
      {
        h: 'Qué datos tratamos y para qué',
        p: [
          'Los datos que nos facilitas al contactar (nombre, teléfono o email y el contenido de tu mensaje) se usan únicamente para responder a tu consulta y, si lo deseas, gestionar el servicio de entrenamiento.',
          'No se usan para enviar publicidad ni se ceden a terceros salvo obligación legal.',
        ],
      },
      {
        h: 'Base jurídica',
        p: [
          'Tu consentimiento al contactar y, en su caso, la ejecución de la relación de servicio que solicites.',
        ],
      },
      {
        h: 'Menores de edad',
        p: [
          'Los menores de 14 años necesitan el consentimiento de su madre, padre o tutor legal para facilitar sus datos y para contratar cualquier servicio.',
        ],
      },
      {
        h: 'WhatsApp e Instagram',
        p: [
          'Si contactas por WhatsApp o Instagram, esa comunicación la gestiona también Meta Platforms conforme a su propia política de privacidad, que te recomendamos consultar.',
        ],
      },
      {
        h: 'Formulario de contacto',
        p: [
          'Si el formulario está disponible, los datos se envían a través de un proveedor externo de formularios que actúa como encargado del tratamiento.',
        ],
      },
      {
        h: 'Conservación',
        p: [
          'Los datos se conservan el tiempo necesario para atender tu consulta y, si contratas un servicio, mientras dure la relación y los plazos legales aplicables.',
        ],
      },
      {
        h: 'Tus derechos',
        p: [
          'Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo al responsable por los medios de contacto indicados. También puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).',
        ],
      },
    ],
  },

  cookies: {
    seo: {
      title: 'Política de cookies | ECP · Emilio Congosto Pérez',
      description: 'Uso de cookies en la web de Emilio Congosto Pérez (ECP).',
      path: '/politica-cookies/',
    },
    title: 'Política de cookies',
    sections: [
      {
        h: 'Qué cookies usa esta web',
        p: [
          'Esta web no instala cookies propias ni de terceros con fines analíticos o publicitarios. Las fuentes tipográficas se sirven desde el propio sitio, sin peticiones a servicios externos.',
        ],
      },
      {
        h: 'Analítica',
        p: [
          'Si en el futuro se incorpora medición de visitas, se optará por una herramienta que no use cookies ni datos personales, o se solicitará tu consentimiento previo mediante un aviso.',
        ],
      },
      {
        h: 'Enlaces a terceros',
        p: [
          'Al pulsar en los enlaces a WhatsApp o Instagram sales de esta web; esos servicios pueden usar sus propias cookies según sus políticas.',
        ],
      },
      {
        h: 'Cómo gestionar las cookies',
        p: ['Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento.'],
      },
    ],
  },
};
