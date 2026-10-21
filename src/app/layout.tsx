import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import LegacyChrome from "@z/components/mission/LegacyChrome";
import { siteDescription, siteTitle, siteUrl } from "./site";

import "./globals.css";
import "./mission.css";

const sans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: "Arial",
  weight: "100 900",
});

const mono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  display: "swap",
  adjustFontFallback: "Arial",
  weight: "100 900",
});

export const viewport: Viewport = {
  themeColor: "#070e1c",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Danilo Zabala II",
    type: "website",
    images: [
      {
        url: "/astronaut.webp",
        width: 1120,
        height: 1120,
        alt: "astronaut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/astronaut.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${sans.variable} ${mono.variable}`}>
      <body className={`${sans.className} antialiased`}>
        <LegacyChrome />
        {children}
      </body>
    </html>
  );
}
