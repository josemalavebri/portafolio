const initHeader = (selector = ".header") => {
  const header = document.querySelector(selector);

  if (!header) {
    return;
  }

  const updateHeader = () => {
    header.classList.toggle("color-borde", window.scrollY > 50);
  };

  window.addEventListener("scroll", updateHeader, {
    passive: true,
  });

  updateHeader();
};

export default initHeader;
