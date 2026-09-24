"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeader, WaButton } from "./Ui";

type Modulo = { id: string; icon: string; nombre: string; resumen: string; puntos: string[] };

// Todo lo de aquí existe hoy en la plataforma (verificado contra el código).
const modulos: Modulo[] = [
  {
    id: "red",
    icon: "router",
    nombre: "Red y MikroTik",
    resumen: "Controla todos tus routers desde un solo panel, sin entrar a Winbox.",
    puntos: [
      "Varios MikroTik conectados por API de RouterOS: colas simples, PPPoE, ARP e IPs autorizadas.",
      "Corte y reconexión automáticos por mora con la lista de morosos; si el router no respondió, reintenta solo.",
      "Planes de velocidad importados del router y cambios de velocidad masivos con vista previa.",
      "Sincronización masiva de contratos con el router, con reintentos y cancelación.",
      "Diagnóstico de red en vivo por cliente: dice de quién es la falla y si hace falta visita técnica.",
      "Auditoría de «cortados que siguen navegando», monitor de listas negras e IPv6 de doble pila.",
      "Topología completa: nodos, access points, cajas NAP con puertos y splitters.",
    ],
  },
  {
    id: "facturacion",
    icon: "invoice",
    nombre: "Facturación y DIAN",
    resumen: "Facturación mensual automática por grupos de corte, con electrónica DIAN incluida.",
    puntos: [
      "Ciclo mensual automático por grupo de corte, con prorrateo y factura de primer mes.",
      "Facturación electrónica ante la DIAN, notas crédito y débito, documento soporte y numeraciones.",
      "Promesas de pago con corte automático cuando vencen.",
      "Envío de facturas por WhatsApp, correo y SMS, en lote o automático.",
      "Estados de cuenta del cliente con gráficas de 12 meses, en PDF o Excel y por WhatsApp.",
      "Auditoría DIAN: cruza el reporte del portal de la DIAN y encuentra lo que falta.",
      "Recepción de facturas de proveedores desde la DIAN e integración con Siigo.",
    ],
  },
  {
    id: "pagos",
    icon: "wallet",
    nombre: "Pagos y caja",
    resumen: "Recaudo en caja, en puntos de pago y en línea, todo conciliado.",
    puntos: [
      "Recibos de caja con tirilla enviada al cliente por WhatsApp.",
      "Saldo a favor automático, anticipos, descuentos y cuentas bancarias con soporte obligatorio.",
      "Pasarelas: Integra Pay, Wompi, PayU, ePayco, Efecty y más, con portal de pagos público.",
      "Puntos de venta y recaudadores con saldo prepago y reporte de lo recaudado por cada uno.",
      "Egresos, gastos, facturas de proveedores, órdenes de compra y movimientos bancarios.",
    ],
  },
  {
    id: "olt",
    icon: "fiber",
    nombre: "Fibra, OLT, TV y WiFi",
    resumen: "Tu red de fibra y televisión, administrada desde la misma plataforma.",
    puntos: [
      "Integración con SmartOLT y AdminOLT: autorizar, reiniciar, mover y reconfigurar ONUs.",
      "Corte y reconexión automáticos de televisión (CATV) desde la OLT.",
      "Cambio de clave WiFi del cliente por TR-069 (GenieACS), con registro de cambios.",
      "Planes de TV y servicios de valor agregado (streaming, música, antivirus) vendidos desde el contrato.",
    ],
  },
  {
    id: "clientes",
    icon: "users",
    nombre: "Clientes y contratos",
    resumen: "Del prospecto al contrato firmado, sin papel.",
    puntos: [
      "Contrato digital que el cliente firma desde un enlace, con permanencia y términos configurables.",
      "Importación masiva desde Excel o directamente desde tu MikroTik.",
      "Acciones en lote: cambio de plan, habilitar, cortar, retirar, enviar al router.",
      "Consumo por cliente con histórico, ping y detección de IPs duplicadas.",
      "Varios ítems facturables por contrato, cada uno con su precio y vencimiento.",
      "Pausar la facturación de un cliente sin quitarle el servicio.",
    ],
  },
  {
    id: "soporte",
    icon: "headset",
    nombre: "Soporte y técnicos",
    resumen: "Cada falla registrada, asignada y cerrada con evidencia.",
    puntos: [
      "Radicados con hasta 7 fotos y firma del cliente en persona o por enlace.",
      "Asignación masiva a técnicos, PQRS y solicitudes de servicio.",
      "App del técnico: materiales, radicados, firma, adjuntos y GPS.",
      "«Mi ruta» del técnico con navegación en un toque y mapa de técnicos en tiempo real.",
      "Inventario por bodega y entrega de material al técnico con firma.",
    ],
  },
  {
    id: "app",
    icon: "phone",
    nombre: "App para tus clientes",
    resumen: "Tu cliente se autogestiona desde el celular y te llama menos.",
    puntos: [
      "Consulta su cuenta, sus facturas y descarga el PDF.",
      "Paga en línea o informa su pago con el comprobante.",
      "Abre tickets, hace promesas de pago y cambia la clave de su WiFi.",
      "Solicita cambio de plan o de datos. Tú decides qué funciones activar.",
    ],
  },
  {
    id: "conta",
    icon: "ledger",
    nombre: "Contabilidad y nómina",
    resumen: "La contabilidad se hace sola a partir de la operación.",
    puntos: [
      "Cada documento genera su comprobante contable automáticamente, explicado renglón por renglón.",
      "PUC, saldos iniciales, cierres mensual y anual.",
      "Libro diario, mayor, balance de prueba, IVA, exógena y retenciones.",
      "Nómina electrónica ante la DIAN: mensual o quincenal, horas extras, vacaciones, prestaciones y liquidaciones.",
    ],
  },
  {
    id: "crecimiento",
    icon: "map",
    nombre: "Ventas y cobertura",
    resumen: "Vende más donde ya tienes red.",
    puntos: [
      "Mapa de cobertura con importación KML y enlace público «¿llega el servicio a mi dirección?».",
      "Cada consulta queda como prospecto y arma un mapa de demanda no atendida.",
      "Ventas externas de asesores con aprobación que crean el contrato ya diligenciado.",
      "Campañas masivas por WhatsApp, SMS y correo, con avisos automáticos de pago y vencimiento.",
      "Reportes de ventas, cartera, recaudo, instalaciones y más, exportables.",
    ],
  },
  {
    id: "plataforma",
    icon: "api",
    nombre: "Plataforma y API",
    resumen: "Seguro, multiusuario y abierto a integraciones.",
    puntos: [
      "Usuarios con roles y permisos por pantalla.",
      "API REST con tokens por alcance y documentación OpenAPI.",
      "Servidor MCP para conectar asistentes de inteligencia artificial a tu operación.",
      "Actualizaciones continuas con guías visuales dentro del sistema.",
      "En la nube, sin servidores que mantener de tu lado.",
    ],
  },
];

