// Único canal de contacto por ahora: WhatsApp de ventas.
export const WHATSAPP_NUMERO = "573206909290";
export const WHATSAPP_VISIBLE = "+57 320 690 9290";

/** Enlace a WhatsApp con un mensaje ya escrito según el botón que se pulsó. */
export function wa(mensaje = "Hola, quiero información sobre Integra."): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}
