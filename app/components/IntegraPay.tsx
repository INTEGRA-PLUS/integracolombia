import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeader, WaButton } from "./Ui";

const beneficios = [
  { icon: "send", titulo: "Cada factura, publicada sola", texto: "Apenas se genera la factura del mes, sube a la pasarela con el valor, el vencimiento y los datos del cliente. Si algo falla, se reintenta cada 15 minutos." },
  { icon: "chat", titulo: "Cobro directo al WhatsApp", texto: "El cliente recibe el cobro en su WhatsApp y paga desde el celular, sin ir a un punto de pago." },
  { icon: "refresh", titulo: "Conciliación automática", texto: "El pago crea el recibo de caja, deja la factura pagada, registra el movimiento contable y cierra el caso de cartera." },
  { icon: "bolt", titulo: "Reconexión inmediata", texto: "Si el cliente estaba cortado, el servicio vuelve en el MikroTik y la OLT en cuanto se confirma el pago." },
  { icon: "shield", titulo: "Nunca se cobra dos veces", texto: "Si el cliente paga en caja o por transferencia, el cobro se retira de la pasarela. Si anulas o editas la factura, se actualiza allá también." },
  { icon: "chart", titulo: "Auditoría mensual", texto: "Por cada grupo de corte ves qué facturas están sincronizadas, cuáles difieren y cuáles faltan, y las reenvías en bloque." },
];

export default function IntegraPay() {
  return (
    <section id="pagos" className="relative py-16 md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink-900/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal className="mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/marca/integra-pay.png" alt="Integra Pay" className="h-12 w-auto sm:h-14" loading="lazy" />
            </Reveal>
            <SectionHeader align="left" eyebrow="Integra Pay · pasarela de pagos" title="Cobra en línea y" highlight="deja de perseguir pagos">
              La pasarela de pagos de Integra está conectada a tu facturación. Tus clientes pagan desde el
              celular y tú no tienes que conciliar nada a mano.
            </SectionHeader>
            <Reveal className="mt-8 flex flex-wrap gap-3">
              <WaButton mensaje="Hola, quiero activar Integra Pay para cobrar en línea a mis clientes.">
                Activar Integra Pay
              </WaButton>
            </Reveal>
          </div>

          {/* Tarjeta ilustrativa del recorrido de un pago */}
          <Reveal className="relative">
            <div aria-hidden className="absolute -inset-8 rounded-full bg-mint-500/10 blur-3xl" />
            <div className="relative rounded-3xl border border-mint-300/20 bg-ink-900/80 p-6 shadow-elevated sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-mint-300">Factura FV-10482</span>
                <span className="rounded-full bg-mint-500/15 px-3 py-1 text-xs font-semibold text-mint-300">Pagada</span>
              </div>
              <div className="mt-4 font-display text-4xl font-semibold text-white">$65.000</div>
              <div className="text-sm text-ink-300">Plan fibra 300 Mbps · octubre</div>
              <ol className="mt-7 space-y-4">
                {[
                  ["Factura generada", "Ciclo del grupo de corte 5"],
                  ["Publicada en Integra Pay", "Cobro enviado al WhatsApp del cliente"],
                  ["Pago aprobado", "Recibo de caja creado automáticamente"],
                  ["Servicio reconectado", "Salió de morosos en el MikroTik"],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-500 text-ink-950">
                      <Icon name={i === 3 ? "bolt" : "check"} className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">{t}</div>
                      <div className="text-xs text-ink-300">{d}</div>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-center text-[11px] text-ink-400">Ejemplo ilustrativo</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 60} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition-colors hover:border-mint-300/30">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-500/15 text-mint-300">
                <Icon name={b.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">{b.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">{b.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
