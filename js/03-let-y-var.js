'use strict'
//Pruebas con  y var
var numero = 40;
console.log(numero);//valor 40

if (true) {
	var numero = 50;
	console.log(numero);//valor 50


}
console.log(numero)//valor 50

//prueba con let
var texto = "curso js Ana Gómez";
console.log(texto);//valor js

if (true) {
	let texto = "curso laravel 5 victorrobles.web"
	console.log(texto);//valor laravel 5
}
console.log(texto);//valor js