"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { images } from "@/lib/images";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="block bg-black max-h-screen max-w-screen relative">
      <div className="block container relative max-w-full max-w-full !important">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          // thumbs={{
          //   swiper:
          //     thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          // }}
          modules={[FreeMode, Navigation]}
          className=""
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex relative items-center justify-center h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block max-h-screen w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
