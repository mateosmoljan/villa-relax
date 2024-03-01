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
        className="flex justify-center items-center absolute top-1/2 -left-10 z-10"
      >
        <FaArrowCircleLeft className="text-grey text-4xl hover:text-dark_yellow" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="flex justify-center items-center  absolute -right-10 top-1/2 z-10"
      >
        <FaArrowCircleRight className="text-grey text-4xl hover:text-dark_yellow" />
      </button>
    </>
  );
};
