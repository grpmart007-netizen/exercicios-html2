document.getElementById("botao2").addEventListener("click", function() {
    // Código para o botão "resetar"
});

let textoTempo = document.getElementById("hora");

let botaoIniciar = document.getElementById("botao");
let botaoResetar = document.getElementById("botao2");

let tempo = 1 * 3; // 25 minutos em segundos

let ativo = false;
let id

function diminuirTempo() {
    tempo --
    console.log(tempo)
    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;
    textoTempo.innerText = minutos + ":" + segundos;
    if (tempo <= 0) {
        
        
        console.log("O tempo acabou!");
        document.body.style.backgroundColor = "red";
        clearInterval(id);
        ativo = false;
        botaoIniciar.value = "Iniciar";
        
        
        const Texto = document.getElementById("texto");
        
        // Adiciona a classe que faz piscar
        Texto.classList.add("piscar");
        
        // Espera o tempo total da animação (0.5s * 3 = 1.5s)
        setTimeout(() => {
            alert("O tempo acabou!");
        }, 1500);
     
      
     
     
    }

    
}

botaoIniciar.addEventListener("click", function() {
    if (!ativo) {
        ativo = true;
        id = setInterval(diminuirTempo, 1000);
        botaoIniciar.value = "Pausar";
        console.log(botaoIniciar.value);
    }else {
        clearInterval(id);
        ativo = false;
        botaoIniciar.value = "Iniciar";
    }

});

botaoResetar.addEventListener("click", function() {
    clearInterval(id);
    ativo = false;
    tempo = 25 * 60;
    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;
    textoTempo.innerText = minutos + ":" + segundos;
    botaoIniciar.value = "Iniciar";
    console.log(botaoIniciar.value);
   

});











