import type { Metadata } from "next";
import "./globals.css";

import { CursorTrail, TwinklingStars } from "@z/components";
import { siteDescription, siteTitle, siteUrl } from "./site";

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
    <html lang='en'>
      <head>
        {/* Link to Google Fonts */}
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='antialiased' style={{ fontFamily: "'Inter', sans-serif" }}>
        <TwinklingStars />
        {children}
        <CursorTrail />
      </body>
    </html>
  );
}
