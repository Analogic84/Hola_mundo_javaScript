'use strict'

/*Funciones anonimas
//Es una funcion que no tiene nombre
var pelicula = function(nombre){
return "la pelicula es: " +(nombre);
}
*/

//callbacks
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
     sumaYmuestra(sumar);
     sumaPorDos(sumar);
    return sumar;
}
sumame(5, 7, function(dato){
    console.log("la suma es :" ,dato);
    },
    function(dato){
        console.log("la suma por dos es: " ,(dato*2));
    });
    //la funcion flecha es sustituir la palabra function por flecha => y puedes quitar los parentesis
    //y al parametro se le pueden quitar los parentesis a no ser que sean dos o mas
    