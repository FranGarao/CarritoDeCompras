document.addEventListener("DOMContentLoaded", function () {
  let carrito = [];

  const numeroCarrito = document.querySelector(".numeroCarrito");
  const botonCarrito = document.getElementById("carrito");
  const verCarrito = document.getElementById("verCarrito");
  const verPrecioFinal = document.getElementById("verPrecioFinal");
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

  productos.forEach((el) => {
    const agregarProducto = document.getElementById(`${el.marca}`);
    agregarProducto.addEventListener("click", () => {
      if (el.stock > 0) {
        const productoEnCarrito = carrito.find(
          (prod) => prod.marca === el.marca
        );

        if (productoEnCarrito) {
          productoEnCarrito.cantidad++;
        } else {
          carrito.push({ ...el, cantidad: 1 });
        }

        el.stock--;
        numeroCarrito.innerText++;
        console.log(carrito);
      } else {
        alert(`No hay mas stock de ${el.marca}`);
        agregarProducto.disabled = true;
      }
    });
  });

  botonCarrito.addEventListener("click", () => {
    // alert("El precio final incluye IVA.");
    verCarrito.innerHTML = "";
    let mostrarPrecioFinal = document.createElement("div");
    verPrecioFinal.appendChild(mostrarPrecioFinal);
    let precioFinal = 0;
    for (prodClave in carrito) {
      const prod = carrito[prodClave];
      let mostrarCarrito = document.createElement("div");
      verCarrito.appendChild(mostrarCarrito);
      const tallasDisponibles = prod.talle.join(", ");

      mostrarCarrito.innerHTML = `</br><h3>${prod.tipo} ${prod.marca}</h3> <b>Precio: </b>$${prod.precio}</br><b>Talles disponibles: </b> ${tallasDisponibles} </br><b>Cantidad: </b>: ${prod.cantidad}</br>
   `;
      precioFinal += prod.precio * prod.cantidad * 1.21;
      botonCarrito.disabled = true;
    }

    mostrarPrecioFinal.innerHTML = `<h3>El precio final es de: ${precioFinal}</h3>`;
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
