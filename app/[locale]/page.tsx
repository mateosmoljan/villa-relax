import About from "@/components/About/About";
import HeadSwiper from "@/components/HeadSwiper/HeadSwiper";
import SendMessage from "@/components/SendMessage/SendMessage";
import React from "react";
import NavPath from "@/components/NavPath/NavPath";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Distances = dynamic(() => import("@/components/About/Distances"), {
  ssr: false,
  loading: () => <section className="py-10" />,
});

const Acommodation = dynamic(() => import("@/components/Accommodations/Accommodation"), {
  ssr: false,
  loading: () => <section className="py-10 bg-gray-100" />,
});

const Photogalleries = dynamic(() => import("@/components/Gallery/Photogalleries"), {
  ssr: false,
  loading: () => <section className="py-10" />,
});

const TouristGuide = dynamic(() => import("@/components/TouristGuide/TouristGuide"), {
  ssr: false,
  loading: () => <section className="py-10 bg-gray-100" />,
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildPageMetadata(locale, "/");
}

function Home() {
  return (
    <div>
      <HeadSwiper />
      <main>
        <NavPath homePage={true} />
        <About />
        <Distances />
        <Acommodation />
        <Photogalleries />
        <TouristGuide />
        <div className="mb-24">
          <SendMessage />
        </div>
      </main>
    </div>
  );
}

export default Home;
