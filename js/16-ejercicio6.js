'use strict'

/*
Hacer un programa que nos diga si un numero es par o impar
1.ventana prompt
2.si no es valido que nos pida d enuevo el numero
*/
var numero = parseInt(prompt("introduce un numero"));
while(isNaN(numero)){
    numero = parseInt(prompt("introduce de nuevo numero"));
}
if(numero<=0){

    alert("introduce de nuevo el numero");
  
  }
  
  else{
  
    if(numero%2==0){
  
                   alert("El numero es par");
  
    }
  
    else{
  
                   alert("El numero es impar");
  
  }
  
  }

