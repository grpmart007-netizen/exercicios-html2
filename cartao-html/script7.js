

let segundo = 0
let hora = 0
let minuto = 0
function atualizaCronometro(){
    segundo++

    if(segundo >= 60){
        minuto++
        segundo = 0
    }
    if(minuto >= 60){
        hora++
        minuto = 0
    }


    segundo = String(segundo).padStart(2, "0");
    minuto = String(minuto).padStart(2, "0");
    hora = String(hora).padStart(2, "0");
    cronometro.innerText = hora + ":" + minuto + ":" + segundo;

}

iniciar.addEventListener("click", () => {
    id = setInterval(atualizaCronometro, 1000)
})

parar.addEventListener("click", () => {
    clearInterval(id)
})
zerar.addEventListener("click", () => {
    segundo=0
    minuto=0
    hora=0
    cronometro.innerText = "00:00:00"
})