export default function PlataformaISP() {
  const [activo, setActivo] = useState(modulos[0].id);
  const m = modulos.find((x) => x.id === activo) ?? modulos[0];

  return (
    <section id="isp" className="relative py-16 md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink-900/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal className="mb-10 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/marca/integra.png" alt="Integra — Todo tu ISP, en un solo lugar" className="h-28 w-auto sm:h-36" loading="lazy" />
        </Reveal>
        <SectionHeader eyebrow="Software para ISP" title="Una plataforma para" highlight="toda tu operación">
          Diez módulos que cubren desde el router hasta la contabilidad. Todo conectado: lo que pasa en uno se
          refleja en los demás.
        </SectionHeader>

        <Reveal className="mt-14 grid gap-6 lg:grid-cols-[300px_1fr]">
          <div role="tablist" aria-label="Módulos de la plataforma" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {modulos.map((x) => {
              const on = x.id === activo;
              return (
                <button
                  key={x.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActivo(x.id)}
                  className={`flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                    on
                      ? "border-mint-400/50 bg-mint-500/10 text-white shadow-glow"
                      : "border-white/[0.07] bg-white/[0.02] text-ink-200 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${on ? "bg-mint-500 text-ink-950" : "bg-white/[0.05] text-mint-300"}`}>
                    <Icon name={x.icon} className="h-4 w-4" />
                  </span>
                  {x.nombre}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" className="relative overflow-hidden rounded-3xl border border-mint-300/15 bg-ink-900/70 p-6 shadow-elevated sm:p-10">
            <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-mint-500/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-500/15 text-mint-300 ring-1 ring-mint-400/30">
                  <Icon name={m.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{m.nombre}</h3>
                  <p className="mt-1 text-sm text-ink-200 sm:text-base">{m.resumen}</p>
                </div>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {m.puntos.map((p) => (
                  <li key={p} className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm leading-relaxed text-ink-100">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-500/20 text-mint-300">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WaButton mensaje={`Hola, quiero conocer el módulo de ${m.nombre} de Integra.`} variant="ghost">
                  Preguntar por {m.nombre}
                </WaButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
