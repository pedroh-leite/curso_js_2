// Exercício 2  

class Carrinho{
    constructor(itens, qtd, valorTotal){
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addItem(item){

        let contador = 0;

        for(let iCarrinho in this.itens){
            if(this.itens[iCarrinho].id == item.id){
                this.itens[iCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0){
            this.itens.push(item);
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    removeItem(item){
        for(let iCarrinho in this.itens){
            if(this.itens[iCarrinho].id == item.id){

                let obj = this.itens[iCarrinho];
                let index = this.itens.findIndex(function(obj) {return obj.id == item.id});

                this.qtd -= this.itens[iCarrinho].qtd;
                this.valorTotal -= this.itens[iCarrinho].preco * this.itens[iCarrinho].qtd;
                
                this.itens.splice(index, 1);

            }
        }
    }
}

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "Camisa",
        qtd: 1,
        preco: 20,
    },
    {
        id: 2,
        nome: "Calca",
        qtd: 2,
        preco: 50,
    }
], 3, 120);

console.log(carrinho);

carrinho.addItem({id:1, nome: "Camisa", qtd:2, preco: 20});

console.log(carrinho);

carrinho.addItem({id:3, nome: "Bone", qtd:1, preco: 15});

console.log(carrinho);

carrinho.removeItem({id: 1, nome: "Camisa", qtd: 1, preco:20});

console.log(carrinho);

