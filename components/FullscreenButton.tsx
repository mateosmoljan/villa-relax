const FullscreenButton = () => {
  const handleFullscreen = () => {
    const element = document.documentElement;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    }
  };

  return (
    <button onClick={handleFullscreen}>
      {document.fullscreenElement ? "Exit Fullscreen" : "Go Fullscreen"}
    </button>
  );
};

export default FullscreenButton;
