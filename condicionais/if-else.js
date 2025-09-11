// let idade = 17;
// let embriagado = false;

// // Se idade for maior igual a 18 E não está embriagado
// if (idade >= 18 && !embriagado) {
//     console.log("Você pode dirigir.");
// } else {
//     console.log("Você não pode dirigir.")
// }

let dia = "sábado";

// if (dia === "Sábado" || dia === "Domingo") {
//     console.log("É fim de semana");
// } else {
//     console.log("É dia útil");
// }

// se(dia = segunda);
// escreva("É dia útil");
// se nao;
// escreva("É fim de semana");



switch(dia) {
    case "segunda":
    console.log("É dia útil");
    break;

    case "terça":
    console.log("É dia útil");
    break;

    case "quarta":
    console.log("É dia útil");
    break;

    case "quinta":
    console.log("É dia útil");
    break;

    case "sexta":
    console.log("É dia útil");
    break;

    case "sábado":
    console.log("É fim de semana");
    break;

    case "domingo":
    console.log("É fim de semana");
    break;

    default:
        console.log("Escreva um fim dia válido.");
}