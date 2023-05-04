/*
Evento é tudo aquilo que possa acontecer com a div que foi criada
Exemplo:
- mouseEnter: mouse entra em algo
- mouseMove: mouse se mexendo
- mouseDown: Segura o click
- mouseUp: Solta o click
- click: Da aperta e solta rapidão
- mouseOut: mouse sai de algo
*/

var d = document.querySelector('div#area')

d.addEventListener('click', Clicar)
d.addEventListener('mouseenter', Entrar)
d.addEventListener('mouseout', Sair)


function Clicar(){
  d.innerText = 'Clicou!'
  d.style.backgroundColor = 'blue'
}

function Entrar(){
  d.innerText = 'Entrou!'
  d.style.backgroundColor = 'rgb(42, 255, 42)'
}

function Sair(){
  d.innerText = 'Saiu!'
  d.style.backgroundColor = 'red'
}