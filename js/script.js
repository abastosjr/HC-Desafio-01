const form = document.querySelector("#form-subscribe");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem(
    "Subscribed-Promo",
    `name: ${inputName.value}, email: ${inputEmail.value}`
  );
});
