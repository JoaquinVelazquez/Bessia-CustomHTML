(function() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://iili.io/HjA0qva.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();
  function faviconIn(){
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';link.rel = 'shortcut icon';
    link.href = 'https://iili.io/HjA0qva.png';
    document.getElementsByTagName('head')[0].appendChild(link)
  };
  
  setTimeout(faviconIn,1000);

const URLactual = window.location.pathname;
const contacto = document.querySelector('.header__searchbox-info p')
const texto_cart = document.querySelector('.andes-button__text')

if (URLactual == "/gz/cart/v2") {
    contacto.style.visibility = 'hidden';
    texto_cart.style.color = 'white';
}
