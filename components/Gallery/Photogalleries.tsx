"use client";
import { ImageGallery } from "@/lib/galleryImages";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import { TfiGallery } from "react-icons/tfi";
import Gallery from "./Gallery";
import "./style.css";

export type AppContextType = {
  openIndex: boolean;
  setOpenIndex: (_value: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  openIndex: false,
  setOpenIndex: (_value: boolean) => {},
});

export const useGlobalContext = () => useContext(AppContext);
function Photogalleries() {
  const [openIndex, setOpenIndex] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleImageClick = (index: number) => {
    setOpenIndex(!openIndex);
    setActiveIndex(index);
  };

  return (
    <section className="Photo">
      <div className="container py-10">
        <div className="w-6xl flex flex-col gap-3 pb-10">
          <h2 className="text-pink font-semibold uppercase tracking-widest">
            Photogalleries
          </h2>
          <h1 className="font-bold text-2xl sm:text-3xl text-dark_blue_black">
            Select photos from Villa Relax
          </h1>
        </div>
        <AppContext.Provider value={{ openIndex, setOpenIndex }}>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {ImageGallery.images.map((image, index) => (
              <div key={index} className="w-full h-full rounded-md	">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="cursor-pointer object-cover rounded-md block w-full h-full hover:opacity-90"
                  onClick={() => handleImageClick(index)}
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
          {openIndex && <Gallery initIndex={activeIndex} />}
        </AppContext.Provider>
      </div>
    </section>
  );
}

export default Photogalleries;
