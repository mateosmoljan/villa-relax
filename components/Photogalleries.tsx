"use client";
import { ImageGallery } from "@/lib/galleryImages";
import Image from "next/image";
import { useState } from "react";
import { TfiGallery } from "react-icons/tfi";
import Gallery from "./Gallery";

function Photogalleries() {
  const [showGallery, setShowGallery] = useState<boolean>(false);

  function handleOnClose() {
    setShowGallery(false);
  }
  return (
    <section className="">
      <div className="container py-10">
        <div className="w-6xl flex flex-col gap-3 pb-10">
          <h2 className="text-pink font-semibold uppercase">Photogalleries</h2>
          <h1 className="font-bold text-2xl sm:text-3xl text-dark_blue_black">
            Select photos from Villa Relax
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {ImageGallery.images.map((image, index) => (
            <div key={index} className="w-full h-full rounded-md	">
              <Image
                src={image.src}
                alt={image.alt}
                className=" object-cover rounded-md block w-full h-full hover:opacity-90"
                onClick={() => setShowGallery(true)}
              />
            </div>
          ))}
        </div>
        <div className="pt-5 flex justify-end">
          <button className="btn-2 flex gap-2">
            <TfiGallery />
            <span>Show Photogallery</span>
          </button>
        </div>
        {showGallery && <Gallery onClose={handleOnClose} />}
      </div>
    </section>
  );
}

export default Photogalleries;
