document.addEventListener("DOMContentLoaded", function () {
  let carrito = [];
  let precioFinal = 0;
  const numeroCarrito = document.getElementById("numeroCarrito");
  const botonCarrito = document.getElementById("carrito");
  const mostrarCarrito = document.getElementById("verCarrito");
  let talles = [
    ["S", "M", "L", "XL", "XXL"],
    [39, 40, 41, 42, 43, 44],
  ];
  let productos = [
    {
      marca: "Nike",
      tipo: "Zapatillas",
      precio: 65000,
      talle: talles[1],
      importado: true,
      stock: 3,
    },
    {
      marca: "Adidas",
      tipo: "Buzo",
      precio: 40000,
      talle: talles[0],
      importado: false,
      stock: 2,
    },
    {
      marca: "Jordan",
      tipo: "Remera",
      precio: 35000,
      talle: talles[0],
      importado: true,
      stock: 2,
    },
  ];

  console.log(productos);

  productos.map((el) =>
    document.getElementById(`${el.marca}`).addEventListener("click", () => {
      if (el.stock == 0) {
        console.log(`No queda mas stock de ${el.tipo} ${el.marca}`);
        document.getElementById(`${el.marca}`).disabled = true;
      } else {
        carrito.push(el);
        el.stock--;
        numeroCarrito.innerText = carrito.length;
        console.log(carrito);
      }
    })
  );

  botonCarrito.addEventListener("click", () => {
    for (prod of carrito) {
      let verCarrito = document.createElement("div");
      mostrarCarrito.appendChild(verCarrito);
      const tallasDisponibles = prod.talle.join(", ");
      precioFinal += prod.precio;
      verCarrito.innerHTML = `<h2>${prod.tipo} ${prod.marca} $${prod.precio} Talles disponibles: ${tallasDisponibles}</h2></br></br></br>${precioFinal}
   `;

      botonCarrito.disabled = true;
    }
  });
  console.log(carrito);
});

//   verCarrito.innerHTML = `<h2>${prod.tipo} ${prod.marca} $${prod.precio} Talles disponibles: ${tallasDisponibles}</h2>`;
//   botonCarrito.disabled = true;
// }
// mostrarCarrito.addEventListener("click", () => {
//   for (const prod of carrito) {
//     let verCarrito = document.createElement("div");
//     const carritoElement = document.getElementById("carrito");
//     if (carritoElement) {
//       carritoElement.appendChild(verCarrito);
//       verCarrito.innerHTML = `<h2>${prod.marca}</h2>`;
//     } else {
//       console.error("No se encontró el elemento con ID 'carrito'");
//     }
//   }
// })
