let tempoInicial = 10
function atualizaTempo() {
    tempoInicial--

    let tempo = document.getElementById("tempo")
    tempo.innerText = tempoInicial

}

let segundos = 10

let tempoRestante = segundos;
let iniciar = document.getElementById("iniciar")
iniciar.addEventListener("click", () => {
    id = setInterval(atualizaTempo, 1000)
})

parar.addEventListener("click", () => {
    clearInterval(id)
})
