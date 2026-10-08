// Formulario de contacto: muestra un mensaje de confirmación
const form = document.getElementById("contact-form");
const ok = document.getElementById("ok");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ok.style.display = "block";
  form.reset();
});
