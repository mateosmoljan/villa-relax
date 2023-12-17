import About from "@/components/About";
import Acommodation from "@/components/Acommodation";
import Distances from "@/components/Distances";
import HeadSwiper from "@/components/HeadSwiper";
import Navbar from "@/components/Navbar";
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
      </main>
    </div>
  );
}

export default Home;
