import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Favourites() {
  return (
    <section className="p-8 lg:p-16 flex flex-col md:flex-row gap-8 justify-around">
      <div>
        <h3 className="text-3xl lg:text-5xl">
          All your
          <span className="font-bold text-[#f56262]"> favourites </span>
          <Image
            src="/circle-8-star.svg"
            alt="star"
            width={40}
            height={40}
            unoptimized
            className="inline hover:rotate-90 transition-all"
          />
          <br /> at one place.
        </h3>
        <p className="my-4 lg:my-8 lg:w-lg">
          Stay hassle free - Let us manage all your showsfrom different
          platforms at one place.
        </p>

        <Button
          asChild
          className="mr-3 shadow-lg border border-gray-700 bg-gray-100 text-black hover:border-gray-400 hover:bg-black hover:text-white transition-all duration-300"
        >
          <Link href="/">View Plans</Link>
        </Button>
      </div>

      <Image
        src="/four-tv.jpg"
        alt="Four TV"
        width={500}
        height={500}
        className="md:w-auto rounded-2xl shadow-xl"
      />
    </section>
  );
}
