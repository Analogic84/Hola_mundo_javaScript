'use strict'

/*Arrays,arreglos,matrices
es una coleccion de tipos de datos, valores que puede tener una variable,colccion de datos
agrupados
*/

var nombre = "Ana Gómez";
var nombres = ["Ana Gomez ", "Carlos Gomez ", "Arturo Sohrabi", "Dario Robles",52, true]

var lenguajes = new Array("PHP", "JS", "Java", "Go");
/*
//console.log(nombres);
//console.log(lenguajes);
//sacar un  numero de indice el elemento numero 2 contamos desde 0
console.log(nombres[2]);


//Colocando el numero del indice del array sacar un valor


var elemento = parseInt (prompt("Que elemento del array quieres??", 0));
if(elemento >= nombres.length){
     alert("Introduce el numero correcto que es menor que: " +nombres.length);

}else{
    alert("El usuario seleccionado es: " +nombres[elemento])
}
*/
document.write("<h1>Lenguajes de programacion 2019</h1>");
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
       document.write("<li>" +lenguajes[i]+ "</li>");
}

lenguajes.forEach((elemento, indice, arr)=>{
     console.log(arr);
     document.write("<li>" +indice+ " - " +elemento+ "</li>");
});
*/
//recorrer arrays:for in

for(let lenguaje in lenguajes){
     document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

/*Busquedas

var busqueda = lenguajes.find(function(lenguaje){
     return lenguaje == "PHP";
});
console.log(busqueda);
reducir codigo
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
console.log(busqueda);
*/
//busqueda en el index
//buscar una condcion concreta "some"
var precios = [10, 20, 50, 80, 12];
var busqueda = precios.some(precio => precio < 10);
console.log(busqueda);
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
//console.log(busqueda);

