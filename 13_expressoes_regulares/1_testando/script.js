//  Testando expressões regulares
// new RegExp ("")
// ou
//  /..../

const reg1 = new RegExp("bola");
console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));

let text = "Tem bola na cesta";

const reg2 = /bola/;
console.log(reg2.test("Tem bola?"));
console.log(reg2.test("Não tem"));
console.log(reg2.test(text));


