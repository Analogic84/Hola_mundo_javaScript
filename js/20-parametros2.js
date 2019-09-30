'use strict'

//parametros REST y SPREAD
                                        //rest
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
   console.log("fruta1 : ", fruta1);
   console.log("fruta2 : ", fruta2);
   console.log(resto_de_frutas)

}

listadoFrutas("manzana" , "naranja" , "sandia" , "melon" , "pera" , "coco");

var frutas = ["manzana" , "naranja"];
              //spread
listadoFrutas(...frutas , "sandia" , "melon" , "pera" , "coco");
