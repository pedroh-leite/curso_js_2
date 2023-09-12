// Classes

const cachorro = {
    raca: "SRD",
    patas: 4,
    latir: function(){
        console.log("Au au")
    }
}

// Criando um prototype 
let labrador = Object.create(cachorro);
labrador.latir();

// Alterando a raça do cachorro atual
labrador.raca = "Labrador";
console.log(labrador.raca);

let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor alemão";
console.log(pastorAlemao.raca);

