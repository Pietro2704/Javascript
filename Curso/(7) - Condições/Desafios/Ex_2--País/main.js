var btn = document.querySelector("#selecionar")

btn.addEventListener("click", Verificar)

function Verificar(){
  var paises = document.querySelector("#selectPais")
  var paisSelecionado = paises.value;

  var res = document.querySelector("#res")

  switch(paisSelecionado){
    
    case "brasil":
      res.innerHTML = "Brasil foi selecionado";
      break;

    case "estadosunidos":
      res.innerHTML = "Estados Unidos foi selecionado";
      break;

    case "franca":
      res.innerHTML = "França foi selecionada";
      break;

    case "alemanha":
      res.innerHTML = "Alemanha foi selecionada";
      break;

    case "japao":
      res.innerHTML = "Japão foi selecionado";
      break;

    default:
      res.innerHTML = "Opção inválida";
      break;
  }
}