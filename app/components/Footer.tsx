import { WHATSAPP_VISIBLE, wa } from "../lib/contacto";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";

const columnas = [
  {
    titulo: "Productos",
    links: [
      { href: "#isp", label: "Software para ISP" },
      { href: "#crm", label: "CRM + IA para WhatsApp" },
      { href: "#pagos", label: "Integra Pay" },
      { href: "#web", label: "Páginas web para ISP" },
    ],
  },
  {
    titulo: "Empresa",
    links: [
      { href: "#ecosistema", label: "Cómo funciona" },
      { href: "#migracion", label: "Migración asistida" },
      { href: "#faq", label: "Preguntas frecuentes" },
      { href: "/trabaja-con-nosotros", label: "Trabaja con nosotros" },
    ],
  },
  {
    titulo: "Legal",
    links: [
      { href: "/privacidad.html", label: "Política de privacidad" },
      { href: "/terminos.html", label: "Términos y condiciones" },
      { href: "/eliminacion-de-datos.html", label: "Eliminación de datos" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-mint-300/15 bg-ink-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint-400/60 to-transparent" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-10 select-none text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-mint-500/[0.04] md:text-[14vw]"
      >
        INTEGRA
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo size={40} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-300">
              Software, CRM con inteligencia artificial y pagos en línea para empresas de internet y
              televisión. Hecho en Colombia.
            </p>
            <a
              href={wa("Hola, vengo de la página de Integra y quiero información.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-mint-300/30 bg-mint-500/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-mint-500/20"
            >
              <WhatsAppIcon className="h-4 w-4 text-mint-300" />
              {WHATSAPP_VISIBLE}
            </a>
          </div>
          {columnas.map((c) => (
            <div key={c.titulo} className="md:col-span-2 lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-300">{c.titulo}</h3>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-ink-200 transition-colors hover:text-white">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-8 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Integra Colombia S.A.S. Todos los derechos reservados.</span>
          <span>Software para ISP · Colombia</span>
        </div>
      </div>
    </footer>
  );
}
