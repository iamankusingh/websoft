import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="my-6 md:my-0 p-8 lg:px-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
      {/* Address */}
      <div className="flex flex-col justify-center space-y-8">
        <h1 className="text-4xl font-medium tracking-tight text-black sm:text-5xl">
          Contact Us
        </h1>

        <div className="space-y-2 text-lg text-gray-900">
          <div className="flex items-start gap-4">
            <MapPin className="h-8 w-8 shrink-0 stroke-[1.5]" />
            <p className="max-w-xs leading-relaxed">
              5, 2nd Floor, Asha Apartment, Bankers Colony, Bhuj - Gujarat
              370001, India
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="h-8 w-8 shrink-0 stroke-[1.5]" />
            <a
              href="tel:+919033033232"
              className="underline hover:no-underline"
            >
              +91 9033033232
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="h-8 w-8 shrink-0 stroke-[1.5]" />
            <a href="mailto:connect@wssbhuj.in" className="hover:underline">
              connect@wssbhuj.in
            </a>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-4 lg:p-6 rounded-2xl bg-white shadow-sm">
        <h2 className="text-3xl font-bold tracking-tight text-black">
          Get in Touch
        </h2>
        <p className="mt-1 text-gray-600 mb-8">You can reach us anytime</p>

        <form className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="First name"
              className="w-full rounded-lg border border-gray-400 px-5 py-3 text-gray-900 placeholder:text-gray-500 focus:border-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full rounded-lg border border-gray-400 px-5 py-3 text-gray-900 placeholder:text-gray-500 focus:border-black focus:outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-lg border border-gray-400 px-5 py-3 text-gray-900 placeholder:text-gray-500 focus:border-black focus:outline-none"
          />

          <div className="flex w-full overflow-hidden rounded-lg border border-gray-400 focus-within:border-black">
            <div className="flex items-center border-r border-gray-400 bg-transparent px-5 py-3">
              <span className="font-medium text-gray-900">+91</span>
            </div>
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full border-none bg-transparent px-5 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-0"
            />
          </div>

          <textarea
            rows={4}
            placeholder="How can we help you?"
            className="w-full rounded-lg border border-gray-400 px-5 py-3 text-gray-900 placeholder:text-gray-500 focus:border-black focus:outline-none resize-none"
          />

          <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
            <p className="text-xs font-medium text-gray-900 text-center sm:text-left">
              By contacting us, you are agree to our{" "}
              <br className="hidden sm:block" />
              <Link href="/terms-conditions" className="font-bold underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-bold underline">
                Privacy Policy
              </Link>
            </p>

            <button
              type="submit"
              className="px-10 py-2.5 text-lg font-medium rounded-lg border border-gray-400 bg-gray-100 text-black hover:border-white hover:bg-black hover:text-white transition-all duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
