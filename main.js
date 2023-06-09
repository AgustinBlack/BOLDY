const zapatillas = "./json/data.json"
const contenedorProductos = document.getElementById("contenedorProductos")

fetch(zapatillas)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log(datos);
    filtrar(datos);
  })


//BUSCADOR

function filtrar(arrayZapatillas){
  let buscador = document.getElementById("buscador");
  buscador.addEventListener("input", ()=>{
    let zapatillasFiltradas = arrayZapatillas.filter(zapatilla => zapatilla.marca.toLowerCase().includes(buscador.value));
    return mostrarProductos(zapatillasFiltradas)
  });
  mostrarProductos(arrayZapatillas)
}

//CARDS

// let precioMenor = document.querySelectorAll(".precio__menor")
// precioMenor.addEventListener("click", filtrarPorMayorPrecio)

// function filtrarPorMenorPrecio(producto) {
//   const zapatillasOrdenadas = zapatillas.slice().sort((mayor, menor) => menor.precio - mayor.precio);
//   mostrarProductos(zapatillasOrdenadas);
// }

// let precioMayor = document.querySelectorAll(".precio__mayor")
// precioMayor.addEventListener("click", filtrarPorMayorPrecio)

// function filtrarPorMayorPrecio(producto) {
//   const zapatillasOrdenadas = zapatillas.slice().sort((mayor, menor) => mayor.precio - menor.precio);
//   mostrarProductos(zapatillasOrdenadas);
// }


function mostrarProductos(arrayProductos) {
    let contenedor = document.getElementById("wrapper")
    contenedor.innerHTML = ""
    arrayProductos.forEach((producto) => {
      let card = document.createElement("div")
      card.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12')
  
      card.innerHTML = `
        <div class="card">
            <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">      
                <h5 class="tituloProducto">${producto.modelo}</h5>
                <p class="card-title">${producto.marca}</p>
            </div>
            <ul class="list-group list-group-flush">
                <p class="list-group-item">Precio: $${producto.precio}</p>
                <p class="list-group-item"><span id=span${producto.id}>${producto.stock}</span></p>
            </ul>
            <div class="card-body">
                <button class="boton__card" id=${producto.id}>Agregar al carrito</button>
            </div>
        </div>
      `
      contenedor.appendChild(card)
  
      let boton = document.getElementById(producto.id)
      boton.addEventListener("click", () => {
        agregarProductoAlCarrito(producto)
      }) 
      
    })
}

//CARRITO

let carritoDOM = document.getElementById("carrito")

function finalizarCompra() {
  if (carrito.length === 0) {
    carritoVacio();
    return;
  }
  
  compraRealizada();
  localStorage.removeItem("carrito");
  carrito = [];
  renderizarCarrito(carrito);
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

function agregarProductoAlCarrito(producto) {
	if (carrito.some(({ id }) => id == producto.id || id === "STOCK")) {
		let pos = carrito.findIndex((prod) => prod.id == producto.id);
		carrito[pos].unidades++;
		carrito[pos].subtotal = carrito[pos].precio * carrito[pos].unidades;
    alertAgregarAlCarrito();
  } else {
		carrito.push({
			...producto,
			unidades: 1,
		});
    alertAgregarAlCarrito();
	}
	localStorage.setItem("carrito", JSON.stringify(carrito));
	renderizarCarrito(carrito);
}

const eliminarProducto = (e) => {
	carrito = carrito.filter((producto) => producto.id !== parseInt(e.target.id));
	localStorage.setItem("carrito", JSON.stringify(carrito));
	mostrarCarrito();
  renderizarCarrito()
};

function renderizarCarrito() {
    carritoDOM.innerHTML = "";
    let totalCompra = 0; 
    carrito.forEach((producto) => {
      let cardCarrito = document.createElement("div")
      cardCarrito.innerHTML += `
          <div class="card_en_carrito">
              <h5>${producto.modelo}</h5> 
              <p>$${producto.precio} Cantidad: ${producto.unidades} Total: $${producto.precio * producto.unidades}</p>
              <button class="boton-eliminar" id="${producto.id}">Eliminar</button>
          </div>
          `
          totalCompra += producto.subtotal;

          carritoDOM.appendChild(cardCarrito)
    })

    const botonEliminar = document.querySelectorAll(`.boton-eliminar`);
    botonEliminar.forEach((btn) =>  
        btn.addEventListener("click", eliminarProducto)
    );

    // carritoDOM.innerHTML += `<div class="precioTotal">Total de la compra: $${totalCompra}</div>`;
    // carritoDOM.innerHTML += `<button class="boton_finalizarcompra" id=comprar>Finalizar compra</button> <button class="botonvaciar_carrito" id=vaciar>Vaciar carrito</button>`

    // document.getElementById("vaciar").addEventListener("click", vaciarCarrito);
  
    // let botonComprar = document.getElementById("comprar")
    // botonComprar.addEventListener("click", finalizarCompra)

}


function vaciarCarrito() {
  carrito = []
  renderizarCarrito(carrito)
}

let botonCarrito = document.getElementById("botonCarrito")
botonCarrito.addEventListener("click", mostrarCarrito)

function mostrarCarrito() {
  let contenedorProductos = document.getElementById("contenedorProductos")
  carritoDOM.classList.toggle("ocultar")
  contenedorProductos.classList.toggle("ocultar")
}




function alertAgregarAlCarrito() {
    Toastify({
        text: "Agregado al carrito",
        duration: 1500,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(90deg, rgba(135,0,176,1) 0%, rgba(0,0,154,1) 79%, rgba(79,99,241,1) 100%)",
        },
        onClick: function(){}
      }).showToast();
}

function sinStock() {
    Toastify({
        text: "Zapatilla sin stock",
        duration: 1500,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(90deg, rgba(135,0,176,1) 0%, rgba(0,0,154,1) 79%, rgba(79,99,241,1) 100%)",
        },
        onClick: function(){}
      }).showToast();
}

function compraRealizada() {
    Toastify({
        text: "Muchas gracias por la compra, vuelva pronto!",
        duration: 1500,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(90deg, rgba(135,0,176,1) 0%, rgba(0,0,154,1) 79%, rgba(79,99,241,1) 100%)",
        },
        onClick: function(){}
      }).showToast();
}

function carritoVacio() {
  Toastify({
      text: "No hay productos para comprar",
      duration: 1500,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(90deg, rgba(135,0,176,1) 0%, rgba(0,0,154,1) 79%, rgba(79,99,241,1) 100%)",
      },
      onClick: function(){}
    }).showToast();
}

//FORMULARIO

const boton = document.querySelector('.form__enviar');
boton.addEventListener('click', function(event) {
  event.preventDefault();
})