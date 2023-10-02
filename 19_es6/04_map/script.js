// Map

const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira", price: 49.99, category: "Eletro"},
    {name: "Fogão", price: 400, category: "Eletro"},
    {name: "Calça", price: 50.99, category: "Roupas"},
];

products.map(() => {
    if(products.category === "Roupas"){
        products.onsale = true;
    };
});

console.log(products);