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

export const metadata: Metadata = {
  title: "Integra — Software Especializado para ISP",
  description:
    "Optimiza la operación de tu ISP con la plataforma avanzada de Integra Colombia. Software integral para empresas de telecomunicaciones.",
  keywords: [
    "ISP",
    "Software ISP",
    "Integra Colombia",
    "Telecomunicaciones",
    "Plataforma ISP",
  ],
  authors: [{ name: "Integra Colombia S.A.S." }],
  openGraph: {
    title: "Integra — Software Especializado para ISP",
    description:
      "Optimiza la operación de tu ISP con la plataforma avanzada de Integra Colombia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ink-950 text-ink-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
