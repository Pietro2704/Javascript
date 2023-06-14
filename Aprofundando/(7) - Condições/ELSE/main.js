var vel = 80
var limit_via = 80

console.log(`A velocidade do carro está em ${vel} KM/H`);

if (vel<=limit_via){
  console.log("O carro está no limite da via!!!")
}
else{
  console.log(`O carro está a ${vel} sendo que o limite da via é de ${limit_via} KM/H`)
}

vel = 100

console.log(`Agora o carro está a ${vel} KM/H`)