// Negação

const notab = /[^ab]/;
console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoAZ = /[^a-z]/;
console.log(nottoAZ.test("asd"));
