'use strict';

//Fetch (ajax) y peticones as servicios / apis rest

var div_usuarios = document.getElementById("usuarios");
var div_profesora = document.getElementById("profesora");
var div_janet = document.getElementById("janet");

   getUsuarios()
      .then(data => data.json())
      .then(users => {
        listadoUsuarios(users.data)

        return getInfo();
       
     })

     .then(data =>{
          div_profesora.innerHTML = data;

        return getJanet();
    })

     .then(data => data.json())
     .then(user => {
        mostrarJanet(user.data);
     })



 function getUsuarios(){
        return fetch('https://reqres.in/api/users?page=2');
    }
       

function getJanet(){
    return fetch('https://reqres.in/api/users/2');
    }

function getInfo(){
    var profesora ={
    nombre: 'Ana' ,
    apellidos: 'Gomez Galindo',
    url: 'http://duetoatlantic.netlify.com'
    }
    return new Promise((resolve, reject) => {

        var profesora_string = "";
        
 setTimeout(function() {
         profesora_string = JSON.stringify(profesora);
            
        if(typeof profesora_string != 'string' ||  profesora_string == '') return reject('error ');

        return resolve(profesora_string);

    }, 3000);

})
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + " . " + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);
        
        document.querySelector(".loading").style.display = 'none';

     })
    }     

    
function mostrarJanet(user){
        console.log(user);
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML =  user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';

        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);

        document.querySelector("#janet .loading").style.display = 'none';

      };     
    