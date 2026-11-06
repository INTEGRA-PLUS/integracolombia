"use client";

import { useState } from "react";
import { POSTULACIONES_URL } from "../lib/contacto";
import Icon from "./Icon";

/**
 * El formulario de hojas de vida.
 *
 * Va directo al CRM (POSTULACIONES_URL), que guarda el archivo en privado y lo
 * muestra en Master → Hojas de vida. El tope de 5 MB y los formatos se revisan
 * aquí para avisar antes de subir, y otra vez en el servidor.
 */

const CARGO = "Desarrollador de software";
const MAX_MB = 5;
const EXPERIENCIA = ["Menos de 1 año", "1 a 2 años", "3 a 5 años", "Más de 5 años"];

const campo =
  "h-11 w-full rounded-xl border border-white/10 bg-ink-900/70 px-3.5 text-base text-white outline-none transition-colors placeholder:text-ink-400 focus:border-mint-400/60 focus:ring-2 focus:ring-mint-400/15 sm:text-[15px]";

export default function Postulacion() {
  const [estado, setEstado] = useState<"listo" | "enviando" | "enviado">("listo");
  const [error, setError] = useState<string | null>(null);
  const [archivo, setArchivo] = useState<File | null>(null);

  function elegir(f: File | null) {
    setError(null);
    if (f && f.size > MAX_MB * 1024 * 1024) {
      setError(`Tu hoja de vida pesa más de ${MAX_MB} MB. Guárdala en PDF más liviano e inténtalo de nuevo.`);
      setArchivo(null);
      return;
    }
    setArchivo(f);
  }

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!archivo) {
      setError("Adjunta tu hoja de vida en PDF o Word.");
      return;
    }
    setError(null);
    setEstado("enviando");

    const datos = new FormData(e.currentTarget);
    datos.set("cargo", CARGO);
    datos.set("cv", archivo);
    for (const k of ["sabe_ia", "sabe_github", "sabe_terminal"]) datos.set(k, datos.get(k) ? "1" : "0");

    try {
      const r = await fetch(POSTULACIONES_URL, { method: "POST", body: datos, headers: { Accept: "application/json" } });
      if (r.ok) {
        setEstado("enviado");
        return;
      }
      if (r.status === 422) {
        const j = await r.json().catch(() => null);
        const primero = j?.errors ? (Object.values(j.errors)[0] as string[])[0] : null;
        setError(primero ?? "Revisa los datos del formulario.");
      } else if (r.status === 429) {
        setError("Recibimos varios envíos seguidos desde tu conexión. Espera unos minutos e inténtalo de nuevo.");
      } else if (r.status === 413) {
        setError(`El archivo es demasiado grande. Envíalo en PDF de menos de ${MAX_MB} MB.`);
      } else {
        setError("No pudimos recibir tu hoja de vida en este momento. Inténtalo de nuevo en unos minutos.");
      }
    } catch {
      setError("No hay conexión con nuestro servidor. Revisa tu internet e inténtalo de nuevo.");
    }
    setEstado("listo");
  }

  const tarjeta = "rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-elevated backdrop-blur-xl sm:p-10";

  if (estado === "enviado") {
    return (
      <div className={tarjeta}>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint-500/15 text-mint-300">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-semibold text-white">¡Recibimos tu hoja de vida!</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-200">
          Gracias por tu interés en Integra. Revisamos cada postulación y, si tu perfil encaja, te contactaremos por
          WhatsApp o correo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className={`grid gap-4 sm:grid-cols-2 ${tarjeta}`}>
      <div className="sm:col-span-2">
        <h2 className="font-display text-2xl font-semibold text-white">Envía tu hoja de vida</h2>
        <p className="mt-1 text-sm text-ink-300">Cargo: {CARGO}</p>
      </div>

      {/* Campo trampa para bots: oculto a las personas. */}
      <input name="sitio_web" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <Campo etiqueta="Nombre completo">
        <input name="nombre" required maxLength={150} autoComplete="name" placeholder="Ana Gómez" className={campo} />
      </Campo>
      <Campo etiqueta="Celular / WhatsApp">
        <input name="celular" type="tel" required inputMode="tel" autoComplete="tel" pattern="[+0-9 \(\)\-]{7,30}"
          title="Solo números, espacios, paréntesis, + o -" placeholder="300 000 0000" className={campo} />
      </Campo>
      <Campo etiqueta="Correo">
        <input name="correo" type="email" required maxLength={150} autoComplete="email" placeholder="ana@correo.com" className={campo} />
      </Campo>
      <Campo etiqueta="Ciudad">
        <input name="ciudad" maxLength={100} autoComplete="address-level2" placeholder="Medellín" className={campo} />
      </Campo>
      <Campo etiqueta="Experiencia como desarrollador">
        <select name="experiencia" required defaultValue="" className={campo}>
          <option value="" disabled>Elige una opción</option>
          {EXPERIENCIA.map((x) => <option key={x}>{x}</option>)}
        </select>
      </Campo>
      <Campo etiqueta="GitHub, LinkedIn o portafolio">
        <input name="enlace" type="url" maxLength={255} placeholder="https://github.com/usuario" className={campo} />
      </Campo>

      <fieldset className="sm:col-span-2">
        <legend className="mb-2 text-sm font-medium text-ink-100">¿Con qué tienes experiencia?</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {[
            { n: "sabe_ia", t: "Programación con IA" },
            { n: "sabe_github", t: "GitHub" },
            { n: "sabe_terminal", t: "Servidores por terminal" },
          ].map((x) => (
            <label key={x.n} className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-white/10 px-3 py-2.5 text-sm font-medium text-ink-100 has-[:checked]:border-mint-400/60 has-[:checked]:bg-mint-500/10">
              <input type="checkbox" name={x.n} className="h-4 w-4 accent-mint-500" />
              {x.t}
            </label>
          ))}
        </div>
      </fieldset>

      <Campo etiqueta="Cuéntanos de ti (opcional)" className="sm:col-span-2">
        <textarea name="mensaje" maxLength={3000} rows={4} placeholder="Proyectos en los que has trabajado, tecnologías que dominas…"
          className={`${campo} h-auto py-2.5`} />
      </Campo>

      <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.02] px-4 py-6 text-center transition-colors hover:border-mint-400/50 sm:col-span-2">
        <Icon name="upload" className="h-7 w-7 text-mint-300" />
        <span className="text-sm font-semibold text-white">{archivo ? archivo.name : "Adjunta tu hoja de vida"}</span>
        <span className="text-xs text-ink-400">PDF o Word, máximo {MAX_MB} MB</span>
        <input type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="sr-only" onChange={(e) => elegir(e.target.files?.[0] ?? null)} />
      </label>

      <label className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-300 sm:col-span-2">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-mint-500" />
        <span>
          Autorizo a Integra Colombia S.A.S. a tratar mis datos para este proceso de selección, según su{" "}
          <a href="/privacidad.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-mint-300 underline">política de privacidad</a>.
        </span>
      </label>

      {error && <p role="alert" className="rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200 sm:col-span-2">{error}</p>}

      <button type="submit" disabled={estado === "enviando"}
        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-mint-500 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-glow-strong transition-all hover:-translate-y-0.5 hover:bg-mint-400 disabled:opacity-60 sm:col-span-2">
        {estado === "enviando" ? "Enviando…" : <>Enviar hoja de vida <Icon name="arrow" className="h-4 w-4" /></>}
      </button>
    </form>
  );
}

function Campo({ etiqueta, className = "", children }: { etiqueta: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-medium text-ink-100">{etiqueta}</span>
      {children}
    </label>
  );
}
