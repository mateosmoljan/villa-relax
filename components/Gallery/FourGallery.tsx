"use client";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import Gallery from "./PropertyGallery";
import { FaMap } from "react-icons/fa";
import GoogleMaps from "../About/GoogleMaps";
import { PropertyGalleryLib } from "@/lib/property_gallery";

export type AppContextType = {
  openFourGalleryContext: boolean;
  setFourGalleryContext: (_value: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  openFourGalleryContext: false,
  setFourGalleryContext: (_value: boolean) => {},
});

export const useFourGalleryContext = () => useContext(AppContext);

interface Props {
  mapButton: boolean;
}

function FourGallery({ mapButton }: Props) {
  const [openFourGalleryContext, setFourGalleryContext] =
    useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [showMap, setShowMap] = useState(false);
  const handleImageClick = (index: number) => {
    setFourGalleryContext(true);
    setActiveIndex(index);
  };

  const handleMapClose = () => {
    setShowMap(false);
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
              {PropertyGalleryLib.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full rounded-md flex relative"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="relative cursor-pointer object-cover h-full rounded-md block w-full hover:opacity-90 aspect-video md:aspect-square"
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
            </div>
            {mapButton && (
              <div className="flex justify-end">
                <button
                  onClick={() => setShowMap(true)}
                  className=" btn-2 gap-2 mt-4"
                >
                  <FaMap />
                  <span>Show Map</span>
                </button>
                {showMap && <GoogleMaps onClose={handleMapClose} />}
              </div>
            )}
          </div>

          {openFourGalleryContext && <Gallery initIndex={activeIndex} />}
        </AppContext.Provider>
      </div>
    </section>
  );
}

export default FourGallery;
