// navbar, contact section

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/modules/home/Navbar";
import Footer from "./components/modules/home/Footer";

export const metadata: Metadata = {
  title: "Adila Razmi",
  description: "Adila's personal website & blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white font-halisBook text-base text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
