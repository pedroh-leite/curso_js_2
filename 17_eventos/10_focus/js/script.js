// Evento de foco

let ip = document.querySelector("#input1");

ip.addEventListener("focus", function(e){
    console.log("Entrou no input");  
})

ip.addEventListener("blur", function(e){
    console.log("Saia do input");  
})