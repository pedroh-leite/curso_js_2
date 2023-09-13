// Override em prototype

class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au au");
    }
}

Cachorro.prototype.raca = "SRD";
Cachorro.prototype.patas = 4;

let labrador = new Cachorro("Labrador", "marrom");
labrador.latir();


console.log(Cachorro.prototype.raca);