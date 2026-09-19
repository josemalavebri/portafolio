const lenis = new Lenis({
  duration: 0.8,
  smoothWheel: true,
  smoothTouch: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
