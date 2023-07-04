
var mais = document.querySelector("#mais")
var menos = document.querySelector("#menos")
var vezes = document.querySelector("#vezes")
var dividido = document.querySelector("#dividido")

var resultado = document.querySelector("#result")

mais.addEventListener("click", Somar)
menos.addEventListener("click", Subtrair)
vezes.addEventListener("click", Multiplicar)
dividido.addEventListener("click", Dividir)

function Somar(){
  var n1 = Number(document.querySelector("#num1").value)
  var n2 = Number(document.querySelector("#num2").value)
  resultado.value = n1 + n2;
}

function Subtrair(){
  var n1 = Number(document.querySelector("#num1").value)
  var n2 = Number(document.querySelector("#num2").value)
  resultado.value = n1 - n2;
}

function Multiplicar(){
  var n1 = Number(document.querySelector("#num1").value)
  var n2 = Number(document.querySelector("#num2").value)
  resultado.value = n1 * n2;
}

function Dividir(){
  var n1 = Number(document.querySelector("#num1").value)
  var n2 = Number(document.querySelector("#num2").value)
  resultado.value = n1 / n2;
}