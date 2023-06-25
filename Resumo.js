/*

// console.log('bem vindo ao curso');

// console.log('se vc achou isso, vc eh programador');
// padrão: camelCase
// let posso alterar o valor, mas const eh contante entt não pode fazer alteração
// tipos primitivos: Referencia[str,number,boolean,undefined,null] e Valores

let nome = 'Pietro';
let idade=20;
let altura=175;
console.log(nome,idade,altura);

const valorIngressoSemana=12
const valorIngressoFds=20
let valorIngresso=30
valorIngresso=10

let name='Enzo'; // str
let age=15; // number
let passouAno=true; // boolean
let surname ; // Undefined
let corPagina = null; // Redefinir um valor
typeof age // saída eh (number)

//classe

let pessoa = {
    nome: 'Pietro',
    sobrenome: 'Rosolia',
    idade: 20,
    altura: 1.75,
    peso: 70
}
console.log(pessoa)

//Arrays


let familia = ['Ricardo','Andrea','Enzo']
console.log(familia)
console.log(familia[2])

//função
// verbo + substantivo


let corSite = 'Azul';
function resetaCor(){
    corSite='';
}
console.log(corSite)
resetaCor()
corSite = 'Vermelho'
console.log(corSite)

//Diferentes Tipos de Função


function dizerNome(){
    console.log('Pietro')
}
dizerNome();

function potencia(valores){
    return valores*2
}
console.log(potencia(99));

//Operadores Aritméticos
//Operadores de Atribuição
//Operador de Comparação
//Operador Logicos
//Operador Bitwise


let salario=15
console.log(salario+salario)
console.log(salario-salario)
console.log(salario*salario)
console.log(salario/salario)
console.log(salario**salario)
let idadeIrmao = 15
console.log(idadeIrmao)
console.log(++idadeIrmao)
console.log(idadeIrmao++)
console.log(idadeIrmao)

*/


var hoje = new Date();
var diaSem = hoje.getDay();

switch (diaSem) {
    case 0:
        console.log("Domingo");
        break;

    case 1:
        console.log("Segunda-feira");
        break;

    case 2:
        console.log("Terça-feira");
        break;

    case 3:
        console.log("Quarta-feira");
        break;

    case 4:
        console.log("Quinta-feira");
        break;

    case 5:
        console.log("Sexta-feira");
        break;

    case 6:
        console.log("Sábado");
        break;

    default:
        console.log("[ERRO]");
        break;


}
