// criando uma lista
let nomes = [
    "Gustavo",
    "Gisleyildo",
    "José",
    "Hayner"
];

console.log(nomes);

// acessar um valor
console.log(nomes[2]);

// retornando o tipo da variável
console.log(typeof nomes);

// criando um objeto via instância
const numeros = new Array();
console.log("Antes", numeros);

// como adicionar itens em uma lista
numeros.push(2,3,8);
// ou
// numeros.push(2);
// numeros.push(3);
// numeros.push(8);
console.log("Depois", numeros);

// como apagar uam lista
numeros.shift();
console.log(numeros);

numeros.shift();
console.log(numeros);