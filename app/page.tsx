import About from "@/components/About";
import Acommodation from "@/components/Acommodation";
import Distances from "@/components/Distances";
import HeadSwiper from "@/components/HeadSwiper";
import Navbar from "@/components/Navbar";
import Photogalleries from "@/components/Photogalleries";
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
      </main>
    </div>
  );
}

export default Home;
