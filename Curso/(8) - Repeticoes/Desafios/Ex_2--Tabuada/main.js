var btn = document.querySelector("#enviar");
btn.addEventListener("click",Verificar);

function Verificar(){
  var tabuada = parseInt(document.querySelector("#numero").value);
  
  if(isNaN(tabuada)){
    alert("[ERRO] Verifique os dados e tente novamente");
  }
  else{

    var msg = document.querySelector("#msg");
    msg.innerHTML = `Tabuada do ${tabuada}:`

    var acontece = document.querySelector("#acontece");
    acontece.innerHTML="";

    var txtarea = document.createElement("textarea");
    txtarea.disabled = true;
    txtarea.style.height = "165px";

    for(var i=0; i<=10; i++){
      res = tabuada*i;
      txtarea.value += `${tabuada} X ${i} = ${res}\n`;
    }
    acontece.appendChild(txtarea);
  }
}