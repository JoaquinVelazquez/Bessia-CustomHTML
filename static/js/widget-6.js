const URLactual = window.location.pathname;
const texto = document.querySelectorAll('.ui-pdp-container__row--main-actions .andes-button__content');

if (URLactual !== "/") {
    $(document).ready(function () {
        texto['0'].style.filter = 'invert(1)';
        texto['1'].style.filter = 'invert(64%) sepia(84%) saturate(2361%) hue-rotate(357deg) brightness(98%) contrast(98%)';
      });
}

