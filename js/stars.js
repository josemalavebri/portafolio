const initStars = () => {
  console.log("✨ stars.js → initStars() ejecutado");

  const container = document.createElement("div");
  container.className = "stars-container";
  container.setAttribute("aria-hidden", "true");

  // Estilos críticos forzados
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100vw";
  container.style.height = "100vh";
  container.style.zIndex = "0";
  container.style.pointerEvents = "none";
  container.style.overflow = "hidden";

  document.body.prepend(container);

  const starCount = 35;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 2 + 1.5;
    const duration = Math.random() * 4 + 2;
    const delay = Math.random() * 5;

    // Reducido significativamente: ahora su brillo máximo será mucho más tenue (entre 10% y 35%)
    const maxOpacity = Math.random() * 0.25 + 0.1;

    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty("--duration", `${duration}s`);
    star.style.setProperty("--delay", `${delay}s`);
    star.style.setProperty("--max-opacity", maxOpacity);

    container.appendChild(star);
  }

  console.log(`✨ ${starCount} estrellitas generadas correctamente`);
};

export default initStars;
