const form = document.querySelector("form");

form.addEventListener("invalid", cancelPopup, true);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const EmailOutput = document.querySelector("#Email_output");
const termsOutput = document.querySelector("#samtykke_output");
const forslagOutput = document.querySelector("#forslag_output");
const ageOutput = document.querySelector("#age_output");
const samtykkeOutput = document.querySelector("#samtykke_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const Email = formData.get("Email");
  const forslag = formData.get("forslag");
  const age = formData.get("age");
  const samtykke = formData.get("samtykke");

  // 2. Vis værdierne i de rigtige output-felter
  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  EmailOutput.textContent = Email;
  forslagOutput.textContent = forslag;
  ageOutput.textContent = age;
  samtykkeOutput.textContent = samtykke;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
