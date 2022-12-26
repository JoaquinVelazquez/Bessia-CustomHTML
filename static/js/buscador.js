//Seleccionar elementos necesarios
const neumaticosForm = document.querySelector("#neumaticoForm");
const ancho = document.querySelector("#ancho");
const perfil = document.querySelector("#perfil");
const diametro = document.querySelector("#diametro");
const neumaticosBtn = document.querySelector("#neumaticosBtn");
const link = "https://www.shop.bessia.com.ar/listado/accesorios-vehiculos/neumaticos/";
const alerta = document.querySelector("#alerta");
const URLactual = window.location.pathname;
const componentWrapper = document.querySelectorAll(".component-wrapper");
const buscador = document.querySelector(".buscador-contenedor");

if (URLactual == "/") {
  setTimeout(function () {
    $(document).ready(function () {
      $(buscador).insertAfter($(componentWrapper[0]));
    });
  }, 1000);
}

neumaticosForm.addEventListener("click", function () {
  if (
    ancho.value !== "NULL" ||
    perfil.value !== "NULL" ||
    diametro.value !== "NULL"
  ) {
    neumaticosBtn.disabled = false;
    //Redireccionar al hacer click
    neumaticosBtn.onclick = function () {
      //Validar valores del input
      if (ancho.value == "NULL") {
        anchoValue = "";
      } else {
        anchoValue = "_SECTION*WIDTH_" + ancho.value + "-" + ancho.value;
      }

      if (perfil.value == "NULL") {
        perfilValue = "";
      } else {
        perfilValue =
          "_AUTOMOTIVE*TIRE*ASPECT*RATIO_" + perfil.value + "-" + perfil.value;
      }

      if (diametro.value == "NULL") {
        diametroValue = "";
      } else {
        diametroValue =
          "_RIM*DIAMETER_" + diametro.value + "-" + diametro.value;
      }

      window.location.href = redirect =
        link + anchoValue + perfilValue + diametroValue;
    };

    neumaticosBtn.value = "Buscar";
  } else {
    neumaticosBtn.value = "Ningún resultado";
  }
});