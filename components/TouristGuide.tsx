"use client";
import { TouristImageData } from "@/lib/TouristImageData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperNavButtonsGuide } from "./SwiperNavButtonsGuide";

function TouristGuide() {
  return (
    <section className="flex justify-center">
      <div className="max-w-6xl p-3 py-20">
        <div className="w-6xl flex flex-col gap-3 pb-10">
          <h2 className="text-pink font-semibold uppercase">Tourist Guide</h2>
          <h1 className="font-bold text-3xl">What to visit, see and do?</h1>
        </div>
        <div className=" ">
          <Swiper
            lazy={true}
            loop={true}
            slidesPerView={4}
            spaceBetween={10}
            grabCursor={true}
          >
            {TouristImageData.image.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex  items-center justify-center h-96 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-cover  h-full w-full rounded-md"
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
            <SwiperNavButtonsGuide />
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TouristGuide;
