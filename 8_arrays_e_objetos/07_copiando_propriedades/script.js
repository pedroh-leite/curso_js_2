// Copiando propriedades dos objetos

let carro = {
    portas: 2,
    portamalas: "200l",
    motor: "2.0",
}

let adicionais = {
    tetoSolar: true,
    arCondicionado: true,
}

console.log(carro);

// Copiando dados de um objeto para o outro
//O primeiro obj recebe os atributos, o segundo doa
Object.assign(carro, adicionais); 

console.log(carro);


