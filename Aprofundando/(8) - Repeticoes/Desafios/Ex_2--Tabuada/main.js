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
    var txtarea = document.createElement("textarea");
    txtarea.style.height = "165px";
    acontece.innerHTML="";

    for(var i=0; i<=10; i++){
      res = tabuada*i;
      txtarea.value += `${tabuada} X ${i} = ${res}\n`;
    }
    acontece.appendChild(txtarea);
  }
}