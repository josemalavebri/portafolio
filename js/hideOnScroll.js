const initHideOnScroll = () => {
  const header = document.querySelector(".header");

  if (!header) {
    return;
  }

  let lastScrollY = window.scrollY;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      // Si estás cerca del tope superior, muéstralo siempre
      if (currentScrollY <= 20) {
        header.classList.remove("nav-hidden");
      }
      // Si bajas más de 10px -> Ocultar
      else if (delta > 10) {
        header.classList.add("nav-hidden");
      }
      // Si subes más de 10px -> Mostrar
      else if (delta < -10) {
        header.classList.remove("nav-hidden");
      }

      lastScrollY = currentScrollY;
    },
    { passive: true },
  );
};

export default initHideOnScroll;
