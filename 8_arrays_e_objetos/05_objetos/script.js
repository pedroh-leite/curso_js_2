// Objetos

let cachorro = {
    patas: 4, 
    nome: "Puff",
    latir: function() {
        console.log("Au Au");
    }
}

// Como acessar um dado no objeto
console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();