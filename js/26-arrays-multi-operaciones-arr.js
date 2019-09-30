'use strict'

/*array dentro de otro array
var categorias = ['terror', 'comedia', 'comedia'];
var peliculas =  ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

console.log(cine[0][1]);
console.log(cine[1][2]);
*/

//operaciones con arrays
var categorias = ['terror', 'comedia', 'comedia'];
var peliculas =  ['La verdad duele', 'La vida es bella', 'Gran torino'];

//ordenar arr
peliculas.sort();
//peliculas.reverse();
console.log(peliculas);

var cine = [categorias, peliculas];
/*
var elemento = "";
do{
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
}while (elemento != "ACABAR") {
    
}
//POP ELIMINA EL ULT ELMEENTO DEL ARRAY
//peliculas.pop();
console.log(peliculas);
*/

//eliminar elementos de array
var indice = peliculas.indexOf("Gran torino");
if(indice > -1){
   peliculas.splice(indice, 1);
}

//join convertir array a texto
 var peliculas_string = peliculas.join();
//console.log(peliculas_string);

//Converti string en array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(" , ");

//console.log(cadena_array);
