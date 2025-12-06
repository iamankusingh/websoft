import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section className="p-8 lg:px-16 flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16">
      <Image
        src="/company.webp"
        alt="Company Art"
        width={400}
        height={400}
        className="my-6 md:my-0 rounded-xl"
      />

      <div>
        <h3 className="text-3xl font-bold">About Us</h3>
        <p className="my-5">
          Websoft - Bhuj based OTT and cable service provider, your premier
          destination for cable and OTT services that redefine entertainment.
          With a commitment to delivering a seamless viewing experience, we
          offer an extensive library of channels, shows, and movies tailored to
          fit every taste and preference.
        </p>

        <div>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#2e073f] rounded-full" />
            Customer Satisfaction
          </p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#2e073f] rounded-full" />
            Quick Support Service
          </p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#2e073f] rounded-full" />
            Best Oriented Company
          </p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#2e073f] rounded-full" />
            More Skilled Employee
          </p>
        </div>

        <Button asChild variant="secondary" className="mt-4">
          <Link href="/">View More</Link>
        </Button>
      </div>
    </section>
  );
}
