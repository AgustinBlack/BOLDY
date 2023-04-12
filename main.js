const zapatillas = []

class Zapatilla{
    constructor(marca,modelo,precio,stock,id){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
        this.id = id;
    }
}

let adidas1 = new Zapatilla("Adidas",`Adidas All Star`,16000,5,1)
let adidas2 = new Zapatilla("Adidas",`Adidas Forum Low`,14000,9,2)
let adidas3 = new Zapatilla("Adidas",`Adidas Ozelia`,19000,4,3)
let adidas4 = new Zapatilla("Adidas",`Adidas X9000L4`,21000,2,4)

let nike1 = new Zapatilla("Nike",`Nike Air Jordan 1`,17000,6,5)
let nike2 = new Zapatilla("Nike",`Nike Air Max 97`,19000,2,6)
let nike3= new Zapatilla("Nike",`Nike air Max Bolt`,21000,5,7)
let nike4 = new Zapatilla("Nike",`Nike Air Force 1 High 07`,25000,8,8)

let puma1 = new Zapatilla("Puma",`Puma Slipstream`,13000,9,9)
let puma2 = new Zapatilla("Puma",`Puma Trc Blaze`,16000,4.10)
let puma3 = new Zapatilla("Puma",`Puma CA Pro Classic`,18000,6,11)
let puma4 = new Zapatilla("Puma",`Puma Baquet Classic XXI`,17000,2,12)

let newBalance1 = new Zapatilla("New Balance",`Beige New Balance 550`,15000,2,13)
let newBalance2 = new Zapatilla("New Balance",`Beige New Balance 530`,19000,7,14)
let newBalance3 = new Zapatilla("New Balance",`Beige New Balance 990 V5`,14000,3,15)
let newBalance4 = new Zapatilla("New Balance",`Beige New Balance 373`,20000,4,16)

zapatillas.push(adidas1, adidas2, adidas3, adidas4, nike1, nike2, nike3, nike4, puma1, puma2, puma3, puma4, newBalance1, newBalance2, newBalance3, newBalance4)

console.log(zapatillas)

// // PROCESO PARA FILTRAR POR MARCA

// let marcaElegida = prompt("Ingrese la marca que busca (Adidas, Nike, Puma o New Balance)")
// const marcaFiltrada = zapatillas.filter((zapatilla) => zapatilla.marca === marcaElegida);
// console.log(marcaFiltrada)

// // FUNCION QUE SUMA EL PRECIO DE LAS ZAPATILLAS QUE ELEGIS

// let primerPrecio = parseInt(prompt("Ingrese el valor de las primeras zapatillas"))
// let segundoPrecio =parseInt(prompt("Ingrese el valor de las segundas zapatillas:"))
// console.log("El valor de su compra es de" , primerPrecio + segundoPrecio)

//AGREGANDO DE INFORMACION A LAS CARDS

const contenedorCards = document.querySelector("#contenedor__cards");

function mostrarProductos(productos){

    productos .forEach(p => {
    const card = document.createElement("div");

    card.innerHTML = `
                        <div class="zapatillas__cards">
                            <h3>${p.modelo}</h3>
                            <h5>${p.marca}</h5>
                            <p>${p.precio}</p>
                            <p>${p.stock}</p>
                            <button id="${p.id}">Compar producto</button>                         
                        </div>
                    `
    contenedorCards.appendChild(card);
    });
}

mostrarProductos(zapatillas)