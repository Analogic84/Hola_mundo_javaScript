'use strict'
//DOM-Document objet model

function cambiaColor(color){
    caja.style.background = color;
}

//Conseguir con un ID concreto

var caja = document.getElementById("micaja");
//var caja = document.querySelector("#micaja");


caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "pink";
caja.style.padding = "30px";
caja.style.color = "white";
caja.className = "hola hola2";


//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');
var seccion =  document.getElementById("#miseccion");
//console.log(todosLosDivs);
//todosLosDivs.forEach((valor, indice) => {
var valor;
for(valor in todosLosDivs){ 
    if(typeof todosLosDivs[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
     } 

 }

/*var todosLosDivs = document.getElementsByTagName('div');

var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
contenidoEnTexto.style.background = "pink";

console.log(contenidoEnTexto);
*/

//conseguir elementos por su clase CSS
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
   if(divsRojos[div].className == "rojo"){
       divsRojos[div].style.background = "red";
   }
}

