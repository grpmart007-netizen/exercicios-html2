let botao = document.getElementById("botao")
let lista = document.getElementById("lista")
let botao2 = document.getElementById("botao2")

botao.addEventListener("click", ()=>{
    let item = document.createElement("li")
    item.innerText = "Novo Item"
    lista.appendChild(item)

})

botao2.addEventListener("click", ()=>{
   
    lista.removeChild(lista.lastChild)
})