// Evento no mouse

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");


btn1.addEventListener("mousedown", function(e){
    console.log("Apertou o botão do mouse");
});

btn1.addEventListener("mouseup", function(e){
    console.log("Soltou o botão do mouse");
});

btn2.addEventListener("dblclick", function(e){
    console.log("usou o double click");
});

btn2.addEventListener("contextmenu", function(e){
    e.preventDefault();
    console.log("Evento no botao direito");
});