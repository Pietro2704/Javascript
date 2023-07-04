function inVetor(num){

  if(vetor.indexOf(num) !== -1){
    return true;
  }
  else{
    return false;
  }
}

function VerMaior(vetor){
  var maior = vetor[0];
  for(var i=1; i<vetor.length; i++){
    if(vetor[i]>maior){
      maior = vetor[i];
    }
  }
  return maior;
}

function VerMenor(vetor){
  var menor = vetor[0];
  for(var i=1; i<vetor.length; i++){
    if(vetor[i]<menor){
      menor = vetor[i];
    }
  }
  return menor;
}

function SomaValores(vetor){
  var som = vetor[0];

  for(var i = 1; i<vetor.length; i++){
    som+=vetor[i];
  }
  return som;
}

function CalculaMedia(vetor){
  var soma = SomaValores(vetor);
  var media = soma / vetor.length;
  return media.toFixed(2);
}

var vetor = [];

var add = document.querySelector("#add");
add.addEventListener("click", Add);

function Add(){
  var num = parseInt(document.querySelector("#num").value);
  var txtarea = document.querySelector("#numeros");
  
  if(isNaN(num) || num <= 0 || num > 100){
    alert("[ERRO] Digite um número válido");
  }
  else{
    if(inVetor(num)){
      alert("[ERRO] Número já adicionado!")
    }
    else{
      vetor.push(num);
      txtarea.textContent = `${vetor.join("\n")}`
    }
  }
}


var btn = document.querySelector("#fim");
btn.addEventListener("click",Verificar);

function Verificar(){
  var msg = document.querySelector("#msg");
  
  var tamanho = vetor.length;
  var maior = VerMaior(vetor);
  var menor = VerMenor(vetor);
  var soma = SomaValores(vetor);
  var media = CalculaMedia(vetor);

  msg.innerHTML = `Tamanho do vetor: ${tamanho}<br>`;
  msg.innerHTML += `Maior valor: ${maior}<br>`;
  msg.innerHTML += `Menor valor: ${menor}<br>`;
  msg.innerHTML += `Soma de todos os valores: ${soma}<br>`;
  msg.innerHTML += `Média dos valores: ${media}<br>`;
}