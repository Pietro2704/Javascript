var amigo = {
  nome: 'José',
  sexo: 'M',
  peso: 69.8,

  engordar(peso){
    this.peso+= peso;
  },

  emagrecer(peso){
    this.peso-=peso;
  }

}

console.log(amigo);

amigo.engordar(11);
console.log(amigo);

amigo.emagrecer(25);
console.log(amigo);