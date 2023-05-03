/*
DOM - Document Object Model


         |- location
                                  |- head
window --|- document  --|- html --|
                                  |- body
         |_ history
*/

//window.document.write("Olá Mundo<br>");

//window.document.write(window.document.URL);

var p1 = document.getElementsByTagName('p')[0];

p1.style.color = "red";

document.write(`No primeiro parágrafo está escrito assim: ${p1.innerHTML}<br>`);



//var d = document.getElementById('msg');
//d.innerText = 'Estou esperando...'

var d = window.document.querySelector('div#msg')
d.innerText = 'Estou esperando...'
d.style.textDecoration = "underline";