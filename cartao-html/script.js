
let botao = document.getElementById("botao");
let texto = document.getElementById("texto");
let aparecendo = true
botao.addEventListener("click", () => {
    if(aparecendo){
        texto.style.display = "none"
        aparecendo = false
    }else{
        texto.style.display = "block"
        aparecendo = false
    }
}); 