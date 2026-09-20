/* ==========================================================
   LENIS
   Smooth scrolling únicamente en dispositivos de escritorio.
========================================================== */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const isMobile = window.matchMedia("(max-width: 767.98px)").matches;

const lenisEnabled = !prefersReducedMotion && !isMobile;

const lenis = new Lenis({
  duration: 0.8,
  smoothWheel: lenisEnabled,
  smoothTouch: false,
});

if (lenisEnabled) {
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export default lenis;
