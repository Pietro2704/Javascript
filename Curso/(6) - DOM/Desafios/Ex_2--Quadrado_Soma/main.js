var quad = document.querySelector("#quadrado")

quad.addEventListener("click", click)

var count = 0
function click(){
    quad.innerText = ++count;  
}