import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";

type InternetPlansType = {
  speed: string;
  desc: string;
  prices: { duration: string; price: string }[];
};

const internetPlans: InternetPlansType[] = [
  {
    speed: "30 mbps",
    desc: "Ideal for browsing and streaming",
    prices: [
      { duration: "1 month", price: "₹ 500" },
      { duration: "6 month", price: "₹ 3000" },
      { duration: "12 month", price: "₹ 6000" },
    ],
  },
  {
    speed: "50 mbps",
    desc: "Perfect for small households",
    prices: [
      { duration: "1 month", price: "₹ 750" },
      { duration: "6 month", price: "₹ 4200" },
      { duration: "12 month", price: "₹ 8000" },
    ],
  },
  {
    speed: "100 mbps",
    desc: "Great for larger families and remote work",
    prices: [
      { duration: "1 month", price: "₹ 999" },
      { duration: "6 month", price: "₹ 5400" },
      { duration: "12 month", price: "₹ 10000" },
    ],
  },
  {
    speed: "200 mbps",
    desc: "For heavy streaming and gaming",
    prices: [
      { duration: "1 month", price: "₹ 1499" },
      { duration: "6 month", price: "₹ 7800" },
      { duration: "12 month", price: "₹ 14000" },
    ],
  },
  {
    speed: "500 mbps",
    desc: "Ultra-fast speeds for multiple users",
    prices: [
      { duration: "1 month", price: "₹ 1999" },
      { duration: "6 month", price: "₹ 10200" },
      { duration: "12 month", price: "₹ 18000" },
    ],
  },
  {
    speed: "1 gbps",
    desc: "Top-tier performance for demanding needs",
    prices: [
      { duration: "1 month", price: "₹ 2499" },
      { duration: "6 month", price: "₹ 12600" },
      { duration: "12 month", price: "₹ 22000" },
    ],
  },
];

type CorporatePlanType = {
  speed: string;
  price: string;
  features: string[];
};

const corporateInternet: CorporatePlanType[] = [
  {
    speed: "2 gbps",
    price: "₹ 5,000/month",
    features: ["Dedicated Bandwidth", "99.9% Uptime SLA", "Priority Support"],
  },
  {
    speed: "5 gbps",
    price: "₹ 10,000/month",
    features: [
      "Ultra-Dedicated Bandwidth",
      "99.99% Uptime SLA",
      "24/7 Dedicated Manager",
    ],
  },
  {
    speed: "10 gbps",
    price: "Custom",
    features: [
      "Full Dedicated Infrastructure",
      "Custom SLA",
      "Dedicated Account Team",
    ],
  },
];

export default function InternetPage() {
  return (
    <>
      <main className="px-8 lg:px-16 pt-16 cursor-default">
        <h1 className="text-4xl font-bold mb-4">Internet</h1>
        <p className="text-lg text-gray-600 mb-4">
          We delivers Strong, Secure and Fast seamless WiFi service
        </p>

        <div className="py-4 flex flex-wrap gap-2">
          <p className="p-2 flex items-center gap-1 text-xl bg-card rounded-xl">
            <MapPin /> Bhuj
          </p>
          <p className="p-2 flex items-center gap-1 text-xl bg-card rounded-xl">
            <MapPin /> Madhapar
          </p>
          <p className="p-2 flex items-center gap-1 text-xl bg-card rounded-xl">
            <MapPin /> Anjar
          </p>
          <p className="p-2 flex items-center gap-1 text-xl bg-card rounded-xl">
            <MapPin /> Nakhatrana
          </p>
          <p className="p-2 flex items-center gap-1 text-xl bg-card rounded-xl">
            <MapPin /> Khavda
          </p>
        </div>

        {/* Normal Internet */}
        <section className="py-8">
          <h2 className="text-3xl font-semibold mb-2">Internet Plans</h2>
          <p className="text-muted-foreground mb-8">
            Choose the perfect plan for your internet needs with flexible
            durations and competitive pricing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internetPlans.map((plan) => (
              <article
                key={plan.speed}
                className="bg-card border border-border rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <h3 className="mb-2 text-2xl font-bold">{plan.speed}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.desc}
                </p>

                <div className="space-y-3 mb-6">
                  {plan.prices.map((item) => (
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
                    <span className="text-green-600 font-bold">✓</span>{" "}
                    Unlimited data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span> 24/7
                    support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span> Free
                    installation
                  </li>
                </ul>

                <Button asChild variant="default" className="w-full">
                  <Link href="/">Subscribe</Link>
                </Button>
              </article>
            ))}
          </div>
        </section>

        {/* Corporate Internet */}
        <search className="py-8">
          <h2 className="text-3xl font-semibold">Corporate Internet</h2>
          <p className="mt-4 text-gray-700">
            For businesses seeking reliable and high-speed internet solutions,
            we offer tailored corporate internet plans.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateInternet.map((plan) => (
              <article
                key={plan.speed}
                className="border-2 border-blue-600 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow bg-blue-50"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {plan.speed}
                </h3>
                <p className="text-3xl font-bold text-gray-900 mb-4">
                  {plan.price}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-blue-600 font-bold">✓</span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full mt-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Link href="/">Book</Link>
                </Button>
              </article>
            ))}
          </div>
        </search>

        <section className="py-8">
          <h2 className="text-3xl font-semibold mb-2">Why Choose Us?</h2>
          <p className="text-muted-foreground mb-8">
            Discover what makes our internet service the best choice for your
            connectivity needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "High-Speed Connectivity",
                desc: "Experience blazing-fast internet speeds that keep you connected without interruptions.",
              },
              {
                title: "Reliable Service",
                desc: "Our robust infrastructure ensures consistent and dependable internet access.",
              },
              {
                title: "Affordable Plans",
                desc: "Choose from a variety of plans tailored to fit your budget and needs.",
              },
              {
                title: "24/7 Customer Support",
                desc: "Our dedicated support team is available around the clock to assist you.",
              },
              {
                title: "Easy Setup",
                desc: "Get online quickly with our hassle-free installation process.",
              },
              {
                title: "Secure Connection",
                desc: "Your data is protected with enterprise-grade security measures.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-3xl font-semibold mb-2">Installation Process</h2>
          <p className="text-muted-foreground mb-8">
            Follow these simple steps to get your internet service up and
            running.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: 1,
                title: "Choose Your Plan",
                desc: "Select the internet plan that best suits your needs.",
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
                title: "Enjoy Your Internet",
                desc: "Start browsing, streaming, and connecting with high-speed internet!",
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
