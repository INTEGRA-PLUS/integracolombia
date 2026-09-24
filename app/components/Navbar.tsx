"use client";

import { useEffect, useState } from "react";
import { wa } from "../lib/contacto";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";

const links = [
  { href: "#isp", label: "Plataforma ISP" },
  { href: "#crm", label: "CRM + IA" },
  { href: "#pagos", label: "Integra Pay" },
  { href: "#web", label: "Páginas web" },
  { href: "#migracion", label: "Migración" },
  { href: "#faq", label: "Preguntas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "py-3 bg-ink-950/85 backdrop-blur-xl border-b border-mint-300/10 shadow-[0_8px_32px_rgba(0,4,24,0.55)]"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="Integra — inicio">
          <Logo size={36} />
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-200 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={wa("Hola, vengo de la página de Integra y quiero hablar con un asesor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-mint-500 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-glow transition-all hover:-translate-y-0.5 hover:bg-mint-400 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Hablar por WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto max-w-7xl px-5 pb-4 pt-2 lg:hidden">
          <ul className="grid gap-1 rounded-2xl border border-white/10 bg-ink-900/90 p-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-100 hover:bg-white/[0.06]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={wa("Hola, vengo de la página de Integra y quiero hablar con un asesor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-mint-500 px-4 py-3 text-sm font-semibold text-ink-950"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Hablar por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
