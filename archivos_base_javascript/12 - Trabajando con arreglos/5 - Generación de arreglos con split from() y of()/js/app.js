"use strict"

//********************************
//*** Generación de arreglos con split() from() y of()


//--- split()

// var mensaje = "ceviche, tacos, pasta";

// var platillos = mensaje.split(', ');

//--- Array.from(); // traemos información del nombre de una clase y su etiqueta 
/*En este caso , lo que necesitamos es el contenido de las etiquetas "p"
*/
var platillosHTML = Array.from(document.querySelectorAll('.platillos p'))

var platillos = platillosHTML.map( platillo => platillo.textContent ) // Con map(). realizamos una iteración para obtener los valores

//--- Array.of();

var platillos = Array.of("ceviche", "tacos", "pasta");

console.log(platillos)