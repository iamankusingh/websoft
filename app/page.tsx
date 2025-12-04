import Hero from "@/components/home/Hero";
import QuickActions from "@/components/QuickActions";
import Favourites from "@/components/home/Favoutites";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] overflow-hidden cursor-default">
      <Hero />
      <QuickActions />
      <Favourites />
      <Services />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
