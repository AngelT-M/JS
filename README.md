# JS 
los cuales contiene ejemplos de cómo utilizar JS (JavaScript)
Como utilizar las function, Const y eventos
> Gracia a estas instrucciones que nos dan podemos hacer que
> la página web interactúe con el usuario

## Ejemplo de codigo 
```
const  num1  =  document.querySelector("#num1")
const  num2  =  document.querySelector("#num2")
const  num3  =  document.querySelector("#num3")

const  boton  =  document.querySelector("#boton")
const  respuesta  =  document.querySelector("#respuesta")

function  clasificar(e){
e.preventDefault();

numMax  =  Math.max(Number(num1.value),Number(num2.value),Number(num3.value));
numMin  =  Math.min(Number(num1.value),Number(num2.value),Number(num3.value));
numMid  =  Number(num1.value)+Number(num2.value)+Number(num3.value)-numMin-numMax;
respuesta.innerHTML  =  numMax  +","+numMid+","+  numMin;}

boton.addEventListener("click", clasificar)
```
>En este bloque de código lo que hacemos es buscar cuál de los números  
>que ingreso el usuario son el mayor, el de en medio y el número menor 

<p align="center">
  <img src="https://pbs.twimg.com/profile_images/1924486286737285120/Hlec0UD_.jpg" width="180">
</p>


# Tecnologías utilizadas  

| Tecnologías | Descripción |
| ------------- |:-------------:|
| HTML | lenguaje estándar utilizado para estructurar y crear la base de cualquier página web mediante etiquetas. |
| CSS |lenguaje de diseño utilizado para definir la apariencia y presentación de los sitios web |
| JS | lenguaje de programación ligero, interpretado y orientado a objetos |