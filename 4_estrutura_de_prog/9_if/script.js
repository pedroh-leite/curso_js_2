// Função console.log

let idade = 19;
let nome = "Pedro";
let passaporte = true;

if (idade == 19) {
    console.log("Minha idade é 19");
}

if (idade > 25) {
    console.log("Idade é maior que 25");
}

if (nome == "Pedro" && idade > 18) {
    console.log("Liberado!");
}

if ((nome == "Pedro" && idade > 30) || passaporte == true) {
    console.log("Pode viajar!");
}