const URLactual = window.location.pathname;
const contacto = document.querySelector('.header__searchbox-info p')
const texto_cart = document.querySelector('.andes-button__text')

if (URLactual == "/gz/cart/v2") {
    contacto.style.visibility = 'hidden';
    texto_cart.style.color = 'white';
}