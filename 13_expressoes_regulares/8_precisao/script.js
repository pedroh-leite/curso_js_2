// Precisao

const cep = /\d{5}-\d{3}/;

console.log(cep.test("06663-430")); //true
console.log(cep.test("asdfgh")); //false
