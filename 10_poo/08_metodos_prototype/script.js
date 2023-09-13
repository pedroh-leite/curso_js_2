// Metodos em prototype

function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){
    console.log("auuuu");
}

let husky = new Cachorro("Husky", 4, "Branco e marrom");

husky.uivar();


