"use client";

import {
  FilmIcon,
  Globe,
  Headphones,
  IndianRupee,
  Router,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function QuickActions() {
  useEffect(() => {
    gsap.fromTo(
      ".quick-box",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".quick-box",
          start: "top 90%",
        },
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <section className="h-fit w-full p-10 bg-white grid grid-cols-3 md:grid-cols-6 place-items-center gap-6 text-center text-sm">
      <Link href="/wifi" className="quick-box">
        <Globe className="h-12 w-12 m-auto p-2 bg-popover rounded-md" />
        Broadband
      </Link>

      <Link href="/ott" className="quick-box">
        <FilmIcon className="h-12 w-12 m-auto p-2 bg-popover rounded-md" />
        OTT
      </Link>

      <Link href="/support" className="quick-box">
        <Headphones className="h-12 w-12 m-auto p-2 bg-popover rounded-md" />
        27/7 Support
      </Link>

      <Link href="/wifi/#routers" className="quick-box">
        <Router className="h-12 w-12 m-auto p-2 bg-popover rounded-md" />
        Routers
      </Link>

      <Link href="/wifi/#installation" className="quick-box">
        <Zap className="h-12 w-12 m-auto p-2 bg-popover rounded-md" />
        Installation
      </Link>

      <Link href="/login" className="quick-box">
        <IndianRupee className="h-12 w-12 m-auto p-2 bg-popover rounded-md" />
        Recharge
      </Link>
    </section>
  );
}
