"use client";
import { useEffect } from "react";

const FullscreenButton = () => {
  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const fullscreenElement = document.documentElement;
      fullscreenElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    }
  };

  const handleClick = () => {
    handleFullscreen();
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      // Handle changes to fullscreen state if needed
    });

    return () => {
      document.removeEventListener("fullscreenchange", () => {
        // Clean up event listener if needed
      });
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <button onClick={handleClick}>
      {document.fullscreenElement ? "Exit Fullscreen" : "Go Fullscreen"}
    </button>
  );
};

export default FullscreenButton;
