"use client";
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";
import IFrameMaps from "./iFrameMaps";

interface GoogleMapsProps {
  showMap: boolean;
  onClose: () => void;
}

function GoogleMaps({ showMap, onClose }: GoogleMapsProps) {
  const [dimensions, setDimensions] = useState<{
    height: number;
    width: number;
  }>({
    height: 150,
    width: 150,
  });

  useEffect(() => {
    const updateWindowSize = () => {
      const width = window.innerWidth;

      if (width > 1280) {
        setDimensions({ height: 500, width: 1128 });
      } else if (width > 1024) {
        setDimensions({ height: 400, width: 872 });
      } else if (width > 768) {
        setDimensions({ height: 350, width: 648 });
      } else if (width > 640) {
        setDimensions({ height: 300, width: 525 });
      } else {
        setDimensions({ height: 250, width: 250 });
      }
    };
    updateWindowSize();

    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <section className="flex justify-center fixed inset-0 items-center w-screen h-screen bg-black bg-opacity-50 z-50">
      <div className="sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-3 flex flex-col bg-white rounded-md transitionMap">
        <div className="flex justify-between py-3">
          <h1 className="font-bold text-xl">Location of Villa Relax</h1>
          <button onClick={onClose} className="text-xl">
            <RxCross2 />
          </button>
        </div>
        <div className="max-w-full h-full">
          <IFrameMaps width={dimensions.width} height={dimensions.height}/>
        </div>
        <div className="py-3 flex justify-end">
          <button
            onClick={onClose}
            aria-label="Close Map"
            className="btn-2 flex gap-2"
          >
            Close <ImCross />
          </button>
        </div>
      </div>
    </section>
  );
}

export default GoogleMaps;
