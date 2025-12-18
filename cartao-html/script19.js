const container = document.getElementById("container")
const texto = document.getElementById("texto")
const botao = document.getElementById("botao")

function corAleatoria(){
    let vermelho = (Math.random() * 1000) % 256
    let verde = (Math.random() * 1000) % 256
    let azul = (Math.random() * 1000) % 256

    let cor = "rgb(" + vermelho + "," + verde + "," + azul + ")"
    return cor;
}


botao.addEventListener("click", () => {
    container.style.backgroundColor = corAleatoria();
    texto.innerText = container.style.backgroundColor
})