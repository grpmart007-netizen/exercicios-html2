function atualizaRelogio(){
    let dataatual = new Date();
    let horas = String(dataatual.getHours()).padStart(2, "0");
    let minutos = String(dataatual.getMinutes()).padStart(2, "0");
    let segundos = String(dataatual.getSeconds()).padStart(2, "0");
    let horario = horas + ":" + minutos + ":" + segundos;
    let relogio = document.getElementById("relogio")

    relogio.innerText = horario
}
setInterval(atualizaRelogio, 1000)

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