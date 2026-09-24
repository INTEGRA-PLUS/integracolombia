# Plan de mejora — integracolombia.co

Motivo: los clientes dicen que la página «está muy pobre de información». Tenía 3 secciones genéricas,
6 servicios sin detalle, cifras que no eran reales (+1,4 M suscriptores, 180+ ISP, 99,98 % uptime) y
un formulario de boletín que no enviaba nada. No mencionaba el CRM con IA ni Integra Pay.

## Fase 1 — hecha (rama `rediseno-completo`)

Una sola página larga, con la marca de siempre (navy + menta) y todo lo que hoy existe en el código:

| Sección | Qué cuenta |
|---|---|
| Hero | «Todo tu ISP en un solo ecosistema» + cifras reales medidas en producción (sep-2026) |
| Así trabaja todo junto | Factura → WhatsApp → pago → conciliación → reconexión automática |
| Plataforma ISP | 10 módulos en pestañas (red/MikroTik, facturación DIAN, pagos, OLT/TV/WiFi, clientes, soporte, app, contabilidad/nómina, ventas/cobertura, API/MCP) |
| CRM + IA | Conversación de ejemplo, 6 capacidades de IA reales, bandeja multiagente |
| Integra Pay | Recorrido de un pago y 6 beneficios verificados |
| Páginas web para ISP | Servicio nuevo en la página (ya se hace: 7 ISP alojados en el panel) |
| Migración asistida | 4 pasos |
| Integraciones | Carrusel con las integraciones que existen en el código |
| Preguntas frecuentes | 8 objeciones típicas |
| CTA final + pie | Enlaces legales (privacidad, términos, eliminación de datos) |

- **Contacto:** solo WhatsApp +57 320 690 9290. 14 botones, cada uno con su mensaje escrito
  (así se sabe desde qué sección llegó el prospecto) + botón flotante.
- **Marca:** logos oficiales (Integra, Integra CRM, Integra Pay) en versión transparente en `public/marca/`,
  favicon con el símbolo y el verde del sitio igualado al del logo (`#7ACC4A`).
- **SEO:** título y descripción nuevos, Open Graph, datos estructurados de la organización.
- **Accesibilidad:** con «reducir movimiento» activo, el contenido se ve sin animaciones.
- **No se publicó:** precios (la landing del CRM y el código no coinciden), medios de pago
  concretos de Integra Pay ni enlace de pago por factura (no están en el código).

## Fase 2 — próximas mejoras recomendadas

1. **Casos de éxito con nombre** (pedir permiso a 3–4 ISP): testimonio, logo, cifras antes/después.
2. **Video demo de 60–90 s** por producto (facturar → cobrar → reconectar; el CRM respondiendo).
3. **Portafolio de páginas web** con los sitios hechos (almeidas, enternet, fibernet, interjas,
   reintech, smtelecomunicaciones, zomac) — solo con autorización de cada ISP.
4. **Páginas propias por producto** (`/isp`, `/crm`, `/integra-pay`, `/paginas-web`) para posicionar en
   Google por búsquedas como «software para ISP Colombia» o «CRM WhatsApp con IA».
5. **Imagen para compartir (OG)** de 1200×630 con la marca, para que el enlace se vea bien en WhatsApp.
6. **Medición:** Google Analytics / Meta Pixel y evento por cada botón de WhatsApp para saber qué
   sección convierte más.
7. **Planes y precios** cuando estén unificados entre el CRM, la plataforma e Integra Pay.
8. **Blog / guías** (corte automático en MikroTik, facturación electrónica para ISP, cómo cobrar por
   WhatsApp): contenido que trae tráfico orgánico.
9. **Logos de clientes** en una franja «Confían en Integra» (con autorización).
10. **Sello de Meta** (Tech Provider) si se confirma que se puede mostrar.

## Cómo desplegar

El sitio corre en 178.238.224.239 (`/root/proyectos/integracolombia`, contenedor `istinge_main_page`,
nginx → puerto 9006):

```bash
cd /root/proyectos/integracolombia && git pull && docker compose up -d --build
```
