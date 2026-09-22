const SUCCESS_ICON = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 282.9 440.5 289.9 440C296.9 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7z"
    />
  </svg>
`;

const ERROR_ICON = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C240.4 221.6 255.6 221.6 264.9 231L319.9 286L374.9 231C384.3 221.6 399.5 221.6 408.8 231C418.1 240.4 418.2 255.6 408.8 264.9L353.8 319.9L408.8 374.9C418.2 384.3 418.2 399.6 408.8 408.9C399.4 418.2 384.2 418.3 374.9 408.9L319.9 353.9L264.9 408.9C255.5 418.3 240.3 418.3 231 408.9C221.7 399.5 221.6 384.3 231 375L286 320L231 265C221.6 255.6 221.6 240.4 231 231z"
    />
  </svg>
`;

const CLOSE_ICON = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
    />
  </svg>
`;

export function initContactForm() {
  /* ==========================================================
     PREVENT DUPLICATE INITIALIZATION
  ========================================================== */

  const contactForm = document.querySelector("#contact-form");

  if (!contactForm || contactForm.dataset.initialized === "true") {
    return;
  }

  contactForm.dataset.initialized = "true";

  /* ==========================================================
     FORM
  ========================================================== */

  const contactName = document.querySelector("#contact-name");
  const contactEmail = document.querySelector("#contact-email");
  const contactSubject = document.querySelector("#contact-subject");
  const contactMessage = document.querySelector("#contact-message");

  const contactNameError = document.querySelector("#contact-name-error");

  const contactEmailError = document.querySelector("#contact-email-error");

  const contactSubjectError = document.querySelector("#contact-subject-error");

  const contactMessageError = document.querySelector("#contact-message-error");

  const contactSubmit = contactForm.querySelector(".contact-submit-button");

  /* ==========================================================
     ALERT
  ========================================================== */

  const contactAlert = document.querySelector("#contact-alert");

  const contactAlertIcon = contactAlert?.querySelector(".contact-alert-icon");

  const contactAlertTitle = contactAlert?.querySelector("#contact-alert-title");

  const contactAlertMessage = contactAlert?.querySelector(
    "#contact-alert-message",
  );

  const contactAlertClose = contactAlert?.querySelector("#contact-alert-close");

  /* ==========================================================
     REQUIRED ELEMENTS
  ========================================================== */

  if (
    !contactName ||
    !contactEmail ||
    !contactSubject ||
    !contactMessage ||
    !contactNameError ||
    !contactEmailError ||
    !contactSubjectError ||
    !contactMessageError ||
    !contactSubmit ||
    !contactAlert ||
    !contactAlertIcon ||
    !contactAlertTitle ||
    !contactAlertMessage ||
    !contactAlertClose
  ) {
    contactForm.dataset.initialized = "false";
    return;
  }

  /* ==========================================================
     ORIGINAL BUTTON
  ========================================================== */

  const originalButtonContent = contactSubmit.innerHTML;

  /* ==========================================================
     ALERT
  ========================================================== */

  function showAlert(type, title, message) {
    const isSuccess = type === "success";

    contactAlert.classList.remove("is-success", "is-error");

    contactAlert.classList.add(isSuccess ? "is-success" : "is-error");

    contactAlertIcon.innerHTML = isSuccess ? SUCCESS_ICON : ERROR_ICON;

    contactAlertTitle.textContent = title;
    contactAlertMessage.textContent = message;

    contactAlert.classList.add("is-visible");

    contactAlert.setAttribute("aria-hidden", "false");
  }

  function hideAlert() {
    contactAlert.classList.remove("is-visible", "is-success", "is-error");

    contactAlert.setAttribute("aria-hidden", "true");
  }

  /* ==========================================================
     FIELD STATES
  ========================================================== */

  function setFieldError(input, errorElement, message) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");

    errorElement.textContent = message;
    errorElement.classList.add("is-visible");
  }

  function setFieldValid(input, errorElement) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");

    errorElement.textContent = "";
    errorElement.classList.remove("is-visible");
  }

  function clearFieldState(input, errorElement) {
    input.classList.remove("is-invalid", "is-valid");

    errorElement.textContent = "";
    errorElement.classList.remove("is-visible");
  }

  /* ==========================================================
     VALIDATION - NAME
  ========================================================== */

  function validateName() {
    const value = contactName.value.trim();

    if (!value) {
      setFieldError(contactName, contactNameError, "El nombre es obligatorio.");

      return false;
    }

    if (value.length < 2) {
      setFieldError(
        contactName,
        contactNameError,
        "El nombre debe tener al menos 2 caracteres.",
      );

      return false;
    }

    if (value.length > 80) {
      setFieldError(
        contactName,
        contactNameError,
        "El nombre no puede superar los 80 caracteres.",
      );

      return false;
    }

    setFieldValid(contactName, contactNameError);

    return true;
  }

  /* ==========================================================
     VALIDATION - EMAIL
  ========================================================== */

  function validateEmail() {
    const value = contactEmail.value.trim();

    if (!value) {
      setFieldError(
        contactEmail,
        contactEmailError,
        "El correo electrónico es obligatorio.",
      );

      return false;
    }

    if (value.length > 120) {
      setFieldError(
        contactEmail,
        contactEmailError,
        "El correo no puede superar los 120 caracteres.",
      );

      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setFieldError(
        contactEmail,
        contactEmailError,
        "Ingresa un correo electrónico válido.",
      );

      return false;
    }

    setFieldValid(contactEmail, contactEmailError);

    return true;
  }

  /* ==========================================================
     VALIDATION - SUBJECT
  ========================================================== */

  function validateSubject() {
    const value = contactSubject.value.trim();

    if (!value) {
      setFieldError(
        contactSubject,
        contactSubjectError,
        "El asunto es obligatorio.",
      );

      return false;
    }

    if (value.length < 3) {
      setFieldError(
        contactSubject,
        contactSubjectError,
        "El asunto debe tener al menos 3 caracteres.",
      );

      return false;
    }

    if (value.length > 120) {
      setFieldError(
        contactSubject,
        contactSubjectError,
        "El asunto no puede superar los 120 caracteres.",
      );

      return false;
    }

    setFieldValid(contactSubject, contactSubjectError);

    return true;
  }

  /* ==========================================================
     VALIDATION - MESSAGE
  ========================================================== */

  function validateMessage() {
    const value = contactMessage.value.trim();

    if (!value) {
      setFieldError(
        contactMessage,
        contactMessageError,
        "El mensaje es obligatorio.",
      );

      return false;
    }

    if (value.length < 10) {
      setFieldError(
        contactMessage,
        contactMessageError,
        "El mensaje debe tener al menos 10 caracteres.",
      );

      return false;
    }

    if (value.length > 1000) {
      setFieldError(
        contactMessage,
        contactMessageError,
        "El mensaje no puede superar los 1000 caracteres.",
      );

      return false;
    }

    setFieldValid(contactMessage, contactMessageError);

    return true;
  }

  /* ==========================================================
     VALIDATE FORM
  ========================================================== */

  function validateForm() {
    const nameValid = validateName();

    const emailValid = validateEmail();

    const subjectValid = validateSubject();

    const messageValid = validateMessage();

    return nameValid && emailValid && subjectValid && messageValid;
  }

  /* ==========================================================
     BLUR VALIDATION
  ========================================================== */

  contactName.addEventListener("blur", validateName);

  contactEmail.addEventListener("blur", validateEmail);

  contactSubject.addEventListener("blur", validateSubject);

  contactMessage.addEventListener("blur", validateMessage);

  /* ==========================================================
     LIVE VALIDATION AFTER ERROR
  ========================================================== */

  contactName.addEventListener("input", () => {
    if (contactName.classList.contains("is-invalid")) {
      validateName();
    }
  });

  contactEmail.addEventListener("input", () => {
    if (contactEmail.classList.contains("is-invalid")) {
      validateEmail();
    }
  });

  contactSubject.addEventListener("input", () => {
    if (contactSubject.classList.contains("is-invalid")) {
      validateSubject();
    }
  });

  contactMessage.addEventListener("input", () => {
    if (contactMessage.classList.contains("is-invalid")) {
      validateMessage();
    }
  });

  /* ==========================================================
     CLOSE ALERT
  ========================================================== */

  contactAlertClose.innerHTML = CLOSE_ICON;

  contactAlertClose.addEventListener("click", hideAlert);

  /* ==========================================================
     SUBMIT
  ========================================================== */

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (contactSubmit.disabled) {
      return;
    }

    hideAlert();

    /* --------------------------------------------------------
         VALIDATE
      -------------------------------------------------------- */

    if (!validateForm()) {
      const firstInvalidField = contactForm.querySelector(
        ".form-control.is-invalid",
      );

      firstInvalidField?.focus();

      return;
    }

    /* --------------------------------------------------------
         LOADING STATE
      -------------------------------------------------------- */

    contactSubmit.disabled = true;

    contactSubmit.innerHTML = `
        <span
          class="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span>Enviando...</span>
      `;

    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 10000);

    try {
      /* ------------------------------------------------------
           SEND
        ------------------------------------------------------ */

      const formData = new FormData(contactForm);

      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      /* ------------------------------------------------------
           RESPONSE
        ------------------------------------------------------ */

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje.");
      }

      let result = null;

      const contentType = response.headers.get("content-type") || "";

      if (contentType.includes("application/json")) {
        result = await response.json();
      }

      /* ------------------------------------------------------
           WEB3FORMS ERROR
        ------------------------------------------------------ */

      if (result && result.success === false) {
        throw new Error(result.message || "No se pudo enviar el mensaje.");
      }

      /* ------------------------------------------------------
           SUCCESS
        ------------------------------------------------------ */

      showAlert(
        "success",
        "Mensaje enviado",
        "Gracias por contactarme. Te responderé pronto.",
      );

      contactForm.reset();

      clearFieldState(contactName, contactNameError);

      clearFieldState(contactEmail, contactEmailError);

      clearFieldState(contactSubject, contactSubjectError);

      clearFieldState(contactMessage, contactMessageError);
    } catch (error) {
      clearTimeout(timeoutId);

      if (error.name === "AbortError") {
        showAlert(
          "error",
          "Tiempo de espera agotado",
          "No se recibió respuesta del servidor. Inténtalo nuevamente.",
        );
      } else {
        showAlert(
          "error",
          "No se pudo enviar",
          "Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.",
        );
      }
    } finally {
      /* ------------------------------------------------------
           ALWAYS RESTORE BUTTON
        ------------------------------------------------------ */

      clearTimeout(timeoutId);

      contactSubmit.disabled = false;

      contactSubmit.innerHTML = originalButtonContent;
    }
  });
}

initContactForm();
