// Seleciona os elementos
const campoPesquisa = document.getElementById("pesquisa");
const itens = document.querySelectorAll("#lista li");

// Evento de digitação
campoPesquisa.addEventListener("input", () => {

    // Texto digitado em letras minúsculas
    const termo = campoPesquisa.value.toLowerCase();

    // Percorre todos os itens da lista
    itens.forEach(item => {

        // Texto do item em letras minúsculas
        const texto = item.textContent.toLowerCase();

        // Verifica se contém o termo digitado
        if (texto.includes(termo)) {
            item.classList.remove("oculto");
        } else {
            item.classList.add("oculto");
        }

    });

});