"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TouristImageData } from "../lib/TouristImageData";
import FullscreenButton from "./FullScreenButton";
import { useEffect } from "react";

interface Props {
  active: boolean;
}

function PhotoGallery({ active }: Props) {
  const pagination = {
    type: "fraction",
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
    <section className="fixed inset-0 w-screen h-screen bg-black/80 z-50">
      <div className="m-auto">
        <div className="w-6xl flex flex-col gap-3 pb-10">
          <FullscreenButton />
        </div>
        <div className="m-auto photo_gallery sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            grabCursor={true}
            modules={[Pagination, Navigation]}
            navigation={true}
            pagination={pagination}
          >
            {TouristImageData.image.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex  items-center justify-center relative image_gallery m-auto overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-cover  h-full w-full rounded-md"
                    loading="lazy"
                  />
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
