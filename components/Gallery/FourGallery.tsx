"use client";
import { ImageGallery } from "@/lib/galleryImages";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import Gallery from "./Gallery";
import { FaMap } from "react-icons/fa";

export type AppContextType = {
  openFourGalleryContext: boolean;
  setFourGalleryContext: (_value: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  openFourGalleryContext: false,
  setFourGalleryContext: (_value: boolean) => {},
});

export const useFourGalleryContext = () => useContext(AppContext);
function FourGallery() {
  const [openFourGalleryContext, setFourGalleryContext] =
    useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleImageClick = (index: number) => {
    setFourGalleryContext(true);
    setActiveIndex(index);
  };

  return (
    <section>
      <div className=" py-10">
        <AppContext.Provider
          value={{
            openFourGalleryContext,
            setFourGalleryContext,
          }}
        >
          <div className="w-full flex flex-col ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {ImageGallery.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full rounded-md flex relative"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="relative cursor-pointer object-cover h-full rounded-md block w-full hover:opacity-90 aspect-square"
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setFourGalleryContext(true)}
                className=" btn-2 gap-2 mt-4"
              >
                <FaMap />
                <span>Show Map</span>
              </button>
            </div>
          </div>

          {openFourGalleryContext && <Gallery initIndex={activeIndex} />}
        </AppContext.Provider>
      </div>
    </section>
  );
}

export default FourGallery;
