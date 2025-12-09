import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full px-7 lg:px-16 flex flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-6xl font-bold">404 | Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="w-fit p-4 rounded-md z-10 flex gap-1 hover:gap-3 transition-all bg-gray-600 text-white"
      >
        Return Home
      </Link>
    </div>
  );
}
