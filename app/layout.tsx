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
