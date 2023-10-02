//  Classes

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa", 20);

console.log(shirt.name);

console.log(shirt.productWithDiscount(10));

// Inheritance

class ProductWithAttribute extends Product{
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        console.log("As cores são");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
};

const hat = new ProductWithAttribute("Chapéu", 29.99, ["preto", "azul", "verde"]);