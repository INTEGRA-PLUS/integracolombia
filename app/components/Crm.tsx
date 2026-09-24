import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeader, WaButton } from "./Ui";

const ia = [
  { icon: "sparkles", titulo: "Atiende y resuelve con tus datos", texto: "Entiende lo que escribe el cliente y consulta Integra: su factura, su estado, su plan, su consumo, su WiFi. Si hay una falla, crea el radicado." },
  { icon: "ledger", titulo: "Responde con tu información", texto: "Sube tus PDF, Word o Excel (planes, políticas, preguntas frecuentes) y la IA responde con ellos." },
  { icon: "eye", titulo: "Lee las fotos", texto: "Interpreta el comprobante de pago, la pantalla de error o las luces del router que manda el cliente." },
  { icon: "chart", titulo: "Semáforo de emociones", texto: "Cada conversación en verde, amarillo o rojo con el motivo, para atender primero al cliente molesto." },
  { icon: "invoice", titulo: "Resumen en 5 líneas", texto: "Qué pidió el cliente, qué se le prometió y qué queda pendiente, sin leer todo el chat." },
  { icon: "chat", titulo: "Respuestas sugeridas", texto: "Hasta tres respuestas listas para el asesor; él decide cuál envía." },
];

const funciones = [
  "Bandeja compartida para todo tu equipo, con asignación automática al asesor con menos carga.",
  "Conservas tu mismo número y sigues usando WhatsApp en el celular al mismo tiempo.",
  "WhatsApp, Instagram y Messenger en la misma bandeja.",
  "Tablero por etapas, notas internas, @menciones y respuestas rápidas.",
  "Menús de autogestión y bot que se calla cuando un asesor toma el chat.",
  "Campañas masivas con plantillas aprobadas por Meta, programadas y con reintento de fallidos.",
  "Envía facturas y registra pagos de Integra sin salir del chat.",
  "Reportes por asesor: volumen, tiempos de respuesta y chats sin responder.",
];

export default function Crm() {
  return (
    <section id="crm" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal className="mb-10 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/marca/integra-crm.png" alt="Integra CRM — Todo tu WhatsApp, en un solo lugar" className="h-32 w-auto sm:h-40" loading="lazy" />
        </Reveal>
        <SectionHeader eyebrow="CRM + Inteligencia artificial" title="Tu WhatsApp atiende," highlight="cobra y resuelve 24/7">
          Integra CRM convierte tu línea de WhatsApp en un centro de atención con IA conectado a tu ISP. El
          cliente pregunta por su factura, reporta una falla o paga… y se resuelve sin esperar a un asesor.
        </SectionHeader>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          {/* Conversación de ejemplo */}
          <Reveal className="relative mx-auto w-full max-w-md">
            <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-mint-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b141a] shadow-elevated">
              <div className="flex items-center gap-3 bg-[#1f2c34] px-5 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-500 text-ink-950">
                  <Icon name="router" className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">Tu ISP</div>
                  <div className="text-[11px] text-mint-300">en línea · asistente con IA</div>
                </div>
              </div>
              <div className="space-y-3 px-4 py-5 text-[13px] leading-snug">
                <Burbuja lado="cliente">Hola, ¿cuánto debo? ya pagué por transferencia</Burbuja>
                <Burbuja lado="cliente" adjunto>📎 comprobante.jpg</Burbuja>
                <Burbuja lado="bot">
                  Hola María 👋 Veo tu comprobante por <b>$65.000</b> del 3 de octubre. Tu factura de octubre era
                  de $65.000, así que <b>quedas al día</b>. Ya se lo pasé a caja para registrarlo.
                </Burbuja>
                <Burbuja lado="cliente">y el internet me está fallando desde ayer</Burbuja>
                <Burbuja lado="bot">
                  Revisé tu conexión: tu equipo está en línea pero con pérdida de señal. Abrí el radicado{" "}
                  <b>#4821</b> y un técnico te contacta hoy. ¿Te sirve en la tarde?
                </Burbuja>
              </div>
            </div>
            <p className="relative mt-3 text-center text-xs text-ink-300">Conversación de ejemplo</p>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="font-display text-2xl font-semibold text-white">Inteligencia artificial que sí trabaja</h3>
              <p className="mt-2 text-ink-200">No es un chatbot genérico: está conectada a los datos reales de tu ISP.</p>
            </Reveal>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {ia.map((x, i) => (
                <Reveal key={x.titulo} delay={i * 60} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 transition-colors hover:border-mint-300/30">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-mint-500/15 text-mint-300">
                    <Icon name={x.icon} className="h-5 w-5" />
                  </span>
                  <h4 className="mt-3 text-sm font-semibold text-white">{x.titulo}</h4>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-200">{x.texto}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mt-16 rounded-3xl border border-mint-300/15 bg-ink-900/60 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">Todo tu equipo en una sola bandeja</h3>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {funciones.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-ink-100">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-mint-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <WaButton mensaje="Hola, quiero una demostración del CRM con inteligencia artificial para WhatsApp.">
                Ver el CRM en acción
              </WaButton>
              <p className="text-center text-xs text-ink-300">Conexión oficial con la API de WhatsApp de Meta</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Burbuja({ lado, children, adjunto }: { lado: "cliente" | "bot"; children: React.ReactNode; adjunto?: boolean }) {
  const cliente = lado === "cliente";
  return (
    <div className={`flex ${cliente ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
          cliente ? "rounded-tr-md bg-[#005c4b] text-white" : "rounded-tl-md bg-[#202c33] text-ink-50"
        } ${adjunto ? "italic text-white/80" : ""}`}
      >
        {!cliente && <div className="mb-1 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-mint-300"><Icon name="sparkles" className="h-3 w-3" /> IA</div>}
        {children}
      </div>
    </div>
  );
}
