import PlansBox from "@/components/PlansBox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function PlansPage() {
  return (
    <>
      <main className="px-8 lg:px-16 pt-22 text-center cursor-default">
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore world of movies and Tv shows
        </h2>

        <section className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <PlansBox
            title="Starter"
            subtitle="The basics for individuals"
            price="499"
            buttonText="Select Plan"
            buttonHref="/"
            included={[
              "Netflex",
              "Jio Hotstar (Disney)",
              "Amazon Prime",
              "Crunchyroll",
              "Apple Tv",
              "Z5",
            ]}
          />
          <PlansBox
            title="Group"
            subtitle="Suitable to fit your group needs"
            price="599"
            buttonText="Select Plan"
            buttonHref="/"
            included={[
              "Netflex",
              "Jio Hotstar (Disney)",
              "Amazon Prime",
              "Crunchyroll",
              "Apple Tv",
              "Z5",
              "Youtube Premium",
              "Spotify Premium",
              "Jio TV",
            ]}
          />
          <PlansBox
            title="Family"
            subtitle="The basics for individuals"
            price="1200"
            buttonText="Select Plan"
            buttonHref="/"
            included={[
              "Netflex",
              "Jio Hotstar (Disney)",
              "Amazon Prime",
              "Crunchyroll",
              "Apple Tv",
              "Z5",
              "Youtube Premium",
              "Spotify Premium",
              "Jio TV",
              "Live TV Channels",
              "WiFi Broadband",
            ]}
          />
        </section>

        <div className="p-4">
          <p className="mb-2 text-sm md:text-md">
            Feel free to contact us for a custom package
          </p>
          <Button asChild variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
}
