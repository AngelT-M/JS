const respuesta = document.querySelector("#pRespuesta") 
const btnVerificar = document.querySelector("#btnVerificar")
const nota = document.querySelector("#numNota")

console.log("hola llegaste a este archivo")

function verificarNota(e){
    console.log("Funcion verifiar nota")
    e.preventDefault();
    let mensaje="";
    if (Number(nota.value)>=70 ){
        mensaje = "Aprobado (Gano el examen)"
    }
    else{
        mensaje = "Reprobado (Perdio el examen)  "
    }
    respuesta.innerHTML = mensaje;

}







//Establecer evento a utuiizar 
btnVerificar.addEventListener("click", verificarNota)