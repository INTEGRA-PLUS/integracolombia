import { clientes } from "../lib/clientes";
import Reveal from "./Reveal";

function Fila({ items, reversa = false }: { items: readonly (typeof clientes)[number][]; reversa?: boolean }) {
  const doble = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex w-max gap-4 ${reversa ? "animate-marquee-reversa" : "animate-marquee"} hover:[animation-play-state:paused]`}>
        {doble.map((c, i) => (
          <div
            key={`${c.id}-${i}`}
            className="flex h-24 w-44 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1 sm:h-28 sm:w-52"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/clientes/${c.id}.webp`}
              alt={c.nombre}
              title={c.nombre}
              width={c.w}
              height={c.h}
              loading="lazy"
              decoding="async"
              className="max-h-full max-w-full rounded-lg object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clientes() {
  const mitad = Math.ceil(clientes.length / 2);
  return (
    <section id="clientes" className="relative py-14 md:py-20">
      <Reveal className="mx-auto max-w-4xl px-5 text-center sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mint-300">Confían en Integra</p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
          Empresas de internet y televisión de todo el país ya operan con Integra
        </h2>
      </Reveal>
      <div className="mt-10 space-y-4">
        <Fila items={clientes.slice(0, mitad)} />
        <Fila items={clientes.slice(mitad)} reversa />
      </div>
    </section>
  );
}
