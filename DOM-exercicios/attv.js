let contador = 0

let titulo = document.getElementById("titulo")


let botaoaumentar = document.getElementById("botaoaumentar")
let botaodiminuir = document.getElementById("botaodiminuir")


botaoaumentar.addEventListener("click", () => {
    numero ++
    titulo.innerText = numero
})


botaodiminuir.addEventListener("click", () => {
    numero --
    titulo.innerText = numero
})