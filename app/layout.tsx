import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DraftingLines } from "@/components/DraftingLines";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollHUD } from "@/components/ScrollHUD";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DECOCONCEPTS | Architectural Mastery",
  description:
    "Structural integrity meets high-contrast minimalism. Architectural and interior design portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${bodoni.variable} ${hanken.variable}`}
    >
      <body className="bg-background text-on-background antialiased selection:bg-primary selection:text-background min-h-screen flex flex-col relative">
        <SmoothScroll>
          <DraftingLines />
          <Navbar />
          <ScrollHUD />
          <main className="flex-grow z-10 relative pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
