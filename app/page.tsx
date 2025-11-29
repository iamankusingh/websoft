import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen overflow-hidden bg-[url(/hero-bg.jpg)] bg-no-repeat bg-cover">
      <Hero />
    </main>
  );
}
