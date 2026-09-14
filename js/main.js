import initTexture from "./texture.js";
import initStars from "./stars.js";
import initScrollAnimations from "./scrollAnimations.js";
import initNavigation from "./navigation.js";
import initExperienceModal from "./experienceModal.js";
import initHeader from "./header.js";
import initTechnologyAccordionHint from "./technologyAccordion.js";

document.addEventListener("DOMContentLoaded", () => {
  initTexture();
  initStars();
  initScrollAnimations();
  initNavigation();
  initExperienceModal();
  initHeader();
  initTechnologyAccordionHint();
});
