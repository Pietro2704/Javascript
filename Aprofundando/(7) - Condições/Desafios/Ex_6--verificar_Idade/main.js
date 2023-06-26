var hoje = new Date();

var verificar = document.querySelector("#enviar");
verificar.addEventListener("click", Verificar);

function Verificar(){

  var ano = document.querySelector("#dataNasc").value;
  var idade = hoje.getFullYear() - ano;
  var sexo = document.querySelector("#genero").value;

  var msg = document.querySelector("#msg");

  var imagem = document.querySelector(".imagem");
  imagem.style.width = "200px";
  imagem.style.height = "200px";
  imagem.style.margin = "0 auto";
  imagem.innerHTML = "";

  var img = document.createElement("img");
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  img.style.borderRadius = "50%";

  if(ano.length == 0 || ano>hoje.getFullYear()){
    alert("Verifique as respostas");

  }else if(sexo == 'masculino'){
    
    if(idade<=12) {
      msg.innerHTML = `<p>Detectamos um <strong>GAROTO</strong> com ${idade} anos</p>`;
      img.src = "https://i.pinimg.com/originals/24/f2/c2/24f2c2afd923a85e55bc72785561db7b.jpg";
      img.alt = "Foto de um garoto";
      imagem.appendChild(img);
    }
    else if(idade<=18){
      msg.innerHTML = `<p>Detectamos um <strong>MULEQUE</strong> com ${idade} anos</p>`;
      img.src = "https://thumbs.dreamstime.com/b/retrato-de-jovem-homem-bonito-com-aparelho-chaves-na-natureza-verde-182576804.jpg";
      img.alt = "Foto de um muleque";
      imagem.appendChild(img);
    }
    else if(idade<=30){
      msg.innerHTML = `<p>Detectamos um <strong>JOVEM</strong> com ${idade} anos</p>`;
      img.src = "https://img.freepik.com/fotos-premium/retrato-de-um-sorrindo-homem-jovem_53419-5764.jpg";
      img.alt = "Foto de um jovem";
      imagem.appendChild(img);
    }
    else if(idade<=60){
      msg.innerHTML = `<p>Detectamos um <strong>HOMEM</strong> com ${idade} anos</p>`;
      img.src = "https://img.freepik.com/fotos-gratis/homem-de-meia-idade-vestindo-encostado-em-um-fundo-colorido-enferrujado_150588-73.jpg";
      img.alt = "Foto de um homem";
      imagem.appendChild(img);
    }
    else{
      msg.innerHTML = `<p>Detectamos um <strong>IDOSO</strong> com ${idade} anos</p>`;
      img.src = "https://nsaude.meunorden.com/content/images/2022/08/saude-mental-do-idoso-apos-a-pandemia-norden-plano-de-saude-hospital-1.jpg";
      img.alt = "Foto de um idoso";
      imagem.appendChild(img);
    }

  }else{

    if(idade<=12) {
      msg.innerHTML = `<p>Detectamos uma <strong>GAROTA</strong> com ${idade} anos</p>`;
      img.src = "https://i.pinimg.com/236x/69/ee/fa/69eefadcd88ac8ac858e67636c8ee2df.jpg";
      img.alt = "Foto de uma garota";
      imagem.appendChild(img);
    }
    else if(idade<=18){
      msg.innerHTML = `<p>Detectamos uma <strong>MULECA</strong> com ${idade} anos</p>`;
      img.src = "https://s2-g1.glbimg.com/YMrJ9wM2__axbXe5qs9jE8A6GOk=/0x0:960x946/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/f/Y/MLWFbaQaCJE8qz88ZR1A/whatsapp-image-2021-06-01-at-15.17.32.jpeg";
      img.alt = "Foto de uma muleca";
      imagem.appendChild(img);
    }
    else if(idade<=30){
      msg.innerHTML = `<p>Detectamos uma <strong>JOVEM</strong> com ${idade} anos</p>`;
      img.src = "https://media.licdn.com/dms/image/D4D03AQHYL0Cb5a3ezA/profile-displayphoto-shrink_800_800/0/1669149801114?e=2147483647&v=beta&t=20lfgTyYcIXVGxJsaU2EmcE4302mWoBAm8Hwbyuvq6g";
      img.alt = "Foto de uma jovem";
      imagem.appendChild(img);
    }
    else if(idade<=60){
      msg.innerHTML = `<p>Detectamos uma <strong>MULHER</strong> com ${idade} anos</p>`;
      img.src = "https://img.freepik.com/fotos-premium/mulher-de-meia-idade-com-oculos_112793-1329.jpg";
      img.alt = "Foto de uma mulher";
      imagem.appendChild(img);
    }
    else{
      msg.innerHTML = `<p>Detectamos uma <strong>IDOSA</strong> com ${idade} anos</p>`;
      img.src = "https://img.freepik.com/fotos-premium/mulher-mais-velha-bonita-rindo-e-sorrindo-mulher-idosa-sorridente_63135-364.jpg";
      img.alt = "Foto de uma idosa";
      imagem.appendChild(img);
    }

  }

}