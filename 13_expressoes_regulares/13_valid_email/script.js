// Validando emails

const validador = /\w+@\w+\.\w+/;

console.log(validador.test("pedrohleitealves@gmail.com")); //true
console.log(validador.test("leite.alves@gmail")); //false

