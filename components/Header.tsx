"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="h-10 w-full px-2 flex items-center justify-between shadow-md fixed left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-card/70">
      <Link href="/">
        <Image src="/Logo_Dark.png" alt="Logo" width={50} height={40} />
      </Link>

      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
        aria-label="Menu"
      >
        <div
          className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      <div
        className={`w-full p-4 flex flex-col items-center gap-4 overflow-hidden fixed top-10 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out border bg-sidebar-accent
          lg:w-fit lg:p-0 lg:flex-row lg:static lg:translate-0 lg:h-fit lg:opacity-100 lg:max-h-none lg:overflow-visible lg:border-0 lg:bg-transparent z-50 ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <form className="flex gap-1 items-center">
          <Input
            type="text"
            name="rmn_vnc"
            placeholder="RMN / VC NO."
            id="search"
            className="bg-white border border-gray-300 lg:h-8"
          />
          <Input
            type="submit"
            value="Go"
            className="w-fit bg-white border border-gray-300 lg:h-8"
          />
        </form>

        <nav className="flex flex-col items-center justify-center gap-4 text-xl lg:text-lg lg:flex-row">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/packs">Offerings</Link>
          <Link href="/plans">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact us</Link>
        </nav>

        <Button
          asChild
          className="text-black bg-white hover:bg-gray-200 border border-gray-300 lg:h-8"
        >
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
}
