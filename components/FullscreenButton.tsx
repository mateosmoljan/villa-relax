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
    <div className="w-full flex justify-end p-4">
      <button onClick={handleFullscreen} className="mr-10 text-white">
        {isFullscreen ? (
          <RiFullscreenExitFill className="text-white" />
        ) : (
          <RiFullscreenFill className="text-white" />
        )}
      </button>
    </div>
  );
};

export default FullscreenButton;
