const FullscreenButton = () => {
  const handleFullscreen = () => {
    if (typeof document !== "undefined") {
      const element = document.documentElement;

      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        element.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable fullscreen: ${err.message}`
          );
        });
      }
    }
  };

  return (
    <button onClick={handleFullscreen}>
      {typeof document !== "undefined" && document.fullscreenElement
        ? "Exit Fullscreen"
        : "Go Fullscreen"}
    </button>
  );
};

export default FullscreenButton;
