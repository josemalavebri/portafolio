/* ==========================================================
   SCROLL REVEAL
   Agrega animaciones cuando los elementos entran
   en el viewport.
========================================================== */

export function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".section-header, " +
      ".info-card, " +
      ".technology-group, " +
      ".experience-item, " +
      ".project-card, " +
      ".contact-info, " +
      ".contact-form-wrapper",
  );

  if (!revealElements.length) {
    return;
  }

  /*
   * Si el navegador no soporta IntersectionObserver,
   * mostramos todo inmediatamente.
   */
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");

        observerInstance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}
