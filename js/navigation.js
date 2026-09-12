const initNavigation = () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) {
    return;
  }

  const updateActiveLink = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      const isActive =
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight;

      if (!isActive) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${sectionId}`,
        );
      });
    });
  };

  let scrollFrame;

  const handleScroll = () => {
    if (scrollFrame) {
      return;
    }

    scrollFrame = requestAnimationFrame(() => {
      updateActiveLink();
      scrollFrame = null;
    });
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  updateActiveLink();
};

export default initNavigation;
