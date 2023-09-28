// Removendo Eventos
// Para usar o remove a função não pode ser anonima, deve ser externa

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(){
    console.log("clicou");
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(){
    btn1.removeEventListener("click", msg)   
})