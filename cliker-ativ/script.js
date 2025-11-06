let botao = document.getElementById("botao")
let texto  = document.getElementById("texto")
let numero = 0

addEventListener("click", ()=>{
    numero ++
    texto.innerText = "Meno da PV " + numero
})