'use strict'

//Operadores 
var numero1 = 7;
var numero2 = 12;
var operacion = numero1+numero2;

alert("El resultado de la operación es: "+operacion);


//Tipos de datos
var numero_entero = 44;
var cadena_texto = "Hola que tal";
var verdadero_o_falso = false;

//fucion number(); numero falso string lo concatena
//var numero_falso = "33";
//console.log(numero(numero_entero)+7);
//console.log(parseInt(numero_entero)+7);
//console.log(parsefloat(numero_entero)+7);
//un parseInt analiza una cadena y lo vuelve un entero
//Una cadena (string)puede ser cualquier texto dentro de comillas dobles o simples

var numero_falso = "33.4";

console.log(String(numero_entero)+4);
//detectar tipo de dato Typeof
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);