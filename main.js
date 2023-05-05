const zapatillas = "./json/data.json"
const contenedorProductos = document.getElementById("contenedorProductos")

fetch(zapatillas)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log(datos);
    mostrarProductos(datos);
  })
  .catch((error) => console.log("Hubo un error"));


//BUSCADOR

let buscador = document.getElementById("buscador")
buscador.addEventListener("input", filtrar)

function filtrar(){
    let zapatillasFiltradas = zapatillas.filter(zapatilla => zapatilla.marca.includes(buscador.value))
    mostrarProductos(zapatillasFiltradas)
}

//CARDS

function mostrarProductos(arrayProductos) {
    let contenedor = document.getElementById("wrapper")
    contenedor.innerHTML = ""
    arrayProductos.forEach((producto) => {
      let card = document.createElement("div")
      card.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12')
  
      card.innerHTML = `
        <div class="card">
            <img src="${producto.image}" class="card-img-top" alt="...">
            <div class="card-body">      
                <h5 class="tituloProducto">${producto.modelo}</h5>
                <p class="card-title">${producto.marca}</p>
            </div>
            <ul class="list-group list-group-flush">
                <p class="list-group-item">Precio: $${producto.precio}</p>
                <p class="list-group-item">Quedan <span id=span${producto.id}>${producto.stock}</span> unidades</p>
            </ul>
            <div class="card-body">
                <button class="boton__card" id=${producto.id}>Agregar al carrito</button>
            </div>
        </div>
      `
      contenedor.appendChild(card)
  
      let boton = document.getElementById(producto.id)
      boton.addEventListener("click", agregarProductoAlCarrito) 
    })
}

mostrarProductos(zapatillas)

//CARRITO

let carritoDOM = document.getElementById("carrito")

function finalizarCompra() {
    compraRealizada()
    localStorage.removeItem("carrito")
    carrito = []
    renderizarCarrito(carrito)
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || []
renderizarCarrito(carrito)

function agregarProductoAlCarrito(e) {


    let posicionZapatilla = zapatillas.findIndex(producto => producto.id == e.target.id)
    let zapatillaBuscada = zapatillas.find(producto => producto.id === Number(e.target.id))
    
    if (zapatillas[posicionZapatilla].stock > 0) { 
        alertAgregarAlCarrito()
        let elementoSpan = document.getElementById("span" + e.target.id)
        zapatillas[posicionZapatilla].stock--
        elementoSpan.innerHTML = zapatillas[posicionZapatilla].stock    
      if (carrito.some(({ id }) => id == zapatillaBuscada.id)) {

            let pos = carrito.findIndex(producto => producto.id == zapatillaBuscada.id)
            carrito[pos].unidades++
            carrito[pos].subtotal = carrito[pos].precio * carrito[pos].unidades
      } else {

        carrito.push({
            id: zapatillaBuscada.id,
            modelo: zapatillaBuscada.modelo,
            precio: zapatillaBuscada.precio,
            unidades: 1,
            subtotal: zapatillaBuscada.precio
        })
      }
      localStorage.setItem("carrito", JSON.stringify(carrito))
      renderizarCarrito(carrito)
    } else {
        sinStock()
    }
}


function renderizarCarrito(arrayDeZapatillas) {
    carritoDOM.innerHTML = ""
    arrayDeZapatillas.forEach(({ modelo, precio, unidades, subtotal }) => {
        carritoDOM.innerHTML += `
                                <div class="card__en__carrito">
                                    <h5>${modelo}</h5> 
                                    <p>$${precio} Cantidad: ${unidades} Total: $${subtotal}</p>
                                </div>
                                `
    })
    carritoDOM.innerHTML += `<button class="boton__finalizar__compra" id=comprar>Finalizar compra</button>`
  
    let botonComprar = document.getElementById("comprar")
    botonComprar.addEventListener("click", finalizarCompra)
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
        duration: 3000,
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
        duration: 3000,
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
        duration: 3000,
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

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(respuesta => respuesta.json())
//   .then(info => console.log(info))
//   .catch(error => console.log("HUBO UN ERRORS"))