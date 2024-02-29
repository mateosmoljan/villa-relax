"use client";
import React, { useRef, useState } from "react";
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

export default function PropertyGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="PropertyGalleryDiv">
      <Swiper
        effect={"fade"}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, EffectFade]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="PropertySwiper"
      >
        {PropertyGalleryLib.images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <Image
                src={image.original}
                alt={image.alt}
                width={500}
                height={500}
                className="object-cover block rounded-t-md w-full"
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        grabCursor
        slidesPerView={4}
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
                className={`border-4 ${
                  activeIndex === index ? "!border-[#B29600]" : ""
                }object-cover block rounded-md w-full`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
