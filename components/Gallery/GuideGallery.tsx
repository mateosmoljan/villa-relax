"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import FullscreenButton from "../About/FullscreenButton";
import { RxCross2 } from "react-icons/rx";
import { useGlobalContext } from "./Photogalleries";
import { usePropertyGalleryContext } from "./ShowcaseGallery";
import { NextArrow, PrevArrow } from "./SwiperNavButtons";
import { useShowcaseGallery2Context } from "./ShowcaseGallery2";
import { useGalleryContext } from "../PropertyGallery/PropertyGallery";
import { useFourGalleryContext } from "./FourGallery";
import { PropertyGalleryLib } from "@/lib/property_gallery";
import { TouristImageData } from "@/lib/TouristImageData";

interface Props {
  initIndex: number;
}

function GuideGallery({ initIndex }: Props) {
  const { openFourGalleryContext, setFourGalleryContext } =
    useFourGalleryContext();
  const { openIndex, setOpenIndex } = useGlobalContext();
  const [currentSlide, setCurrentSlide] = useState<number>(initIndex);
  const totalImages = PropertyGalleryLib.images.length;

  const settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (index: number) => setCurrentSlide(index),
    customPaging: (i: number) => (
      <div className="w-10 text-white">{/* Empty div for dot */}</div>
    ),
    initialSlide: initIndex,
  };

  function handleClose() {
    if (document.body) {
      document.body.style.overflowY = "auto";
    }
    setOpenIndex(false);
    setFourGalleryContext(false);
    exitFullscreenIfActive();
  }

  const exitFullscreenIfActive = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    if (document.body) {
      document.body.style.overflowY = "hidden"; // Disable scrolling
    }
  }, []);
  return (
    <section className=" fixed inset-0 w-screen h-screen bg-black z-[1000] overflow-y-hidden ">
      <div className="mx-auto  w-full ">
        <div className="flex justify-end mr-4 absolute w-full z-[100]">
          <div className="inline-block ml-auto">
            <div className="rounded-md bg-grey2 flex justify-end items-center gap-2 mt-6 m-4  landscape:mt-3 landscape:m-3 landscape:z-[10000] landscape:flex-col-reverse">
              <button className="fullscreen-button">
                <FullscreenButton />
              </button>
              <button
                onClick={() => handleClose()}
                className="text-white cursor-pointer p-2 close-button"
              >
                <RxCross2
                  className=" text-2xl text-dark_blue_black hover:scale-150
                  transition-scale duration-300"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center">
          <div className="w-screen m-auto landscape:m-0">
            <div className="mx-auto z-50 flex justify-center landscape:inline-block mb-3 sm:mb-10">
              <div className="block text-white landscape:pl-3 landscape:pt-3 landscape:absolute landscape:inline-block landscape:top-0">
                {currentSlide + 1}/{totalImages}
              </div>
            </div>
            <Slider {...settings}>
              {TouristImageData.image.map((image, index) => (
                <div key={index} className="my-auto">
                  <div className="sm:container flex items-center justify-center relative image_gallery m-auto overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      placeholder="blur"
                      className="object-contain w-full h-full rounded-md m-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuideGallery;
