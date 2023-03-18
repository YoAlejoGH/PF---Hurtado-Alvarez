//Tienda

//Variables

const itemsContainer = document.getElementById("itemsContainer");
const mostrarCarro = document.getElementById("mostrarCarro");
const carritoContenido = document.getElementById("carritoContenedor");
const cantidadItemsCarrito = document.getElementById("carritoContador");
const contadorProductos = document.getElementById("contador-productos");

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
        <p>Cantidad: ${item.cantidad}</p>
    `;

    itemsContainer.append(contenido);

    //Boton

    let comprar = document.createElement("button");
    comprar.className = "btnComprar";
    comprar.innerText = "Comprar";

    contenido.append(comprar);

    //Eventos

    comprar.addEventListener("click", () => {

        //Constante que me busque si al dar click el ID sea igual, el some me devuelve un true o false
        const repito = carrito.some((repitoItem) => repitoItem.id === item.id);

        if (repito === true){
            carrito.map((prod) => {
                if(prod.id === item.id){
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
            id : item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad: item.cantidad,
        });
        };
        console.log(carrito);
        carritoContador();
    });
});

