import About from "@/components/About/About";
import Acommodation from "@/components/Accommodations/Accommodation";
import Distances from "@/components/About/Distances";
import HeadSwiper from "@/components/HeadSwiper/HeadSwiper";
import Photogalleries from "@/components/Gallery/Photogalleries";
import SendMessage from "@/components/SendMessage/SendMessage";
import TouristGuide from "@/components/TouristGuide/TouristGuide";
import React from "react";
import NavPath from "@/components/NavPath/NavPath";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

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
