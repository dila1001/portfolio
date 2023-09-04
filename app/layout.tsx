import "./globals.css";
import type { Metadata } from "next";
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
      <body
        suppressHydrationWarning={true}
        className="bg-white font-halisBook text-base text-black"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
