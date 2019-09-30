'use strict'
//Bom-Browser object model
function getBom(){
console.log(window.innerHeight);   //console.log(screen.width);
console.log(window.innerWidth);
console.log(window.location.href);
}

function redirect(url){
    window.location.href = url;
}
function abrirVentana(url){
    window.open(url, "","width=400,heigth=300");
}
getBom();