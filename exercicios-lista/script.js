
let formulario = document.getElementById("todo-form")
let input = document.getElementById("task-input")
let lista = document.getElementById("todo-list")

function adicionarTarefa(event){
    let texto = input.value
    if(texto != ""){
        let novoitem = document.createElement("li")
        novoitem.classList.add("todo-item")
        novoitem.addEventListener("click", ()=>{
            novoitem.classList.toggle("completed")
        })

        let textoitem = document.createElement("span")
        textoitem.innerText = texto
        novoitem.appendChild(textoitem

        )
        let botaodeletar = document.createElement("button")
        botaodeletar.innerText = "Deletar"
        botaodeletar.classList.add("btn-excluir")
        botaodeletar.addEventListener("click", ()=>{
            lista.replaceChild(novoitem)
        })
        novoitem.appendChild(botaodeletar)

        lista.appendChild(novoitem)
        input.value = ""
    }
}

formulario.addEventListener("submit", adicionarTarefa)
