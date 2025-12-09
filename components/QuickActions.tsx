import {
  FilmIcon,
  Globe,
  Headphones,
  IndianRupee,
  Router,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function QuickActions() {
  return (
    <section className="h-fit w-full p-10 bg-white grid grid-cols-3 md:grid-cols-6 place-items-center gap-6 text-center text-sm">
      <Link href="/wifi">
        <Globe className="h-12 w-12 m-auto p-2 bg-popover rounded-md" />
        Broadband
      </Link>

      <Link href="/ott">
        <FilmIcon className="h-12 w-12 m-auto p-2 bg-popover rounded-md" />
        OTT
      </Link>

      <Link href="/support">
        <Headphones className="h-12 w-12 m-auto p-2 bg-popover rounded-md" />
        27/7 Support
      </Link>

      <Link href="/">
        <Router className="h-12 w-12 m-auto p-2 bg-popover rounded-md" />
        Routers
      </Link>

      <Link href="/">
        <Zap className="h-12 w-12 m-auto p-2 bg-popover rounded-md" />
        Installation
      </Link>

      <Link href="/">
        <IndianRupee className="h-12 w-12 m-auto p-2 bg-popover rounded-md" />
        Recharge
      </Link>
    </section>
  );
}
