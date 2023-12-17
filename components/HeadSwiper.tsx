"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination, EffectFade } from "swiper/modules";

import { images } from "@/lib/images";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { MdKeyboardArrowDown } from "react-icons/md";
import { SwiperNavButtons } from "./SwiperNavButton";

export default function HeadSwiper() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about"); // Replace 'about' with the actual ID of your about section
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth", // Use smooth scrolling
      });
    }
  };

  return (
    <section className="block h-screen max-w-screen relative">
      <div className="block container relative max-w-full !important ">
        <Swiper
          lazy="true"
          loop={true}
          effect={"fade"}
          spaceBetween={0}
          modules={[FreeMode, Autoplay, Pagination, EffectFade]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex relative items-center justify-center h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover block h-screen w-full"
                />
                <div className="z-20 absolute bottom-8 flex items-center justify-center flex-col bg-black bg-opacity-50 rounded-md p-8 gap-3">
                  <h1 className="text-white font-arbutus text-3xl font-bold">
                    {image.title}
                  </h1>
                  <p className="text-white">{image.des}</p>
                  <a href="#info" onClick={scrollToAbout}>
                    <button className="btn">
                      Read More <MdKeyboardArrowDown className="text-2xl" />
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </section>
  );
}
