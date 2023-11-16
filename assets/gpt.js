let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  if (producto.stock > 0) {
    producto.stock--;
    carrito.push({ ...producto }); // Copia independiente del producto
    console.log(carrito);
    console.log(producto.stock);
  } else {
    console.log("No queda stock de", producto.name);
  }
}

// Función para mostrar la información de los productos
function mostrarInformacionProductos() {
  const productos = [airMax, airMax2, nikeBuzo];
  let info = "";
  productos.forEach((producto) => {
    info += producto.infoProducto() + "<br><br>";
  });
  document.getElementById("productos").innerHTML = info;
}

// Asociar eventos de clic a los elementos HTML
document.getElementById("airmax").addEventListener("click", () => {
  agregarAlCarrito(airMax);
});
// Asociar eventos a otros elementos...

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
    return `Nombre: ${this.name}<br>
    Tipo: ${this.tipo}<br>
    Precio: ${this.precio}<br>
    Talle: ${this.talle}<br>
    Es importado? ${this.importado}<br>
    Marca: ${this.marca}<br>`;
  }
}

const airMax = new Productos(
  "Airmax",
  "Zapatillas",
  50000,
  "42",
  false,
  "Nike",
  2
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
const airMax2 = new Productos(
  "Airmax2",
  "Zapatillas",
  890000,
  "41",
  true,
  "Nike",
  10
);

mostrarInformacionProductos();
console.log(carrito);
