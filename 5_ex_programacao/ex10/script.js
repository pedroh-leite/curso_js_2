// Exercício 10

/*let n = 23;
let divisoes = 0;

for(let i = 1; i <= n; i++){
    if(n % i == 0) {
        divisoes++;
    }
}

if(divisoes == 2){
    console.log(`O número ${n} é primo!`);
} else{
    console.log(`O número ${n} não é primo!`);
} */

function classificarNumero(n){
    if(n > 0 && n % 2 == 0) {
        console.log("Positivo e Par")
    } else if(n > 0 && n % 2 == 1){
        console.log("Positivo e ímpar")
    } else if(n < 0) {
        console.log("Negativo")
    } else if(n == 0){
        console.log("Neutro")
    }
};

classificarNumero(15);
