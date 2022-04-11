"use strict"

//********************************
//*** Métodos búsqueda | Parte 1

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado;

// indexOf
// resultado = mensaje.indexOf("aprendiendo"); //Primera palabra


// lastIndexOf
//resultado = mensaje.lastIndexOf("aprendiendo"); //última palabra


// search:
//resultado = mensaje.search("aprendiendo");


// search | Expresión regular
resultado = mensaje.search(/ja/i); // REsult = -1 -> No encuentró ninguna coincidencia  - Pero cuando el caso es i como InCaseSensitive


console.log(resultado);