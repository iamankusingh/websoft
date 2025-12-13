"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";

export default function Hero() {
  const logoRefs = useRef<HTMLDivElement[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;

    logoRefs.current.forEach((el) => {
      if (!el) return;
      const multiplier = 0.02;

      // Move opposite to mouse direction
      gsap.to(el, {
        x: -x * multiplier,
        y: -y * multiplier,
        duration: 0.6,
        ease: "power3.out",
      });
    });
  };

  return (
    <section
      className="min-h-screen text-center flex justify-center items-center bg-[url('/hero-bg.jpg')] bg-no-repeat bg-cover"
      onMouseMove={(e) => handleMouseMove(e)}
    >
      {/* Text and CTA */}
      <div className="p-10 z-20">
        <h2 className="text-white text-5xl md:text-5xl font-bold md:leading-15">
          Unlimited Entertainment.
          <br />
          One Simple Subscription.
        </h2>

        <p className="my-5 text-white lg:w-xl">
          We manage all your OTT services under one roof—so you never worry
          about passwords, renewals, or switching apps.
        </p>

        <div>
          <Button asChild variant="default" className="mr-3">
            <Link href="/ott">View OTT Plans</Link>
          </Button>

          <Button asChild variant="secondary">
            <Link href="/wifi">
              WiFi Connection <Plus />
            </Link>
          </Button>
        </div>
      </div>

      {/* Floting logos */}
      <div className="h-screen w-full grid grid-cols-3 place-items-center absolute z-10 pointer-events-none">
        <div
          ref={(el) => {
            if (el) logoRefs.current[0] = el;
          }}
          className="h-[100px] w-[100px] bg-linear-to-br from-[#726d88] to-[#3c3754] rounded-2xl -rotate-10 relative left-2  bottom-3"
        >
          <Image src="/netflix.png" alt="Netflix" width={100} height={100} />
        </div>

        <div
          ref={(el) => {
            if (el) logoRefs.current[1] = el;
          }}
          className="h-[100px] w-[100px] p-2 bg-linear-to-br from-[#726d88] to-[#3c3754] rounded-2xl rotate-10 relative bottom-6"
        >
          <Image
            src="/disney-hotstar.png"
            alt="Desney Hotstar"
            width={100}
            height={100}
          />
        </div>

        <div
          ref={(el) => {
            if (el) logoRefs.current[2] = el;
          }}
          className="h-[100px] w-[100px] p-2 bg-linear-to-br from-[#726d88] to-[#3c3754] rounded-2xl -rotate-20 relative right-2 bottom-5"
        >
          <Image
            src="/crunchyroll.png"
            alt="Crunchyrolll"
            width={100}
            height={100}
          />
        </div>

        <div
          ref={(el) => {
            if (el) logoRefs.current[3] = el;
          }}
          className="h-[100px] w-[100px] bg-linear-to-br from-[#726d88] to-[#3c3754] rounded-2xl rotate-10 relative top-10 left-4"
        >
          <Image src="/prime.png" alt="Prime" width={100} height={100} />
        </div>

        <div
          ref={(el) => {
            if (el) logoRefs.current[4] = el;
          }}
          className="h-[100px] w-[100px] p-2 bg-linear-to-br from-[#726d88] to-[#3c3754] rounded-2xl flex items-center -rotate-10 relative top-16"
        >
          <Image src="/apple-tv.png" alt="Apple TV" width={100} height={100} />
        </div>

        <div
          ref={(el) => {
            if (el) logoRefs.current[5] = el;
          }}
          className="h-[100px] w-[100px] p-1 bg-linear-to-br from-[#726d88] to-[#3c3754] rounded-2xl rotate-10 relative top-10 right-6"
        >
          <Image src="/z5.png" alt="Z5" width={100} height={100} />
        </div>
      </div>
    </section>
  );
}
