'use strict'

/*
un programa que muestre todos los numeros divisores de un numero introducido en un prompt
*/


var n1 = parseInt(prompt("Escribe un número", 1));
var i;
for (i=1;i <= n1/1; i++) {
if (n1 % i == 0) {
document.write(i,", ");
}
}
