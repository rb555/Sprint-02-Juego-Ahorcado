alert('Joven Padawan, con personajes de Star Wars entrenar deberás')
const palabras = ['han solo','darth vader','din djarin','leia','obi wan kenobi','kylo ren','chewbacca','ahsoka tano','boba fett', 'padme','luke skywalker'];
let oculta = "";
let adivina = "";
let intentos = 4;
document.getElementById("boton").addEventListener("click",comprobar)
comenzar();

function comenzar(){
  oculta = palabras[Math.floor(Math.random()*palabras.length)];
  for (var i = 0; i < oculta.length; i++) {
    adivina = adivina + "_ ";
  }
  document.getElementById("frase").innerHTML = adivina;
}
function comprobar(){
  let letra = document.getElementById("letra").value.toLowerCase();
  oculta = oculta.toLowerCase();
  let nueva = "";
  for (let i = 0; i < oculta.length; i++) {
    if (letra == oculta[i]){
      nueva = nueva + letra + " ";
    } else {
      nueva = nueva + adivina[i*2] + " ";
    }
  }

  if (nueva==adivina) {
    intentos--;
    document.getElementById("intentos").innerHTML = "El número de intentos es: " + intentos;
  }
  adivina = nueva;
  document.getElementById("frase").innerHTML = adivina;
  if (intentos==0) {
    alert("Entrenar deberás joven Padawan")
  }
  if (adivina.search("_")==-1 && intentos<= 4) {
    alert("Ganado has joven Padawan")
  }
  document.getElementById("letra").value="";
  document.getElementById("letra").focus();
}
