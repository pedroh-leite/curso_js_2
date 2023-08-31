// Mais sobre funções

function somarNumeros(x,y,z){
    return x + y + z;
}

console.log(somarNumeros(2,3,4));

const sum = somarNumeros(2,3,4);
console.log("O valor da soma é " + sum);

function podeDirigir(i, cnh){
    if(i > 18 && cnh == true) {
        console.log("Pode dirigir");
    } else if(i > 18 && cnh == false) {
        console.log("Vá tirar a CNH praga");
    } else {
        console.log("Primeiro saia das fraudas");
    }
};

podeDirigir(19, true);


