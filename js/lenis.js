/* ==========================================================
   LENIS
   Smooth scrolling en dispositivos no táctiles.
========================================================== */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

const lenisEnabled = !prefersReducedMotion && !isTouchDevice;

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
