import About from "@/components/About";
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
      </main>
    </div>
  );
}

export default Home;
