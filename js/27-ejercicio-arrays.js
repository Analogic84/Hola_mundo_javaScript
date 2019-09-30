'use strict'

/*
1.pida 6 numeros por pantalla y los meta en un array
2.Mostrar el array entero(todos sus elementos) en el cuerpo de la pagina y en la consola
3.Ordenarlo y mostrarlo
4.Invertir su orden y mostarlo
5:Mostrar cuanto elementos tiene el array
6.Busqueda de un valor introducido por el usuario,que nos diga si lo encuentra en su indice
(se valorara el uso de funciones)
*/

//var numeros = new Array(6);

function mostrarArray(elementos, textoCustom = ""){

    document.write("<h1>Contenido del array " +textoCustom+ "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>"); 
    });
    document.write("</ul>"); 
}
//pedir 6 numeros
var numeros = [];
for(var i = 0;i<=5; i++){
   // numeros[i] = parseInt(prompt("Introduce un numero", 0));
   numeros.push(parseInt(prompt("Introduce un numero", 0)));
}
//Mostrar en el cuerpo de la pagina
mostrarArray(numeros);
//array por la consola
console.log(numeros);
//ordenar y mostrar
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, 'ordenado');
//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'reverse');
//cuantos elementos tiene un array
document.write("<h1>El array tiene: " +numeros.length+ " numeros");
//busqueda
var busqueda = (parseInt(prompt("busca un numero", 0)));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion &&  posicion != -1){
    document.write("<hr><h1> ENCONTRADO </h1>");
    document.write("<h1> posicion de la busqueda: "+busqueda+ "</h1></hr>");
}else{
    document.write("<hr><h1> NO ENCONTRADO </h1>");

}

