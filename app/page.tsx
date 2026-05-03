import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="relative noise overflow-hidden bg-ink-950 text-ink-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
