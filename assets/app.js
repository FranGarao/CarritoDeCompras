//Defino el carrito de compras para que lo llene el usuario.
let carrito = [];
const carritoCompras = document.getElementById("carrito");
const verCarrito = document.getElementById("mostrarCarrito");
//Esta funcion nos permite ver los productos que agregamos al carrito
verCarrito.addEventListener("click", () => {
  let productosElegidos = "";
  for (let index = 0; index < carrito.length; index++) {
    productosElegidos += carrito[index].name + `</br>`;
  }
  carritoCompras.innerHTML = productosElegidos;
});

const agregarNikeBuzo = document.getElementById("nikeBuzo");
//Esta funcion esta agrega el Buzo Nike al clickear su boton correspondiente
agregarNikeBuzo.addEventListener("click", () => {
  nikeBuzo.stock = nikeBuzo.stock - 1;
  if (nikeBuzo.stock > 0) {
    carrito.push(nikeBuzo);
    console.log(carrito);
    console.log(nikeBuzo.stock);
  } else {
    agregarNikeBuzo.disabled = true;
    console.log(`No queda stock de ${nikeBuzo.name} lo sentimos.`);
  }
});

const agregarAirmax = document.getElementById("airmax");
//Esta funcion esta agrega las airMax al clickear su boton correspondiente
agregarAirmax.addEventListener("click", () => {
  if (airMax.stock > 0) {
    airMax.stock--;
    carrito.push(airMax);
    console.log(carrito);
    console.log(airMax.stock);
  } else {
    agregarAirmax.disabled = true;
    console.log(`No queda stock de ${airMax.name}, lo sentimos.`);
  }
});

const agregarGorra = document.getElementById("gorra");

agregarGorra.addEventListener("click", () => {
  if (gorra.stock > 0) {
    gorra.stock--;
    carrito.push(gorra);
    console.log(carrito);
    console.log(gorra.stock);
  } else {
    agregarGorra.disabled = true;
    console.log(`No queda stock de ${gorra.name}, lo sentimos.`);
  }
});

class Productos {
  constructor(name, tipo, precio, talle, importado, marca, stock) {
    this.name = name;
    this.tipo = tipo;
    this.precio = precio;
    this.talle = talle;
    this.importado = importado;
    this.marca = marca;
    this.stock = stock;
  }
  infoProducto() {
    return `Nombre: ${this.name}</br>
    Tipo: ${this.tipo}</br>
   Precio: ${this.precio}</br>
   Talle: ${this.talle}</br>
    Es importado? ${this.importado}</br>
   Marca:  ${this.marca}</br>`;
  }
}

const airMax = new Productos(
  "Airmax",
  "Zapatillas",
  50000,
  "42",
  false,
  "Nike",
  5
);
const nikeBuzo = new Productos(
  "Buzo Nike",
  "Buzo",
  56000,
  "41",
  false,
  "Nike",
  17
);
const gorra = new Productos(
  "Gorra Jordan",
  "Gorra",
  40000,
  "L",
  true,
  "Jordan",
  10
);

console.log(carrito);

//Filtros.
// const precioBajo = carrito.filter((el) => el.precio < 80000);
// const importado = carrito.filter((el) => el.importado === true);
// console.log(precioBajo);
// console.log(importado);

//Realize una actualizacion de los precios en un 10%.
// const actualizado = carrito.map((el) => {
//   return {
//     nombre: el.nombre,
//     precio: el.precio + el.precio / 0.1,
//   };
// });

// console.log(actualizado);
