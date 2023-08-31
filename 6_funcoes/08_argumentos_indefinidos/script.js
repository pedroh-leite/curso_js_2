// Argumentos indefinidos

let test = function(a, b) {
    if(a === undefined || b === undefined){
        console.log("Essa função precisa ter os dois argumentos");
    } else {
        return a + b;
    }
};
test(1);
console.log(test(2,3));

function ola(nome, idade) {
    if(idade === undefined) {
        console.log("Olá " + nome);
    } else {
        console.log("Olá " + nome + " você tem " + idade + " anos"); 
    }
}

ola("Pedro", 19);