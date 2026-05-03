import AntennaScene from "./AntennaScene";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-40 pb-32 md:pt-52 md:pb-44"
    >
      {/* Brand gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-20 brand-gradient-bg" />

      {/* Decorative layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-radial opacity-50" />
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[1200px] -translate-x-1/2 rounded-[50%] bg-radial-fade blur-3xl" />
        {/* Mint horizon glow */}
        <div className="absolute -bottom-32 left-1/2 h-[420px] w-[1400px] -translate-x-1/2 rounded-[50%] bg-mint-500/30 blur-3xl" />
        {/* Cool navy beam */}
        <div className="absolute left-1/2 top-1/3 h-[1px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-mint-300/60 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Eyebrow */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <span className="group inline-flex items-center gap-3 rounded-full border border-mint-400/25 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-mint-200 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-mint-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-400" />
            </span>
            PLATAFORMA INTEGRA · v2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-5xl text-center font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block animate-fade-up text-gradient-soft">SOFTWARE</span>
          <span
            className="block animate-fade-up text-gradient-soft"
            style={{ animationDelay: "120ms" }}
          >
            ESPECIALIZADO
          </span>
          <span
            className="relative inline-block animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <span className="shimmer-text">PARA ISP</span>
            <span
              aria-hidden
              className="absolute -inset-x-6 -inset-y-2 -z-10 rounded-2xl bg-mint-500/15 blur-2xl"
            />
          </span>
        </h1>

        {/* Sub */}
        <p
          className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-ink-200 sm:text-xl animate-fade-up"
          style={{ animationDelay: "380ms" }}
        >
          Optimiza la operación de tu ISP con nuestra plataforma avanzada.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "520ms" }}
        >
          <a
            href="#servicios"
            className="group relative inline-flex overflow-hidden rounded-full bg-mint-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-ink-950 shadow-glow-strong transition-transform duration-300 hover:-translate-y-0.5 hover:bg-mint-400"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Explorar servicios
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-2 rounded-full border border-mint-300/30 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:border-mint-300/70 hover:bg-mint-500/10"
          >
            Hablar con ventas
            <span className="h-1.5 w-1.5 rounded-full bg-mint-400 transition-all duration-300 group-hover:scale-150" />
          </a>
        </div>

        {/* Antenna scene */}
        <div
          className="relative mx-auto mt-20 max-w-5xl animate-tilt-in"
          style={{ animationDelay: "700ms" }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-mint-300/20 bg-ink-900 shadow-elevated">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <AntennaScene />
            {/* Glass overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
            {/* Stat chips */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 md:p-8">
              <Stat label="Uptime garantizado" value="99.98%" />
              <Stat label="Suscriptores gestionados" value="+1.4M" />
              <Stat label="ISP en operación" value="180+" />
            </div>
          </div>

          {/* Floating mint glow */}
          <div className="pointer-events-none absolute -inset-x-10 -bottom-20 h-32 rounded-full bg-mint-500/30 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-mint-300/20 bg-ink-950/70 px-5 py-3 backdrop-blur-md shadow-glow">
      <div className="font-display text-2xl font-semibold text-white">{value}</div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-mint-200/80">{label}</div>
    </div>
  );
}
