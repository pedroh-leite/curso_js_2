// Metodos SLICE

let nums = [0,1,2,3,4,5,6,7,8,9];

// Gerando um novo array com metodo slice
// O primeiro valor é o índice inicial e o segundo é até onde vai o novo array, ele para em um índice antes do escolhido
console.log(nums.slice(4,5));
console.log(nums.slice(4,6));

// Se omitir o índice final, ele copia até o fim do array
console.log(nums.slice(2));

// Também é possivel iniciar de trás para frente
console.log(nums.slice(-2));
console.log(nums.slice(3, -2));





