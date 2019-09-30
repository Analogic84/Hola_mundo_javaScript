'use strict'

//Eventos del raton: funcion que se ejecuta cunado sucede algo

window.addEventListener('load', () =>{

   function cambiaColor(){
       console.log("Me has dado click");

    var backg = boton.style.background;

    if(backg == "purple"){
          boton.style.background = "blue";
   }else{
    boton.style.background = "purple";
   }
   boton.style.padding = "10px";
   boton.style.border = "1px solid #ccc";
   return true;
 }

  var boton = document.getElementById("boton");
  //click
  boton.addEventListener('click', function(){
      cambiaColor();
      console.log(this);
      this.style.border = "10px solid grey";
  })

  //Mouse over
  boton.addEventListener('mouseover', function(){
    boton.style.background = "#ccc";
  })

  //Mouseout
  boton.addEventListener('mouseout', function(){
    boton.style.background = "white";
  })

  //Focus
  var input = document.getElementById("campo_nombre");
  input.addEventListener('focus', function(){
      console.log("[focus]Estas dentro del input");
  })

  //Blur
  input.addEventListener('blur', function(){
    console.log("[blur]Estas fuera del input");
  })   

  //Keydown
  input.addEventListener('keydown', function(event){
    console.log("[keydown]Pulsando esta tecla ", String.fromCharCode(event.KeyCode));

  })  

  //Keypress
  input.addEventListener('keypress', function(event){
    console.log("[keypress] tecla presionada", String.fromCharCode(event.KeyCode));

  })

  //Keyup
  input.addEventListener('keyup', function(event){
    console.log("[keyup] tecla soltada", String.fromCharCode(event.KeyCode));
  })


})
