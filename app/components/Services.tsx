import Reveal from "./Reveal";

const services = [
  {
    title: "Gestión de Suscriptores",
    desc: "Altas, planes, facturación y cortes automáticos en un panel unificado.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 19c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Monitoreo de Red",
    desc: "Visibilidad en tiempo real de equipos, enlaces y disponibilidad por sector.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M3 12a9 9 0 0118 0M6 12a6 6 0 0112 0M9 12a3 3 0 016 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Facturación Electrónica",
    desc: "Emite, valida y entrega facturas conforme a la normativa DIAN.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M6 3h9l4 4v14H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12h7M9 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Tickets y Soporte",
    desc: "Mesa de ayuda integrada con SLAs, notificaciones y portal del cliente.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Portal de Pagos",
    desc: "Pagos en línea, recordatorios y conciliación automática con tu pasarela.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="2.5" y="6" width="19" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 10h19M7 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Reportes & BI",
    desc: "Indicadores operativos y financieros para decisiones basadas en datos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 20V8M10 20V4M16 20v-7M22 20H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden py-32 md:py-40"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
        <div className="absolute inset-0 grid-bg mask-fade-y opacity-40" />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-mint-500/[0.08] blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-mint-400/[0.06] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-mint-300/25 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-mint-200">
              <span className="h-1 w-1 rounded-full bg-mint-400" />
              Capacidades
            </span>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Nuestros <span className="text-gradient">Servicios</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-200">
              Una plataforma completa para que tu ISP opere con precisión, escale
              sin fricción y entregue una experiencia premium a cada suscriptor.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <ServiceCard {...s} index={i} />
            </Reveal>
          ))}
        </div>

        {/* CTA bar */}
        <Reveal delay={200}>
          <div className="relative mt-20 overflow-hidden rounded-3xl border border-mint-300/20 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 shadow-elevated md:p-14">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-mint-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-20 h-72 w-72 rounded-full bg-mint-400/15 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h3 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                  ¿Listo para llevar tu ISP al siguiente nivel?
                </h3>
                <p className="mt-3 text-ink-200">
                  Agenda una demo personalizada y descubre cómo Integra puede
                  transformar tu operación.
                </p>
              </div>
              <a
                href="#contacto"
                className="group relative inline-flex shrink-0 items-center gap-3 overflow-hidden rounded-full bg-mint-500 px-7 py-4 text-sm font-semibold tracking-wide text-ink-950 shadow-glow-strong transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint-400"
              >
                <span className="relative z-10">Solicitar demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  icon,
  index,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-mint-300/15 bg-ink-900/60 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-mint-300/45 hover:bg-ink-900 hover:shadow-glow">
      {/* spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(128,214,151,0.22),transparent_55%)]" />
      </div>

      <div className="flex items-start justify-between">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-mint-300/20 bg-gradient-to-br from-mint-500/[0.18] to-white/[0.02] text-mint-300 shadow-inner-soft transition-all duration-500 group-hover:bg-mint-500 group-hover:text-ink-950">
          {icon}
        </div>
        <span className="font-display text-xs tracking-[0.18em] text-mint-300/70">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-200">{desc}</p>

      <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-mint-300/80 transition-colors duration-300 group-hover:text-mint-200">
        <span>Ver más</span>
        <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-12" />
      </div>
    </article>
  );
}
