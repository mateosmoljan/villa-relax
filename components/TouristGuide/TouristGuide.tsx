"use client";
import { TouristImageData } from "@/lib/TouristImageData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./touristguide.css";

import { SwiperNavButtonsGuide } from "./SwiperNavButtonsGuide";

function TouristGuide() {
  const [windowSize, setWindowSize] = useState<number>(4);
  const [screenSize, setScreenSize] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState(false);

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

  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      {isLoaded && (
        <section className="py-10 bg-gray-100">
          <div className="container">
            <div className="w-6xl flex flex-col gap-3 pb-10">
              <h2 className="text-pink font-semibold uppercase tracking-widest">
                Tourist Guide
              </h2>
              <h1 className="font-bold text-4xl sm:text-3xl text-dark_blue_black">
                What to visit, see and do?
              </h1>
            </div>
            <div className="mx-auto tourist-guide">
              <Swiper
                loop={true}
                slidesPerView={windowSize}
                spaceBetween={10}
                grabCursor={true}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                }}
              >
                <div className="divInside">
                  {TouristImageData.image.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className=" xl:h-80 h-96 w-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className="object-cover  h-full w-full rounded-md"
                          loading="lazy"
                        />
                        <div className="relative text-left pl-1/10 bottom-20 z-10 flex flex-col gap-2">
                          <h2 className="text-white font-bold text-xl">
                            {image.title}
                          </h2>
                          <p className="text-white">{image.des}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <SwiperNavButtonsGuide visible={screenSize} />
              </Swiper>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default TouristGuide;
