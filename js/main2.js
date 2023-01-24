const productos = [
  { nombre: "record 1", precio: 5000 },
  { nombre: "record 2", precio: 3000 },
  { nombre: "record 3", precio: 5000 },
];
let carrito = [];

let seleccion = prompt(" hola desea comprar otro disco si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingresa si o no");
  seleccion = prompt("hola desea comprar algo si o no");
}

if (seleccion == "si") {
  alert("a continuacion nuestra ista de productos");
  console.log(productos);
}

const btnRedireccion = document.querySelector(".btn");
btnRedireccion.addEventListener("click", redireccionar);

function redireccionar(e) {
  window.location.href = "index.html";
  e.preventDefault();
  console.log;
}
