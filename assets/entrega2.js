let carrito = [];
let talles = [
  ["S", "M", "L", "XL", "XXL"],
  [39, 40, 41, 42, 43, 44],
];
class Productos {
  constructor(marca, tipo, precio, talle, stock) {
    this.marca = marca;
    this.tipo = tipo;
    this.precio = precio;
    this.talle = talle;
    this.stock = stock;
  }
  mostrarProducto() {
    return `${this.tipo} ${this.marca} $${this.precio}`;
  }
  mostrarInfo() {
    return `Marca: ${this.marca}\nTipo: ${this.tipo}\nPrecio: $${this.precio}\nTalles: ${this.talle}\nStock: ${this.stock}`;
  }
}

const airMax = new Productos("Nike", "Zapatillas", 75000, talles[1], 23);
const buzoNike = new Productos("Nike", "Buzo", 55000, talles[0], 12);
const remeraJordan = new Productos("Jordan", "Remera", 35000, talles[0], 21);

let productos = [];

const opciones = parseInt(
  prompt(
    "Elegi una opcion\n1- Ver Productos.\n2- Filtrar Productos.\n3- Ver Carrito.  "
  )
);
if (opciones == "" || isNaN(opciones)) {
  alert("Por favor, ingresa un numero valido");
} else {
  switch (opciones) {
    case 1:
      const elegirProducto = parseInt(
        prompt(
          `1) ${airMax.mostrarProducto()}\n\n2) ${remeraJordan.mostrarProducto()} \n\n3) ${buzoNike.mostrarProducto()}`
        )
      );
      switch (elegirProducto) {
        case 1:
          prompt(`${airMax.mostrarInfo()}\n\n1) Agregar al carrito\n2) Volver`);

        default:
          break;
      }
      break;
    case 2:
      alert("Ingresaste un 2");
    case 3:
      alert("Ingresaste un 3");

    default:
      break;
  }
}
function precioAscendente() {
  const precioAscendente = productos.sort((a, b) => {
    return b.precio - a.precio;
  });
  console.log(precioAscendente);
}
precioAscendente();

function precioDescendente() {
  const precioDescendente = productos.sort((a, b) => {
    return a.precio - b.precio;
  });
  console.log(precioDescendente);
}
precioDescendente();
