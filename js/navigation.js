/* ==========================================================
   SMOOTH NAVIGATION
========================================================== */

export function initSmoothNavigation() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      /*
       * Cierra el menú móvil de Bootstrap si está abierto.
       */
      const navbarCollapse = document.querySelector(".navbar-collapse.show");

      if (navbarCollapse && window.bootstrap) {
        const collapse = bootstrap.Collapse.getInstance(navbarCollapse);

        collapse?.hide();
      }
    });
  });
}
