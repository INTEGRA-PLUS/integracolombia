"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#contacto", label: "Contacto" },
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
        scrolled
          ? "py-3 bg-ink-950/75 backdrop-blur-xl border-b border-mint-300/10 shadow-[0_8px_32px_rgba(0,4,24,0.55)]"
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="group flex items-center">
          <Logo size={38} />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative inline-flex items-center px-4 py-2 text-sm font-medium tracking-wide text-ink-200 transition-colors duration-300 hover:text-white"
              >
                <span>{l.label}</span>
                <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-mint-400 via-mint-300 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href="#contacto"
              className="group relative inline-flex overflow-hidden rounded-full border border-mint-300/30 bg-mint-500/10 px-5 py-2 text-sm font-medium tracking-wide text-white shadow-glow transition-all duration-300 hover:bg-mint-500 hover:text-ink-950 hover:shadow-glow-strong"
            >
              <span className="relative z-10">Hablemos</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative h-10 w-10 rounded-full border border-white/10 text-white md:hidden"
        >
          <span
            className={`absolute left-2.5 right-2.5 top-1/2 h-px bg-white transition-transform duration-300 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute left-2.5 right-2.5 top-1/2 h-px bg-white transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-2.5 right-2.5 top-1/2 h-px bg-white transition-transform duration-300 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-6 mt-4 space-y-1 rounded-2xl border border-white/10 bg-ink-900/80 p-3 backdrop-blur-xl">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-ink-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
