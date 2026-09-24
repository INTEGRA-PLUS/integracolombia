"use client";

import { useEffect, useRef } from "react";

// Fondo de red: nodos que se mueven y se enlazan cuando están cerca, como una
// red de fibra viva. Se pausa fuera de pantalla y queda quieta con «reducir movimiento».
export default function RedParticulas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, visible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let puntos: P[] = [];

    const iniciar = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(90, (w * h) / 16000));
      puntos = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const dibujar = () => {
      ctx.clearRect(0, 0, w, h);
      const d2max = 130 * 130;
      for (let i = 0; i < puntos.length; i++) {
        const a = puntos[i];
        for (let j = i + 1; j < puntos.length; j++) {
          const b = puntos[j];
          const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < d2max) {
            ctx.strokeStyle = `rgba(122,204,74,${0.22 * (1 - d2 / d2max)})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const p of puntos) {
        ctx.fillStyle = "rgba(185,230,160,0.85)";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
    };

    const paso = () => {
      for (const p of puntos) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      dibujar();
      if (visible) raf = requestAnimationFrame(paso);
    };

    iniciar();
    if (quieto) dibujar(); else raf = requestAnimationFrame(paso);

    const obs = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !quieto) { cancelAnimationFrame(raf); raf = requestAnimationFrame(paso); }
    });
    obs.observe(canvas);
    const onResize = () => { iniciar(); if (quieto) dibujar(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); obs.disconnect(); window.removeEventListener("resize", onResize); };
  }, []);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none ${className}`} />;
}
