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
        document.removeEventListener("fullscreenchange", () => {
          // Clean up event listener if needed
        });
      };
    }
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div className="flex items-center">
      <button onClick={handleFullscreen} className=" text-white p-4">
        {isFullscreen ? (
          <RiFullscreenExitFill className="text-white text-xl" />
        ) : (
          <RiFullscreenFill className="text-white text-xl" />
        )}
      </button>
    </div>
  );
};

export default FullscreenButton;
