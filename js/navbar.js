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

  const updateActiveLink = () => {
    const scrollPosition = window.scrollY + 120;

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");

      link.classList.toggle("active", href === `#${currentSection}`);
    });
  };

  window.addEventListener("scroll", updateActiveLink, {
    passive: true,
  });

  updateActiveLink();
}
