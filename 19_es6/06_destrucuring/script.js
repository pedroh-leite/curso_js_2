//  Destructuring

// Arrays
const fruits = ["Maçã", "Banana", "Mamão"];
const [f1, f2, f3] = fruits;
console.log(f1, f2,f3);

// Objetos
const productDetails = {
    nome: "Mouse",
    preco: 39.99,
    categoria: "perifericos",
    cor: "cinza",
}

const {name: productName, preco, categoria, cor} = productDetails;
console.log(productName, preco, categoria, cor);