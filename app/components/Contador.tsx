"use client";

import { useEffect, useRef, useState } from "react";

// Cifra que sube desde cero cuando entra en pantalla («+52.000»).
export default function Contador({ valor, prefijo = "", duracion = 1800 }: { valor: number; prefijo?: string; duracion?: number }) {
  // Arranca en el valor real: es lo que ve Google y quien no ejecuta JavaScript.
  const [n, setN] = useState(valor);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(valor); return; }
    let raf = 0;
    setN(0);
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const k = Math.min(1, (t - t0) / duracion);
        setN(Math.round(valor * (1 - Math.pow(1 - k, 3))));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(raf); };
  }, [valor, duracion]);

  return <span ref={ref} className="tabular-nums">{prefijo}{n.toLocaleString("es-CO")}</span>;
}
