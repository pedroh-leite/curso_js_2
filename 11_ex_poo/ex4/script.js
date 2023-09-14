// Exercício 4

class Carro{
    constructor(cor, marca, gasolina, consumo){
        this.cor = cor;
        this.marca = marca;
        this.gasolina = gasolina;
        this.consumo = consumo;
    }

    dirigir(km){
        let litrosConsumidos = km / this.consumo;

        this.gasolina -= litrosConsumidos;
    }

    abastecer(litros){
        this.gasolina += litros;
    }
}

let bmw = new Carro("Vermelho", "BMW", 100, 14);

console.log(bmw);

bmw.dirigir(100);

console.log(bmw);

bmw.abastecer(10);
console.log(bmw);