'use strict'

//Bucle while (mientras que)
//menos estricto e indefinido

var year = 2019;


/*while(year <= 2050){
	//ejecuta esto
	console.log("Estamos en el año:" +year);
    year++;
}
*/
while(year != 1990){
	//ejecuta esto
	console.log("Estamos en el año:" +year);
	if (year == 2000) {
		//para el bucle
        break;
	}
    year--;
}

//Do while

var years = 30;

do{
	alert("SOLO CUANDO SEA DIFERENTE A 20");
	years--;
}while(years>25)