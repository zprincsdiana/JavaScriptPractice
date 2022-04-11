"use strict"

//*** Temporizadores o timers
//********************************

// setInterval : Trabaja con la ejecución infinita del elemento cada determinado tiempo
// setTimeout : realiza una acción después del tiempo que hemos indicado , solamente 1 vez

//  var temporizador = setInterval(function () {
//      setColor();
//  }, 2000);


 setTimeout(function () {
     setColor();
 }, 3000);

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor() {
    clearInterval(temporizador)
}