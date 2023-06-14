var limit_via = 40

if(limit_via<30){
  console.log(`Uma via abaixo de 30 é sacanagem`)
}
else if (limit_via % 2 == 0){

  switch(limit_via){
    case 30:
      console.log(`É uma via local`)
      break

    case 40:
      console.log(`É uma via coletora`)
      break

    case 60:
      console.log(`É uma via arterial`)
      break

    case 80:
      console.log(`É uma via de transito rápido`)
      break
    
    default:
      console.log(`É uma rodovia`)
      break
  }

}
else{
  console.log(`Não é a velocidade do seu carro, mas o limite da via`)
}
