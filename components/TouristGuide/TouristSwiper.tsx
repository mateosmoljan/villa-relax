"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TouristImageData } from "@/lib/TouristImageData";
import Image from "next/image";
import { NextArrow, PrevArrow } from "./SwiperNavButtonsGuide";
import Link from "next/link";

function TouristSwiper() {
  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          nextArrow: <></>,
          prevArrow: <></>,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="tourist-guide max-w-full">
        <Slider {...settings}>
          {TouristImageData.image.map((image, index) => (
            <div key={index} className="xl:h-80 h-96">
              <Link
                href="/environs"
                className="flex items-center justify-center relative xl:h-80 h-96"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover  h-full w-full rounded-md"
                  loading="lazy"
                />
              </Link>
              <div className="relative text-left pl-1/10 bottom-20 z-10 flex flex-col gap-2">
                <h2 className="text-white font-bold text-xl">{image.title}</h2>
                <p className="text-white">{image.des}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default TouristSwiper;
