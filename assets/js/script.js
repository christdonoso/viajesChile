

// CAMBIA EL COLOR DE LA NAVBAR CON EL SCROLL 

$(window).scroll(function() {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-dark");
    } else {
        $("#menu").removeClass("bg-dark");
    }
});

