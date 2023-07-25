function searchExperience() {
    var term = document.getElementById('searchterm').value.toUpperCase();
    var experiences = document.getElementsByClassName('experience');
    for(var i = 0; i < experiences.length; i++) {
        if(experiences[i].id.toUpperCase().includes(term)) {
            document.getElementById(experiences[i].id).style.display = "";
        }
        else {
            document.getElementById(experiences[i].id).style.display = "none";
            console.log(experiences[i].id + " " + term);
        }
    }
}




/***************************************************************/
function acceder() {

  
    var array = document.cookie.split(";");
  
    for(var i =0; i<array.length; i++){
      
      var array2 = array[i].split(",");

      

      if ( document.getElementById('USUARIO').value == array2[0]){
        
        if ( document.getElementById('CONTRASEÑA_LOG').value == array2[1]){
          
         document.getElementById("botones1").style.display="none";
           /*document.getElementById("register-container").style.display="none";
          document.getElementById("body-container").style.display="flex";
          document.getElementById('invitado').innerHTML = array2[3];*/
          /*if(3 == array2[8]){
           document.getElementById("lista estudiantes").style.display="none";
            document.getElementById("notas").style.display="none";
          }*/
          return true;
        }
      }
    }
    alert("No existe esta cuenta");
    
    
  
  }



function check(){
    var email = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    var nomape = /^[a-z-A-Z\D]+$/;
    var fecha = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var contraseña = /^([a-z0-9]{1,8})$/;
    /*var x= document.getElementById("NIA").value;*/
    /*var dni = /^\d{8}[a-zA-Z]$/;*/
    /*var e = document.getElementById("rol-options");*/
    /*var f = document.getElementById("grado2");*/


    /*if (isNaN(x) || x.length != 9) {
      alert("NIA INCORRECTO! DEBE TENER EXACTAMENTE 9 DÍGITOS NUMÉRICOS");
      return false;
    } */

  var OK = email.exec(document.getElementById('EMAIL').value);
    if (!OK) {
      alert('EL EMAIL INTRODUCIDO ES INCORRECTO'); 
      return false;
    }

  var OK = nomape.exec(document.getElementById('NOMBRE').value);
    if (!OK) {
      alert("Nombre INCORRECTO!");
      return false;
  } 
  
  var OK = nomape.exec(document.getElementById('APELLIDOS').value);
    if (!OK) {
      alert("Apellido INCORRECTO!");
      return false;
  }

  var OK = fecha.exec(document.getElementById('FECHA_NACIMIENTO').value);
    if (!OK) {
      alert("Fecha INCORRECTA!");
      return false;
  }
  var OK = contraseña.exec(document.getElementById('CONTRASEÑA').value);
  if (!OK) {
    alert("Contraseña INCORRECTA!\n máximo 8 caracteres");
    return false;
  }

  /*var OK = dni.exec(document.getElementById('DNI').value);
  if (!OK) {
    alert("DNI INCORRECTO!");
    return false;  }*/

  /*if(e.options[e.selectedIndex].value == 0){
    alert("Debes seleccionar un Rol!");
    return false;
  }*/

  /*if(e.options[e.selectedIndex].value == 3){
    document.getElementById('grado').style.display="block";
    document.getElementById('grado2').style.display="block";

    if(f.options[f.selectedIndex].value!=0){
      document.getElementById('grado2').style.display="none";
      document.getElementById('grado').style.display="none";
      return myFunction();
    }
 
    alert("Debes seleccionar un grado!");
    return false;
  }*/ 

  return myFunction();
}

function myFunction(){
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked != true){
    alert("Debes aceptar los términos y condiciones!");
    return false;
  }
  var array = document.cookie.split(";");
  for(var i =0; i<array.length; i++){
    var array2 = array[i].split(",");
    if ( document.getElementById('EMAIL').value == array2[4]){
      alert("Ya existe una cuenta con ese correo");
      return false;
    }

    
  }
  


  
  var g = document.getElementById('interes');
  var user=document.getElementById('nombre_usuario').value;
 
  var key=document.getElementById('CONTRASEÑA').value;
  var name=document.getElementById('NOMBRE').value;
  var surname=document.getElementById('APELLIDOS').value;
  var email=document.getElementById('EMAIL').value;
  var birth=document.getElementById('FECHA_NACIMIENTO').value;
  
  var int=g.options[g.selectedIndex].value;

  /*alert("Hey");*/
  
  
  document.cookie=user+","+key+","+name+","+surname+","+email+","+birth+","+int+",expires=31 Dec 2022 23:59:59 GMT";
  
  return true;
}