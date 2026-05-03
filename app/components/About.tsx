import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="soluciones" className="relative py-32 md:py-40">
      {/* divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-300">
              <span className="h-1 w-1 rounded-full bg-white" />
              Quiénes somos
            </span>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Conoce <span className="text-gradient">nuestra empresa</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
          {/* Card: Empresa */}
          <Reveal delay={80}>
            <Card
              eyebrow="Integra Colombia Software"
              title="Una sola plataforma para tu operación"
              body="Integra Colombia Software es una empresa dedicada a ofrecer soluciones de software para la gestión integral de empresas de telecomunicaciones en una sola plataforma."
              accent="lines"
            />
          </Reveal>

          {/* Card: Misión y Visión */}
          <Reveal delay={180}>
            <Card
              eyebrow="Misión y Visión"
              title="Nuestra misión y visión"
              body="Nos especializamos en desarrollar módulos que optimizan la operación de los ISP, facilitando la gestión y mejorando la eficiencia de sus procesos."
              accent="grid"
            />
          </Reveal>
        </div>

        {/* Pillars row */}
        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <Pillar {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    title: "Integral",
    text: "Todos los procesos del ISP en una única plataforma cohesiva.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Eficiente",
    text: "Módulos diseñados para acelerar y simplificar la operación.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Especializada",
    text: "Conocimiento profundo del negocio de los ISP en LATAM.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

function Card({
  eyebrow,
  title,
  body,
  accent,
}: {
  eyebrow: string;
  title: string;
  body: string;
  accent: "lines" | "grid";
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-ink-900 to-ink-950 p-8 shadow-elevated transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:shadow-glow-strong md:p-10">
      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-3xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
      </div>

      {/* accent visual */}
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 opacity-30 transition-opacity duration-500 group-hover:opacity-60">
        {accent === "lines" ? (
          <svg viewBox="0 0 160 160" className="h-full w-full">
            {Array.from({ length: 14 }).map((_, i) => (
              <line
                key={i}
                x1={160 - i * 12}
                y1="0"
                x2="160"
                y2={i * 12}
                stroke="#ffffff"
                strokeOpacity={0.5 - i * 0.03}
              />
            ))}
          </svg>
        ) : (
          <svg viewBox="0 0 160 160" className="h-full w-full">
            <defs>
              <pattern id="dotsA" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1" fill="#ffffff" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="160" height="160" fill="url(#dotsA)" />
          </svg>
        )}
      </div>

      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-ink-300">
        {eyebrow}
      </span>
      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
        {title}
      </h3>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-200">{body}</p>

      <div className="mt-8 flex items-center gap-3 text-sm text-ink-300 transition-colors duration-300 group-hover:text-white">
        Conocer más
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-transform duration-500 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </article>
  );
}

function Pillar({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition-all duration-500 hover:border-white/30 hover:bg-ink-900">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white shadow-inner-soft transition-all duration-500 group-hover:bg-white group-hover:text-black">
        {icon}
      </div>
      <h4 className="font-display text-lg font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-ink-300">{text}</p>
      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-white via-white/40 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
    </div>
  );
}
