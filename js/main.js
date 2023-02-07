const inputName = document.querySelector("#input-name");
const inputNumber = document.querySelector("#input-number");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");
const inputcvc = document.querySelector("#input-cvc");
const cardNumber = document.querySelector("#card-number");
const cardName = document.querySelector("#card-name");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCVC = document.querySelector("#card-cvc");
const form = document.querySelector("#input-name");
const thankyou = document.querySelector("#thank-you");
const buttonContinue = document.querySelector("#continue");

inputName.addEventListener("input", () => {
  cardName.innerText = inputName.value;

  if (inputName.value.length === 0) {
    cardName.innerText = "PAMELA LEMOS";
  }
});

inputNumber.addEventListener("input", () => {
  cardNumber.innerText = inputNumber.value;

  if (inputNumber.value.length === 0) {
    cardNumber.innerText = "0000 0000 0000 0000";
  }
});

inputMonth.addEventListener("input", () => {
  cardMonth.innerText = inputMonth.value;

  if (inputMonth.value.length === 0) {
    cardMonth.innerText = "00";
  }
});

inputYear.addEventListener("input", () => {
  cardYear.innerText = inputYear.value;

  if (inputYear.value.length === 0) {
    cardYear.innerText = "00";
  }
});

inputcvc.addEventListener("input", () => {
  cardCVC.innerText = inputcvc.value;

  if (inputcvc.value.length === 0) {
    cardCVC.innerText = "000";
  }
});

var cleave = new Cleave("#input-number", {
  creditCard: true,
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("disabled");
  thankyou.classList.remove("disabled");
});

buttonContinue.addEventListener("click", () => {
  form.classList.remove("disabled");
  thankYou.classList.add("disabled");
  form.reset();
  cardName.innerText = "Pamela Lemos";
  cardNumber.innerText = "0000 0000 0000 0000";
  cardMonth.innerText = "00";
  cardYear.innerText = "00";
  cardCVC.innerText = "000";
});
