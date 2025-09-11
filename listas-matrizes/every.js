const numeros = [ 1, 2, 3, 4, 5.6, 7];

const todosSao = numeros.every(numero => numero % 2 === 0);

console.log(todosSao);