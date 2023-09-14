// Exercício 3  

class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
}

let end = new Endereco("Rua dos Paulistas", "Parque Suburbano", "Itapevi", "SP");

console.log(end);

end.novaRua = "Rua dos Cariocas";

console.log(end);

end.novaCidade = "São Paulo";

console.log(end);