/* ==========================================================
   NAVBAR
   Marca la sección actualmente visible.
========================================================== */

export function initNavbar() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  if (!sections.length || !navLinks.length) {
    return;
  }

  let animationFrameId = null;

  const updateActiveLink = () => {
    if (animationFrameId !== null) {
      return;
    }

    animationFrameId = requestAnimationFrame(() => {
      const scrollPosition = window.scrollY + 120;

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
        }
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute("href");

        link.classList.toggle("active", href === `#${currentSection}`);
      });

      animationFrameId = null;
    });
  };

  window.addEventListener("scroll", updateActiveLink, {
    passive: true,
  });

  updateActiveLink();
}
