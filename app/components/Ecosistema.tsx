import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeader, WaButton } from "./Ui";

// El ciclo real de cobro, tal como lo ejecuta la plataforma hoy.
const pasos = [
  {
    icon: "invoice",
    titulo: "Se factura solo",
    texto: "El día del ciclo, cada grupo de corte genera sus facturas, con prorrateo y facturación electrónica DIAN.",
  },
  {
    icon: "send",
    titulo: "Llega por WhatsApp",
    texto: "La factura sube sola a Integra Pay y el cliente la recibe en su WhatsApp, lista para pagar.",
  },
  {
    icon: "wallet",
    titulo: "El cliente paga",
    texto: "En línea desde la pasarela, o en caja: el recibo sale con tirilla por WhatsApp.",
  },
  {
    icon: "refresh",
    titulo: "Se concilia al instante",
    texto: "El pago crea el recibo, deja la factura pagada y registra el movimiento contable.",
  },
  {
    icon: "bolt",
    titulo: "Se reconecta solo",
    texto: "Si estaba cortado, sale de morosos en el MikroTik y la OLT. Si no paga, el corte también es automático.",
  },
];

export default function Ecosistema() {
  return (
    <section id="ecosistema" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader eyebrow="Así trabaja todo junto" title="Del cobro a la reconexión," highlight="sin tocar nada">
          Software, pasarela y WhatsApp hablan entre sí. Lo que antes eran llamadas, capturas de pantalla y
          entrar al router uno por uno, ahora pasa solo, todos los meses.
        </SectionHeader>

        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-mint-400/50 to-transparent lg:block" />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {pasos.map((p, i) => (
              <Reveal as="li" key={p.titulo} delay={i * 90} className="relative flex flex-col">
                <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-mint-300/30 bg-ink-900 text-mint-300 shadow-glow">
                  <Icon name={p.icon} className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-mint-500 text-[11px] font-bold text-ink-950">
                    {i + 1}
                  </span>
                </div>
                <div className="mt-5 flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 text-center">
                  <h3 className="font-display text-lg font-semibold text-white">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-200">{p.texto}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-14 flex justify-center">
          <WaButton mensaje="Hola, quiero ver cómo funciona el cobro y la reconexión automática de Integra.">
            Quiero verlo funcionando
          </WaButton>
        </Reveal>
      </div>
    </section>
  );
}
