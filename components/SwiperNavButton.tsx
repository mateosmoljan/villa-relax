import React from "react";
import { useSwiper } from "swiper/react";
import { FaArrowCircleLeft } from "react-icons/fa";

import { FaArrowCircleRight } from "react-icons/fa";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="h-screen w-1/5 flex justify-center items-center absolute z-10 top-0 "
      >
        <FaArrowCircleLeft className="swiper-prev" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="h-screen w-1/5 flex justify-center items-center absolute z-10 top-0 right-0"
      >
        <FaArrowCircleRight className="swiper-next" />
      </button>
    </>
  );
};
