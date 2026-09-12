const initScrollAnimations = () => {
  const elements = document.querySelectorAll(".hidden");

  if (!elements.length) {
    return;
  }

  const checkVisibility = () => {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      const isVisible = rect.top < window.innerHeight - 50 && rect.bottom > 50;

      if (isVisible) {
        element.classList.add("visible");
      }
    });
  };

  let scrollFrame;

  const handleScroll = () => {
    if (scrollFrame) {
      return;
    }

    scrollFrame = requestAnimationFrame(() => {
      checkVisibility();
      scrollFrame = null;
    });
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  checkVisibility();
};

export default initScrollAnimations;
