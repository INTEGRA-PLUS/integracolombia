import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const descripcion =
  "Software para ISP con red MikroTik y OLT, facturación electrónica DIAN, cobro en línea con Integra Pay y CRM con inteligencia artificial para WhatsApp. Corte y reconexión automáticos.";

export const metadata: Metadata = {
  metadataBase: new URL("https://integracolombia.co"),
  title: "Integra — Software para ISP, CRM con IA y pagos en línea",
  description: descripcion,
  keywords: [
    "software para ISP",
    "software para proveedores de internet",
    "MikroTik",
    "facturación electrónica DIAN",
    "CRM WhatsApp",
    "inteligencia artificial",
    "pasarela de pagos",
    "Integra Colombia",
  ],
  authors: [{ name: "Integra Colombia S.A.S." }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Integra — Todo tu ISP en un solo ecosistema",
    description: descripcion,
    url: "https://integracolombia.co",
    siteName: "Integra Colombia",
    locale: "es_CO",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Integra — Todo tu ISP en un solo ecosistema", description: descripcion },
};

const organizacion = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Integra Colombia S.A.S.",
  url: "https://integracolombia.co",
  description: descripcion,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57-320-690-9290",
    contactType: "sales",
    areaServed: "CO",
    availableLanguage: "es",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ink-950 text-ink-50 font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizacion) }} />
        {children}
      </body>
    </html>
  );
}
