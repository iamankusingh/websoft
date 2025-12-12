"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkInfo = {
  title: string;
  href: string;
};

const quickLinks: NavLinkInfo[] = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/about" },
  { title: "WiFi", href: "/wifi" },
  { title: "TV", href: "/tv" },
  { title: "OTT", href: "/ott" },
  { title: "Contact us", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="h-14 w-full px-8 lg:px-16 flex items-center justify-between shadow-md fixed top-0 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-card/70">
      <Link href="/">
        <Image src="/Logo_Dark.png" alt="Logo" width={75} height={75} />
      </Link>

      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden w-fit h-14 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
        aria-label="Menu"
      >
        <div
          className={`w-7 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`w-7 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-7 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      <div
        className={`w-full p-4 flex flex-col items-center gap-4 overflow-hidden fixed top-14 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out border bg-sidebar-accent
          lg:w-fit lg:p-0 lg:flex-row lg:static lg:translate-0 lg:h-fit lg:opacity-100 lg:max-h-none lg:overflow-visible lg:border-0 lg:bg-transparent z-50 ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        onClick={(e) => {
          if (e.target instanceof HTMLElement && e.target.tagName === "A") {
            setIsOpen(false);
          }
        }}
      >
        <form className="flex gap-1 items-center">
          <Input
            type="text"
            name="rmn_vnc"
            placeholder="RMN / VC NO."
            id="search"
          />
          <Input type="submit" value="Go" className="w-fit" />
        </form>

        <nav>
          <ul className="flex flex-col items-center justify-center gap-4 text-xl lg:text-lg md:flex-row">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-foreground/80">
                  {link.title}
                </Link>
                {pathname === link.href && (
                  <div className="h-0.5 w-full bg-primary"></div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Button asChild variant="default">
          <Link href="/login">Login</Link>
        </Button>
      </div>

      {/* overlay bg */}
      {/* while rendering this div on isOpen true, it cause animation fps drop issue in physical phone */}
      {/* while rendering always on screen with h-dvh opacity-0, it caause page scroll fps drop issue in physical device */}
      {/* on display hide and block on basis of isOpen, it cause fps drop in opening menu in physical mobile */}
      <div
        className={`lg:hidden h-dvh w-full fixed top-14 left-0 bg-black/60 transition-all duration-300 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
        onTouchStart={() => setIsOpen(false)}
      ></div>
    </header>
  );
}
