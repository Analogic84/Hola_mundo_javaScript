'use strict'

window.addEventListener('load', function(){
       console.log("DOM cargado");

        var formulario =  document.getElementById("formulario");
        var box_dashed = document.querySelector(".dashed");
        box_dashed.style.display = "none";

        formulario.addEventListener('submit', function(){
            console.log("captura Evento submit");
        var nombre = document.getElementById("campo_nombre").value;
        var apellidos = document.getElementById("campo_apellidos").value;
        var edad = parseInt(document.getElementById("campo_edad").value);
        
        var sololetras;
        function soloLetras(e){
            key = e.keyCode || e.which;
            tecla = String.fromCharCode(key).toLowerCase();
            letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
            especiales = [8,37,39,46];
           
            tecla_especial = false
            for(var i in especiales){
                if(key == especiales[i]){
             tecla_especial = true;
             break;
                 } 
            }
            
            if(letras.indexOf(tecla)==-1 && !tecla_especial)
                return false;
                if(nombre.length  == 0 || nombre.length == null ){   
                    alert("introduce un nombre ");
                    return 0;
            }
                
        
         if(apellidos.length == 0 || apellidos.length == null ){   
                    alert("introduce un apellido");
                    return false;
                 }  
        
        if(edad == null || edad< 18 || isNaN(edad)){
                    alert("Debes ser mayor de edad");
                    return false;
                 }
             }
      

        box_dashed.style.display = "block";
        var datos_usuario = [nombre, apellidos, edad];

        var indice;
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
      
         })

})

//averiguar lenght investigar que el campo solo admita texto
//si nombre no existe buscar
 
