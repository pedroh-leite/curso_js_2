// Exercício 6

let idade = 18;
let cnh = true;

if(idade >= 18 && cnh == true) {
    console.log("Você pode dirigir!");
} else if(idade >= 18 && cnh == false) {
    console.log("Você não pode dirigir, pois não tem CNH");
} else {
    console.log("Você não pode dirigir, pois não tem CNH e é menor de idade");
}
