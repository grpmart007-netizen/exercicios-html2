const maxLimite = 280;
let inputTexto = document.getElementById("text");
inputTexto.addEventListener("input", function() {
    const texto = inputTexto.value;
    const tamanhoTexto = texto.length;
    contador.textContent = `${tamanhoTexto} / ${maxLimite}`;
    if (tamanhoTexto > maxLimite) {
        contador.classList.add("vermelho");
        publicar.disabled = true;
    } else {
        contador.classList.remove("vermelho");
        publicar.disabled = false;
    }

    
});


contador.inputTexto