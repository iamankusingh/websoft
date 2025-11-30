import {
  FilmIcon,
  Globe,
  Headphones,
  IndianRupee,
  Router,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function QuickServices() {
  return (
    <section className="h-fit w-full p-2 md:p-4 lg:p-8 bg-white grid grid-cols-3 md:grid-cols-6 place-items-center gap-4 text-center">
      <Link href="/">
        <Globe className="h-12 w-12 m-auto p-2 bg-popover rounded-full" />
        Broadband
      </Link>

      <Link href="/">
        <FilmIcon className="h-12 w-12 m-auto p-2 bg-popover rounded-full" />
        OTT
      </Link>

      <Link href="/">
        <Headphones className="h-12 w-12 m-auto p-2 bg-popover rounded-full" />
        27/7 Support
      </Link>

      <Link href="/">
        <Router className="h-12 w-12 m-auto p-2 bg-popover rounded-full" />
        Routers
      </Link>

      <Link href="/">
        <Zap className="h-12 w-12 m-auto p-2 bg-popover rounded-full" />
        Installation
      </Link>

      <Link href="/">
        <IndianRupee className="h-12 w-12 m-auto p-2 bg-popover rounded-full" />
        Recharge
      </Link>
    </section>
  );
}
