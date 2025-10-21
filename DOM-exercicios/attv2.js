let botao = document.getElementById("adicionar")
let texto = document.getElementById("tarefa")
let lista = document.getElementById("lista")

botao.addEventListener("click", () => {
    let tarefa = texto.value
    let item = document.createElement("li")
    item.innerText = tarefa
    item.addEventListener("click", () => {
        item.classList.toggle()
    })

    console.log(item)

    lista.appendChild(item)
})