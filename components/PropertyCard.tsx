"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "@/lib/images";

import "swiper/css";
import { SwiperNavButtonsAcommodation } from "./SwiperNavButtonsAcommodation";

interface SwiperNavButtonsProps {
  className?: string;
}

function PropertyCard() {
  return (
    <div className=" w-2/5 card_shadow rounded-md z-10 max-w-full overflow-hidden">
      <Swiper lazy="true" loop={true} spaceBetween={0}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex relative items-center justify-center h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                className="object-cover block rounded-t-md h-52 w-full"
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtonsAcommodation />
      </Swiper>
      <div className="p-3">
        <h2 className="font-bold text-xl font-arbutus">Villa Relax</h2>
        <p>Maximum of 12 people</p>
        <p>
          Price from{" "}
          <span className="font-bold text-dark_yellow text-3xl">375 €</span> per
          night
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;
