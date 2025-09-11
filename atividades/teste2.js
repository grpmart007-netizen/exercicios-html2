// function calculaAreaTriangulo(b, h){
//    area = b * h /2;
//    return area;
// }

//console.log(calculaAreaTriangulo(b = 3, h = 3));

// function calculaAreaRetangulo(lado1, lado2){
//    area = lado1 * lado2;
//    return area;
// }

//console.log(function calculaAreaRetangulo(lado1 = 3 , lado2 = 4));
const pi = 3.14
// function calculaAreaCirculo(raio){
//    area = pi * (raio * raio);
//    return area;
// }

//console.log(calculaAreaCirculo(3));

//Exercicio


function calculaAreaTriangulo(b, h){
   area = b * h /2;
   return area;
}

console.log(calculaAreaTriangulo(4 , 2));


function calculaAreaQuadrado(lado1, lado2){
   area = lado1 * lado2;
   return area;
}

console.log(calculaAreaQuadrado(4 , 4));

function calculaAreaCirculo(raio){
   area = pi * (raio * raio);
   return area;
}

console.log(calculaAreaCirculo(1));

let areaTotal = calculaAreaTriangulo + calculaAreaQuadrado - calculaAreaCirculo;

console.log(areaTotal);