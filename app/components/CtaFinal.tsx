import { WHATSAPP_VISIBLE } from "../lib/contacto";
import Reveal from "./Reveal";
import { WaButton } from "./Ui";

export default function CtaFinal() {
  return (
    <section id="contacto" className="relative px-5 py-16 sm:px-6 md:py-24">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-mint-300/25 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-6 py-16 text-center shadow-elevated sm:px-12">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
        <div aria-hidden className="absolute -bottom-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-mint-500/25 blur-3xl" />
        <div className="relative">
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
            ¿Listo para que tu ISP <span className="text-gradient-mint">trabaje solo</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-ink-200 sm:text-lg">
            Escríbenos y te mostramos la plataforma con casos reales: facturación, cobro, corte y reconexión,
            y el CRM con inteligencia artificial.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <WaButton mensaje="Hola, quiero agendar una demostración de Integra para mi ISP.">Agendar demostración</WaButton>
            <WaButton variant="ghost" mensaje="Hola, quiero recibir una propuesta de Integra para mi ISP.">Pedir una propuesta</WaButton>
          </div>
          <p className="mt-6 text-sm text-ink-300">WhatsApp de ventas: <span className="font-semibold text-white">{WHATSAPP_VISIBLE}</span></p>
        </div>
      </Reveal>
    </section>
  );
}
