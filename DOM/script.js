let numero = 3

let nome = "Zago"

let titulo = document.getElementById("titulo")

let botao = document.getElementById("botao")

//titulo.innerText = "Novo Título"

botao.addEventListener("click", () => {
    numero ++
    titulo.innerText = numero
})
