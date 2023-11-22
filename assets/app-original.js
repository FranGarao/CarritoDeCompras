document.addEventListener("DOMContentLoaded", function () {
  let carrito = [];
  const numeroCarrito = document.querySelector(".numeroCarrito");
  const botonCarrito = document.getElementById("carrito");
  const verCarrito = document.getElementById("verCarrito");
  const verPrecioFinal = document.getElementById("verPrecioFinal");
  const filtros = document.getElementById("filtros");
  const precioAscendente = document.getElementById("precioAscendente");
  const precioDescendente = document.getElementById("precioDescendente");
  const precioPersonalizado = document.getElementById("precioPersonalizado");
  const mostrarFiltros = document.querySelectorAll(".listaFiltros");
  let activarFiltros = false;
  let talles = [
    ["S", "M", "L", "XL", "XXL"],
    [39, 40, 41, 42, 43, 44],
  ];
  let productos = [
    {
      nombre: "producto-a",
      marca: "Nike",
      tipo: "Zapatillas",
      precio: 95000,
      talle: talles[1],
      importado: true,
      stock: 3,
    },
    {
      nombre: "producto-b",
      marca: "Nike",
      tipo: "Buzo",
      precio: 40000,
      talle: talles[0],
      importado: false,
      stock: 2,
    },
    {
      nombre: "producto-c",
      marca: "Jordan",
      tipo: "Remera",
      precio: 23000,
      talle: talles[0],
      importado: true,
      stock: 2,
    },
    {
      nombre: "producto-d",
      marca: "Jordan",
      tipo: "Buzo",
      precio: 38000,
      talle: talles[0],
      importado: true,
      stock: 2,
    },
    {
      nombre: "producto-e",
      marca: "Jordan",
      tipo: "Short",
      precio: 22000,
      talle: talles[0],
      importado: true,
      stock: 2,
    },
    {
      nombre: "producto-f",
      marca: "Jordan",
      tipo: "Zapatillas",
      precio: 110000,
      talle: talles[1],
      importado: true,
      stock: 10,
    },
    // {
    //   nombre: "producto-a",
    //   marca: "Jordan",
    //   tipo: "Zapatillas",
    //   precio: 85000,
    //   talle: talles[1],
    //   importado: true,
    //   stock: 10,
    // },
    // {
    //   nombre: "producto-a",
    //   marca: "Nike",
    //   tipo: "Remera",
    //   precio: 25000,
    //   talle: talles[0],
    //   importado: true,
    //   stock: 2,
    // },
    // {
    //   nombre: "producto-a",
    //   marca: "Nike",
    //   tipo: "Buzo",
    //   precio: 35000,
    //   talle: talles[0],
    //   importado: true,
    //   stock: 2,
    // },
  ];

  console.log(productos);

  productos.map((el) => {
    const agregarProducto = document.getElementById(`${el.nombre}`);
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
    mostrarFiltros.forEach((el) => {
      if (activarFiltros == true) {
        // alert("El resultado de los filtros se muestra en consola.");
        el.classList.remove("desaparecerFiltros");
      } else {
        el.classList.add("desaparecerFiltros");
      }
    });
    activarFiltros = !activarFiltros;
  });

  precioAscendente.addEventListener("click", () => {
    const mostrarPrecioAscendente = productos.sort(
      (a, b) => a.precio - b.precio
    );
    console.log(mostrarPrecioAscendente);
  });
  precioDescendente.addEventListener("click", () => {
    const mostrarPrecioDescendente = productos.sort(
      (a, b) => b.precio - a.precio
    );
    console.log(mostrarPrecioDescendente);
  });

  precioPersonalizado.addEventListener("click", () => {
    const opcionUsuario = parseInt(
      prompt(
        "Elegi una opcion:\nProductos con precio menor a...(oprimi 1)\nProductos con precio mayor a...(oprimi 2)"
      )
    );
    if (opcionUsuario == 1) {
      const precioUsuario = parseInt(prompt("Ingresa el precio maximo"));
      const filtroPersonalizado = productos.filter((el) => {
        return el.precio < precioUsuario;
      });
      if (filtroPersonalizado.length == 0) {
        alert("No se encontraron resultados.");
      } else {
        console.log(filtroPersonalizado);
      }
    } else if (opcionUsuario == 2) {
      const precioUsuario = parseInt(prompt("Ingresa el precio minimo"));
      const filtroPersonalizado = productos.filter((el) => {
        return el.precio >= precioUsuario;
      });
      if (filtroPersonalizado.length == 0) {
        alert("No se encontraron resultados.");
      } else {
        console.log(filtroPersonalizado);
      }
    } else {
      alert("Por favor, ingresa 1 o 2.");
    }
  });
});

// precioPersonalizado.addEventListener("click", () => {
//   prompt(
//     "Ingresa el precio maximo, y te mostramos los productos por debajo de dicho precio."
//   );
//   const precioUsuario = parseInt(prompt("Ingrese el precio minimo"));
//   const productosFiltrados = productos.filter((el) => {
//     return el.precio > precioUsuario;
//   });
//   console.log(productosFiltrados);
// });
