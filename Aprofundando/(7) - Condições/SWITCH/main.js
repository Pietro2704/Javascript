var limit_via = 40

if(limit_via<30){
  console.log(`Uma via abaixo de 30 é sacanagem`)
}
else if (limit_via % 2 == 0){

  switch(limit_via){
    case 30:
      console.log(`Esta é uma via local`)
      break

    case 40:
      console.log(`Esta é uma via coletora`)
      break

    case 60:
      console.log(`Esta é uma via arterial`)
      break

    case 80:
      console.log(`Esta é uma via de transito rápido`)
      break
    
    default:
      console.log(`Esta é uma rodovia`)
      break
  }

}
else{
  console.log(`Tem uma placa na via sinalizando que a velocidade máxima da via é de ${limit_via} KM/H`)
}
