// Argumentos default

let potencia = function(base, expoente=2 /*Default*/) {
    return Math.pow(base, expoente);
};

console.log(potencia(5));
console.log(potencia(5, 5));
