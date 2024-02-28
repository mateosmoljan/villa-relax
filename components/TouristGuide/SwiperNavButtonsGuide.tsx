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
        <div className="mt-5 top-0">
          <button
            onClick={() => swiper.slidePrev()}
            className="h-full  relative left-0 top-0 text-3xl z-10"
          >
            <FaArrowCircleLeft className="text-dark_blue_black hover:text-neutral-800" />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className="h-full  relative -right-10 top-0 text-3xl z-10"
          >
            <FaArrowCircleRight className="text-dark_blue_black hover:text-neutral-800" />
          </button>
        </div>
      )}
    </>
  );
};
