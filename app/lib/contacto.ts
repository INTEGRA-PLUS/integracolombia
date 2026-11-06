// Único canal de contacto por ahora: WhatsApp de ventas.
export const WHATSAPP_NUMERO = "573206909290";
export const WHATSAPP_VISIBLE = "+57 320 690 9290";

/** Enlace a WhatsApp con un mensaje ya escrito según el botón que se pulsó. */
export function wa(mensaje = "Hola, quiero información sobre Integra."): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}

/**
 * Donde el CRM recibe las hojas de vida de /trabaja-con-nosotros. El navegador
 * las manda directo (CORS abierto en api/*); se revisan en el CRM, Master →
 * Hojas de vida.
 */
export const POSTULACIONES_URL = "https://wpp.integracolombia.online/api/postulaciones";
