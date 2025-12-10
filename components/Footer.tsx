import Link from "next/link";
import Image from "next/image";

type FooterLinkInfo = {
  title: string;
  href: string;
};

const quickLinks: FooterLinkInfo[] = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/about" },
  { title: "WiFi", href: "/wifi" },
  { title: "TV", href: "/tv" },
  { title: "OTT", href: "/ott" },
  { title: "Contact us", href: "/contact" },
];

const serviceLinks: FooterLinkInfo[] = [
  { title: "Home Broadband", href: "/wifi" },
  { title: "Corporate Internet", href: "/wifi/#corporate-internet" },
  // { title: "Pay Bills", href: "/" },
  { title: "Support", href: "/support" },
  { title: "Terms & Conditions", href: "/terms-conditions" },
  { title: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-8 lg:px-16 bg-[#141033] text-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 mb-10">
        <div className="md:col-span-4 flex flex-col items-start">
          <Link href="/" className="inline-block">
            <Image
              src="/Logo_Light.png"
              alt="Websoft Solution Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* Social Media Icons */}
          <div className="mt-2 flex items-center space-x-2">
            <a
              href="#"
              aria-label="WhatsApp"
              className="hover:bg-green-400 transition-colors rounded-md"
            >
              <Image src="whatsapp.svg" alt="whatsapp" width={30} height={30} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="hover:bg-[#ff1468] transition-colors rounded-md"
            >
              <Image
                src="instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
              />{" "}
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:bg-gray-800 transition-colors rounded-md"
            >
              <Image src="x.svg" alt="x" width={30} height={30} />{" "}
            </a>
            <a
              href="#"
              aria-label="X (formerly Twitter)"
              className="hover:bg-[#0866ff] transition-colors rounded-md"
            >
              <Image src="facebook.svg" alt="Facebook" width={30} height={30} />{" "}
            </a>
          </div>
        </div>

        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-2 gap-8 md:pl-12 lg:pl-24">
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-100">
              Quick Links
            </h3>

            <ul className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 block w-fit leading-tight"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-100">
              Services
            </h3>

            <ul className="flex flex-col space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 block w-fit leading-tight"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-6 mt-6">
        <p className="text-center text-sm text-gray-400">
          Copyright {currentYear} © Websoft Solution | Designed & Developed By{" "}
          <a
            href="https://github.com/iamankusingh"
            target="_blank"
            className="underline"
          >
            Anku Singh
          </a>
        </p>
      </div>
    </footer>
  );
}
