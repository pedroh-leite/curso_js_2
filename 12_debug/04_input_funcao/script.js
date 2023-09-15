// Tratamento de input por função

function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)) {
        alert("Por favor passe só números para o programa.")
    } else {
        return number;
    }
}


checarNumero(10);
// checarNumero("String");

let number = prompt("Digite um número: ");

checarNumero(number);