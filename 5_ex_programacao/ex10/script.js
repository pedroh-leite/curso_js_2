// Exercício 10

let n = 23;
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
} 


