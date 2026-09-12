const initTexture = () => {
  const canvas = document.createElement("canvas");

  canvas.className = "page-texture";
  canvas.setAttribute("aria-hidden", "true");

  document.body.prepend(canvas);

  const context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  const generateTexture = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const imageData = context.createImageData(width, height);
    const pixels = imageData.data;

    for (let index = 0; index < pixels.length; index += 4) {
      const value = Math.random() < 0.5 ? 0 : 255;

      pixels[index] = value;
      pixels[index + 1] = value;
      pixels[index + 2] = value;
      pixels[index + 3] = 35;
    }

    context.putImageData(imageData, 0, 0);
  };

  generateTexture();

  let resizeTimeout;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(generateTexture, 150);
  });
};

export default initTexture;
