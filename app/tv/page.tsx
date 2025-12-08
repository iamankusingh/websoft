"use client";

import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

type packType = {
  plan: string;
  desc: string;
  prices: { duration: string; price: string }[];
  channels: string;
  quality: string;
  genres: string;
};

const packs: packType[] = [
  {
    plan: "Basic pack",
    desc: "Ideal for a small family",
    prices: [
      { duration: "1 month", price: "₹ 500" },
      { duration: "6 month", price: "₹ 3,000" },
      { duration: "12 month", price: "₹ 5,000" },
    ],
    channels: "100",
    quality: "60 SD, 40 HD",
    genres: "News, Movies, Shows, Kids, Music, National",
  },
  {
    plan: "Family Pack",
    desc: "Perfect for big family",
    prices: [
      { duration: "1 month", price: "₹ 750" },
      { duration: "6 month", price: "₹ 4,200" },
      { duration: "12 month", price: "₹ 7,500" },
    ],
    channels: "200",
    quality: "80 SD, 120 HD",
    genres: "News, Movies, Shows, Kids, Music, National, Sports",
  },
  {
    plan: "Premium Pack",
    desc: "Great for premium experience",
    prices: [
      { duration: "1 month", price: "₹ 1,000" },
      { duration: "6 month", price: "₹ 5,400" },
      { duration: "12 month", price: "₹ 10,000" },
    ],
    channels: "300",
    quality: "30 SD, 270 HD",
    genres:
      "News, Movies, Shows, Kids, Music, National, Sports, International, Finance",
  },
  {
    plan: "Ultra HD Pack",
    desc: "Great for superior quality",
    prices: [
      { duration: "1 month", price: "₹ 1,200" },
      { duration: "6 month", price: "₹ 7,200" },
      { duration: "12 month", price: "₹ 12,000" },
    ],
    channels: "500+",
    quality: "All HD",
    genres: "All",
  },
];

export default function TvPage() {
  const [customList, setCustomList] = useState<string[]>([]);
  const [customPrice, setCustomPrice] = useState<number>(0);

  const handleCheckBox = (genre: string) => {
    console.log(genre);

    // it genre exist, subtract
    if (customList.includes(genre)) {
      setCustomList(customList.filter((item) => item !== genre));
      setCustomPrice(customPrice - 70);
    } else {
      console.log("Not in list");
      setCustomList([...customList, genre]);
      setCustomPrice(customPrice + 70);
    }
  };

  useEffect(() => {
    console.log("final array ", customList);
    console.log("final price ", customPrice);
  }, [customList, customPrice]);

  return (
    <>
      <main className="px-8 lg:px-16 pt-18">
        <h2 className="text-3xl font-semibold mb-2">TV Channels</h2>
        <p className="text-muted-foreground mb-8">
          Explore variety of Regional, National and International TV Channels
        </p>

        {/* TV Packs */}
        <section className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packs.map((pack) => (
            <article
              key={pack.plan}
              className="h-fit bg-card border border-border rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <h3 className="mb-2 text-2xl font-bold">{pack.plan}</h3>
              <p className="text-sm text-muted-foreground mb-6">{pack.desc}</p>

              <div className="space-y-3 mb-6">
                {pack.prices.map((item) => (
                  <div
                    key={item.duration}
                    className="flex justify-between items-center p-2 bg-gray-50 rounded"
                  >
                    <span className="text-gray-700">{item.duration}</span>
                    <span className="font-bold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  {pack.channels} Channels
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  {pack.quality} Channels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  {pack.genres}
                </li>
              </ul>

              <Button asChild variant="default" className="w-full">
                <Link href="/">Subscribe</Link>
              </Button>
            </article>
          ))}
        </section>

        <section className="py-4">
          <h2 className="text-3xl font-semibold mb-2">Custom Pack</h2>
          <p className="text-muted-foreground mb-8">Build your custom pack</p>

          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "News",
              "Movies",
              "Shows",
              "Kids",
              "Music",
              "National",
              "Sports",
              "International",
              "Finance",
              "Knowledge",
              "Science",
              "History",
              "Gujarati",
              "Marathi",
              "Bengali",
              "Kannad",
              "Telugu",
              "malyalam",
              "Tamil",
              "Kashmiri",
              "Bhojputi",
              "Oodiya",
              "Punjabi",
              "Assames",
            ].map((genre) => (
              <div
                key={genre}
                className="flex items-center justify-between p-2 bg-card rounded border border-border"
              >
                {/* check box */}
                <label
                  key={genre}
                  className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-gray-50 transition"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded"
                    onChange={() => handleCheckBox(genre)}
                  />
                  <span className="text-gray-700">{genre}</span>
                </label>

                {/* radio */}
                <div className="flex gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name={genre} className="w-4 h-4" />
                    <span className="text-sm">SD</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={genre}
                      defaultChecked
                      className="w-4 h-4"
                    />
                    <span className="text-sm">HD</span>
                  </label>
                </div>
              </div>
            ))}
          </article>

          <div className="w-full text-center">
            <Button size="lg" className="w-full md:w-xs mt-4">
              ₹ {customPrice}
            </Button>
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-3xl font-semibold mb-2">How TV Service works</h2>
          <p className="text-muted-foreground mb-8">
            Don&apos;t wory! Our technician will take care of all work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: 1,
                title: "Choose Your Pack",
                desc: "Select the TV pack that best suits your needs.",
              },
              {
                step: 2,
                title: "Schedule Installation",
                desc: "Contact our support team to set up a convenient installation time.",
              },
              {
                step: 3,
                title: "Professional Setup",
                desc: "Our technicians will install equipment and configure your connection.",
              },
              {
                step: 4,
                title: "Testing & Activation",
                desc: "We test the connection to ensure everything is working perfectly.",
              },
              {
                step: 5,
                title: "Enjoy Your TV",
                desc: "Start watching and exploring your pack!",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-600">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
