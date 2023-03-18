const pintarCarrito = () => {
    //Header del carrito
    carritoContenido.innerHTML = ""; //Limpio para que no me repita
    carritoContenido.style.display = "flex"; //Agrego esto para mostrar el carro
    const headerCarrito = document.createElement("div");
    headerCarrito.className = "header-carrito";
    headerCarrito.innerHTML = `
        <h1 class="header-carrito-titulo">Productos: </h1> 
    `;
    carritoContenido.append(headerCarrito);

    const btnCarrito = document.createElement("h2");
    btnCarrito.innerText = "❌";
    btnCarrito.className = "btn-carrito-exit";
    headerCarrito.append(btnCarrito);

    //Boton de ocutal
    btnCarrito.addEventListener("click", () => {
        carritoContenido.style.display = "none";
    });

    //Body carrito

    carrito.forEach((item) => {
        let contenidoCarrito = document.createElement("div");
        contenidoCarrito.className = "contenido-carrito";
        contenidoCarrito.innerHTML = `
            <div class="nombre-item">
                <h3>${item.nombre}</h3>
            </div>
            <div class="precio-item">
                <p>$${item.precio}</p>
            </div>
            <span class="restar"> - </span>
            <div class="cantidad-item">
                <p>Cantidad: ${item.cantidad}</p>
            </div>
            <span class="sumar"> + </span>
            <div class="total-item">
                <p>Total: ${item.cantidad * item.precio}</p>
            </div>
        `;
        carritoContenido.append(contenidoCarrito);

        //Les creo una variable a suamr y restar
        let restar = contenidoCarrito.querySelector(".restar");
        let sumar = contenidoCarrito.querySelector(".sumar");

        restar.addEventListener("click", () => {
            if(item.cantidad !== 1){
                item.cantidad --;
                pintarCarrito();
                guardoLocal();
            }
        });
        sumar.addEventListener("click", () => {
            if(item.cantidad < sumar){
                item.cantidad ++;
                pintarCarrito();
                guardoLocal();
            } else {
                alert("No hay mas productos");
            };
            
        });

        //Creo la x del eliminar item
        let eliminarItem = document.createElement("span");
        eliminarItem.innerText = "❌";
        eliminarItem.className = "eliminar-item";
        contenidoCarrito.append(eliminarItem);

        eliminarItem.addEventListener("click", elimiarItemCarrito);
    });

    //Footer carrito

    //Creamos el calculador de la suma de los precios con un acumulador
    const totalPrecio = carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0);
    const totalCompra = document.createElement("div");
    totalCompra.className = "total-contenedor";
    totalCompra.innerHTML = `Total a pagar: $ ${totalPrecio}`;
    carritoContenido.append(totalCompra);
};

//Evento para ver el carro

mostrarCarro.addEventListener("click", () =>{
    pintarCarrito();
});

//Le pido que busque el ID de los elementos que hay en el carrito

const elimiarItemCarrito = () => {
    const encontrarID = carrito.find((elemento) => elemento.id);
    //Filtro la busqueda para que me devuelva los elementos que no tengan el ID que no se quiere eliminar
    carrito = carrito.filter((carritoId) => {
        return carritoId !== encontrarID;
    });

    carritoContador();
    guardoLocal();
    pintarCarrito();
};

const carritoContador = () => {
    cantidadItemsCarrito.style.display = "flex";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    contadorProductos.innerText = carrito.length;

    cantidadItemsCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoContador();
