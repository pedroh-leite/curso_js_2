// Exercício 10

let calculadora = {
    soma: function(a, b){
        return a + b;
    },
    subtracao: function(a, b){
        return a - b;
    },
    divisao: function(a, b){
        return a / b;
    },
    multiplicacao: function(a, b){
        return a * b;
    },
}

console.log(calculadora.soma(5,10));
console.log(calculadora.subtracao(10,5));
console.log(calculadora.divisao(10,5));
console.log(calculadora.multiplicacao(5,10));