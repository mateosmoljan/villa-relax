"use client";

import { getTouristGuideData } from "@/lib/TouristImageData";
import Image from "next/image";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function TouristSwiper() {
  const localeActive = useLocale();
  const PhotogalleriesData = getTouristGuideData(localeActive);

  return (
    <div className="tourist-guide max-w-full relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{ nextEl: ".tourist-next", prevEl: ".tourist-prev" }}
        loop
        autoplay={{ delay: 10000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 4 },
        }}
      >
        {PhotogalleriesData.data.slice(0, 6).map((image, index) => (
          <SwiperSlide key={index} className="!h-96 xl:!h-80">
            <div className="relative h-full overflow-hidden rounded-md">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </Link>
              <div className="absolute inset-x-0 bottom-0 text-left p-4 z-10 flex flex-col gap-2">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="tourist-prev hidden md:flex absolute left-2 top-1/2 z-20 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition">
        <IoIosArrowBack className="text-2xl" />
      </button>
      <button className="tourist-next hidden md:flex absolute right-2 top-1/2 z-20 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition">
        <IoIosArrowForward className="text-2xl" />
      </button>
    </div>
  );
}

export default TouristSwiper;
