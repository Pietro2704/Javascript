var btn = document.querySelector("#enviar");
btn.addEventListener("click",Verificar);

function Verificar(){
  var msg = document.querySelector("#msg");
  var acontece = document.querySelector("#acontece");
  
  var inicio = parseInt(document.querySelector("#inicio").value);
  var fim = parseInt(document.querySelector("#fim").value);
  var pule = parseInt(document.querySelector("#pular").value);
  
  if(isNaN(inicio) || isNaN(fim) || isNaN(pule)){
    alert("[ERRO] Verifique os dados e tente novamente");
  }else{

    msg.innerHTML = `Contando...`;
    
    acontece.innerHTML = "";
    for(var i = inicio; i<=fim; i+=pule){
      acontece.innerHTML += `${i}&copy;<br>`;
    }
    acontece.innerHTML += `FIM`;
  
   /*
   acontece.innerHTML = "";
    var i = inicio;
    while(i<=fim){
      acontece.innerHTML += `${i}&copy;<br>`;
      i+=pule;
    }
    acontece.innerHTML += `FIM`;
    */
  
    /*
    acontece.innerHTML = "";
    var i = inicio;
    do{
      acontece.innerHTML += `${i}&copy;<br>`;
      i+=pule;
    }while(i<=fim);
    acontece.innerHTML += `FIM`;
    */

  }
  
}
