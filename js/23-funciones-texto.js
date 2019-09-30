'use strict'

//Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de Javascript de Victor R";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
     dato = texto1.toUpperCase();
     dato = texto2.toLowerCase();


//console.log(dato);

//Calcular la longitud de un texto
var nombre = "Ana Patricia Gómez";

//console.log(nombre.length);

//Concatenar- Unir  textos

//var textoTotal = texto1+ " " +texto2;
var textoTotal = texto1.concat(" "+texto2);

console.log(textoTotal)
