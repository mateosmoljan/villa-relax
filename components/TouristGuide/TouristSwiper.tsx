"use client";

import { getTouristGuideData } from "@/lib/TouristImageData";
import Image from "next/image";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function TouristSwiper() {
  const localeActive = useLocale();
  const PhotogalleriesData = getTouristGuideData(localeActive);

  return (
    <div className="tourist-guide max-w-full">
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 10000, disableOnInteraction: true }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 4 },
        }}
      >
        {PhotogalleriesData.data.slice(0, 6).map((image, index) => (
          <SwiperSlide key={index} className="xl:h-80 h-96">
            <Link
              href="/environs"
              className="flex items-center justify-center relative h-full"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={512}
                height={342}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                placeholder="blur"
                className="object-cover h-full w-full rounded-md"
                loading="lazy"
              />
            </Link>
            <div className="absolute text-left p-4 bottom-0 z-10 flex flex-col gap-2">
              <h2
                className="text-white font-bold text-xl drop-shadow-xl"
                style={{
                  textShadow:
                    "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em #B29600",
                }}
              >
                {image.image_title}
              </h2>
              <p
                className="text-white drop-shadow-xl"
                style={{
                  textShadow:
                    "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em #B29600",
                }}
              >
                {image.image_des}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TouristSwiper;
