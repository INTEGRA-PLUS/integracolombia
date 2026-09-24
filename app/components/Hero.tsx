import AntennaScene from "./AntennaScene";
import Icon from "./Icon";
import { WaButton } from "./Ui";

// Cifras reales de la plataforma (medidas en producción, septiembre 2026).
const stats = [
  { value: "+45", label: "ISP operando en Integra" },
  { value: "+52.000", label: "suscriptores gestionados" },
  { value: "+38.000", label: "facturas generadas al mes" },
  { value: "+160", label: "routers MikroTik conectados" },
];

const productos = [
  { icon: "router", nombre: "Software para ISP", href: "#isp" },
  { icon: "sparkles", nombre: "CRM + IA en WhatsApp", href: "#crm" },
  { icon: "wallet", nombre: "Integra Pay", href: "#pagos" },
  { icon: "globe", nombre: "Páginas web para ISP", href: "#web" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-20 brand-gradient-bg" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-radial opacity-50" />
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[1200px] -translate-x-1/2 rounded-[50%] bg-radial-fade blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-[420px] w-[1400px] -translate-x-1/2 rounded-[50%] bg-mint-500/30 blur-3xl" />
        {/* Funde el degradado con la sección siguiente en lugar de cortarlo en seco. */}
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-b from-transparent via-ink-950/70 to-ink-950" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-7 flex justify-center animate-fade-in">
          <span className="inline-flex items-center gap-3 rounded-full border border-mint-400/25 bg-white/[0.04] px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] text-mint-200 backdrop-blur-md sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-mint-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-400" />
            </span>
            HECHO EN COLOMBIA PARA ISP DE LATAM
          </span>
        </div>

        <h1 className="mx-auto max-w-5xl text-center font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          <span className="block animate-fade-up text-gradient-soft">Todo tu ISP en</span>
          <span className="relative inline-block animate-fade-up" style={{ animationDelay: "140ms" }}>
            <span className="shimmer-text">un solo ecosistema</span>
            <span aria-hidden className="absolute -inset-x-6 -inset-y-2 -z-10 rounded-2xl bg-mint-500/15 blur-2xl" />
          </span>
        </h1>

        <p
          className="mx-auto mt-7 max-w-3xl text-center text-base leading-relaxed text-ink-200 sm:text-xl animate-fade-up"
          style={{ animationDelay: "280ms" }}
        >
          Contratos, red MikroTik y OLT, facturación electrónica DIAN, cobro automático con{" "}
          <span className="text-white">Integra Pay</span> y atención por WhatsApp con{" "}
          <span className="text-white">inteligencia artificial</span>. Tu cliente paga y el servicio se
          reconecta solo: sin llamadas, sin Excel, sin entrar al router.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "420ms" }}>
          <WaButton mensaje="Hola, quiero agendar una demostración de Integra para mi ISP.">
            Agendar una demostración
          </WaButton>
          <WaButton variant="ghost" mensaje="Hola, quiero saber cuánto cuesta Integra para mi ISP.">
            Conocer planes y precios
          </WaButton>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5 animate-fade-up" style={{ animationDelay: "520ms" }}>
          {productos.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-ink-100 backdrop-blur-md transition-colors hover:border-mint-300/40 hover:text-white"
            >
              <Icon name={p.icon} className="h-4 w-4 text-mint-400" />
              {p.nombre}
            </a>
          ))}
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl animate-tilt-in" style={{ animationDelay: "700ms" }}>
          <div className="relative overflow-hidden rounded-3xl border border-mint-300/20 bg-ink-900 shadow-elevated">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <AntennaScene />
            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent md:block" />
            <div className="relative grid grid-cols-2 gap-3 p-4 sm:p-6 md:absolute md:inset-x-0 md:bottom-0 md:grid-cols-4 md:p-8">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-mint-300/20 bg-ink-950/75 px-4 py-3 backdrop-blur-md shadow-glow">
                  <div className="font-display text-xl font-semibold text-white sm:text-2xl">{s.value}</div>
                  <div className="text-[10px] uppercase leading-snug tracking-[0.14em] text-mint-200/80 sm:text-[11px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-x-10 -bottom-20 h-32 rounded-full bg-mint-500/30 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
