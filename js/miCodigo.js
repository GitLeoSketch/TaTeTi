
let jugador = [
  {jugador:1,jugara:""},
  {jugador:2,jugara:""}
];
let jugadorActual = jugador[0];

Let jugadaNumero = 0;
Let ganador = false;

let mensaje = document.querySelector("#overlay");

let jugo = 0;
let ultimoJugado = "";

inicializar();

function inicializar() {

  mensaje.innerHTML = "<h2>Nuevo juego</h2>";

  //document.querySelector("#overlay").addEventListener("click", quitarOverlay);
  document.querySelector("#cruz").setAttribute("style", "display: none");
  document.querySelector("#circulo").setAttribute("style", "display: none");
  document.querySelector("#pasar").setAttribute("style", "display: none");

  document.querySelector("#li1").addEventListener("click", seleccionoCuadro);
  document.querySelector("#li2").addEventListener("click", seleccionoCuadro);
  document.querySelector("#li3").addEventListener("click", seleccionoCuadro);
  document.querySelector("#li4").addEventListener("click", seleccionoCuadro);
  document.querySelector("#li5").addEventListener("click", seleccionoCuadro);
  document.querySelector("#li6").addEventListener("click", seleccionoCuadro);
  document.querySelector("#li7").addEventListener("click", seleccionoCuadro);
  document.querySelector("#li8").addEventListener("click", seleccionoCuadro);
  document.querySelector("#li9").addEventListener("click", seleccionoCuadro);



  // document.querySelector("#pasar").addEventListener("click", pasar);
  document.querySelector("#cruz").addEventListener("click", aplicarCruz);
  document.querySelector("#circulo").addEventListener("click", aplicarCirculo);
  document.querySelector("#nuevoJuego").addEventListener("click", nuevoJuego);
}
function pasar(){
if(jugo!=0){
  if(jugadorActual.jugador== 1){
    jugadorActual=jugador[1];
    console.log(jugadorActual);
    document.querySelector('h1').innerHTML = "Jugador 2 = "+jugadorActual.jugara
  }else{
    jugadorActual=jugador[0];
    console.log(jugadorActual);
    document.querySelector('h1').innerHTML = "Jugador 1 = "+jugadorActual.jugara
  }
  jugo=0;
}else{
  habilitarOverlay();
  mensaje.innerHTML =
  "<h2>Debe Jugar</h2>";
  setTimeout(() => {
    quitarOverlay()
  }, 1000);
}
 

}

function quitarOverlay() {
  document.querySelector("#overlay").setAttribute("style", "display: none");
  
}

function habilitarOverlay(){
  document.querySelector("#overlay").setAttribute("style", "");
}

function habilitarEleccion(){
  habilitarOverlay();
  mensaje.innerHTML =
  "<h2>Elija que jugará</h2>";
  // document.querySelector("#pasar").setAttribute("style", "display: none");
  document.querySelector("#nuevoJuego").setAttribute("style", "display: none");

  document.querySelector("#cruz").setAttribute("style", "");
  document.querySelector("#circulo").setAttribute("style", "");

  document.querySelector('h1').innerHTML = "Jugador 1"

}

function aplicarCruz() {
  jugador[0].jugara = "X";
  jugador[1].jugara = 'O';
  jugadorActual = jugador[0];
  console.log(jugadorActual);
  empezarJuego();
    
  
}
function aplicarCirculo() {
  jugador[1].jugara = "X";
  jugador[0].jugara = 'O';
  jugadorActual = jugador[0];
  console.log(jugadorActual);
    empezarJuego();


  
}
function nuevoJuego(){
  ganador= false;
  jugadaNumero = 0;
  jugo = 0;
  document.querySelector("#cruz").disabled = false;
  document.querySelector("#circulo").disabled = false;

  vaciarCuadros();
  habilitarEleccion();
}


function empezarJuego(){
  document.querySelector('h1').innerHTML = "Jugador 1 = "+jugadorActual.jugara;
  document.querySelector("#cruz").disabled = true;
  document.querySelector("#circulo").disabled = true;


  mensaje.innerHTML =
  "<h2>Comienza</h2>";

  

setTimeout(() => {
  quitarOverlay();
  document.querySelector("#nuevoJuego").setAttribute("style", "");
  // document.querySelector("#pasar").setAttribute("style", "");
  document.querySelector("#cruz").setAttribute("style", "display: none");
  document.querySelector("#circulo").setAttribute("style", "display: none");
}, 1000);

  
 

  
}

function vaciarCuadros() {
  for (i = 1; i < 10; i++) {
    document.querySelector("#li" + i).innerHTML = "";
  }
}

function seleccionoCuadro(event = () => {}) {
  if(jugo=== 0){
    let liId = "#" + event.target.id;
    console.log(jugadorActual.jugara);
      valorActual = document.querySelector(liId).innerHTML.trim();
    
      if (valorActual === "O" || valorActual === "X") {
        // alert("Ya jugó este cuadro");
        habilitarOverlay();
        mensaje.innerHTML =
        "<h2>Ya jugó este cuadro</h2>";
        setTimeout(() => {
          quitarOverlay()
        }, 1000);
        jugo =0;
       
      } else {
        document.querySelector(liId).innerHTML = jugadorActual.jugara;
        jugadaNumero ++ ;
        if(jugadorActual.jugara !== "") {
          setTimeout(() => {
            
            controloGanador();
            
            
          }, 500);
          
      if(ganador== false && jugadaNumero == 9){
          document.querySelector("#overlay").setAttribute("style", "");
              document.querySelector("#overlay").innerHTML =
                "<h2>Empate</h2>";
          }
          
          jugo =1;
        }
      }
      
  }
 
}

function controloGanador() {
  if (
    (document.querySelector("#li1").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li2").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li3").innerHTML === jugadorActual.jugara) ||
    (document.querySelector("#li4").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li5").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li6").innerHTML === jugadorActual.jugara) ||
    (document.querySelector("#li7").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li8").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li9").innerHTML === jugadorActual.jugara) ||
    (document.querySelector("#li1").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li4").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li7").innerHTML === jugadorActual.jugara) ||
    (document.querySelector("#li2").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li5").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li8").innerHTML === jugadorActual.jugara) ||
    (document.querySelector("#li3").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li6").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li9").innerHTML === jugadorActual.jugara) ||
    (document.querySelector("#li1").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li5").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li9").innerHTML === jugadorActual.jugara) ||
    (document.querySelector("#li3").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li5").innerHTML === jugadorActual.jugara &&
      document.querySelector("#li7").innerHTML === jugadorActual.jugara)
  ) {
    document.querySelector("#overlay").setAttribute("style", "");
    document.querySelector("#overlay").innerHTML =
      "<h2>Ganó Jugador " + jugadorActual.jugador + ".</h2>";
      document.querySelector("#pasar").disabled = true;
      ganador = true;
  }else{
    pasar();
  }
}
