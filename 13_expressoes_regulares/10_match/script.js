// Match
// Metodo direto da string

const frase = "O numero 100 está aqui".match(/\d+/); //true
console.log(frase);

const frase2 = "O numero está aqui".match(/\d+/); //false
console.log(frase2);