import type { ReactNode } from "react";
import { wa } from "../lib/contacto";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  children,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  children?: ReactNode;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-mint-400/25 bg-mint-500/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-mint-300">
        <span className="h-1.5 w-1.5 rounded-full bg-mint-400" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
        {title} {highlight && <span className="text-gradient-mint">{highlight}</span>}
      </h2>
      {children && <p className="mt-5 text-base leading-relaxed text-ink-200 sm:text-lg">{children}</p>}
    </Reveal>
  );
}

export function WaButton({
  mensaje,
  children,
  variant = "primary",
  className = "",
}: {
  mensaje: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-mint-500 text-ink-950 shadow-glow-strong hover:bg-mint-400"
      : "border border-mint-300/30 bg-white/[0.03] text-white backdrop-blur-md hover:border-mint-300/70 hover:bg-mint-500/10";
  return (
    <a href={wa(mensaje)} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}
