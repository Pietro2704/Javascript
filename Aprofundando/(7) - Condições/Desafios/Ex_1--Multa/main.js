var verificar = document.querySelector('#verifica')

verificar.addEventListener("click", Calcular)

function Calcular(){
  var vel = (document.querySelector("#vel")).value
  vel = Number(vel)
  
  var res = document.querySelector("#res")

  if(vel>60){
    res.innerHTML = "<p></p>"
  }
}
