'use strict'

//condicional IF
//instrucciones para comparar algo
//si a es igual,dif,mayor que, a B entonces haz algo
//si pasa esto ejecuta esto

var edad= 72;
var nombre = "David Suarez";

/*
/7operadores relacionales
Mayor:>
Menor:<
Mayor o igual:>=
Menor o igual:<=
Igual:=
Distinto:!=
*/
if(edad>=18) {
    //Es mayor de edad
    console.log(nombre+ " tiene " +edad+" años,es mayor de edad");

    if(edad<=33) {
    //Es mayor de edad
    console.log("todavia eres millenial");
   }else if (edad>=70){
   	console.log("eres anciano");
   }else{
   	  console.log("ya no eres millenial");
   }
}else{
    //Es menor de edad
    console.log(nombre+ " tiene " +edad+" años,es MENOR de edad");

}


/*
//operadores logicos
AND(y): &&
OR(O): ||
Negación: !   
*/
//si coloco 2029 se cumple la condcion completa en or())
var year = 2019;

//neagación
if (year != 2016) {
	console.log("El año no es 2016 relmente es: "+year);

}
//AND
if (year>= 2000 && year <= 2020 && year != 2019) {
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era post moderna");
}

//OR
if (year == 2009 || (year == 2019 && year == 2029)){
	console.log("El año acaba en 9");
}else{
	console.log("Año no registrado");
}