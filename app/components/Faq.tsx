import Reveal from "./Reveal";
import { SectionHeader, WaButton } from "./Ui";

const preguntas = [
  ["¿Necesito comprar servidores o instalar algo?", "No. Integra funciona en la nube: tu equipo entra desde el navegador y tus clientes desde su celular. Nosotros nos encargamos de la infraestructura, las copias de respaldo y las actualizaciones."],
  ["¿Funciona con mis routers MikroTik actuales?", "Sí. Nos conectamos a tus MikroTik por la API de RouterOS y trabajamos con colas simples y PPPoE. Puedes tener varios routers y nodos en la misma cuenta."],
  ["¿Emite facturación electrónica ante la DIAN?", "Sí. Facturas electrónicas, notas crédito y débito, documento soporte y nómina electrónica, con las numeraciones autorizadas de tu empresa."],
  ["¿Cómo se corta y se reconecta a los clientes?", "Automáticamente. Cuando la factura vence sin pago, el cliente pasa a morosos en el router; cuando paga —en caja o en línea— el servicio vuelve solo. También funciona con la TV desde la OLT."],
  ["¿Tengo que cambiar mi número de WhatsApp para usar el CRM?", "No. Conservas tu mismo número y puedes seguir usando la aplicación del celular al mismo tiempo que el CRM."],
  ["¿La inteligencia artificial puede equivocarse con los datos de mis clientes?", "La IA solo puede ejecutar acciones de una lista cerrada que tú controlas, consulta los datos reales en Integra y, si algo no aplica para tu empresa, le pasa la conversación a un asesor."],
  ["Ya uso otro software, ¿pierdo mi información?", "No. Migramos tus clientes, contratos, planes y routers, desde tu sistema actual, desde Excel o directamente desde tu MikroTik."],
  ["¿Cuánto cuesta?", "Depende del tamaño de tu ISP y de los servicios que necesites. Escríbenos por WhatsApp y te armamos una propuesta a tu medida."],
];

export default function Faq() {
  return (
    <section id="faq" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeader eyebrow="Preguntas frecuentes" title="Lo que más nos" highlight="preguntan" />
        <div className="mt-12 space-y-3">
          {preguntas.map(([q, a], i) => (
            <Reveal key={q} delay={i * 40}>
              <details className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 open:border-mint-300/30 open:bg-mint-500/[0.04]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-white">
                  {q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-mint-300 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-200">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <WaButton variant="ghost" mensaje="Hola, tengo una pregunta sobre Integra.">Hacer otra pregunta</WaButton>
        </Reveal>
      </div>
    </section>
  );
}
