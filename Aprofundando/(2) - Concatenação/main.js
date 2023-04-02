
var nome = prompt("Qual seu nome?");
    
while(nome===''){
  alert("COLOCA UM NOME AÍ NMRL!");
  nome = prompt("Qual seu nome?");
}
alert("Prazer, " +nome);

var n1 = prompt("Agora coloca um número");
n1=Number.parseFloat(n1); // Da pra colocar soh Number(n1)

confirm("Número escolhido foi: "+n1);

var n2 = prompt("Passa outro número:")
n2=Number(n2); // Desse Jeito

confirm("Número escolhido foi: "+n2);

var result = n1+n2;
alert("A soma de " +n1+ " + " +n2+ " = " +result);



