import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navigation, RevealObserver } from "@/components/site-shell";
import { PageTransition } from "@/components/page-transition";

const siteUrl = "https://ycs-studio.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yousaf’s Creative Studio — Films with a point of view",
    template: "%s — Yousaf’s Creative Studio",
  },
  description:
    "An independent production and creative marketing studio making films, campaigns, and content with a point of view. Based in Islamabad, working everywhere.",
  openGraph: {
    title: "Yousaf’s Creative Studio",
    description: "Films with a point of view. Made with intention.",
    url: siteUrl,
    siteName: "Yousaf’s Creative Studio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: "Yousaf’s Creative Studio — Make it mean something" }],
  },
  twitter: { card: "summary_large_image", title: "Yousaf’s Creative Studio", description: "Films with a point of view. Made with intention." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main id="main-content"><PageTransition>{children}</PageTransition></main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
