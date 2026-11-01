import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next, Overpass, Overpass_Mono } from "next/font/google";
import { SiteFooter, SpotsBanner } from "./components/sections";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible_Next({
  variable: "--font-atkinson",
  subsets: ["latin", "latin-ext"],
});

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
});

const overpassMono = Overpass_Mono({
  variable: "--font-overpass-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kinlight | Your website, finally as alive as your community.",
  description: "Be one of our founding communities: a website that shows what life is really like there, not a brochure. Ensure families stay engaged and no question is left unanswered.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${atkinson.variable} ${overpass.variable} ${overpassMono.variable} antialiased`}>
      <body>
        <a href="#main" className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50">
          Skip to main content
        </a>
        <SpotsBanner />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
