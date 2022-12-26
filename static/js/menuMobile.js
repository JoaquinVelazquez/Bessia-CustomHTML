flechas = document.querySelectorAll(".nav-list .nav-tools-list--vertical__item img");
subcategorias = document.querySelectorAll(".nav-list .nav-tools-list--vertical__item .subcategorias");

flechas.forEach(function (value, i) {
  flechas[i].addEventListener("click", function(){
    subcategorias[i].classList.toggle("invisible");
    flechas[i].classList.toggle("rotacion");
  });
});