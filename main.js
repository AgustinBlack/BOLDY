const zapatillas = []

class Zapatilla{
    constructor(marca,modelo,precio,stock){
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.stock = stock
    }
}

let adidas1 = new Zapatilla("Adidas",`Adidas All Star`,16000,5)
let adidas2 = new Zapatilla("Adidas",`Adidas Forum Low`,14000,9)
let adidas3 = new Zapatilla("Adidas",`Adidas Ozelia`,19000,4)
let adidas4 = new Zapatilla("Adidas",`Adidas X9000L4`,21000,2)

let nike1 = new Zapatilla("Nike",`Nike Air Jordan 1`,17000,6)
let nike2 = new Zapatilla("Nike",`Nike Air Max 97`,19000,2)
let nike3= new Zapatilla("Nike",`Nike air Max Bolt`,21000,5)
let nike4 = new Zapatilla("Nike",`Nike Air Force 1 High 07`,25000,8)

let puma1 = new Zapatilla("Puma",`Puma Slipstream`,13000,9)
let puma2 = new Zapatilla("Puma",`Puma Trc Blaze`,16000,4)
let puma3 = new Zapatilla("Puma",`Puma CA Pro Classic`,18000,6)
let puma4 = new Zapatilla("Puma",`Puma Baquet Classic XXI`,17000,2)

let newBalance1 = new Zapatilla("New Balance",`Beige New Balance 550`,15000,2)
let newBalance2 = new Zapatilla("New Balance",`Beige New Balance 530`,19000,7)
let newBalance3 = new Zapatilla("New Balance",`Beige New Balance 990 V5`,14000,3)
let newBalance4 = new Zapatilla("New Balance",`Beige New Balance 373`,20000,4)

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

for (const zapatilla1 of zapatillas) {
    let cardDatos1 = document.createElement("div");
    cardDatos1.innerHTML = `<h3> ${adidas1.modelo}</h3>
                            <h5> ${adidas1.marca}</h5>
                            <p> ${adidas1.precio}</p>
                            <p> ${adidas1.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos1);
}

for (const zapatilla2 of zapatillas) {
    let cardDatos2 = document.createElement("div");
    cardDatos2.innerHTML = `<h3> ${adidas2.modelo}</h3>
                            <h5> ${adidas2.marca}</h5>
                            <p> ${adidas2.precio}</p>
                            <p> ${adidas2.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos2);
}

for (const zapatilla3 of zapatillas) {
    let cardDatos3 = document.createElement("div");
    cardDatos3.innerHTML = `<h3> ${adidas3.modelo}</h3>
                            <h5> ${adidas3.marca}</h5>
                            <p> ${adidas3.precio}</p>
                            <p> ${adidas3.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos3);
}

for (const zapatilla4 of zapatillas) {
    let cardDatos4 = document.createElement("div");
    cardDatos4.innerHTML = `<h3> ${adidas4.modelo}</h3>
                            <h5> ${adidas4.marca}</h5>
                            <p> ${adidas4.precio}</p>
                            <p> ${adidas4.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos4);
}

for (const zapatilla5 of zapatillas) {
    let cardDatos5 = document.createElement("div");
    cardDatos5.innerHTML = `<h3> ${nike1.modelo}</h3>
                            <h5> ${nike1.marca}</h5>
                            <p> ${nike1.precio}</p>
                            <p> ${nike1.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos5);
}

for (const zapatilla6 of zapatillas) {
    let cardDatos6 = document.createElement("div");
    cardDatos6.innerHTML = `<h3> ${nike2.modelo}</h3>
                            <h5> ${nike2.marca}</h5>
                            <p> ${nike2.precio}</p>
                            <p> ${nike2.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos6);
}

for (const zapatilla7 of zapatillas) {
    let cardDatos7 = document.createElement("div");
    cardDatos7.innerHTML = `<h3> ${nike3.modelo}</h3>
                            <h5> ${nike3.marca}</h5>
                            <p> ${nike3.precio}</p>
                            <p> ${nike3.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos7);
}

for (const zapatilla8 of zapatillas) {
    let cardDatos8 = document.createElement("div");
    cardDatos8.innerHTML = `<h3> ${nike4.modelo}</h3>
                            <h5> ${nike4.marca}</h5>
                            <p> ${nike4.precio}</p>
                            <p> ${nike4.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos8);
}

for (const zapatilla9 of zapatillas) {
    let cardDatos9 = document.createElement("div");
    cardDatos9.innerHTML = `<h3> ${puma1.modelo}</h3>
                            <h5> ${puma1.marca}</h5>
                            <p> ${puma1.precio}</p>
                            <p> ${puma1.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos9);
}

for (const zapatilla10 of zapatillas) {
    let cardDatos10 = document.createElement("div");
    cardDatos10.innerHTML = `<h3> ${puma2.modelo}</h3>
                            <h5> ${puma2.marca}</h5>
                            <p> ${puma2.precio}</p>
                            <p> ${puma2.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos10);
}

for (const zapatilla11 of zapatillas) {
    let cardDatos11 = document.createElement("div");
    cardDatos11.innerHTML = `<h3> ${puma3.modelo}</h3>
                            <h5> ${puma3.marca}</h5>
                            <p> ${puma3.precio}</p>
                            <p> ${puma3.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos11);
}

for (const zapatilla12 of zapatillas) {
    let cardDatos12 = document.createElement("div");
    cardDatos12.innerHTML = `<h3> ${puma4.modelo}</h3>
                            <h5> ${puma4.marca}</h5>
                            <p> ${puma4.precio}</p>
                            <p> ${puma4.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos12);
}

for (const zapatilla13 of zapatillas) {
    let cardDatos13 = document.createElement("div");
    cardDatos13.innerHTML = `<h3> ${newBalance1.modelo}</h3>
                            <h5> ${newBalance1.marca}</h5>
                            <p> ${newBalance1.precio}</p>
                            <p> ${newBalance1.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos13);
}

for (const zapatilla14 of zapatillas) {
    let cardDatos14 = document.createElement("div");
    cardDatos14.innerHTML = `<h3> ${newBalance2.modelo}</h3>
                            <h5> ${newBalance2.marca}</h5>
                            <p> ${newBalance2.precio}</p>
                            <p> ${newBalance2.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos14);
}

for (const zapatilla15 of zapatillas) {
    let cardDatos15 = document.createElement("div");
    cardDatos15.innerHTML = `<h3> ${newBalance3.modelo}</h3>
                            <h5> ${newBalance3.marca}</h5>
                            <p> ${newBalance3.precio}</p>
                            <p> ${newBalance3.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos15);
}

for (const zapatilla16 of zapatillas) {
    let cardDatos16 = document.createElement("div");
    cardDatos16.innerHTML = `<h3> ${newBalance4.modelo}</h3>
                            <h5> ${newBalance4.marca}</h5>
                            <p> ${newBalance4.precio}</p>
                            <p> ${newBalance4.stock}</p>`;
    document.getElementById("contenedor__cards").append(cardDatos16);
}