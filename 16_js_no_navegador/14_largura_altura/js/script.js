// Manipulando atributos

let el = document.querySelector("#tituloPrincipal");

console.log("largura" + el.offSetWidth); //Considera borda
console.log("altura" + el.offSetHeight);

console.log("largura" + el.clientWidth); //Desconsidera borda
console.log("altura" + el.clientHeight);