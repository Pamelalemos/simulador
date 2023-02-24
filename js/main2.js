// Definimos un objeto que almacena las opciones disponibles para el usuario
const opciones = {
  compra: {
    descripcion: "Agregar al carrito",
    accion: agregarAlCarrito,
  },
  mostrar: {
    descripcion: "Mostrar carrito",
    accion: mostrarCarrito,
  },
};

// Cargamos los datos desde un archivo JSON local
const listado = document.getElementById("listado");

const listadoProductos = "./json/productos.json"

fetch(listadoProductos)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    datos.forEach((producto) => {
      listado.innerHTML += `<h2>Nombre: ${producto.nombre} </h2>
      <p> Precio: ${producto.precio}</p>
      <p> ID: ${producto.id}</p>`;
    });
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Proceso Finalizado"));
// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  console.log(carrito);
}

// Función para mostrar el carrito
function mostrarCarrito() {
  console.log(carrito);
}
// Función para generar el DOM de forma dinámica
function generarDOM() {
  const contenedor = document.querySelector(".contenedor");

  // Generamos un botón para cada opción disponible
  for (let opcion in opciones) {
    const boton = document.createElement("button");
    boton.textContent = opciones[opcion].descripcion;

    // Añadimos un evento al botón que ejecuta la acción correspondiente
    boton.addEventListener("click", () => {
      const seleccion = prompt("¿Qué producto desea agregar al carrito?");
      const producto = productos.find(
        (producto) => producto.title === seleccion
      );
      opciones[opcion].accion(producto);
    });

    // Agregamos el botón al contenedor
    contenedor.appendChild(boton);
  }

  // Agregamos una tabla para mostrar los productos del carrito
  const tabla = document.createElement("table");
  const encabezado = tabla.createTHead();
  const filaEncabezado = encabezado.insertRow();
  const celdaEncabezadoProducto = filaEncabezado.insertCell();
  const celdaEncabezadoPrecio = filaEncabezado.insertCell();
  celdaEncabezadoProducto.textContent = "Producto";
  celdaEncabezadoPrecio.textContent = "Precio";

  // Agregamos las filas con los productos del carrito
  const cuerpo = tabla.createTBody();
  for (let producto of carrito) {
    const fila = cuerpo.insertRow();
    const celdaProducto = fila.insertCell();
    const celdaPrecio = fila.insertCell();
    celdaProducto.textContent = producto.title;
    celdaPrecio.textContent = `$${producto.precio}`;
  }

  // Agregamos la tabla al contenedor
  contenedor.appendChild(tabla);
}

// Esperamos a que se cargue el contenido del DOM para generarlo dinámicamente
document.addEventListener("DOMContentLoaded", () => {
  generarDOM();
});
