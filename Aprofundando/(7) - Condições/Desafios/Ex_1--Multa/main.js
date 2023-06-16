var verificar = document.querySelector('#verifica')

verificar.addEventListener("click", Calcular)

function Calcular(){

  var vel = (document.querySelector("#vel")).value
  vel = Number(vel)
  
  var res = document.querySelector("#res")
  res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> km/h</p>`
  res.innerHTML+=`<p>Ainda está no limite permido da via</p>`

  if(vel>60){
    res.innerHTML = `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade</p>`
  
  }
  
}