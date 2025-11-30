import Hero from "@/components/Hero";
import QuickServices from "@/components/QuickServices";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Hero />
      <QuickServices />
    </main>
  );
}
