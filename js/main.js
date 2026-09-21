import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { initNavbar } from "./navbar.js";
import { initSmoothNavigation } from "./navigation.js";
import { initScrollReveal } from "./scroll-reveal.js";
import { initEducationReveal } from "./education.js";
import { initTechnologySelector } from "./technologies.js";
import { initContactForm } from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollReveal();
  initSmoothNavigation();
  initEducationReveal();
  initTechnologySelector();
  initContactForm();
});
