"use client";
import { TouristImageData } from "@/lib/TouristImageData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperNavButtonsGuide } from "./SwiperNavButtonsGuide";

function TouristGuide() {
  const [windowSize, setWindowSize] = useState<number>(4);
  const [screenSize, setScreenSize] = useState<boolean>(true);

  useEffect(() => {
    const updateWindowSize = () => {
      const width = window.innerWidth;

      if (width > 1024) {
        setWindowSize(4);
      } else if (width > 640) {
        setWindowSize(2);
        setScreenSize(true);
      } else {
        setWindowSize(1);
        setScreenSize(false);
      }
    };
    updateWindowSize();

    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <section className=" flex justify-center py-20">
      <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl sm:p-3 p-5">
        <div className="w-6xl flex flex-col gap-3 pb-10">
          <h2 className="text-pink font-semibold uppercase">Tourist Guide</h2>
          <h1 className="font-bold text-2xl sm:text-3xl text-dark_blue_black">
            What to visit, see and do?
          </h1>
        </div>
        <div className="">
          <Swiper
            loop={true}
            slidesPerView={windowSize}
            spaceBetween={10}
            grabCursor={true}
          >
            {TouristImageData.image.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex  items-center justify-center xl:h-80 h-96 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-cover  h-full w-full rounded-md"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-3 left-3 flex flex-col gap-2">
                  <h2 className="text-white font-bold text-xl">
                    {image.title}
                  </h2>
                  <p className="text-white">{image.des}</p>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtonsGuide visible={screenSize} />
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TouristGuide;
