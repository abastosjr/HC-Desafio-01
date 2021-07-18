const form = document.querySelector("#form-subscribe");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {
    nome: inputName.value,
    email: inputEmail.value,
  };
  localStorage.setItem("Subscribed-Promo", JSON.stringify(data));
  alert("Cadastro realizado!");
});
