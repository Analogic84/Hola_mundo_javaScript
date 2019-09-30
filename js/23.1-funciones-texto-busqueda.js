'use strict'

/*Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de Javascript de Victor R curso";
var texto2 = "Es muy buen curso";
                //lastIndexOf() busca la ultima vez que esta esa palabra
                //search()- es un alias de indexOf
                //match() me devuelve un array con las palabras,coleccion de elementos
                //substr() busca la palabra desde donde le indique : var busqueda = texto1.substr(14, 5);
                //charAt() busca la letra en concreto de un string var busqueda = texto1.charAt(44);
                //startsWith() busca un texto de un string desde el cominezo y endsWith el final del string (true or false)
                //includes() busca la palabra y te da truo or false y tiene que ser escrita igual
var busqueda = texto1.match(/curso/g);
console.log(busqueda);
*/

//funciones de reemplazo
var numero = 444;
var texto1 = "Bienvenido al curso de Javascript de Victor R curso";
var texto2 = "Es muy buen curso";
                      //slice() nos permite separar un string o dar como resultado a partir del caracte que yo quiera slice(14, 22);
                      //split() para recortar las palabra y meterlas en un array ,util  para buscadores  (" ")espacio y mete cada palabra x separado
                      //trim(), quitar espacios por delante y detras sobrantes
var busqueda = texto1.replace("Javascript", "Symphony");
console.log(busqueda);