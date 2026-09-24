"use client";

import { useEffect, useState } from "react";

const frases = ["Se factura sola.", "Se cobra sola.", "Se reconecta sola.", "Atiende con IA, 24/7."];

export default function FraseRotativa() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % frases.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="inline-flex h-[1.25em] overflow-hidden align-bottom" aria-live="polite">
      <span key={i} className="palabra text-gradient-mint">{frases[i]}</span>
    </span>
  );
}
