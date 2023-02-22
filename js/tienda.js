console.log("Hola Mundo, esta es la tienda");
alert("Bienvenido a la tienda, aqui podras encontrar las distintas opciones que tenemos para nuestros clientes");

const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

