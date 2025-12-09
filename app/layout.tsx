import type { Metadata } from "next";
import "./globals.css";
import Popins from "next/font/local";
import Header from "@/components/Header";

// main fonts
const popins = Popins({
  src: "../fonts/Poppins-Light.ttf",
});

export const metadata: Metadata = {
  title: "Websoft Solution",
  description: "Bhuj based Cable and OTT services provideing company.",
  keywords: [
    "Internet service in bhuj",
    "Wifi service provider in bhuj",
    "OTT service provider in bhuj",
    "TV Packs service provider in bhuj",
    "Internet service in anjar",
    "Wifi service provider in anjar",
    "OTT service provider in anjar",
    "TV Packs service provider in anjar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${popins.className}  antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
