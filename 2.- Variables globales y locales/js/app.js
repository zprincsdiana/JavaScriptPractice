"use strict"
var nombre = "Diana"; // variable global o local
//LET ES UN CONTENEDOR -palabra reservada - contenedor de bloque
console.log(nombre)
function saludo() {
    let nombre = "Shawn";
    console.log(nombre);
    let edad = 26;
    console.log(edad)
}
saludo();
//BUENAS PRACTICAS:
/*UTILIZAR VAR DE FORMA GLOBAL VARIABLES DE BLOQUES O VARIABLES LOCALES 
SE PUEDE UTILIZAR LA PALABRA LET
 */
//CONSTANTES : valor que no va a cambiar a lo largo del programa 
const pi = 3.1416;
/*NUMEROS - SE UTILIZAN SIN COMILLAS */
//Se utiliza la funcion Number() para convertir los números que está en comilla en número 
var edad2 = 26;
var cantidad = "100";
var nuevaCantidad = Number(cantidad);
parseInt()
parseFloat()
//Strings - Comillas dobles " o comillas simples '
//Se puede utilizar ambos para texto
var bebida = "agua";
var comida = 'ceviche';
var instruccion = "El platillo se llama 'ceviche' ";
var edad3 = 24;
var edadtxt=String(edad3);
//BOOLEANOS
var activo = true;
var estado = Boolean(10<9);
//Fecha
var fecha = new Date(); // Se pueden utilizar los getDay, setDay etc, funciones propias de la clase date 
//USO DE SIMBOLOS:;
//Tipo de dato que son de valor único e inmutable , siempre se va a mantener de esa Forma. Se puede asignar un nombre o una variable
var simbolo1 = Symbol();
var ambiente = Symbol('DEV');
//Se genera un dato único en el programa

/* JSON -> JavaScript Object Notation */
var persona = {
    nombre: 'Diana',
    twitter :'zPrinCsDiana' 
};

var personas =[
    {nombre : 'Carlos', twitter: 'CarlosCespedes1'},
    {nombre : 'Maria', twitter: 'Maria2'},
    {nombre : 'Alex', twitter: 'Alex2'},
    persona
]
//Si necesitamos utilizar esos datos y enviarlos a un server o almacenarlos localmente, se convierte los datos utilizando el objeto Json 
//Lo que realiza esta funcion es convertir todo el JSON en uan cadena de texto 
var personaJSON = JSON.stringify(persona);
//Recuperamos el valor convertido a un objeto JSON 
var nuevaPersona = JSON.parse(personaJSON);

