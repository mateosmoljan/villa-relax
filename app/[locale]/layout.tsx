import React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Arbutus_Slab, Poppins } from "next/font/google";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalitics";
import { buildPageMetadata, getLodgingBusinessJsonLd } from "@/lib/seo";

const arbutus = Arbutus_Slab({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-arbutus",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildPageMetadata("en", "/"),
  icons: {
    icon: "/assets/images/logo.png",
  },
  metadataBase: new URL("https://www.villarelaxpula.com"),
  applicationName: "Villa Relax",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const jsonLd = getLodgingBusinessJsonLd(locale);

  return (
    <html lang={locale}>
      <body
        className={`${poppins.variable} font-poppins ${arbutus.variable} font-arbutus min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
