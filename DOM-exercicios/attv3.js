let caixa = document.getElementById("caixa")

let vermelho = document.getElementById("cor-vermelha")
let azul = document.getElementById("cor-azul")
let verde = document.getElementById("cor-verde")

vermelho.addEventListener("mouseover", () => {
    caixa.style.backgroundColor = "red"
})
azul.addEventListener("mouseover", () => {
    caixa.style.backgroundColor = "blue"
})
verde.addEventListener("mouseover", () => {
    caixa.style.backgroundColor = "green"
})