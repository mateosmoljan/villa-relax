"use client";

import { useSwiper } from "swiper/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

export const SwiperNavButtonsAcommodation = () => {
  const swiper = useSwiper();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={` absolute z-10 top-0 flex items-center justify-between w-full h-full ${
        isHovered ? "shadow-a" : ""
      }`}
    >
      <button
        onClick={() => swiper.slidePrev()}
        className={` h-full rounded-t-md ${isHovered ? "block" : "hidden"}`}
      >
        <MdOutlineKeyboardArrowLeft className={` text-6xl text-white  `} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={` h-full rounded-t-md ${isHovered ? "block" : "hidden"}`}
      >
        <MdOutlineKeyboardArrowRight className={`text-6xl text-white`} />
      </button>
    </div>
  );
};
