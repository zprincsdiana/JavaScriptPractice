"use strict"

//********************************
//*** Eventos del mouse -- Cuando se trabaja directamente el evento en JavaScript, se coloca el clicl y no onclick
//div class="boton"


const boton = document.querySelector('.boton');

boton.addEventListener('click', function () {
    console.log("El boton se ha pulsado");
})

boton.addEventListener('mouseover', function () {
    console.log("El mouse esta sobre el botón");
})

boton.addEventListener('mouseout', function () {
    console.log("El mouse esta fuera del botón");
})

boton.addEventListener('mousemove', function () {
    console.log("El evento mousemove esta en acción");
})