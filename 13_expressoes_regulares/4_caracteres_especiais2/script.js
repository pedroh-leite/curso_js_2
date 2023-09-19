// Caracteres especiais

const dia = /\d\d/;
console.log(dia.test("2023") && "2019".length == 2);
console.log(dia.test("asdf"));
console.log(dia.test("20"));

const palavra3 = /\w\w\w/;

console.log(palavra3.test("peo"));
console.log(palavra3.test("sasa"));
