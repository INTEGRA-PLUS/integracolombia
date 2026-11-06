import type { Metadata } from "next";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import Logo from "../components/Logo";
import Postulacion from "../components/Postulacion";

export const metadata: Metadata = {
  title: "Trabaja con nosotros — Desarrollador de software | Integra",
  description:
    "Buscamos desarrollador de software con experiencia programando con IA, GitHub y manejo de servidores por terminal. Envía tu hoja de vida.",
  alternates: { canonical: "/trabaja-con-nosotros" },
  openGraph: {
    title: "Buscamos desarrollador de software — Integra",
    description: "Programación con IA, GitHub y servidores por terminal. Envía tu hoja de vida.",
    url: "https://integracolombia.co/trabaja-con-nosotros",
    siteName: "Integra Colombia",
    locale: "es_CO",
    type: "website",
  },
};

const requisitos = [
  {
    icono: "bot",
    titulo: "Programación con inteligencia artificial",
    texto: "Desarrollas software apoyándote en herramientas de IA como Claude, ChatGPT, Copilot o Cursor, con criterio para validar lo que generan.",
  },
  {
    icono: "git",
    titulo: "Git y GitHub",
    texto: "Manejas repositorios, ramas, commits y pull requests, y trabajas con revisión de código en equipo.",
  },
  {
    icono: "terminal",
    titulo: "Servidores Linux por terminal",
    texto: "Te conectas por SSH, despliegas con Docker y revisas logs en producción.",
    plus: true,
  },
];

const ofrecemos = [
  { icono: "layers", texto: "Productos reales en producción: software para ISP, CRM de WhatsApp con IA y pagos en línea." },
  { icono: "api", texto: "Stack moderno: Laravel, React, TypeScript, Next.js, MySQL y Docker." },
  { icono: "users", texto: "Equipo pequeño, decisiones rápidas y crecimiento técnico." },
];

/**
 * La vacante y el formulario de hojas de vida.
 *
 * Página aparte con su propia barra: la del home son anclas de esa página
 * (#isp, #crm…) y aquí no llevarían a nada. Las hojas de vida se guardan en
 * el CRM (POSTULACIONES_URL) y se revisan en Master → Hojas de vida.
 */
export default function TrabajaConNosotros() {
  return (
    <main className="relative noise overflow-hidden bg-ink-950 text-ink-50">
      <header className="relative z-10 border-b border-white/[0.06]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
          <a href="/" aria-label="Integra — inicio"><Logo size={34} /></a>
          <a href="/" className="text-sm font-medium text-ink-200 transition-colors hover:text-white">Ir al inicio</a>
        </div>
      </header>

      <section className="relative">
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-mint-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-6 md:pt-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-mint-400/25 bg-mint-500/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-mint-300">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-400" />
            Trabaja con nosotros
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Buscamos <span className="text-gradient-mint">desarrollador de software</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
            Únete al equipo que construye Integra: el software con el que los proveedores de internet de
            Colombia facturan, atienden por WhatsApp y administran su red.
          </p>
          <a href="#postular" className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-mint-500 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-glow-strong transition-all hover:-translate-y-0.5 hover:bg-mint-400">
            Postularme <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Lo que debes saber</h2>
          <ul className="mt-6 space-y-4">
            {requisitos.map((r) => (
              <li key={r.titulo} className={`flex gap-4 rounded-2xl border p-5 backdrop-blur-md ${r.plus ? "border-mint-400/40 bg-mint-500/[0.07]" : "border-white/[0.08] bg-white/[0.03]"}`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-mint-400/30 bg-mint-500/10 text-mint-300">
                  <Icon name={r.icono} className="h-5 w-5" />
                </span>
                <div>
                  <p className="flex flex-wrap items-center gap-2 font-semibold text-white">
                    {r.titulo}
                    {r.plus && <span className="rounded-full bg-mint-500 px-2 py-0.5 text-[10px] font-bold tracking-widest text-ink-950">PLUS</span>}
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-200">{r.texto}</p>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-2xl font-semibold text-white sm:text-3xl">Lo que ofrecemos</h2>
          <ul className="mt-6 space-y-3">
            {ofrecemos.map((o) => (
              <li key={o.texto} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-200">
                <Icon name={o.icono} className="mt-0.5 h-[18px] w-[18px] shrink-0 text-mint-300" />
                {o.texto}
              </li>
            ))}
          </ul>
        </div>

        <div id="postular" className="scroll-mt-6">
          <Postulacion />
        </div>
      </section>

      <Footer />
    </main>
  );
}
