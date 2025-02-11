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

let divPadreId = "";
document.querySelectorAll('.btnt').forEach(button => {
    button.addEventListener('click', (event) => {
        let divPadre = event.target.closest('.experiencia-item'); 
        if (divPadre) {
            divPadreId =  divPadre.id; 
            console.log(divPadre);
        }
    });
});


const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    console.log(divPadreId)
    if(divPadreId=="mantenimiento"){
        console.log("estoy en mantenimiento")
        document.querySelector(".modal__title").innerText = "Mantenimiento de app 3D ";
        document.querySelector(".modal__paragraph").innerHTML  
            = "<p> Hace un par de añod logré obtener mi primer trabajo como programador, entré por recomendación de un amigo y despues de pasar algunas pruebas y un periodo de practica obtuve el puesto<b>Fui parte de un equipo que daba mantenimiento, optimizacion y daba soporte a una app privada.<br> Esta app se encargaba de mostrar modelos 3d de distintas estructuras arquitectonicas.<br><br> Estuve mejorando ciertos modulos existentes e integrando nuevos. </p>"
}    


    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});


