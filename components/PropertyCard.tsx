"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "@/lib/images";

import "swiper/css";
import { SwiperNavButtonsAcommodation } from "./SwiperNavButtonsAcommodation";

function PropertyCard() {
  return (
    <div className=" w-1/2 card_shadow rounded-md z-10 max-w-full overflow-hidden">
      <Swiper loop={true} spaceBetween={0}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex relative items-center justify-center h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                className="object-cover block rounded-t-md h-60 w-full"
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtonsAcommodation />
      </Swiper>
      <div className="p-3">
        <h2 className="font-black text-xl font-arbutus">Villa Relax</h2>
        <p className="text-sm">Maximum of 12 people</p>
        <p className="text-sm">
          Price from{" "}
          <span className="font-bold text-yellow text-xl">375 €</span> per night
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;
