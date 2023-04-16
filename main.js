const zapatillas = []

class Zapatilla{
    constructor(marca,modelo,precio,stock,id,image){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
        this.id = id;
        this.image = image;
    }
}

let adidas1 = new Zapatilla("Adidas",`Adidas All Star`,16000,5,1, './images/adidas-all-star.jpg')
let adidas2 = new Zapatilla("Adidas",`Adidas Forum`,14000,9,2, './images/Forum-Mid-GW2857.jpg')
let adidas3 = new Zapatilla("Adidas",`Adidas Ozelia`,19000,4,3, './images/adidas-ozelia.jpg')
let adidas4 = new Zapatilla("Adidas",`Adidas X9000L4`,21000,2,4, './images/adidas-x9000l4-blancas.jpg')

let nike1 = new Zapatilla("Nike",`Nike Air Jordan 1`,17000,6,5, './images/air-jordan-1.jpg')
let nike2 = new Zapatilla("Nike",`Nike Air Max 97`,19000,0,6, './images/air-max-97.jpg')
let nike3= new Zapatilla("Nike",`Nike Air Max Bolt`,21000,2,7, './images/air-max-bolt(1).jpg')
let nike4 = new Zapatilla("Nike",`Nike Air Force 1 High 07`,25000,8,8, './images/air-max-force-1-hich-07.jpg')

let puma1 = new Zapatilla("Puma",`Puma 19486201`,13000,9,9, './images/PUMA-19486201.jpg')
let puma2 = new Zapatilla("Puma",`Puma Trc Blaze`,16000,4,10, './images/puma-trc-blaze.jpg')
let puma3 = new Zapatilla("Puma",`Puma CA Pro Classic`,18000,6,11, './images/puma-ca-pro-classic.jpg')
let puma4 = new Zapatilla("Puma",`Puma Baquet Classic XXI`,17000,2,12, './images/puma-basket-classic-xxi.jpg')

let newBalance1 = new Zapatilla("New Balance",`Beige New Balance 550`,15000,2,13, './images/Beige-New-Balance-550.jpg')
let newBalance2 = new Zapatilla("New Balance",`Beige New Balance 530`,19000,7,14, './images/Beige-New-Balance-530.jpg')
let newBalance3 = new Zapatilla("New Balance",`Beige New Balance 990 V5`,14000,0,15, './images/Beige-New-Balance-990-V5.jpg')
let newBalance4 = new Zapatilla("New Balance",`Beige New Balance 373`,20000,4,16, './images/Beige-New-Balance-373.jpg')

zapatillas.push(adidas1, adidas2, adidas3, adidas4, nike1, nike2, nike3, nike4, puma1, puma2, puma3, puma4, newBalance1, newBalance2, newBalance3, newBalance4)

console.log(zapatillas)

//BUSCADOR

let buscador = document.getElementById("buscador")
buscador.addEventListener("input", filtrar)

function filtrar(){
    let zapatillasFiltradas = zapatillas.filter(zapatilla => zapatilla.marca.includes(buscador.value))
    mostrarProductos(zapatillasFiltradas)
}

//CARDS

// function mostrarProductos(productos){
//     const contenedorCards = document.querySelector("#contenedor__cards");
//     contenedorCards.innerHTML = "";
//     productos .forEach(p => {
//         const card = document.createElement("div");
//         card.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12')
//         card.innerHTML = `
//                             <div class="card">
//                                 <img src="${p.image}" class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                    <h5 class="card-title">${p.modelo}</h5>
//                                     <p class="card-text">${p.marca}</p>
//                                 </div>
//                                 <ul class="list-group list-group-flush">
//                                     <li class="list-group-item">$${p.precio}</li>
//                                     <li class="list-group-item">Cantidad: ${p.stock}</li>
//                                 </ul>
//                                 <div class="card-body">
//                                     <button class="boton__card" id="boton${p.id}">Agregar al Carrito</button>
//                                 </div>
//                             </div>`
//         contenedorCards.appendChild(card);
//     });

//     let boton = document.getElementById(id)
//     boton.addEventListener("click", agregarProductoAlCarrito)
// }
// mostrarProductos(zapatillas)

function renderizarProductos(arrayProductos) {
    let contenedor = document.getElementById("wrapper")
    contenedor.innerHTML = ""
    arrayProductos.forEach(({ modelo, marca, image, precio, stock, id }) => {
      let tarjetaProducto = document.createElement("div")
      tarjetaProducto.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12')
  
      tarjetaProducto.innerHTML = `
        <div class="card">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">      
                <h5 class="tituloProducto">${modelo}</h5>
                <p class="card-title">${marca}</p>
            </div>
            <ul class="list-group list-group-flush">
                <p class="list-group-item">Precio: $${precio}</p>
                <p class="list-group-item">Quedan <span id=span${id}>${stock}</span> unidades</p>
            </ul>
            <div class="card-body">
                <button class="boton__card" id=${id}>Agregar al carrito</button>
            </div>
        </div>
      `
      contenedor.appendChild(tarjetaProducto)
  
      let boton = document.getElementById(id)
      boton.addEventListener("click", agregarProductoAlCarrito)
    })
}

renderizarProductos(zapatillas)

//CARRITO

let carritoDOM = document.getElementById("carrito")

function finalizarCompra() {
    alert("Muchas gracias por su compra")
    localStorage.removeItem("carrito")
    carrito = []
    renderizarCarrito(carrito)
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || []
renderizarCarrito(carrito)

function agregarProductoAlCarrito(e) {

    let posicionProd = zapatillas.findIndex(producto => producto.id == e.target.id)
    let productoBuscado = zapatillas.find(producto => producto.id === Number(e.target.id))
    
    if (zapatillas[posicionProd].stock > 0) { 

        let elementoSpan = document.getElementById("span" + e.target.id)
        zapatillas[posicionProd].stock--
        elementoSpan.innerHTML = productos[posicionProd].stock    
      if (carrito.some(({ id }) => id == productoBuscado.id)) {

            let pos = carrito.findIndex(producto => producto.id == productoBuscado.id)
            carrito[pos].unidades++
            carrito[pos].subtotal = carrito[pos].precio * carrito[pos].unidades
      } else {

        carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.modelo,
            precio: productoBuscado.precio,
            unidades: 1,
            subtotal: productoBuscado.precio
        })
      }
      localStorage.setItem("carrito", JSON.stringify(carrito))
      renderizarCarrito(carrito)
    } else {
        alert(`La zapatilla ${productoBuscado.modelo} sin stock`)
    }
}


function renderizarCarrito(arrayDeProductos) {
    carritoDOM.innerHTML = ""
    arrayDeProductos.forEach(({ modelo, precio, unidades, subtotal }) => {
      carritoDOM.innerHTML += `<h3>${modelo} ${precio} ${unidades} ${subtotal}</h3>`
    })
    carritoDOM.innerHTML += `<button id=comprar>Finalizar compra</button>`
  
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