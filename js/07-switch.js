'use strict'

//Switch
//console.log("switch");
 
 var edad = 18;
 var imprime = "";
 switch(edad){
     case 18:
         imprime = "Acabas de cumplir la mayoría de edad";
     break;
     case 25:
         imprime = "ya eres un adulto";
     break;  
     case 40:
         imprime = "crisis de los 40";
     break;
     case 75:
         imprime = "ya eres un anciano";
     break;
     default:
         imprime = "tu edad es neutra";
     break;
   }
   console.log(imprime);  