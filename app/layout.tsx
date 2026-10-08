import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { site, SITE_URL } from "@/content/site";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [{ url: site.og.src, width: site.og.width, height: site.og.height, alt: site.og.alt }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="ko"><head><link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" /><link rel="stylesheet" href={site.fontStylesheet} /></head><body>{children}</body></html>;
}
