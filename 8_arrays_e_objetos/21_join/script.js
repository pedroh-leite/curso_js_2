// Metodos de STRING JOIN 

let frase = "Caraca moleque que dia que isso";

let palavras = frase.split(" ");
console.log(palavras);

// Pegar um array e transformar em uma string usando um separador
// Dentro do join deve ser colocado o separador
let novaFrase = palavras.join("_");
console.log(novaFrase);