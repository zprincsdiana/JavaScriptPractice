"use strict"
//FUNCIONES

function saludar() {
    var saludo =" Holis ^^ ";
    console.log(saludo);
    return saludo;
}
saludar();

//Parámetros de una función
function sal(nom,edad) {
    console.log("Hola " , nom);
    console.log("Edad " , edad);
    var res = nom + " tiene "+ edad;
    return res;
}
//sal("Diana",26);
var msj = sal("Diana",26);
console.log(msj);

//Hay funciones en las que puede o no recibir valor 
//Pero se puede pre iniciarlizar dentro de la funcion : 
//Por ejemplo , en este caso si no se envía ningún valor en la funcion contar, se toma el valor inicializado en el parámetro
//Pero si se envía un valor para la función, entonces toma el valor enviado en la función

function count(cantidad = 20) {
    console.log('Total:',cantidad);
}

count(150);


/**
 * PARAMETROS DE TIPO REST-- opcion para poder recibir "n" cantidad de parámetros
 * Envío de parámetros a una funcion en la cuál no sabes la cantidad de data que te enviarán , entonces se coloca un ... <- delante del nombre del parámetro que va a recibir como valor 
 */

function cocinar(...params) {
    console.log("Más ingredientes ->",params);
    console.log("Tipo de dato ->",typeof(params));
}

cocinar("Pollo","Tomate","Arroz","Frijoles","Pescado","Chile");


/*
 * SPREAD : Opción para poder enviar "n" cantidad de parámetros 
 */

 function cook(ing1,ing2,ing3){
     console.log("Ingrediente 1 ",ing1);
     console.log("Ingrediente 2 ",ing2);
     console.log("Ingrediente 3 ",ing3);
 }

 //El SPREAD Se declara en la invocación de la función
 var ingredienteSBase = ["Pollo","Tomate","Holis"];
 cook(...ingredienteSBase,"Arrocito");


 /**
  * funcion anónima 
  * Permite no asociar un nombre a un conjunto de instrucciones sin asociarlo
  * funcion aislada reutilizable 
  */
 /*
 (

    function () {
        var mensaje = "Hola AGAIN";
        console.log(mensaje);
    }

 )()
*/

var saludar = function(nombre){
    var mensaje = "HOla Again "+nombre;
    return mensaje;
}

//CALLBACKS ->FUNCIONES COMO PARÁMETROS

function calcular(datoA,datoB,sumarCB, restarCB) {
    var suma = datoA+datoB;
    var restar = datoA-datoB;
    sumarCB(suma);
    restarCB(restar);
}

calcular(3,2,function (result) {
    console.log("Suma",result);
},function (result) {
    console.log("Resta",result);
})   //Un callback espera una respuesta o un parámetro de regreso

/*ARROW- FUNCION ARROW, FAT ARROW O LAMBDA funcion con flechas => - Lo que retorna es lo quye va después de la flecha
*Se usa para búsqueda en arreglos o iteraciones de datos
*/
var saludo = name => "Holis " + name; //Revisar video   
console.log(saludo("Diana"));

var sum = cant =>cant+10;
console.log("ARROW CON 1 PARÁMETRO "+sum(20));

var calc = (d1,d2)=>d1+d2;
console.log("ARROW CON 2 PARÁMETRO "+calc(30,15));

var generar = (dat1,dat2)=>{
    var dat3 = 10;
    return dat1+dat2+dat3;
}
console.log("ARROW CON Funcion "+generar(20,30));


//THIS

