"use strict"

//********************************
//*** Iterando arreglos con forEach

var platillos = ["ceviche", "tacos", "pasta"];

platillos.forEach( platillo => console.log(platillo) ) // foreach(primero el dato, segundo el índice)
// platillos.forEach(element => {
//     console.log(platillos);
// });

platillos.forEach( (platillo, index , arr) => { 
    console.log(index, platillo , arr)
    }
)