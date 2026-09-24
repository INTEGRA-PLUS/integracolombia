import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeader, WaButton } from "./Ui";

const incluye = [
  { icon: "globe", titulo: "Diseño profesional a tu marca", texto: "Tu logo, tus colores y tus planes, pensada para verse bien en el celular." },
  { icon: "map", titulo: "«¿Llega a mi dirección?»", texto: "Conectada a tu mapa de cobertura: el visitante consulta y queda como prospecto en Integra." },
  { icon: "wallet", titulo: "Botón de pago", texto: "Tus clientes pagan su factura desde la página con Integra Pay." },
  { icon: "chat", titulo: "Directo a tu WhatsApp", texto: "Cada botón lleva al chat de ventas o de soporte, donde responde tu CRM con IA." },
  { icon: "bolt", titulo: "Rápida y en tu dominio", texto: "Alojada y mantenida por nosotros, con certificado de seguridad incluido." },
  { icon: "chart", titulo: "Lista para vender", texto: "Planes, cobertura, preguntas frecuentes y contacto, todo en un solo lugar." },
];

export default function PaginasWeb() {
  return (
    <section id="web" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader eyebrow="Páginas web para ISP" title="Tu ISP también necesita" highlight="una vitrina que venda">
          Diseñamos y mantenemos la página web de tu empresa, conectada con tu plataforma. Varios ISP que ya
          trabajan con Integra tienen su página hecha por nosotros.
        </SectionHeader>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {incluye.map((x, i) => (
            <Reveal key={x.titulo} delay={i * 60} className="group rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-all hover:-translate-y-1 hover:border-mint-300/30">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-500/15 text-mint-300 transition-colors group-hover:bg-mint-500 group-hover:text-ink-950">
                <Icon name={x.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">{x.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">{x.texto}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <WaButton mensaje="Hola, quiero una página web para mi ISP.">Quiero la página de mi ISP</WaButton>
        </Reveal>
      </div>
    </section>
  );
}
