//Enlasar los elementos de htnl con jS

const btnSuma = document.querySelector("#btnSuma")
const btnRes = document.querySelector("#btnRes")
const btnMulti = document.querySelector("#btnMulti")
const btnDiv = document.querySelector("#btnDiv")

const divResultado = document.querySelector("#divResultado")

const numValor1 = document.querySelector("#numValor1")
const numValor2 = document.querySelector("#numValor2")


//funciones
function sumV(e){
    e.preventDefault(); //Evita recarga la pagina 
    op = Number(numValor1.value) + Number(numValor2.value) ;
    divResultado.innerHTML = "La suma es: "+ op;
}

function resV(e){
    e.preventDefault();
    op = Number(numValor1.value) - Number(numValor2.value) ;
    divResultado.innerHTML = "La Resta es: "+ op;
    
}

function multiV(e){
    e.preventDefault();
    op = Number(numValor1.value) * Number(numValor2.value) ;
    divResultado.innerHTML = "La Multiplicacion es: "+ op;
    
}

function divV(e){
    e.preventDefault();
    op = Number(numValor1.value) / Number(numValor2.value) ;
    divResultado.innerHTML = "La Division es: "+ op;
}

/*
  Generar eventos para los botonos
  Establecer los evento clic para los botones 
  y indicar 
*/

//Es recomendado dejar esto al final
btnSuma.addEventListener("click", sumV);
btnRes.addEventListener("click", resV);
btnMulti.addEventListener("click", multiV);
btnDiv.addEventListener("click", divV);
