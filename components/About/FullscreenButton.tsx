"use client";
import { useEffect, useState } from "react";
import { RiFullscreenFill, RiFullscreenExitFill } from "react-icons/ri";

const FullscreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    const fullscreenElement = document.documentElement;

    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      fullscreenElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.addEventListener("fullscreenchange", () => {
        setIsFullscreen(!!document.fullscreenElement);
      });

      return () => {
        document.removeEventListener("fullscreenchange", () => {});
      };
    }
  }, []);

  return (
    <div className="flex items-center">
      <button onClick={handleFullscreen} className="  p-2">
        {isFullscreen ? (
          <RiFullscreenExitFill className=" text-2xl text-dark_blue_black" />
        ) : (
          <RiFullscreenFill className=" text-2xl text-dark_blue_black" />
        )}
      </button>
    </div>
  );
};

export default FullscreenButton;
