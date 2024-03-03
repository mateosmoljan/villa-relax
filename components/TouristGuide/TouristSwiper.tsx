"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TouristImageData } from "@/lib/TouristImageData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NextArrow, PrevArrow } from "./SwiperNavButtonsGuide";

function TouristSwiper() {
  const [windowSize, setWindowSize] = useState<number>(4);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [controls, setControls] = useState<boolean>(true);

  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: windowSize,
    slidesToScroll: 1,
    nextArrow: <NextArrow visible={controls} />,
    prevArrow: <PrevArrow visible={controls} />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    const updateWindowSize = () => {
      const width = window.innerWidth;

      if (width > 1024) {
        setWindowSize(4);
      } else if (width > 640) {
        setWindowSize(2);
        setControls(true);
      } else {
        setWindowSize(1);
        setControls(false);
      }
    };
    updateWindowSize();

    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      {isLoaded && (
        <div className="tourist-guide max-w-full">
          <Slider {...settings}>
            {TouristImageData.image.map((image, index) => (
              <div key={index} className="xl:h-80 h-96">
                <div className="flex items-center justify-center relative xl:h-80 h-96">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-cover  h-full w-full rounded-md"
                    loading="lazy"
                  />
                </div>
                <div className="relative text-left pl-1/10 bottom-20 z-10 flex flex-col gap-2">
                  <h2 className="text-white font-bold text-xl">
                    {image.title}
                  </h2>
                  <p className="text-white">{image.des}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}

export default TouristSwiper;
