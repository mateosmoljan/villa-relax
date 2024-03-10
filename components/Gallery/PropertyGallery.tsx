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

interface Props {
  initIndex: number;
}

function Gallery({ initIndex }: Props) {
  // const { openFourGalleryContext, setFourGalleryContext } =
  //   useFourGalleryContext();
  const { openIndex, setOpenIndex } = useGlobalContext();
  const { openIndexPropertyGallery, setOpenIndexPropertyGallery } =
    usePropertyGalleryContext();
  const {
    openIndexShowcaseGallery2Context,
    setOpenIndexShowcaseGallery2Context,
  } = useShowcaseGallery2Context();
  const { openGalleryContext, setOpenGalleryContext } = useGalleryContext();
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
    setOpenIndexPropertyGallery(false);
    setOpenIndex(false);
    setOpenIndexShowcaseGallery2Context(false);
    setOpenGalleryContext(false);
    // setFourGalleryContext(false);
  }

  useEffect(() => {
    if (document.body) {
      document.body.style.overflowY = "hidden"; // Disable scrolling
    }
  }, []);
  return (
    <section className=" fixed inset-0 w-screen h-screen bg-black z-[1000] overflow-y-hidden ">
      <div className="mx-auto  w-full ">
        <div className="flex justify-end mr-4 absolute w-full">
          <div className="inline-block ml-auto">
            <div className="rounded-md bg-grey2 flex justify-end items-center gap-2 mt-6 m-4">
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
          <div className="w-screen m-auto">
            <div className="mx-auto z-50 flex justify-center mb-3 sm:mb-10">
              <div className="block text-white">
                {currentSlide + 1}/{totalImages}
              </div>
            </div>
            <Slider {...settings}>
              {PropertyGalleryLib.images.map((image, index) => (
                <div key={index} className="my-auto">
                  <div className="sm:container flex items-center justify-center relative image_gallery m-auto overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
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

export default Gallery;
