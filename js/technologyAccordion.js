export default function initTechnologyAccordionHint() {
  const cards = document.querySelectorAll(".technology-card");

  if (!cards.length) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const toggle = entry.target.querySelector(".technology-toggle");

        toggle?.classList.add("is-hinting");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.6,
    },
  );

  cards.forEach((card) => observer.observe(card));
}
