
// js para tooltips bootstrap 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// CAMBIA EL COLOR DE LA NAVBAR CON EL SCROLL 
$(window).scroll(function() {
    if ($("#menu").offset().top > 120) {
        $("#menu").removeClass("bg-transparent");
        $("#menu").addClass("bg-dark");
    } else {
        $("#menu").removeClass("bg-dark");
    }
});

// mensjae de correo enviado al hacer click en boton de envio.
$(function(){
    $("#enviar").on("click", function(){
        alert("Correo electronico enviado con exito")
    });
});