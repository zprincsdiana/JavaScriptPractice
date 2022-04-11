"use strict"

//********************************
//*** Métodos búsqueda | Parte 2

var mensaje = "Estoy aprendiendo JavaScript y estoy Aprendiendo mucho";

var resultado;

// match:
// resultado = mensaje.match(/aprendiendo/gi); // g : global  - i : incasesesitive (mayus y minus ) 


// substr:
// resultado = mensaje.substr(6,11); // inicia desde la posición que se indica y obtiene hasta la cantidad que se quiere


// substring:
//resultado = mensaje.substring(6,17); // inicia desde la posoción indicada y obtiene desde el inicio hasta posición que necesitamos 


// charAt:
 resultado = mensaje.charAt(0);


console.log(resultado);