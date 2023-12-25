import About from "@/components/About";
import Acommodation from "@/components/Acommodation";
import Distances from "@/components/Distances";
import Footer from "@/components/Footer";
import FooterSvg from "@/components/FooterSvg";
import HeadSwiper from "@/components/HeadSwiper";
import Navbar from "@/components/Navbar";
import Photogalleries from "@/components/Photogalleries";
import SendMessage from "@/components/SendMessage";
import TouristGuide from "@/components/TouristGuide";
import React from "react";

function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <HeadSwiper />
      </header>
      <main>
        <About />
        <Distances />
        <Acommodation />
        <Photogalleries />
        <TouristGuide />
        <SendMessage />
        <FooterSvg />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
