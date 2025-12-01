import Hero from "@/components/Hero";
import QuickServices from "@/components/QuickServices";
import Favourites from "@/components/Favoutites";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#defcfe] overflow-hidden">
      <Hero />
      <QuickServices />
      <Favourites />
      <Services />
    </main>
  );
}
