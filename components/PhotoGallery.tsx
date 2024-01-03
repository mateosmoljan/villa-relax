"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { TouristImageData } from "../lib/TouristImageData";
import FullscreenButton from "./FullScreenButton";
import { useEffect } from "react";

interface Props {
  active: boolean;
}

function PhotoGallery({ active }: Props) {
  const pagination = {
    clickable: true,
    // renderBullet: function (index: number, className: string) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  };
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="fixed ">
      <div className="container">
        <div className="w-6xl flex flex-col gap-3 pb-10">
          <FullscreenButton />
        </div>
        <div className="relative">
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            grabCursor={true}
            modules={[Pagination]}
            pagination={{
              dynamicBullets: true,
              el: "swiper-pagination",
              clickable: true,
            }}
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
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
