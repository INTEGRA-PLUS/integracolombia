import { wa } from "../lib/contacto";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFlotante() {
  return (
    <a
      href={wa("Hola, vengo de la página de Integra y quiero información.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-pulseRing rounded-full bg-[#25D366]" />
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[160px] group-hover:pr-1 sm:inline">
        ¿Hablamos?
      </span>
    </a>
  );
}
