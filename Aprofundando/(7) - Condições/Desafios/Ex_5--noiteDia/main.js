var hoje = new Date()
var hora = hoje.getHours()
var minuto = hoje.getMinutes()

var msg = document.querySelector(".aviso");
msg.innerHTML = `<p>São ${hora} horas e ${minuto} minutos</p>`;

if(hora<=12){
  var img = document.querySelector("img");
  img.src = "https://media.istockphoto.com/id/1007768414/pt/foto/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=AhqNfmzP0yPA_RRWQVAQf7mKVpX57apYBUNwcBUnuyM=";
  img.alt = "Foto de manhã";

  document.body.style.backgroundColor = "#65ACE2";
}
else if(hora<=18){
  var img = document.querySelector("img");
  img.src = "https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  img.alt = "Foto de tarde";

  document.body.style.backgroundColor = "#F8A007";
}
else{
  var img = document.querySelector("img");
  img.src = "https://img.freepik.com/fotos-premium/linda-noite-no-oceano-com-lua-cheia_104785-866.jpg";
  img.alt = "Foto de noite";

  document.body.style.backgroundColor = "#3E6B98";
}

