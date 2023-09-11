// JSON PARA STRING

let pessoa = {
    "nome": "Pedro",
    "idade": 19,
    "profissao": "Programador",
    "hobbies": ["Academia", "Estudar", "Correr"],
}

//Transformando um JSON em uma string
let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

// Transformando uma string em JSON
let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);

