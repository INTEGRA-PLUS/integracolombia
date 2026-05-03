import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden border-t border-mint-300/15 bg-ink-950"
    >
      {/* mint horizon glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint-400/60 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[50%] bg-mint-500/10 blur-3xl" />

      {/* large brand watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-10 select-none text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-mint-500/[0.04] md:text-[14vw]"
      >
        INTEGRA
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size={42} />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-300">
              Software especializado para ISP. Una plataforma integral diseñada
              para optimizar cada rincón de tu operación.
            </p>

            <a
              href="mailto:contacto@integracolombia.co"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-mint-300/20 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-mint-300/55 hover:bg-mint-500/10"
            >
              <span className="h-2 w-2 rounded-full bg-mint-400 transition-transform duration-500 group-hover:scale-125" />
              contacto@integracolombia.co
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-mint-300/80">
              Plataforma
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {["Inicio", "Servicios", "Soluciones", "Contacto"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="group inline-flex items-center gap-2 text-ink-100 transition-colors duration-300 hover:text-mint-300"
                  >
                    <span className="h-px w-3 bg-current transition-all duration-500 group-hover:w-6" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-mint-300/80">
              Suscríbete
            </h4>
            <p className="mt-4 text-sm text-ink-200">
              Novedades del producto y mejores prácticas para ISP.
            </p>

            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-mint-300/15 pt-8 text-center text-xs text-ink-200 md:flex-row md:text-left">
          <p>© 2025 Integra Colombia S.A.S. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <a
              href="#"
              className="relative inline-block font-semibold text-mint-300 hover:text-mint-200"
            >
              <span>Integra Colombia</span>
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-mint-400" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
