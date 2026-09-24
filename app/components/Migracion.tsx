import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeader, WaButton } from "./Ui";

const pasos = [
  { icon: "chat", titulo: "Diagnóstico", texto: "Conocemos tu operación: routers, planes, grupos de corte, facturación y cómo cobras hoy." },
  { icon: "layers", titulo: "Migración de tus datos", texto: "Traemos clientes, contratos, planes y routers desde tu sistema actual, desde Excel o directamente desde tu MikroTik." },
  { icon: "users", titulo: "Capacitación", texto: "Tu equipo de caja, soporte y técnicos aprende a usar la plataforma con su propia información." },
  { icon: "headset", titulo: "Acompañamiento", texto: "Te acompañamos en tu primer ciclo de facturación y seguimos contigo por WhatsApp." },
];

export default function Migracion() {
  return (
    <section id="migracion" className="relative py-16 md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink-900/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader eyebrow="Migración asistida" title="Cámbiate sin" highlight="empezar de cero">
          ¿Ya usas otro software o llevas todo en Excel? Nosotros hacemos el trabajo pesado para que tu
          operación no se detenga.
        </SectionHeader>
        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p, i) => (
            <Reveal as="li" key={p.titulo} delay={i * 80} className="relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-500/15 text-mint-300">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <span className="font-display text-4xl font-semibold text-white/10">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-semibold text-white">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">{p.texto}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12 flex justify-center">
          <WaButton mensaje="Hola, quiero migrar mi ISP a Integra. ¿Cómo es el proceso?">Quiero migrar mi ISP</WaButton>
        </Reveal>
      </div>
    </section>
  );
}
