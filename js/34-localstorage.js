'use strict'
//locastorage


//Comprobar disponibilidad del localstorage
if(typeof(Storage) !== 'undefined'){
    console.log("localstorage disponible");
}else{
    console.log("incompatible con localstorage");
}

//guardar datos en el navegador
localStorage.setItem("titulo", "Curso de Sympony de Victor robles");

//Recuperar elemento
document.getElementById("peliculas").innerHTML = (localStorage.getItem("titulo"));

//guardar objetos
var usuario = {
    nombre: "AnaLogic",
    email: "anita@ana.com",
    web: "duetoatlantic.netlyify.com"
}
localStorage.setItem("usuario" , JSON.stringify(usuario));

//Recuperar objeto

var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.getElementById("datos").append(userjs.web+" - "+userjs.nombre);

//borar elementos

//localStorage.removeItem("usuario");   (borar algo concreto)
localStorage.clear(); //borra todo