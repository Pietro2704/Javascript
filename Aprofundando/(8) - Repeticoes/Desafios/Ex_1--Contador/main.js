var btn = document.querySelector("#enviar");
btn.addEventListener("click",Verificar);

function Verificar(){
  var msg = document.querySelector("#msg");
  var acontece = document.querySelector("#acontece");
  
  var inicio = document.querySelector("#inicio").value;
  var fim = document.querySelector("#fim").value;
  var pule = document.querySelector("#pular").value;
  
  if(inicio.length == 0 || fim.length == 0){
    msg.innerHTML = "Impossível contar..."
    alert("[ERRO] Verifique os dados e tente novamente");
  }else{

    if(pule.length == 0){
      pule = 1;
    }

    pule = Number(pule);
    inicio = Number(inicio);
    fim = Number(fim);

    acontece.innerHTML = "";
    msg.innerHTML = `Contando...`;

    if(inicio<fim){

      for(var i = inicio; i<=fim; i+=pule){
        acontece.innerHTML += `${i}\t\u{1F449}`;
      }acontece.innerHTML += `\u{1F3c1}`;

    }
    else if(inicio>fim){

      for(var i = inicio; i>=fim; i-=pule){
        acontece.innerHTML += `${i}\u{1F449}\t`;
      }acontece.innerHTML += `\u{1F3c1}`;
    }
    else{
      msg.innerHTML = ``;
      alert("O início e o fim não podem ser os mesmos números");
    }
  }
}
