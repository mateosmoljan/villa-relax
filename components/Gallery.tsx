"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TouristImageData } from "@/lib/TouristImageData";
import Image from "next/image";
import { useState } from "react";
import FullscreenButton from "./FullScreenButton";

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalImages = TouristImageData.image.length;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
    customPaging: (i: number) => (
      <div className="w-10 text-white">{/* Empty div for dot */}</div>
    ),
  };
  return (
    <section className="flex fixed inset-0 w-screen h-screen bg-black/80 z-40">
      <div className="mx-auto  w-full ">
        <div className="">
          <FullscreenButton />
        </div>
        <Slider
          {...settings}
          className="mt-[50%] sm:mt-[15%] lg:mt-[7.5%] xl:mt-[2%] mx-auto w-10/12"
        >
          {TouristImageData.image.map((image, index) => (
            <div key={index}>
              <div className="flex  items-center justify-center relative image_gallery m-auto overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover  h-full w-full rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="mx-auto z-50 flex justify-center">
          <div className="block text-white">
            {currentSlide + 1}/{totalImages}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
