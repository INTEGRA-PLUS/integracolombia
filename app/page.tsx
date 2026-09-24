import Crm from "./components/Crm";
import Clientes from "./components/Clientes";
import CtaFinal from "./components/CtaFinal";
import Ecosistema from "./components/Ecosistema";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IntegraPay from "./components/IntegraPay";
import Integraciones from "./components/Integraciones";
import Migracion from "./components/Migracion";
import Navbar from "./components/Navbar";
import PaginasWeb from "./components/PaginasWeb";
import PlataformaISP from "./components/PlataformaISP";
import WhatsAppFlotante from "./components/WhatsAppFlotante";

export default function Home() {
  return (
    <main className="relative noise overflow-hidden bg-ink-950 text-ink-50">
      <Navbar />
      <Hero />
      <Clientes />
      <Ecosistema />
      <PlataformaISP />
      <Crm />
      <IntegraPay />
      <PaginasWeb />
      <Migracion />
      <Integraciones />
      <Faq />
      <CtaFinal />
      <Footer />
      <WhatsAppFlotante />
    </main>
  );
}
