import { useSwiper } from "swiper/react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="flex justify-center items-center absolute top-1/2 left-0 sm:-left-10 z-10"
      >
        <MdOutlineArrowBackIosNew className="text-grey2 rounded-full p-1 bg-black/70 hover:bg-black  text-xl lg:text-4xl " />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="flex justify-center items-center  absolute right-0 sm:-right-10 top-1/2 z-10"
      >
        <MdOutlineArrowForwardIos className="text-grey2 rounded-full p-1 bg-black/70 hover:bg-black text-xl lg:text-4xl " />
      </button>
    </>
  );
};
