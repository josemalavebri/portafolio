/* ==========================================================
   EDUCATION REVEAL
========================================================== */

export function initEducationReveal() {
  const educationCards = document.querySelectorAll(".education-reveal");

  if (!educationCards.length) {
    return;
  }

  /*
   * Si el navegador no soporta IntersectionObserver,
   * mostramos todo inmediatamente.
   */
  if (!("IntersectionObserver" in window)) {
    educationCards.forEach((card) => {
      card.classList.add("is-visible");
    });

    return;
  }

  const educationObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
    },
  );

  educationCards.forEach((card) => {
    educationObserver.observe(card);
  });
}
