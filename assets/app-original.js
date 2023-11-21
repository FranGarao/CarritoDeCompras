document.addEventListener("DOMContentLoaded", function () {
  let carrito = [];

  const numeroCarrito = document.querySelector(".numeroCarrito");
  const botonCarrito = document.getElementById("carrito");
  const verCarrito = document.getElementById("verCarrito");
  const verPrecioFinal = document.getElementById("verPrecioFinal");
  const filtros = document.getElementById("filtros");
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

  productos.map((el) => {
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
        numeroCarrito.classList.add("efectoNumeroCarrito");
        setTimeout(() => {
          numeroCarrito.classList.remove("efectoNumeroCarrito");
        }, 800);
      } else {
        alert(`No hay mas stock de ${el.marca}`);
        agregarProducto.disabled = true;
      }
    });
  });

  botonCarrito.addEventListener("click", () => {
    if (carrito.length == 0) {
      alert("No ingresaste nada a tu carrito.");
    } else {
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

      mostrarPrecioFinal.innerHTML = `</br><h3>El precio final es de: ${precioFinal}</h3>`;
    }
  });
  console.log(carrito);

  filtros.addEventListener("click", () => {
    const filtroUsuario = parseInt(
      prompt(
        "Que filtro desea aplicar?\n\n1) Filtro descendente\n2) Filtro Ascendente\n3) Filtrar por precio personalizado"
      )
    );
    switch (filtroUsuario) {
      case 1:
        const filtroDescendente = productos.sort((a, b) => b.precio - a.precio);
        console.log(filtroDescendente);
        break;
      case 2:
        const filtroAscendente = productos.sort((a, b) => a.precio - b.precio);
        console.log(filtroAscendente);
        break;
      default:
        break;
    }
    const filtroMenor = productos.filter((el) => el.precio < filtroUsuario);
    const filtroMayor = productos.filter((el) => el.precio > filtroUsuario);
    const filtroAscendente = productos.sort((a, b) => b.precio - a.precio);
  });
});

// Filtros.
// const precioBajo = carrito.filter((el) => el.precio < 80000);
// const importado = carrito.filter((el) => el.importado === true);
// console.log(precioBajo);
// console.log(importado);

// Realize una actualizacion de los precios en un 10%.
// const actualizado = carrito.map((el) => {
//   return {
//     nombre: el.nombre,
//     precio: el.precio + el.precio / 0.1,
//   };
// });

// console.log(actualizado);
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
