
let jugadorname;
let ia;
let Juego = ["Piedra","Papel","Tijera"];
let eleccion;
let puntu = 0;
let puntupc=0;
const piedra = document.getElementById("piedra")
const papel = document.getElementById("papel")
const Tijera = document.getElementById("tijera")


function jugar(jugador) {
    let eleccionjugador = document.getElementById("eleccion")
let eleccionnpc = document.getElementById("eleccionpc")
ia = Math.floor(Math.random()*3)
if (jugador === ia) {
    document.getElementById("resultado").innerText = ("Empate, el jugador eligió " + Juego[jugador] + " ("+jugadorname+") y el bot eligió " + Juego[ia]);
eleccionjugador.src= "imagenes/"+jugador+".jpg";
eleccionnpc.src=  "imagenes/"+jugador+".jpg";
}

// Tijera vs Papel
else if (jugador === 1 && ia === 2) {
    document.getElementById("resultado").innerText = ("Pierde jugador: " + Juego[jugador] + " ("+jugadorname+") pierde contra " + Juego[ia]);
eleccionjugador.src= "imagenes/"+jugador+".jpg";
eleccionnpc.src=  "imagenes/"+ia+".jpg";
    puntupc++
}
else if (jugador === 2 && ia === 1) {
    document.getElementById("resultado").innerText = ("Gana jugador: " + Juego[jugador] + " ("+jugadorname+") vence a " + Juego[ia]);
eleccionjugador.src= "imagenes/"+jugador+".jpg";
eleccionnpc.src=  "imagenes/"+ia+".jpg";
    puntu++

}

// Papel vs Piedra
else if (jugador === 0 && ia === 1) {
    document.getElementById("resultado").innerText = ("Pierde jugador: " + Juego[jugador] + " ("+jugadorname+") pierde contra " + Juego[ia]);
eleccionjugador.src= "imagenes/"+jugador+".jpg";
eleccionnpc.src=  "imagenes/"+ia+".jpg";
    puntupc++

}
else if (jugador === 1 && ia === 0) {
    document.getElementById("resultado").innerText = ("Gana jugador: " + Juego[jugador] + " ("+jugadorname+") vence a " + Juego[ia]);
eleccionjugador.src= "imagenes/"+jugador+".jpg";
eleccionnpc.src=  "imagenes/"+ia+".jpg";
    puntu++

}

// Piedra vs Tijera
else if (jugador === 0 && ia === 2) {
    document.getElementById("resultado").innerText = ("Gana jugador: " + Juego[jugador] + " ("+jugadorname+") vence a " + Juego[ia]);
eleccionjugador.src= "imagenes/"+jugador+".jpg";
eleccionnpc.src=  "imagenes/"+ia+".jpg";
    puntu++
}
else if (jugador === 2 && ia === 0) {
    document.getElementById("resultado").innerText = ("Pierde jugador: " + Juego[jugador] + " ("+jugadorname+") pierde contra " + Juego[ia]);
eleccionjugador.src= "imagenes/"+jugador+".jpg";
eleccionnpc.src=  "imagenes/"+ia+".jpg";
    puntupc++
}

document.getElementById("puntuacion").innerText = puntu;
document.getElementById("puntuacionpc").innerText = puntupc
if(puntu === 3)
{
   let mostrar = document.getElementById("elpepe");
mostrar.style.display = "none"; 

let mostrartrofeo = document.getElementById("trofeo");
mostrartrofeo.style.display = "block";
document.getElementById("textogana").innerText = "EL GANADOR ERES TU "+jugadorname;
document.getElementById("textogana2").innerText = "Humillaste al Bot";
let ultimo = document.getElementById("reiniciar");
ultimo.style.display = "Block";
}

else if(puntupc === 3)
{
     let mostrar = document.getElementById("elpepe");
mostrar.style.display = "none"; 
    let mostrartrofeo = document.getElementById("trofeo");
mostrartrofeo.style.display = "block";
document.getElementById("textogana").innerText = "EL GANADOR ES EL BOT";
document.getElementById("textogana2").innerText = "EL BOT TE GANO";
let ultimo = document.getElementById("reiniciar");
ultimo.style.display = "Block";
}
}

function iniciarJuego()
{
    jugadorname = document.getElementById("nombre").value;
    if(jugadorname.trim() =="")
    {
window.alert("Porfavor ingresar nombre")
location.reload();
    }
    else if(jugadorname.toLowerCase() == "elmer"){
window.alert("Que buen nombre!")
let mostrar = document.getElementById("elpepe");
mostrar.style.display = "Block";
    }
    else{
let mostrar = document.getElementById("elpepe");
mostrar.style.display = "Block";
    }

    let oculta = document.getElementById("nombrediv");
    oculta.style.display = "none"
}

function mostrarreglas(){
    let sussy = document.getElementById("mostrar");
    if(sussy.style.display == "none")
        {
sussy.style.display = "Block";
}
else
    {
sussy.style.display = "none";
}
}
//PIEDRA
let lapiedra;
lapiedra = document.getElementById("imgpiedra");

piedra.addEventListener("mouseover", () =>{
lapiedra.style.display = "Block";  
})

piedra.addEventListener("mouseleave", () =>{    
lapiedra.style.display = "none";  
})



//PAPEL
let elpapel;
elpapel = document.getElementById("imgpapel");

papel.addEventListener("mouseover", () =>{
elpapel.style.display = "Block";  
})

papel.addEventListener("mouseleave", () =>{    
elpapel.style.display = "none";  
})

//Tijera
let latijera;
latijera = document.getElementById("imgtijera");

Tijera.addEventListener("mouseover", () =>
    {
latijera.style.display = "Block";  
})

Tijera.addEventListener("mouseleave", () =>{    
latijera.style.display = "none";
})