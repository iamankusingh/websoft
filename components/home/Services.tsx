import { Film, MoveRight, Tv, Wifi } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section className="p-8 lg:px-16">
      <div className="w-full my-6 text-center">
        <h3 className="text-4xl">Major Services</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative h-96 w-auto p-4 bg-[url(/wires.webp)] bg-cover bg-center rounded-lg flex flex-col justify-center gap-4 text-white">
          <div className="absolute inset-0 bg-black/50 rounded-lg" />
          <Wifi className="h-20 w-20 p-4 bg-blue-600 rounded-xl z-10" />
          <h4 className="text-xl z-10">WiFi Broadband</h4>
          <Button asChild variant="link">
            <Link href="/">
              Explore more <MoveRight className="inline" />
            </Link>
          </Button>
        </div>

        <div className="relative h-96 w-auto p-4 bg-[url(/tv.jpg)] bg-cover bg-center rounded-lg flex flex-col justify-center gap-4 text-white">
          <div className="absolute inset-0 bg-black/50 rounded-lg" />
          <Tv className="h-20 w-20 p-4 bg-blue-600 rounded-xl z-10" />
          <h4 className="text-xl z-10">TV Channels</h4>
          <Button asChild variant="link">
            <Link href="/">
              Explore more <MoveRight className="inline" />
            </Link>
          </Button>
        </div>

        <div className="relative h-96 w-auto p-4 bg-[url(/otts.webp)] bg-cover bg-center rounded-lg flex flex-col justify-center gap-4 text-white ">
          <div className="absolute inset-0 bg-black/50 rounded-lg" />
          <Film className="h-20 w-20 p-4 bg-blue-600 rounded-xl z-10" />
          <h4 className="text-xl z-10">OTT Packs</h4>
          <Button asChild variant="link">
            <Link href="/plans">
              Explore more <MoveRight className="inline" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
