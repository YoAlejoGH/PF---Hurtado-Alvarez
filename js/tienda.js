//Tienda

//Variables

const itemsContainer = document.getElementById("itemsContainer");
const mostrarCarro = document.getElementById("mostrarCarro");
const carritoContenido = document.getElementById("carritoContenedor");

//Array de carrito

let carrito = [];

//Creo las tarjetas que contienen los elementos

items.forEach((item) => {
    let contenido = document.createElement("div");
    contenido.className = "tarjetaItem";
    contenido.innerHTML = `
        <img src="${item.img}">
        <h3>${item.nombre}</h3>
        <p class="precio">$${item.precio}</p>
    `;

    itemsContainer.append(contenido);

    //Boton

    let comprar = document.createElement("button");
    comprar.className = "btnComprar";
    comprar.innerText = "Comprar";

    contenido.append(comprar);

    //Eventos

    comprar.addEventListener("click", () => {
        carrito.push({
            id : item.id,
            nombre: item.nombre,
            precio: item.precio,
        });
        console.log(carrito);
    });
});

