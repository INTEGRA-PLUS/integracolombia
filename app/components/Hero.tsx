import Contador from "./Contador";
import FraseRotativa from "./FraseRotativa";
import HeroOrbita from "./HeroOrbita";
import Icon from "./Icon";
import RedParticulas from "./RedParticulas";
import { WaButton } from "./Ui";

// Cifras reales de la plataforma, medidas en producción (septiembre de 2026).
const stats = [
  { valor: 45, label: "ISP operando en Integra", icon: "router" },
  { valor: 52000, label: "suscriptores gestionados", icon: "users" },
  { valor: 38000, label: "facturas generadas al mes", icon: "invoice" },
  { valor: 160, label: "routers MikroTik conectados", icon: "fiber" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Fondo: degradado, red viva, piso en perspectiva y resplandores */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,#0c1c4a_0%,#000c32_60%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <RedParticulas className="absolute inset-0 h-full w-full opacity-70" />
        <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-mint-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[10%] h-[560px] w-[560px] rounded-full bg-[#2a5bd7]/25 blur-[140px]" />
        <div className="absolute inset-x-[-20%] bottom-[-5%] h-[45%] piso-perspectiva opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div className="text-center lg:text-left">
          <span className="inline-flex animate-fade-in items-center gap-2.5 rounded-full border border-mint-400/30 bg-mint-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-mint-200 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-mint-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-400" />
            </span>
            SOFTWARE + IA + PAGOS PARA ISP
          </span>

          <h1 className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-[4rem]">
            <span className="block animate-fade-up">Todo tu ISP en</span>
            <span className="relative mt-1 block animate-fade-up" style={{ animationDelay: "120ms" }}>
              <span className="shimmer-text lg:whitespace-nowrap">un solo ecosistema</span>
            </span>
          </h1>

          <p className="mt-6 animate-fade-up font-display text-2xl font-medium text-white sm:text-3xl" style={{ animationDelay: "220ms" }}>
            <span className="text-ink-300">Tu operación: </span>
            <FraseRotativa />
          </p>

          <p className="mx-auto mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-ink-200 sm:text-lg lg:mx-0" style={{ animationDelay: "320ms" }}>
            Red MikroTik y OLT, facturación electrónica DIAN, cobro en línea con Integra Pay y atención por
            WhatsApp con inteligencia artificial. Tu cliente paga y el servicio vuelve solo.
          </p>

          <div className="mt-9 flex animate-fade-up flex-wrap items-center justify-center gap-3 lg:justify-start" style={{ animationDelay: "420ms" }}>
            <WaButton mensaje="Hola, quiero agendar una demostración de Integra para mi ISP.">Agendar una demostración</WaButton>
            <WaButton variant="ghost" mensaje="Hola, quiero saber cuánto cuesta Integra para mi ISP.">Conocer planes y precios</WaButton>
          </div>

          <div className="mt-8 flex animate-fade-up flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-300 lg:justify-start" style={{ animationDelay: "520ms" }}>
            {["Sin servidores propios", "Migración asistida", "Soporte por WhatsApp"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-mint-400" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-tilt-in" style={{ animationDelay: "300ms" }}>
          <HeroOrbita />
        </div>
      </div>

      {/* Cifras reales */}
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-6 md:mt-20">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-mint-300/15 bg-ink-900/50 p-3 backdrop-blur-xl sm:gap-4 sm:p-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-950/60 p-4 sm:p-6">
              <div aria-hidden className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-mint-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <Icon name={s.icon} className="h-5 w-5 text-mint-400" />
              <div className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                <Contador valor={s.valor} prefijo="+" />
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-300 sm:text-[13px]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
