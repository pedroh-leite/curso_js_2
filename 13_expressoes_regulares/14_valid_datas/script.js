// Validando datas

const validador = /[0-31]{2}[/][0-12]{2}[/][1900-2023]{4}/;

console.log(validador.test("04/10/2003")); //true
console.log(validador.test("4/1/2003")); //true
console.log(validador.test("04-10-2003")); //false
