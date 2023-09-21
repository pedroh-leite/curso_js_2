// Validando dominios

const validador = /[?www.]\w+.com.br | com/;

console.log(validador.test("www.blogdopeo.com.br")); //true
console.log(validador.test("www.blogdopeo.com")); //true
console.log(validador.test("www.blogdopeo")); //false
console.log(validador.test("blogdopeo.com")); //true


