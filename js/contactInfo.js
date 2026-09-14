function initContactInfo() {
  const phoneParts = ["+593", "98", "833", "8901"];
  const phone = phoneParts.join(" ");
  const phoneHref = phoneParts.join("");

  const emailUser = ["jose", "malavebri"].join(".");
  const emailDomain = ["outlook", "com"].join(".");
  const email = `${emailUser}@${emailDomain}`;

  const phoneLink = document.getElementById("phone-link");
  const phoneText = document.getElementById("phone-text");

  const emailLink = document.getElementById("email-link");
  const emailText = document.getElementById("email-text");

  if (phoneLink && phoneText) {
    phoneLink.href = `tel:${phoneHref}`;
    phoneText.textContent = phone;
  }

  if (emailLink && emailText) {
    emailLink.href = `mailto:${email}`;
    emailText.textContent = email;
  }
}

export default initContactInfo;
