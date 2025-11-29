import Link from "next/link";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen text-center flex justify-center items-center">
      {/* Text and CTA */}
      <div className="p-2 z-20">
        <h2 className="text-white text-4xl md:text-5xl font-semibold md:leading-15 cursor-default">
          Unlimited{" "}
          <span className="font-extrabold text-5xl md:text-6xl">
            Entertainment.
          </span>
          <br />
          One Simple Subscription.
        </h2>

        <p className="my-5 text-white lg:w-xl cursor-default">
          We manage all your OTT services under one roof—so you never worry
          about passwords, renewals, or switching apps.
        </p>

        <div>
          <Button
            asChild
            className="mr-3 text-black bg-white hover:bg-accent lg:h-8"
          >
            <Link href="/">View Plans</Link>
          </Button>

          <Button asChild className="text-white bg-black lg:h-8">
            <Link href="/">
              New Connection <Plus />
            </Link>
          </Button>
        </div>
      </div>

      {/* Floting logos */}
      <div className="h-screen w-screen grid grid-cols-3 place-items-center absolute z-10">
        <div className="h-[100px] w-[100px] bg-linear-to-br from-[#726d88] to-[#3c3754] rounded-2xl -rotate-10 relative bottom-3">
          <Image src="/netflix.png" alt="Netflix" width={100} height={100} />
        </div>

        <div className="h-[100px] w-[100px] p-2 bg-linear-to-br from-[#726d88] to-[#3c3754] rounded-2xl rotate-10 relative bottom-6">
          <Image
            src="/disney-hotstar.png"
            alt="Desney Hotstar"
            width={100}
            height={100}
          />
        </div>

        <div className="h-[100px] w-[100px] p-2 bg-linear-to-br from-[#726d88] to-[#3c3754] rounded-2xl -rotate-20">
          <Image
            src="/crunchyroll.png"
            alt="Crunchyrolll"
            width={100}
            height={100}
          />
        </div>

        <div className="h-[100px] w-[100px] bg-linear-to-br from-[#726d88] to-[#3c3754] rounded-2xl rotate-10 relative top-4 left-4">
          <Image src="/prime.png" alt="Prime" width={100} height={100} />
        </div>

        <div className="h-[100px] w-[100px] p-2 bg-linear-to-br from-[#726d88] to-[#3c3754] rounded-2xl flex items-center -rotate-10 relative top-12">
          <Image src="/apple-tv.png" alt="Apple TV" width={100} height={100} />
        </div>

        <div className="h-[100px] w-[100px] p-1 bg-linear-to-br from-[#726d88] to-[#3c3754] rounded-2xl rotate-10 relative top-4 right-6">
          <Image src="/z5.png" alt="Z5" width={100} height={100} />
        </div>
      </div>
    </section>
  );
}
