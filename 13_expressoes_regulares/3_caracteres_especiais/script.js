// Caracteres especiais

// Qualquer digito de caracter (numero) => /\d/
// Caracter alfanumerico => /\w/
// Espaço em branco => /\s/
// Caractere que não é digito => /\D/
// Caractere não-alfanumerico => /\W/
// Caractere que não seja espaço em branco => /\S/
// Qualquer caracter, menos nova linha /./

const pontoRegex = /./
console.log(pontoRegex.test("add"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("add123"));

const dRegex = /\d/;
console.log(dRegex.test("add"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("add123"));

const dRegex2 = /\D/;
console.log(dRegex2.test("add"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("add123"));



