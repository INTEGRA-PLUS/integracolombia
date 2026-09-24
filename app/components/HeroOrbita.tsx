"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

// Módulos alrededor del símbolo. Posición en % del cuadro (centro = 50/50).
const satelites = [
  { icon: "router", label: "MikroTik", x: 50, y: 4 },
  { icon: "fiber", label: "OLT · Fibra", x: 91, y: 27 },
  { icon: "invoice", label: "Factura DIAN", x: 91, y: 73 },
  { icon: "wallet", label: "Integra Pay", x: 50, y: 96 },
  { icon: "sparkles", label: "WhatsApp IA", x: 9, y: 73 },
  { icon: "phone", label: "App clientes", x: 9, y: 27 },
];

// Eventos que la plataforma genera de verdad todos los días (textos de ejemplo).
const eventos = [
  { icon: "bolt", titulo: "Servicio reconectado", detalle: "Pago aprobado · salió de morosos en 2 s" },
  { icon: "invoice", titulo: "Factura electrónica aceptada", detalle: "DIAN · FV-10482 · $65.000" },
  { icon: "sparkles", titulo: "La IA resolvió un chat", detalle: "Leyó el comprobante y confirmó el pago" },
  { icon: "headset", titulo: "Radicado creado", detalle: "Diagnóstico: pérdida de señal en la ONU" },
  { icon: "send", titulo: "Ciclo de facturación listo", detalle: "1.248 facturas enviadas por WhatsApp" },
  { icon: "router", titulo: "Corte automático aplicado", detalle: "Factura vencida · cliente en morosos" },
];

export default function HeroOrbita() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % eventos.length), 2600);
    return () => clearInterval(t);
  }, []);
  const a = eventos[i];
  const b = eventos[(i + 1) % eventos.length];

  return (
    <div className="mx-auto w-full max-w-[560px]">
    <div className="relative aspect-square w-full">
      {/* Halo */}
      <div aria-hidden className="absolute inset-[18%] rounded-full bg-mint-500/25 blur-[70px]" />

      {/* Órbitas, nodos y paquetes de datos */}
      <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="nucleo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7acc4a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7acc4a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="enlace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7acc4a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7acc4a" stopOpacity="0.1" />
          </linearGradient>
          {[110, 170, 230].map((r) => (
            <path key={r} id={`orb${r}`} d={`M300 ${300 - r} a${r} ${r} 0 1 1 -0.01 0`} />
          ))}
        </defs>

        <circle cx="300" cy="300" r="150" fill="url(#nucleo)" />

        {/* Enlaces del centro a cada módulo, con datos que fluyen */}
        {satelites.map((s) => (
          <line
            key={s.label}
            x1="300" y1="300" x2={s.x * 6} y2={s.y * 6}
            stroke="url(#enlace)" strokeWidth="1.2" strokeDasharray="4 7"
            className="flujo"
          />
        ))}

        {/* Anillos que giran a distinto ritmo y sentido */}
        <g className="giro-lento">
          <circle cx="300" cy="300" r="230" fill="none" stroke="rgba(122,204,74,0.35)" strokeWidth="1.5" strokeDasharray="2 10" />
          {[0, 90, 180, 270].map((g) => (
            <circle key={g} cx={300 + 230 * Math.cos((g * Math.PI) / 180)} cy={300 + 230 * Math.sin((g * Math.PI) / 180)} r="6" fill="#7acc4a" />
          ))}
        </g>
        <g className="giro-inverso">
          <circle cx="300" cy="300" r="170" fill="none" stroke="rgba(122,204,74,0.55)" strokeWidth="2.5" strokeDasharray="120 40" strokeLinecap="round" />
          {[45, 135, 225, 315].map((g) => (
            <circle key={g} cx={300 + 170 * Math.cos((g * Math.PI) / 180)} cy={300 + 170 * Math.sin((g * Math.PI) / 180)} r="5" fill="#98d96f" />
          ))}
        </g>
        <g className="giro-rapido">
          <circle cx="300" cy="300" r="110" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeDasharray="60 22" />
        </g>

        {/* Paquetes viajando por las órbitas */}
        {[
          { r: 110, dur: "5s", c: "#ffffff" },
          { r: 170, dur: "8s", c: "#b9e6a0" },
          { r: 230, dur: "12s", c: "#7acc4a" },
          { r: 230, dur: "12s", c: "#7acc4a", delay: "-6s" },
        ].map((p, k) => (
          <circle key={k} r="4" fill={p.c} className="paquete">
            <animateMotion dur={p.dur} repeatCount="indefinite" begin={p.delay ?? "0s"}>
              <mpath href={`#orb${p.r}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>

      {/* Símbolo al centro */}
      <div className="absolute left-1/2 top-1/2 flex h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-mint-400/30 bg-ink-950/80 shadow-glow-strong backdrop-blur-md">
        <span aria-hidden className="absolute inset-0 animate-pulseRing rounded-full border border-mint-400/40" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/marca/simbolo.png" alt="Integra" className="h-[72%] w-auto drop-shadow-[0_0_24px_rgba(122,204,74,0.55)]" />
      </div>

      {/* Módulos */}
      {satelites.map((s, k) => (
        <div
          key={s.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
        >
          <div className="flotar flex items-center gap-2 rounded-full border border-mint-300/30 bg-ink-900/85 px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-glow backdrop-blur-md sm:px-3.5 sm:py-2 sm:text-xs" style={{ animationDelay: `${k * -1.1}s` }}>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mint-500 text-ink-950 sm:h-7 sm:w-7">
              <Icon name={s.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
            <span className="hidden whitespace-nowrap sm:inline">{s.label}</span>
          </div>
        </div>
      ))}

    </div>
      {/* Actividad en vivo */}
      <div className="relative z-10 mx-auto mt-10 w-full max-w-[400px] sm:mt-8">
        <div className="rounded-2xl border border-mint-300/25 bg-ink-950/85 p-3 shadow-elevated backdrop-blur-xl">
          <div className="mb-2 flex items-center gap-2 px-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-mint-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-mint-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-400" />
            </span>
            Actividad en tiempo real
          </div>
          {[a, b].map((e, k) => (
            <div
              key={`${i}-${k}`}
              className={`evento flex items-center gap-3 rounded-xl px-2 py-2 ${k === 0 ? "bg-mint-500/10" : "opacity-60"}`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mint-500/15 text-mint-300">
                <Icon name={e.icon} className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-[13px] font-semibold text-white">{e.titulo}</div>
                <div className="truncate text-[11px] text-ink-300">{e.detalle}</div>
              </div>
              {k === 0 && <Icon name="check" className="ml-auto h-4 w-4 shrink-0 text-mint-400" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
