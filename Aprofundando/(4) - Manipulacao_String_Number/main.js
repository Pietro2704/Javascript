    var nome = prompt("Qual o seu nome?")

    //var idade = prompt("Digite sua idade")

    //idade = Number(idade)

    var preco = prompt("Quanto você pagou no seu PC?") // Str: 8500.9

  // NODE -> //preco = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // R$ 8.500,90

    Number(preco) // Number: 8500.9

    preco = preco.toFixed(2).replace('.',',') // Number: 8500,90

    
    document.write(`Seu PC custou: R$ ` +preco)

    

    document.write(`Olá, <strong>${nome}</strong>. Seu nome tem ${nome.length} letras` +'<br>')

    
    document.write(`Nome em maiúsculo: ` + nome.toUpperCase() +'<br>')
    
    document.write(`Nome em minúsculo: ` + nome.toLowerCase() +'<br>')
    

  