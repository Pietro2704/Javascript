
var btn = document.querySelector("#enviar");

var resultado = document.querySelector("#res");

btn.addEventListener("click", enviar);

function enviar(){
  var idade = document.querySelector("#idade");
  idade = idade.value;
   if (idade<16){
     resultado.innerHTML = `<p>Você <strong>NÃO</strong> pode <strong>VOTAR</strong> e nem <strong>DIRIGIR</strong></p>`;
   }
   else if (idade>=16 && idade<18){
    resultado.innerHTML = `<p>Você <strong>PODE VOTAR</strong>, mas <strong>NÃO PODE DIRIGIR</strong></p>`;
   }
   else if (idade>=18 && idade<=69){
    resultado.innerHTML = `<p>Você é <strong>OBRIGADO À VOTAR</strong> e <strong>PODE DIRIGIR</strong></p>`;
   }
   else{
    resultado.innerHTML = `<p>Você <strong>PODE VOTAR</strong>, e se ainda conseguir, <strong>TAMBÉM PODE DIRIGIR</strong></p>`;
   }
}