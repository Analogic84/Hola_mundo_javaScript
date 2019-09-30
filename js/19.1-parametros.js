'use strict'

//parametros
                                         //parametro opcional
function calculadora (numero1, numero2, mostrar = false){

    if(mostrar == false){
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " +(numero1-numero2));
        console.log("Multiplicacion: " +(numero1*numero2));
        console.log("Division: " +(numero1/numero2));
        console.log(mostrar);
        console.log("********************************");
    }else{
        document.write("Suma: " + (numero1+numero2)+"<br/>");
        document.write("Resta: " +(numero1-numero2)+"<br/>");
        document.write("Multiplicacion: " +(numero1*numero2)+"<br/>");
        document.write("Division: " +(numero1/numero2)+"<br/>");
        document.write(mostrar);
        document.write("********************************");

    }
 //return"Hola soy la calculadora!!";
}
calculadora(1, 4);
calculadora(2, 5, true);
//darle un numero que sea parametro
//calculadora(12, 8);
//calculadora(34, 2);
/*
for(var i = 1; i<= 10; i++){
    console.log(i)
    calculadora(i, 8);

}
*/
//parametros opcionales: son aquellos que no son obligatorios pasarles un resultado sino que ya vienen inicializados a algo por defecto

