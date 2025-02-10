document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".hidden");

    function checkScroll() {
        let hasVisibleElement = false;

        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50 && rect.bottom > 50) {
                if (!el.classList.contains("visible")) {
                    el.classList.add("visible");
                    hasVisibleElement = true;
                }
            }
        });

        // Si todos los elementos se han hecho visibles, desvinculamos el evento de scroll.
        if (!hasVisibleElement) {
            window.removeEventListener("scroll", checkScroll);
        }
    }

    // Usamos requestAnimationFrame para optimizar el rendimiento en el scroll
    let scrollTimeout;
    window.addEventListener("scroll", function() {
        if (!scrollTimeout) {
            scrollTimeout = requestAnimationFrame(() => {
                checkScroll();
                scrollTimeout = null;
            });
        }
    });

    // Ejecutamos una primera vez para verificar elementos al cargar la página
    checkScroll();
});
