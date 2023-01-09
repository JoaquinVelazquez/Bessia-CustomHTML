const URLactual = window.location.pathname;
const texto = document.querySelectorAll('.andes-button__content');

if (URLactual !== "/") {
    texto['2'].style.filter = 'invert(1)';
    texto['3'].style.filter = 'invert(64%) sepia(84%) saturate(2361%) hue-rotate(357deg) brightness(98%) contrast(98%)';
}
