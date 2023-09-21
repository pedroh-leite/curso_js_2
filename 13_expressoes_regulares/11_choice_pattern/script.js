// Choice Pattern

const reg = /\w+: (Matheus | João | Maria)/; //Nome: ghnjm

console.log(reg.test("Nome: João")); //true
console.log(reg.test("Nome: Pedro")); //false
