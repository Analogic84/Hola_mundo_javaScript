'use strict '

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("introduzca su primer numero", 0));
var numero2 = parseInt(prompt("introduzca su segundo numero", 0));

document.write("<h1>De "+numero1+" a "+numero2+"los numeros que hay son estos:</h1>")
for(var i= numero1; i<= numero2; i++){
    document.write(i+"<br/>");
}








