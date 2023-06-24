var btn = document.querySelector("#confirm");
btn.addEventListener("click", diasVividos);

function diasVividos() {
  var agora = new Date();

/*  
var diaAgora = agora.getDate();
var mesAgora = agora.getMonth();
var anoAgora = agora.getFullYear();
*/

  var nascimento = document.querySelector("#nascimento").value;
  var dataNascimento = new Date(nascimento);

/*
var diaNascimento = dataNascimento.getDate();
var mesNascimento = dataNascimento.getMonth();
var anoNascimento = dataNascimento.getFullYear();
*/

// a variável 'diferenca' conterá a diferença em milissegundos entre as duas datas.
  var diferenca = agora - dataNascimento; 

// Existem 1000 milissegundos em um segundo.
// Existem 60 segundos em um minuto.
// Existem 60 minutos em uma hora.
// Existem 24 horas em um dia.
  var diasVividos = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  var result = document.querySelector("#res");
  result.innerHTML = `Você viveu ${diasVividos} dias até agora.`;

}
