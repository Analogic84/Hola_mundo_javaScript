'use strict'

//plantillas de texto 

var nombre = prompt("INTRODUCE TU NOMBRE");
var apellidos = prompt(" INTRODUCE TUS ALPELLIDOS");

//var texto = " Mi nombre es: "+nombre+" <br/> Mis apellidos son: "+apellidos;

var texto =`
<h1>Hola que tal</h1>
<h3> Mi nombre es: ${nombre}</h3>
<h3>Mis apellidos son: ${apellidos}</h3>

`;
document.write(texto);