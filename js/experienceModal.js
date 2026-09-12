export default function initExperienceModal() {
  console.log("🚀 initExperienceModal: Módulo inicializado correctamente.");

  // Corregido: Apunta al ID real de tu HTML
  const modal = document.querySelector("#modalExperiencia");

  // Corregido: Apunta a .modal-content que es el contenedor real en tu HTML
  const modalContainer = modal?.querySelector(".modal-content");

  if (!modal) {
    console.error(
      "❌ ERROR: No se encontró el elemento #modalExperiencia en el DOM.",
    );
    return;
  }

  if (!modalContainer) {
    console.error(
      "❌ ERROR: No se encontró el elemento .modal-content dentro de #modalExperiencia.",
    );
    return;
  }

  console.log(
    "✅ Elementos #modalExperiencia y .modal-content detectados con éxito.",
  );

  const getExperienceFile = (modalId) => {
    const experiences = {
      "experiencia-1": "esparq.html",
      "experiencia-2": "sysmx.html",
      "experiencia-3": "coop.html",
    };
    console.log(
      `📂 Mapeando modalId '${modalId}' a archivo:`,
      experiences[modalId],
    );
    return experiences[modalId];
  };

  const openModal = async (modalId) => {
    console.log(`🟢 openModal llamado con ID: "${modalId}"`);
    const file = getExperienceFile(modalId);

    if (!file) {
      console.error(
        `❌ ERROR: No hay ningún archivo mapeado para el ID "${modalId}"`,
      );
      return;
    }

    const url = `experiencia/${file}`;
    console.log(`🌐 Intentando hacer fetch a la URL: "${url}"`);

    try {
      const response = await fetch(url);
      console.log(
        `📥 Respuesta de fetch recibida. Status: ${response.status} (${response.statusText})`,
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - No se pudo cargar ${url}`);
      }

      const html = await response.text();
      console.log(
        `📄 HTML cargado con éxito. Longitud de caracteres: ${html.length}`,
      );

      // Inyectamos el contenido junto con el botón de cierre dentro de .modal-content
      modalContainer.innerHTML = `
        <button
          type="button"
          class="experience-modal-close"
          aria-label="Cerrar experiencia"
        >
          &times;
        </button>
        ${html}
      `;

      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      console.log(
        "✨ Modal abierto visualmente (aria-hidden cambiado a 'false').",
      );

      const closeButton = modalContainer.querySelector(
        ".experience-modal-close",
      );
      closeButton?.focus();
    } catch (error) {
      console.error(
        `❌ ERROR en el bloque catch al cargar la experiencia:`,
        error,
      );

      modalContainer.innerHTML = `
        <div class="modal__error">
          <span class="experience-detail-label">ERROR</span>
          <h2>No se pudo cargar la experiencia</h2>
          <p>Ocurrió un problema al cargar la información.</p>
          <button type="button" class="experience-modal-close">&times;</button>
        </div>
      `;

      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      modalContainer.querySelector(".experience-modal-close")?.focus();
    }
  };

  // ==========================================
  // Cerrar modal
  // ==========================================

  const closeModal = () => {
    console.log("🔒 closeModal ejecutado: cerrando modal.");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Limpieza opcional al cerrar
    modalContainer.innerHTML = `
      <div class="modal-body">
        <p>Cargando contenido...</p>
      </div>
    `;
  };

  // ==========================================
  // Listeners para abrir y cerrar modal
  // ==========================================

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-modal]");
    if (button) {
      event.preventDefault(); // <--- EVITA QUE LA PÁGINA SE DESPLACE
      const modalId = button.dataset.modal;
      console.log(`🖱️ Click detectado en botón con [data-modal="${modalId}"]`);
      openModal(modalId);
      return;
    }

    const closeButton = event.target.closest(".experience-modal-close");
    if (closeButton) {
      console.log("🖱️ Click detectado en el botón de cerrar modal.");
      closeModal();
      return;
    }

    if (event.target === modal) {
      console.log("🖱️ Click detectado en el fondo oscuro del modal.");
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const isOpen = modal.getAttribute("aria-hidden") === "false";
    console.log(`⌨️ Tecla Escape presionada. Modal abierto: ${isOpen}`);
    if (isOpen) {
      closeModal();
    }
  });
}
