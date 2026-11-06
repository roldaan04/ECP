import { site } from '@/config/site';

/** Mensajes prellenados por contexto. */
export const WA_MESSAGES = {
  home: 'Hola Emilio, he visto tu web y me gustaría información sobre entrenamiento.',
  personal: 'Hola Emilio, me interesa el entrenamiento personal.',
  preparacion: 'Hola Emilio, me interesa la preparación física.',
  baloncesto: 'Hola Emilio, me interesa el entrenamiento personalizado de baloncesto.',
  online: 'Hola Emilio, me interesa el entrenamiento online.',
  tarifas: 'Hola Emilio, me gustaría saber más sobre tus tarifas.',
};

/** @typedef {keyof typeof WA_MESSAGES} WaContext */

/**
 * Enlace de WhatsApp con mensaje contextual.
 * @param {WaContext} [context='home']
 * @param {string} [extra] En `tarifas`, el nombre del plan («Hola Emilio, me interesa el plan {nombre}.»)
 * @returns {string}
 */
export function waLink(context = 'home', extra) {
  let text = WA_MESSAGES[context] || WA_MESSAGES.home;
  if (context === 'tarifas' && extra) text = `Hola Emilio, me interesa el plan ${extra}.`;
  else if (extra) text = `${text} ${extra}`;
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}
