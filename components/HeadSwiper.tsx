"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import { images } from "@/lib/images";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { SwiperNavButtons } from "./SwiperNavButton";

export default function Page() {
  return (
    <section className="block max-h-screen max-w-screen relative">
      <div className="block container relative max-w-full !important">
        <Swiper loop={true} spaceBetween={0} modules={[FreeMode]} className="">
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
          <SwiperNavButtons />
        </Swiper>
      </div>
    </section>
  );
}
