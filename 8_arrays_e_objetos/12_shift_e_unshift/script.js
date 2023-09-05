// Metodos SHIFT e UNSHIFT

let nomes = ["Pedro", "Henrique", "Leite"];

// Removendo dados do inicio de um array
let removerPrimeiroNome = nomes.shift();
console.log(removerPrimeiroNome);
console.log(nomes);

// Adicionando dados ao inicio de um array
let adicionarNome = nomes.unshift("Pedro");
console.log(nomes);
