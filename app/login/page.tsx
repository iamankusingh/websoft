import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <SEO
        title="Login/Signup Websoft Solution"
        description="Login or create account at Websoft Sollution Bhuj"
        // keywords={["keyword1", "keyword2"]}
      />

      <main className="h-screen px-8 lg:px-16 flex flex-col items-center gap-4 bg-[url('/login-bg.jpg')] bg-cover cursor-default">
        <h2 className="text-2xl mt-20">Websoft Accounts</h2>

        <section className="w-full md:w-sm p-4 bg-[#e8f1f9] rounded-xl">
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="mb-4 p-2 rounded-xl bg-white">
              <TabsTrigger
                value="signin"
                className="p-3 rounded-lg data-[state=active]:bg-accent"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="p-3 rounded-lg data-[state=active]:bg-accent"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="flex flex-col gap-4">
              <form className="flex flex-col gap-4">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full rounded-lg bg-white border border-gray-400 px-5 py-3 text-gray-900 placeholder:text-gray-500 focus:border-black focus:outline-none"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-lg bg-white border border-gray-400 px-5 py-3 text-gray-900 placeholder:text-gray-500 focus:border-black focus:outline-none"
                />

                <Link href="/" className="text-sm text-blue-600 underline">
                  Forgot Password?
                </Link>

                <Button type="submit" variant="default">
                  Sign In
                </Button>
              </form>

              <div className="flex items-center justify-center gap-2">
                <div className="h-0.5 w-full bg-black"></div>
                <span>OR</span>
                <div className="h-0.5 w-full bg-black"></div>
              </div>

              <div className="flex items-center justify-around">
                <Link href="/" className="px-6 py-2 bg-card rounded-md">
                  <Image
                    src="/google.webp"
                    alt="Google Icon"
                    width={24}
                    height={24}
                  />
                </Link>

                <Link href="/" className="px-6 py-2 bg-card rounded-md">
                  <Image
                    src="/apple.webp"
                    alt="Apple Icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="signup" className="flex flex-col gap-4">
              <form className="flex flex-col gap-4">
                <input
                  type="tetx"
                  placeholder="Full Name"
                  className="w-full rounded-lg bg-white border border-gray-400 px-5 py-3 text-gray-900 placeholder:text-gray-500 focus:border-black focus:outline-none"
                />

                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full rounded-lg bg-white border border-gray-400 px-5 py-3 text-gray-900 placeholder:text-gray-500 focus:border-black focus:outline-none"
                />

                <p className="text-sm text-gray-900">
                  <Link href="/" className="underline">
                    Terms of Services
                  </Link>{" "}
                  and{" "}
                  <Link href="/" className="underline">
                    Privacy Policy
                  </Link>
                </p>

                <Button type="submit" variant="default">
                  Sign Up
                </Button>
              </form>

              <div className="flex items-center justify-center gap-2">
                <div className="h-0.5 w-full bg-black"></div>
                <span>OR</span>
                <div className="h-0.5 w-full bg-black"></div>
              </div>

              <div className="flex items-center justify-around">
                <Link href="/" className="px-6 py-2 bg-card rounded-md">
                  <Image
                    src="/google.webp"
                    alt="Google Icon"
                    width={24}
                    height={24}
                  />
                </Link>

                <Link href="/" className="px-6 py-2 bg-card rounded-md">
                  <Image
                    src="/apple.webp"
                    alt="Apple Icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </>
  );
}
