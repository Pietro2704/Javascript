var vel = 700
var limit_via = 80

console.log(`A velocidade do carro está em ${vel} e o limite da via é de ${limit_via} KM/H`);

if (vel<limit_via){
  console.log(`O carro está abaixo do limite de velocidade`)
}
else if(vel==limit_via){
  console.log("O carro está no limite da via!!!")
}
else{
  console.log("O carro está muito rápido!!!")
}
