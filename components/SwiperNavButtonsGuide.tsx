import { useSwiper } from "swiper/react";
import { FaArrowCircleLeft } from "react-icons/fa";

import { FaArrowCircleRight } from "react-icons/fa";

interface SwiperButtonsProps {
  visible: boolean;
}

export const SwiperNavButtonsGuide: React.FC<SwiperButtonsProps> = ({
  visible,
}) => {
  const swiper = useSwiper();

  return (
    <>
      {visible && (
        <div className="mt-5">
          <button
            onClick={() => swiper.slidePrev()}
            className="h-full  relative left-0 top-0 text-4xl z-10 hover:text-brown"
          >
            <FaArrowCircleLeft className=" z-10" color="black" />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className="h-full  relative -right-10 top-0 text-4xl z-10"
          >
            <FaArrowCircleRight className="" color="black" />
          </button>
        </div>
      )}
    </>
  );
};
