var numeros  = [5,3,1,7,9]; // numeros é um vetor de 5 elementos
console.log(`VETOR: `);
console.table(numeros); // Mostra em formato de tabela
console.log("\n")

numeros[8] = 2; // add o '2' como indice 8
console.log(`Add o valor '2' no índice 8:`);
console.table(numeros);
console.log("\n")

numeros.push(7); // Add o 7 na ultima posição
console.log(`Add o valor '7' na ultima posição:`);
console.table(numeros);
console.log("\n")

//console.log(numeros.length); // conta quantos elementos tem no vetor

numeros.pop() // Exclui o ultimo elemento do vetor
console.log(`Exclui o ultimo elemento do vetor:`);
console.table(numeros);
console.log("\n")

numeros.sort() // Organiza os índices e coloca os elementos em ordem crescente
console.log(`Organiza os índices e coloca os elementos em ordem crescente:`);
console.table(numeros);
console.log("\n")



// Lembre-se: Como foi add o numero 2 no indice 8, o vetor tem 8 indices.
          //  Foi mostrado apenas 5 índices, pois do 6 ao 8, os valores são 'undefined'



/*
// Loop para percorrer o vetor (Incluindo posiçoes vazias)

for(var pos=0; pos<numeros.length; pos++){
  console.log(`O índice ${pos} tem como valor ${numeros[pos]}`);
}
*/


// Loop para percorrer o vetor (Excluindo as posições vazias)
for(pos in numeros){
  console.log(`O índice ${pos} tem como valor ${numeros[pos]}`);
}console.log("\n")


// Buscar valor dentro do vetor

var buscarValor = 7;
var indiceValorBuscado = numeros.indexOf(buscarValor);

// Se não achar o valor, o indiceValorBuscado retorna '-1'

if(indiceValorBuscado !== -1){ 
  console.log(`O valor ${buscarValor} está no índice ${indiceValorBuscado}`); 
}else{
  console.log(`O valor ${buscarValor} não está nesse vetor`); 
}