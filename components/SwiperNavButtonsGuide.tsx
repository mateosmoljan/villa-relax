import { useSwiper } from "swiper/react";
import { FaArrowCircleLeft } from "react-icons/fa";

import { FaArrowCircleRight } from "react-icons/fa";

export const SwiperNavButtonsGuide = () => {
  const swiper = useSwiper();

  return (
    <div className="mt-5">
      <button
        onClick={() => swiper.slidePrev()}
        className="h-full  relative left-0 top-0 text-3xl z-10 "
      >
        <FaArrowCircleLeft className=" z-10 fill-dark_blue_black hover:fill-neutral-800" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="h-full  relative -right-10 top-0 text-3xl z-10"
      >
        <FaArrowCircleRight className="fill-dark_blue_black hover:fill-neutral-800" />
      </button>
    </div>
  );
};
