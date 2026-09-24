import Reveal from "./Reveal";
import { SectionHeader } from "./Ui";

// Integraciones que existen hoy en el código de la plataforma.
const items = [
  "MikroTik RouterOS", "SmartOLT", "AdminOLT", "GenieACS · TR-069", "DIAN · Facturación electrónica",
  "Nómina electrónica DIAN", "WhatsApp Cloud API (Meta)", "Instagram y Messenger", "Integra Pay", "Wompi",
  "PayU", "ePayco", "Efecty", "Siigo", "Brevo", "SMS masivos", "Google Maps", "Waze", "Firebase",
  "HetrixTools", "PlayHub", "API REST + MCP",
];

export default function Integraciones() {
  const fila = [...items, ...items];
  return (
    <section className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader eyebrow="Integraciones" title="Conectado con las herramientas" highlight="que ya usas" />
      </div>
      <Reveal className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-3">
          {fila.map((x, i) => (
            <span key={`${x}-${i}`} className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-ink-100">
              {x}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
