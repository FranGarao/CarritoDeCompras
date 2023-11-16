let carrito = [];

console.log(carrito);

// verCarrito.addEventListener("click", () => {
//   let productosElegidos = "";
//   for (let index = 0; index < carrito.length; index++) {
//     productosElegidos += carrito[index].name + `</br>`;
//   }
//   carritoCompras.innerHTML = productosElegidos;
// });

// const agregarNikeBuzo = document.getElementById("nikeBuzo");
// agregarNikeBuzo.addEventListener("click", () => {
//   nikeBuzo.stock = nikeBuzo.stock - 1;
//   if (nikeBuzo.stock > 0) {
//     carrito.push(nikeBuzo);
//     console.log(carrito);
//     console.log(nikeBuzo.stock);
//   } else {
//     agregarNikeBuzo.disabled = true;
//     console.log(`No queda stock de ${nikeBuzo.name} lo sentimos.`);
//   }
// });

// const agregarAirmax = document.getElementById("airmax");
// agregarAirmax.addEventListener("click", () => {
//   if (airMax.stock > 0) {
//     airMax.stock--;
//     carrito.push(airMax);
//     console.log(carrito);
//     console.log(airMax.stock);
//   } else {
//     agregarAirmax.disabled = true;
//     console.log(`No queda stock de ${airMax.name}, lo sentimos.`);
//   }
// });

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
