"use strict"
//IF 
var datoA = 10;
var datoB=20;
var result =" Sin datos"
if(datoA>datoB){
    result = "La condición se cumple";
}

console.log("El resultado es:", result);
//switch case 
var edad = 30;

switch (edad) {
    case 10:
            result ="La edad es 30 años"
        break;

    default:
        break;
}

//Ciclos - loops - Iteradores
/* 2 tipos : Ciclos definidos (sabemos cuantas veces se ejecutan) e Indefinidos Do .. while 
*/
var prod = 5;
for (let count = 0; count < prod; count++) {
    console.log("Producto #"+count);
    //debugger;
}

do {
    console.log("Producto vendido");
    prod--;
    //debugger;
    
} while (prod>=1);
