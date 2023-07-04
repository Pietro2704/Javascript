function ParouImpar(numero=2){
  if(numero%2==0){
    return `${numero} é um número par`;
  }
  else{
    return `${numero} é um número Ímpar`;
  }
}
var res = ParouImpar();
console.log(res);


var variavel = function(x){
  return x*2;
}
console.log(variavel(2));


/*
function Fatorial(num){
  var aux = num-1;

  while(aux>0){
    num = num*aux;
    aux--;
  }
  return num;
}
*/

function Fatorial(num){
  // Fórmula: n! = n * (n-1)!;

  // n! = n * aux
  aux = num-1;

  // Exceção do fatorial (1! = 1)
  if(num == 1){
    return 1
  }
  // Senão..
  else{
    // O fatorial de um número, é o número multilpicado pelo fatorial dele mesmo menos um.
    // n! = n * (n-1)!
    return num * Fatorial(aux)
  }
}
console.log(Fatorial(4));


function Comprar(pedido, dinheiro){
  produtos = {'leite':3, 'manteiga': 2, 'cafe':2.5, 'chocolate':5}

  if(!(pedido in produtos)){ // Se não tiver o pedido em produtos
    var msg = "Não achei esse produto no estoque.";
    return msg;
    
  }else{
    var ValorPedido = produtos[pedido];
    if(ValorPedido > dinheiro){ // Se o valor do Pedido for maior que o dinheiro
      return `Não da pra comprar ${pedido}, ele custa ${ValorPedido} reais e você só tem ${dinheiro}`;

    }else{
      dinheiro-=ValorPedido;
      if(dinheiro<=0){ // Se não tiver sobrado troco
        return `O ${pedido} foi ${ValorPedido} reais e não sobrou porra nenhuma para gastar!!`;
  
      }else{
        return `O ${pedido} foi ${ValorPedido} reais. Ainda sobrou ${dinheiro} reais para gastar`;
      }
    }
  }
}
pedido = 'biscoito'
dinheiro = 10
tarefa = Comprar(pedido, dinheiro);
console.log(tarefa);


