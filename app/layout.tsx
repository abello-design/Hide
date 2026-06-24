import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import GlobalCursor from "@/app/components/GlobalCursor";
import "../styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HIDE — A Film by Alexander Bello",
  description:
    "A reclusive hunter clashes with her ambitious son over whether or not to capitalize on a tragic, coveted family heirloom. Directed by Alexander Bello.",
  keywords: ["HIDE", "Alexander Bello", "short film", "horror", "drama", "independent film"],
  authors: [{ name: "Alexander Bello" }],
  openGraph: {
    title: "HIDE — A Film by Alexander Bello",
    description:
      "A reclusive hunter clashes with her ambitious son over whether or not to capitalize on a tragic, coveted family heirloom.",
    type: "website",
    siteName: "HIDE",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIDE — A Film by Alexander Bello",
    description:
      "A reclusive hunter clashes with her ambitious son over whether or not to capitalize on a tragic, coveted family heirloom.",
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
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-black text-pale-cream">
        <div className="grain-overlay" aria-hidden="true" />
        <GlobalCursor />
        {children}
      </body>
    </html>
  );
}
