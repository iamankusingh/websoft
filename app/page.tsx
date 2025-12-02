import Hero from "@/components/Hero";
import QuickServices from "@/components/QuickServices";
import Favourites from "@/components/Favoutites";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#defcfe] overflow-hidden">
      <Hero />
      <QuickServices />
      <Favourites />
      <Services />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
