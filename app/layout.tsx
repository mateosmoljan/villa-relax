import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Arbutus_Slab, Poppins } from "next/font/google";
import Navbar from "@/components/Navigation/Navbar";

const arbutus = Arbutus_Slab({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-arbutus",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Villa Relax",
  description: "Experience world-class service at Villa Relax",
  icons: {
    icon: "/assets/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins ${arbutus.variable} font-arbutus`}
      >
        <header>
        <Navbar />
      </header>
        {children}
      </body>
    </html>
  );
}
