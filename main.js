function checkPassword() {
  var x = document.getElementById("pwd").value;

  if(x === "B2AVANZADO"){
  //document.getElementById("pwdCont").remove();
    window.location.href = "https://sites.google.com/view/portafoliodocenteb2/inicio";
  }
  else{
    alert("Contraseña incorrecta.");
  }
}
