// Adicionando coisas aos objetos

let pessoa = {
    nome: "Pedro",
    idade: 19,
    profissao: "programador",
}


// Deletando dados do objeto
delete pessoa.nome;
console.log(pessoa.nome);

// Adicionando dados ao objeto
pessoa.casado = false;
console.log(pessoa.casado);

console.log(pessoa)
