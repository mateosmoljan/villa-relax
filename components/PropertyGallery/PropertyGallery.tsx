"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import "./style.css";

import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";
import Image from "next/image";
import { PropertyGalleryLib } from "@/lib/property_gallery";
import { SwiperNavButtons } from "./SwiperNavButton";
import Loading from "../Loading/Loading";

export default function PropertyGallery() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="pb-12">
      {isLoaded ? (
        <div className="PropertyGalleryDiv">
          <Swiper
            effect={"fade"}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="PropertySwiper !overflow-visible"
          >
            {PropertyGalleryLib.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src={image.original}
                    alt={image.alt}
                    width={600}
                    height={600}
                    className="object-cover block rounded-t-md w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={0}
            grabCursor
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="PropertySWiperThumbnail"
          >
            {PropertyGalleryLib.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={`flex items-center justify-center`}>
                  <Image
                    src={image.original}
                    alt={image.alt}
                    width={100}
                    height={100}
                    className={` border-4${
                      activeIndex == index ? " border-4 !border-yellow" : ""
                    } border-transparent object-cover block rounded-md w-full`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
