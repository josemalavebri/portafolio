/* ==========================================================
   CONTACT FORM
   Validación + Web3Forms + alerta.
========================================================== */

export function initContactForm() {
  const contactForm = document.querySelector("#contact-form");
  const contactAlert = document.querySelector("#contact-alert");

  if (!contactForm || !contactAlert) {
    return;
  }

  const fields = {
    name: {
      input: document.querySelector("#contact-name"),
      error: document.querySelector("#contact-name-error"),
    },

    email: {
      input: document.querySelector("#contact-email"),
      error: document.querySelector("#contact-email-error"),
    },

    subject: {
      input: document.querySelector("#contact-subject"),
      error: document.querySelector("#contact-subject-error"),
    },

    message: {
      input: document.querySelector("#contact-message"),
      error: document.querySelector("#contact-message-error"),
    },
  };

  const contactAlertTitle = document.querySelector("#contact-alert-title");

  const contactAlertMessage = document.querySelector("#contact-alert-message");

  const contactAlertIcon = contactAlert.querySelector(".contact-alert-icon i");

  const contactAlertClose = document.querySelector("#contact-alert-close");

  const submitButton = contactForm.querySelector(".contact-submit-button");

  if (
    !contactAlertTitle ||
    !contactAlertMessage ||
    !contactAlertIcon ||
    !contactAlertClose ||
    !submitButton
  ) {
    return;
  }

  const submitText = submitButton.querySelector("span");
  const submitIcon = submitButton.querySelector("i");

  /* ========================================================
     ALERT
  ======================================================== */

  const showAlert = (title, message, type) => {
    const isSuccess = type === "success";

    contactAlertTitle.textContent = title;
    contactAlertMessage.textContent = message;

    contactAlert.classList.remove("is-success", "is-error");

    contactAlert.classList.add(
      isSuccess ? "is-success" : "is-error",
      "is-visible",
    );

    contactAlertIcon.className = isSuccess
      ? "fa-solid fa-check"
      : "fa-solid fa-xmark";

    contactAlert.setAttribute("aria-hidden", "false");
  };

  const hideAlert = () => {
    contactAlert.classList.remove("is-visible", "is-success", "is-error");

    contactAlert.setAttribute("aria-hidden", "true");
  };

  /* ========================================================
     FIELD ERROR
  ======================================================== */

  const setFieldError = (field, message) => {
    const { input, error } = field;

    input.classList.remove("is-valid");
    input.classList.add("is-invalid");

    error.textContent = message;
    error.classList.add("is-visible");

    input.setAttribute("aria-invalid", "true");
  };

  /* ========================================================
     FIELD SUCCESS
  ======================================================== */

  const setFieldValid = (field) => {
    const { input, error } = field;

    input.classList.remove("is-invalid");
    input.classList.add("is-valid");

    error.textContent = "";
    error.classList.remove("is-visible");

    input.setAttribute("aria-invalid", "false");
  };

  /* ========================================================
     RESET FIELD STATE
  ======================================================== */

  const resetFieldState = (field) => {
    const { input, error } = field;

    input.classList.remove("is-valid", "is-invalid");

    error.textContent = "";
    error.classList.remove("is-visible");

    input.removeAttribute("aria-invalid");
  };

  /* ========================================================
     VALIDATE NAME
  ======================================================== */

  const validateName = () => {
    const value = fields.name.input.value.trim();

    if (!value) {
      setFieldError(fields.name, "Ingresa tu nombre.");

      return false;
    }

    if (value.length < 2) {
      setFieldError(fields.name, "El nombre debe tener al menos 2 caracteres.");

      return false;
    }

    if (value.length > 80) {
      setFieldError(
        fields.name,
        "El nombre no puede superar los 80 caracteres.",
      );

      return false;
    }

    setFieldValid(fields.name);

    return true;
  };

  /* ========================================================
     VALIDATE EMAIL
  ======================================================== */

  const validateEmail = () => {
    const value = fields.email.input.value.trim();

    if (!value) {
      setFieldError(fields.email, "Ingresa tu correo electrónico.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
      setFieldError(fields.email, "Ingresa un correo electrónico válido.");
      return false;
    }

    if (value.length > 120) {
      setFieldError(
        fields.email,
        "El correo no puede superar los 120 caracteres.",
      );
      return false;
    }

    setFieldValid(fields.email);
    return true;
  };

  /* ========================================================
     VALIDATE SUBJECT
  ======================================================== */

  const validateSubject = () => {
    const value = fields.subject.input.value.trim();

    if (!value) {
      setFieldError(fields.subject, "Ingresa un asunto.");

      return false;
    }

    if (value.length < 3) {
      setFieldError(
        fields.subject,
        "El asunto debe tener al menos 3 caracteres.",
      );

      return false;
    }

    if (value.length > 120) {
      setFieldError(
        fields.subject,
        "El asunto no puede superar los 120 caracteres.",
      );

      return false;
    }

    setFieldValid(fields.subject);

    return true;
  };

  /* ========================================================
     VALIDATE MESSAGE
  ======================================================== */

  const validateMessage = () => {
    const value = fields.message.input.value.trim();

    if (!value) {
      setFieldError(fields.message, "Escribe un mensaje.");

      return false;
    }

    if (value.length < 10) {
      setFieldError(
        fields.message,
        "El mensaje debe tener al menos 10 caracteres.",
      );

      return false;
    }

    if (value.length > 1000) {
      setFieldError(
        fields.message,
        "El mensaje no puede superar los 1000 caracteres.",
      );

      return false;
    }

    setFieldValid(fields.message);

    return true;
  };

  /* ========================================================
     VALIDATE ALL
  ======================================================== */

  const validateForm = () => {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
  };

  /* ========================================================
     FIELD EVENTS
  ======================================================== */

  fields.name.input.addEventListener("blur", validateName);

  fields.email.input.addEventListener("blur", validateEmail);

  fields.subject.input.addEventListener("blur", validateSubject);

  fields.message.input.addEventListener("blur", validateMessage);

  /*
   * Mientras el usuario corrige un campo que ya mostró
   * un error, volvemos a validarlo al escribir.
   */
  Object.values(fields).forEach((field) => {
    field.input.addEventListener("input", () => {
      if (field.input.classList.contains("is-invalid")) {
        switch (field.input.id) {
          case "contact-name":
            validateName();
            break;

          case "contact-email":
            validateEmail();
            break;

          case "contact-subject":
            validateSubject();
            break;

          case "contact-message":
            validateMessage();
            break;

          default:
            break;
        }
      }
    });
  });

  /* ========================================================
     CLOSE ALERT
  ======================================================== */

  contactAlertClose.addEventListener("click", hideAlert);

  /* ========================================================
     SUBMIT
  ======================================================== */

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    hideAlert();

    if (!validateForm()) {
      const firstInvalidField = contactForm.querySelector(
        ".form-control.is-invalid",
      );

      firstInvalidField?.focus();

      return;
    }

    submitButton.disabled = true;

    if (submitText) {
      submitText.textContent = "Enviando...";
    }

    if (submitIcon) {
      submitIcon.className = "fa-solid fa-spinner fa-spin";
    }

    try {
      const formData = new FormData(contactForm);

      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "No se pudo enviar el mensaje.");
      }

      contactForm.reset();

      Object.values(fields).forEach(resetFieldState);

      showAlert(
        "Mensaje enviado",
        "Gracias por contactarme. Te responderé pronto.",
        "success",
      );
    } catch {
      showAlert(
        "No se pudo enviar",
        "Ocurrió un problema al enviar el mensaje. Inténtalo nuevamente.",
        "error",
      );
    } finally {
      submitButton.disabled = false;

      if (submitText) {
        submitText.textContent = "Enviar mensaje";
      }

      if (submitIcon) {
        submitIcon.className = "fa-solid fa-paper-plane";
      }
    }
  });
}
