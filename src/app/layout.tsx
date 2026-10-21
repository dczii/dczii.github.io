import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { siteDescription, siteTitle, siteUrl } from "./site";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

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
    <html lang='en' className={geist.variable}>
      <body className={`${geist.className} antialiased`}>
        <a href='#main' className='skip-link'>
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
