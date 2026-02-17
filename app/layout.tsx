import type { Metadata } from "next";
import { Inter, Outfit, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import GradientBackground from "@/components/ui/GradientBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jahnavi Dantuluri | Finance Professional & Strategic Thinker",
  description:
    "BBA student at RV University with a focus on finance. Hands-on experience across operations, financial analysis, and market research.",
  keywords: [
    "Jahnavi Dantuluri",
    "Finance",
    "Operations",
    "Portfolio",
    "BBA",
    "RV University",
    "FinTech",
  ],
  authors: [{ name: "Jahnavi Dantuluri" }],
  openGraph: {
    title: "Jahnavi Dantuluri | Finance Professional & Strategic Thinker",
    description:
      "BBA student at RV University with a focus on finance. Hands-on experience across operations, financial analysis, and market research.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahnavi Dantuluri | Finance Professional & Strategic Thinker",
    description:
      "BBA student at RV University with a focus on finance. Hands-on experience across operations, financial analysis, and market research.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">
        <GradientBackground />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
