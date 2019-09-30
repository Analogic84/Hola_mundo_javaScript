'use strict'

/*
tabla de multiplicar de un numero introducido por pantalla
*/

var n = parseInt(prompt("¿de que numero quieres la tabla de multiplicar?", 1));

document.write("<h1>Tabla del " +n+ "</h1>");

for (var i = 1; i <= 10;i++){
	
	document.write(i+" x "+n+" = "+(i*n) + "<br>");
}


//todas las tablas
for(var c = 1; c<= 10;c++){


document.write("<h1>Tabla del " +c+ "</h1>");

for (var i = 1; i <= 10;i++){
	
    document.write(i+" x "+c+" = "+(i*c) + "<br>");
}
}