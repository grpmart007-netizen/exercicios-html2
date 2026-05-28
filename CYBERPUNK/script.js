// buttons.getelementbyid("ligar-motores").addEventListener("click", function() {
//     alert("Motores ligados!");
// });

// buttons.getelementbyid("ativar-escudo").addEventListener("click", function() {
//     alert("Escudo ativado!");
// });

// buttons.getelementbyid("hiperespaco").addEventListener("click", function() {
//     alert("Hiperespaço ativado!");
// });

let status = document.getElementById("status");

let ligarMotores = document.getElementById("ligar-motores");

ligarMotores.addEventListener("click", function() {
    status.textContent = "Motores ligados!";
});
