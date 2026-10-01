function mostrarInformacionProducto(producto) {
  const productoDiv = document.createElement("div");
  productoDiv.classList.add("producto");
  productoDiv.innerHTML = `
        <h3>${producto.modelo}</h3>
        <p>Color:${producto.color}</p>
        <p>Precio:$${producto.precio}</p>
        <p>Envío desde:${producto.ubicacion}</p>
    `;
  document.querySelector(".productos").appendChild(productoDiv);
}

const productos = [
  {
    modelo: "iPhone 17 Pro Max",
    color: " Naranja cósmico, azul oscuro y plata.",
    precio:  550,
    ubicacion: " EE.UU",
  },
  {
    modelo: "iPhone 17 Pro",
    color: " Naranja cósmico, azul oscuro y plata..",
    precio:  450,
    ubicacion: " EE.UU",
  },
  {
    modelo: "iPhone 17 Air",
    color: " Azul cielo, dorado claro, blanco nube y negro espacial.",
    precio:  400,
    ubicacion: " EE.UU",
  },
  {
    modelo: "iPhone 17",
    color: " Lavanda, verde salvia, azul neblina, blanco y negro.",
    precio:  400,
    ubicacion: " EE.UU",
  },
  {
    modelo: "iPhone 17e",
    color: " Blanco, negro y rosa suave",
    precio:  350,
    ubicacion: " EE.UU",
  },
];

productos.forEach(mostrarInformacionProducto);