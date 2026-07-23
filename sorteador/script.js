


// script.js

// Aguarda o carregamento completo do DOM antes de adicionar eventos
document.addEventListener("DOMContentLoaded", function () {
    // Obtém referências aos elementos da página
    const btnGerar = document.getElementById("btnGerar");
    const inputMin = document.getElementById("min");
    const inputMax = document.getElementById("max");
    const resultado = document.getElementById("resultado");

    // Função para gerar número aleatório no intervalo [min, max]
    function gerarNumeroAleatorio(min, max) {
        // Math.random() gera [0, 1), multiplicamos pelo tamanho do intervalo e somamos o mínimo
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Adiciona ouvinte de evento ao botão
    btnGerar.addEventListener("click", function () {
        // Converte valores para inteiros
        const minVal = parseInt(inputMin.value, 10);
        const maxVal = parseInt(inputMax.value, 10);

        // Validação de entrada
        if (isNaN(minVal) || isNaN(maxVal)) {
            resultado.textContent = "Por favor, insira valores numéricos válidos.";
            resultado.style.color = "red";
            return;
        }

        if (maxVal <= minVal) {
            resultado.textContent = "O valor máximo deve ser estritamente maior que o mínimo.";
            resultado.style.color = "red";
            return;
        }

        // Gera e exibe o número aleatório
        const numeroAleatorio = gerarNumeroAleatorio(minVal, maxVal);
        resultado.textContent = `Número gerado: ${numeroAleatorio}`;
        resultado.style.color = "green";
    });
});
