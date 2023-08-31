// Escopo aninhado

let x = 10 //Escopo global

function testeEscopo(n) {
    let x = n * 2; //Escopo da função
    console.log(x)

    if(x > 15){ //Escopo do IF
        let x = n * 3;
        console.log(x);
    }
}
console.log(x);

testeEscopo(x);


